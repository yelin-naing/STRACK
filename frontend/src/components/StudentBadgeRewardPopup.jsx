/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { HiOutlineSparkles, HiOutlineTrophy, HiOutlineXMark } from 'react-icons/hi2'

import { getBadgeById } from '../badgeCatalog'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const overlay = css`
  position: fixed;
  inset: 0;
  z-index: 2400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
`

const box = (dark) => css`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  border: 1px solid ${dark ? '#525252' : '#e5e7eb'};
  background: ${dark ? '#262626' : '#fff'};
  box-shadow: ${dark ? '0 24px 48px rgba(0,0,0,0.55)' : '0 20px 40px rgba(0,0,0,0.12)'};
  overflow: hidden;
`

const head = (dark) => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1rem 0.65rem;
  border-bottom: 1px solid ${dark ? '#404040' : '#e5e7eb'};
  background: ${dark ? 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(124,58,237,0.12) 100%)' : 'linear-gradient(135deg, #eef2ff 0%, #faf5ff 100%)'};
`

const title = (dark) => css`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${dark ? '#fafafa' : '#111827'};
  display: flex;
  align-items: center;
  gap: 0.45rem;

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: #6366f1;
    flex-shrink: 0;
  }
`

const closeBtn = (dark) => css`
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${dark ? '#404040' : '#e5e7eb'};
  color: ${dark ? '#f9fafb' : '#111827'};

  &:hover {
    background: ${dark ? '#525252' : '#d1d5db'};
  }
`

const body = (dark) => css`
  padding: 1rem 1.1rem 1.15rem;
  color: ${dark ? '#d1d5db' : '#374151'};
  font-size: 0.92rem;
  line-height: 1.45;
`

const list = css`
  margin: 0.65rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const row = (dark) => css`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.55rem 0.65rem;
  border-radius: 10px;
  background: ${dark ? '#1f1f1f' : '#f9fafb'};
  border: 1px solid ${dark ? '#3f3f46' : '#e5e7eb'};
  font-size: 0.88rem;
`

const icon = css`
  font-size: 1.35rem;
  line-height: 1;
  flex-shrink: 0;
`

const primary = css`
  width: 100%;
  margin-top: 0.9rem;
  border: none;
  border-radius: 10px;
  padding: 0.55rem 1rem;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  background: #6366f1;
  color: #fff;

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`

function StudentBadgeRewardPopup({ darkMode, userEmail, onAcknowledged }) {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([])
  const [dismissing, setDismissing] = useState(false)

  useEffect(() => {
    if (!userEmail) {
      setItems([])
      setOpen(false)
      return undefined
    }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(
          `${apiBase}/backend/student_badges.php?user_email=${encodeURIComponent(userEmail)}&unseen_only=1&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        const raw = data.success && Array.isArray(data.awards) ? data.awards : []
        if (raw.length > 0) {
          setItems(raw)
          setOpen(true)
        } else {
          setItems([])
          setOpen(false)
        }
      } catch (_) {
        if (!cancelled) {
          setItems([])
          setOpen(false)
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail])

  const handleDismiss = async () => {
    if (!userEmail || items.length === 0) {
      setOpen(false)
      return
    }
    const ids = items.map((x) => x.id).filter((id) => Number.isFinite(id) && id > 0)
    if (ids.length === 0) {
      setOpen(false)
      return
    }
    setDismissing(true)
    try {
      const res = await fetch(`${apiBase}/backend/student_badge_popup_ack.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_email: userEmail, award_ids: ids }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        setOpen(false)
        setItems([])
        if (typeof onAcknowledged === 'function') onAcknowledged()
      }
    } catch (_) {
      setOpen(false)
    } finally {
      setDismissing(false)
    }
  }

  if (!open || items.length === 0) return null

  return (
    <div css={overlay} role="dialog" aria-modal="true" aria-labelledby="badge-reward-title" onClick={handleDismiss}>
      <div css={box(darkMode)} onClick={(e) => e.stopPropagation()}>
        <div css={head(darkMode)}>
          <h2 id="badge-reward-title" css={title(darkMode)}>
            <HiOutlineTrophy />
            {items.length === 1 ? 'You received a badge!' : `You received ${items.length} new badges!`}
          </h2>
          <button
            type="button"
            css={closeBtn(darkMode)}
            onClick={handleDismiss}
            aria-label="Close"
            disabled={dismissing}
          >
            <HiOutlineXMark style={{ width: 20, height: 20 }} />
          </button>
        </div>
        <div css={body(darkMode)}>
          <p css={css`margin: 0;`}>
            <HiOutlineSparkles
              style={{ display: 'inline', verticalAlign: 'text-top', width: 18, height: 18, color: '#a78bfa' }}
            />{' '}
            Your lecturer awarded you the following. Points have been added to your account.
          </p>
          <ul css={list}>
            {items.map((a) => {
              const b = getBadgeById(a.badge_id)
              return (
                <li key={a.id} css={row(darkMode)}>
                  <span css={icon}>{b?.icon || '🏅'}</span>
                  <span>
                    <strong>{b?.name || a.badge_id}</strong>
                    {' — '}
                    <span style={{ color: darkMode ? '#a3e635' : '#15803d' }}>+{a.points_awarded} pts</span>
                    {a.lecturer_name ? (
                      <span css={css`display: block; margin-top: 0.2rem; font-size: 0.8rem; opacity: 0.9;`}>
                        From {a.lecturer_name}
                      </span>
                    ) : null}
                  </span>
                </li>
              )
            })}
          </ul>
          <button type="button" css={primary} onClick={handleDismiss} disabled={dismissing}>
            {dismissing ? 'Saving…' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentBadgeRewardPopup
