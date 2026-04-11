/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiOutlineTrophy, HiOutlineStar } from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'

function levelFromPoints(points) {
  const p = Number(points) || 0
  return Math.max(1, 1 + Math.floor(p / 100))
}

function fmtAttendance(n) {
  const v = Number(n)
  if (!Number.isFinite(v)) return '0'
  return String(Math.round(Math.min(100, Math.max(0, v))))
}

const wrapStyles = css`
  width: 100%;
  max-width: 100%;
`

const pageTitleStyles = css`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
`

const pageSubStyles = (darkMode) => css`
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  line-height: 1.45;
`

const dividerStyles = (darkMode) => css`
  height: 1px;
  background: ${darkMode ? '#404040' : '#e5e7eb'};
  margin: 1rem 0 1.1rem;
  border: none;
`

const tabRowStyles = (darkMode) => css`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
  background: ${darkMode ? '#1f1f1f' : '#f3f4f6'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const tabBtnStyles = (darkMode, active) => css`
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.55rem 0.75rem;
  font-size: 0.88rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${active ? (darkMode ? '#4f46e5' : ACCENT) : 'transparent'};
  color: ${active ? '#fff' : darkMode ? '#d1d5db' : '#374151'};
  &:hover {
    color: ${active ? '#fff' : ACCENT};
  }
`

const cardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem 1rem 0.85rem;
  box-shadow: ${darkMode ? 'none' : '0 1px 2px rgba(0,0,0,0.04)'};
`

const cardHeaderStyles = css`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.85rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: inherit;
`

const listStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-bottom: 0.35rem;
`

const rankBadgeStyles = (darkMode, rank, isMe) => css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
  background: ${rank === 1
    ? darkMode
      ? 'rgba(251, 146, 60, 0.2)'
      : '#ffedd5'
    : isMe
      ? darkMode
        ? 'rgba(99, 102, 241, 0.25)'
        : '#e0e7ff'
      : darkMode
        ? '#374151'
        : '#f3f4f6'};
  color: ${rank === 1 ? '#c2410c' : isMe ? ACCENT : darkMode ? '#d1d5db' : '#4b5563'};
  border: 1px solid
    ${rank === 1 ? (darkMode ? 'rgba(251, 146, 60, 0.45)' : '#fed7aa') : isMe ? (darkMode ? 'rgba(99,102,241,0.5)' : '#c7d2fe') : darkMode ? '#4b5563' : '#e5e7eb'};
`

const rowStyles = (darkMode, isMe) => css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0.95rem;
  border-radius: 12px;
  border: 1px solid ${isMe ? (darkMode ? 'rgba(129, 140, 248, 0.55)' : '#c4b5fd') : darkMode ? '#404040' : '#e5e7eb'};
  background: ${isMe ? (darkMode ? 'rgba(99, 102, 241, 0.12)' : '#f5f3ff') : darkMode ? '#1f1f1f' : '#fafafa'};
`

const rowRightStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0;
  min-height: 44px;
`

const iconSlotStyles = css`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const nameBlockStyles = css`
  flex: 1;
  min-width: 0;
`

const nameStyles = css`
  margin: 0;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
`

const metaLineStyles = (darkMode) => css`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const pointsBlockStyles = css`
  text-align: right;
  flex-shrink: 0;
`

const pointsValueStyles = css`
  margin: 0;
  font-weight: 800;
  font-size: 1.05rem;
  line-height: 1.1;
`

const pointsLabelStyles = (darkMode) => css`
  margin: 0.1rem 0 0;
  font-size: 0.78rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-weight: 500;
`

const youBadgeStyles = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  background: ${darkMode ? '#374151' : '#e5e7eb'};
  color: ${darkMode ? '#e5e7eb' : '#374151'};
  line-height: 1;
`

function RankDecoration({ rank }) {
  if (rank === 1) {
    return (
      <span css={iconSlotStyles} title="1st place" aria-hidden style={{ fontSize: '1.2rem', lineHeight: 1 }}>
        👑
      </span>
    )
  }
  if (rank === 2) {
    return (
      <span css={iconSlotStyles} title="2nd place" aria-hidden style={{ color: '#6b7280' }}>
        <HiOutlineTrophy style={{ width: 24, height: 24, strokeWidth: 2 }} />
      </span>
    )
  }
  if (rank === 3) {
    return (
      <span css={iconSlotStyles} title="3rd place" aria-hidden style={{ color: '#2563eb' }}>
        <HiOutlineStar style={{ width: 24, height: 24, strokeWidth: 2 }} />
      </span>
    )
  }
  return <span css={iconSlotStyles} aria-hidden />
}

function StudentLeaderboard({ darkMode, userEmail }) {
  const [scope, setScope] = useState('public')
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [scopeMessage, setScopeMessage] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    setScopeMessage('')
    try {
      const params = new URLSearchParams()
      params.set('scope', scope)
      if (userEmail) params.set('viewer_email', userEmail)
      const res = await fetch(`${apiBase}/backend/leaderboard.php?${params.toString()}`, { cache: 'no-store' })
      const data = await res.json()
      if (data.success && Array.isArray(data.entries)) {
        setEntries(data.entries)
        if (typeof data.message === 'string' && data.message) setScopeMessage(data.message)
      } else {
        setEntries([])
        setError(data.error || 'Could not load leaderboard')
      }
    } catch (_) {
      setEntries([])
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }, [scope, userEmail])

  useEffect(() => {
    load()
  }, [load])

  const hasMe = useMemo(() => entries.some((e) => e.is_me), [entries])

  const cardTitle = scope === 'public' ? 'University rankings' : 'Your class cohort'

  return (
    <div css={wrapStyles}>
      <h1 css={pageTitleStyles}>Anonymous Leaderboard</h1>
      <p css={pageSubStyles(darkMode)}>
        Names are hidden. Compare points with everyone, or with students on the same degree, year, and class of.
      </p>
      <hr css={dividerStyles(darkMode)} />

      <div css={tabRowStyles(darkMode)} role="tablist" aria-label="Leaderboard scope">
        <button
          type="button"
          role="tab"
          aria-selected={scope === 'public'}
          css={tabBtnStyles(darkMode, scope === 'public')}
          onClick={() => setScope('public')}
        >
          Public
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={scope === 'my_class'}
          css={tabBtnStyles(darkMode, scope === 'my_class')}
          onClick={() => setScope('my_class')}
        >
          My class
        </button>
      </div>

      <section css={cardStyles(darkMode)}>
        <h2 css={cardHeaderStyles}>
          <HiOutlineTrophy style={{ width: 22, height: 22, color: ACCENT, flexShrink: 0 }} aria-hidden />
          {cardTitle}
        </h2>
        {loading ? (
          <p css={pageSubStyles(darkMode)} style={{ marginBottom: '1rem' }}>
            Loading…
          </p>
        ) : error ? (
          <p css={pageSubStyles(darkMode)} style={{ marginBottom: '1rem', color: '#dc2626' }}>
            {error}
          </p>
        ) : entries.length === 0 ? (
          <p css={pageSubStyles(darkMode)} style={{ marginBottom: '1rem' }}>
            {scopeMessage || 'No students to show yet.'}
          </p>
        ) : (
          <div css={listStyles}>
            {entries.map((e, idx) => {
              const lvl = levelFromPoints(e.points)
              const att = fmtAttendance(e.attendance)
              const isMe = Boolean(e.is_me)
              const label = e.label || `Student #${e.rank}`
              return (
                <div key={`${scope}-${e.rank}-${idx}-${e.points}`} css={rowStyles(darkMode, isMe)}>
                  <div css={rankBadgeStyles(darkMode, e.rank, isMe)}>{e.rank}</div>
                  <RankDecoration rank={e.rank} />
                  <div css={nameBlockStyles}>
                    <p css={nameStyles}>{label}</p>
                    <p css={metaLineStyles(darkMode)}>
                      Level {lvl} • {att}% attendance
                    </p>
                  </div>
                  <div css={rowRightStyles}>
                    {isMe ? (
                      <span css={youBadgeStyles(darkMode)} aria-label="Your rank">
                        You
                      </span>
                    ) : null}
                    <div css={pointsBlockStyles}>
                      <p css={pointsValueStyles}>{e.points}</p>
                      <p css={pointsLabelStyles(darkMode)}>points</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
      {!loading && !error && userEmail && !hasMe && scope === 'public' && entries.length > 0 ? (
        <p css={pageSubStyles(darkMode)} style={{ marginTop: '0.85rem', fontSize: '0.88rem' }}>
          Sign in with a student email that exists in the database to highlight your row.
        </p>
      ) : null}
      {!loading && !error && userEmail && !hasMe && scope === 'my_class' && entries.length > 0 ? (
        <p css={pageSubStyles(darkMode)} style={{ marginTop: '0.85rem', fontSize: '0.88rem' }}>
          We could not match your row. Check your degree, year, and class of on your student record.
        </p>
      ) : null}
    </div>
  )
}

export default StudentLeaderboard
