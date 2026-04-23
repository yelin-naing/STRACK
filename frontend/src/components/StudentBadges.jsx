/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineLockClosed, HiOutlineTrophy, HiOutlineXMark } from 'react-icons/hi2'

import { findStudentMe } from '../findStudentMe'
import { BADGE_CATALOG, POMODORO_BADGE_MIN_SESSIONS } from '../badgeCatalog'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const wrapStyles = css`
  width: 100%;
`

const headingStyles = css`
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`

const subheadingStyles = (darkMode) => css`
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const panelStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 1.25rem 1.35rem 1.4rem;
`

const panelHeaderStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};

  svg {
    width: 18px;
    height: 18px;
    color: #6366f1;
  }
`

const semesterNoticeStyles = (darkMode) => css`
  margin: 0 0 0.9rem 0;
  border: 1px solid ${darkMode ? '#4338ca' : '#c7d2fe'};
  background: ${darkMode ? 'rgba(67, 56, 202, 0.18)' : '#eef2ff'};
  color: ${darkMode ? '#e0e7ff' : '#3730a3'};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
`

const semesterNoticeTitleStyles = css`
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
  font-weight: 700;
`

const semesterNoticeListStyles = css`
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.2rem;
  font-size: 0.88rem;
`

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem 1.25rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const cardStyles = (darkMode, locked) => css`
  border: 1px dashed ${darkMode ? '#3f3f46' : '#e5e7eb'};
  border-radius: 14px;
  min-height: 220px;
  padding: 1.35rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  opacity: ${locked ? 0.55 : 1};
`

const iconStyles = (locked) => css`
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.85rem;
  filter: ${locked ? 'grayscale(100%)' : 'none'};
`

const nameStyles = (darkMode) => css`
  margin: 0 0 0.45rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#e5e7eb' : '#1f2937'};
`

const pointsRewardStyles = (darkMode, locked) => css`
  margin: 0 0 0.35rem 0;
  font-size: 0.82rem;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: ${locked ? (darkMode ? '#a3a3a3' : '#6b7280') : '#059669'};
`

const lockStyles = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};

  svg {
    width: 15px;
    height: 15px;
  }
`

const awardByStyles = (darkMode) => css`
  margin: 0.35rem 0 0 0;
  font-size: 0.75rem;
  line-height: 1.3;
  color: ${darkMode ? '#a3a3a3' : '#6b7280'};
  text-align: center;
  max-width: 100%;
`

const cardBtnStyles = css`
  all: unset;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const modalOverlayStyles = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const modalBoxStyles = (darkMode) => css`
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
`

const modalHeaderStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const modalTitleStyles = (darkMode) => css`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const modalCloseStyles = (darkMode) => css`
  border: none;
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const modalBodyStyles = (darkMode) => css`
  padding: 1rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  line-height: 1.5;
`

function StudentBadges({ darkMode, userEmail, studentId, studentDatabaseId, badgesRefreshKey = 0 }) {
  const [selectedBadge, setSelectedBadge] = useState(null)
  const [pomodoroSessionsCount, setPomodoroSessionsCount] = useState(0)
  const [lecturerAwards, setLecturerAwards] = useState([])

  useEffect(() => {
    if (!userEmail) {
      setPomodoroSessionsCount(0)
      return undefined
    }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' })
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        const list = data.success ? data.students || [] : []
        const me = findStudentMe(list, { userEmail, studentId, studentDatabaseId })
        setPomodoroSessionsCount(Number(me?.pomodoro_sessions_count || 0))
      } catch (_) {
        if (!cancelled) setPomodoroSessionsCount(0)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail, studentId, studentDatabaseId])

  useEffect(() => {
    if (!userEmail) {
      setLecturerAwards([])
      return undefined
    }
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(
          `${apiBase}/backend/student_badges.php?user_email=${encodeURIComponent(userEmail)}&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        setLecturerAwards(data.success && Array.isArray(data.awards) ? data.awards : [])
      } catch (_) {
        if (!cancelled) setLecturerAwards([])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail, badgesRefreshKey])

  const awardByBadgeId = useMemo(() => {
    const m = new Map()
    for (const a of lecturerAwards) {
      if (a.badge_id && !m.has(a.badge_id)) m.set(a.badge_id, a)
    }
    return m
  }, [lecturerAwards])

  const displayBadges = useMemo(() => {
    return BADGE_CATALOG.map((b) => {
      const fromLecturer = awardByBadgeId.get(b.id)
      if (fromLecturer) {
        return { ...b, locked: false, award: fromLecturer }
      }
      if (b.id === 'pomodoro-focus' && pomodoroSessionsCount >= POMODORO_BADGE_MIN_SESSIONS) {
        return { ...b, locked: false, award: null }
      }
      return { ...b, locked: true, award: null }
    })
  }, [pomodoroSessionsCount, awardByBadgeId])

  const unlockedCount = displayBadges.filter((b) => !b.locked).length

  return (
    <div css={wrapStyles}>
      <h1 css={headingStyles}>Badges</h1>
      <p css={subheadingStyles(darkMode)}>
        Collect badges by meeting milestones or when your lecturer awards you in the portal. Each badge adds points
        to your account when earned (see cards below).
      </p>

      <section css={panelStyles(darkMode)}>
        <h2 css={panelHeaderStyles(darkMode)}>
          <HiOutlineTrophy />
          All Badges ({unlockedCount}/{displayBadges.length})
        </h2>
        <div css={semesterNoticeStyles(darkMode)}>
          <p css={semesterNoticeTitleStyles}>Semester Reset Notice</p>
          <ul css={semesterNoticeListStyles}>
            <li>Points reset every semester.</li>
            <li>Badges can be earned again.</li>
          </ul>
        </div>

        <div css={gridStyles}>
          {displayBadges.map((badge) => (
            <article key={badge.id} css={cardStyles(darkMode, badge.locked)}>
              <button
                type="button"
                css={cardBtnStyles}
                onClick={() => {
                  if (badge.locked) setSelectedBadge(badge)
                }}
              >
                <div css={iconStyles(badge.locked)}>{badge.icon}</div>
                <p css={nameStyles(darkMode)}>{badge.name}</p>
                <p css={pointsRewardStyles(darkMode, badge.locked)}>
                  +{badge.pointsAward} pts
                </p>
                {!badge.locked && badge.award ? (
                  <p css={awardByStyles(darkMode)}>Awarded by {badge.award.lecturer_name || 'Lecturer'}</p>
                ) : null}
                {badge.locked ? (
                  <div css={lockStyles(darkMode)}>
                    <HiOutlineLockClosed />
                    Locked
                  </div>
                ) : null}
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedBadge ? (
        <div css={modalOverlayStyles} onClick={() => setSelectedBadge(null)}>
          <div css={modalBoxStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>How to unlock: {selectedBadge.name}</h3>
              <button type="button" css={modalCloseStyles(darkMode)} onClick={() => setSelectedBadge(null)} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles(darkMode)}>
              <p css={css`margin: 0 0 0.5rem 0;`}>
                <strong>Points reward:</strong> +{selectedBadge.pointsAward} pts when you earn this badge
              </p>
              <p css={css`margin: 0 0 0.6rem 0;`}>
                <strong>Requirement:</strong> {selectedBadge.unlockHint}
              </p>
              <p css={css`margin: 0; font-size: 0.88rem; opacity: 0.9;`}>
                Your lecturer can also award this badge to you from their dashboard. Otherwise, keep meeting the
                requirement above to unlock it automatically where applicable.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentBadges
