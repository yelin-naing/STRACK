/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { HiOutlineBell } from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'

const wrapStyles = css`
  position: relative;
`

const bellBtnStyles = (darkMode) => css`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: transparent;
  color: ${darkMode ? '#ffffff' : '#1a1a1a'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
  }
`

const badgeStyles = css`
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  line-height: 1;
`

const panelHeadStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const titleStyles = css`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`

const linkBtnStyles = css`
  border: none;
  background: transparent;
  color: ${ACCENT};
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
  padding: 0;
`

const listStyles = css`
  max-height: 360px;
  overflow: auto;
`

const itemStyles = (darkMode, unread) => css`
  padding: 0.7rem 0.85rem;
  border-bottom: 1px solid ${darkMode ? '#303030' : '#f3f4f6'};
  background: ${unread ? (darkMode ? 'rgba(99,102,241,0.12)' : '#eef2ff') : 'transparent'};
`

const itemTitleStyles = css`
  margin: 0;
  font-size: 0.84rem;
  font-weight: 700;
  line-height: 1.3;
`

const itemBodyStyles = (darkMode) => css`
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  line-height: 1.35;
`

const itemMetaStyles = (darkMode) => css`
  margin: 0.3rem 0 0;
  font-size: 0.72rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

function relativeTime(input) {
  const dt = new Date(input)
  if (Number.isNaN(dt.getTime())) return ''
  const diff = Date.now() - dt.getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d ago`
  return dt.toLocaleDateString()
}

const panelStyles = (darkMode, placement) => css`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${placement === 'sidebar' ? 'left: calc(100% + 0.6rem);' : 'right: 0;'}
  width: min(400px, 92vw);
  max-height: 460px;
  border-radius: 12px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  box-shadow: ${darkMode ? '0 10px 28px rgba(0,0,0,0.45)' : '0 10px 28px rgba(0,0,0,0.12)'};
  overflow: hidden;
  z-index: 1200;
  @media (max-width: 767.98px) {
    right: 0;
    left: auto;
    width: min(360px, 92vw);
  }
`

function NotificationBell({ darkMode, userEmail, placement = 'default' }) {
  const wrapRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)

  const loadNotifications = async () => {
    if (!userEmail) {
      setItems([])
      setUnreadCount(0)
      return
    }
    setLoading(true)
    try {
      const res = await fetch(
        `${apiBase}/backend/notifications.php?email=${encodeURIComponent(userEmail)}&limit=40`,
        { cache: 'no-store' }
      )
      const data = await res.json()
      if (data.success) {
        setItems(Array.isArray(data.notifications) ? data.notifications : [])
        setUnreadCount(Number(data.unread_count) || 0)
      }
    } catch (_) {
      setItems([])
      setUnreadCount(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadNotifications()
    const timer = window.setInterval(loadNotifications, 45000)
    return () => window.clearInterval(timer)
  }, [userEmail])

  useEffect(() => {
    if (!open) return
    loadNotifications()
  }, [open])

  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return
      if (!wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const markOneRead = async (id) => {
    try {
      await fetch(`${apiBase}/backend/notifications.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, id }),
      })
    } catch (_) {}
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, is_read: true } : it)))
    setUnreadCount((n) => Math.max(0, n - 1))
  }

  const markAllRead = async () => {
    try {
      await fetch(`${apiBase}/backend/notifications.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, mark_all: true }),
      })
    } catch (_) {}
    setItems((prev) => prev.map((it) => ({ ...it, is_read: true })))
    setUnreadCount(0)
  }

  return (
    <div css={wrapStyles} ref={wrapRef}>
      <button
        type="button"
        css={bellBtnStyles(darkMode)}
        onClick={() => setOpen((v) => !v)}
        aria-label="Notifications"
        title="Notifications"
      >
        <HiOutlineBell style={{ width: 22, height: 22 }} />
        {unreadCount > 0 ? <span css={badgeStyles}>{unreadCount > 9 ? '9+' : unreadCount}</span> : null}
      </button>

      {open ? (
        <div css={panelStyles(darkMode, placement)}>
          <div css={panelHeadStyles(darkMode)}>
            <h3 css={titleStyles}>Notifications</h3>
            <button type="button" css={linkBtnStyles} onClick={markAllRead} disabled={unreadCount === 0}>
              Mark all read
            </button>
          </div>
          <div css={listStyles}>
            {loading ? (
              <div css={itemStyles(darkMode, false)}>
                <p css={itemBodyStyles(darkMode)}>Loading...</p>
              </div>
            ) : items.length === 0 ? (
              <div css={itemStyles(darkMode, false)}>
                <p css={itemBodyStyles(darkMode)}>No notifications yet.</p>
              </div>
            ) : (
              items.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  css={[
                    itemStyles(darkMode, !n.is_read),
                    css`
                      width: 100%;
                      text-align: left;
                      border: none;
                      cursor: pointer;
                      color: inherit;
                    `,
                  ]}
                  onClick={() => {
                    if (!n.is_read) markOneRead(n.id)
                  }}
                >
                  <p css={itemTitleStyles}>{n.title || 'Notification'}</p>
                  <p css={itemBodyStyles(darkMode)}>{n.message || ''}</p>
                  <p css={itemMetaStyles(darkMode)}>{relativeTime(n.created_at)}</p>
                </button>
              ))
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NotificationBell

