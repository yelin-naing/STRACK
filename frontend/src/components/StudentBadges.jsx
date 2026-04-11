/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { HiOutlineLockClosed, HiOutlineTrophy, HiOutlineXMark } from 'react-icons/hi2'

const BADGES = [
  {
    id: 'assignment-master',
    name: 'Assignment Master',
    icon: '📝',
    locked: true,
    unlockHint: 'Submit all assignments on time for the current term.',
  },
  {
    id: 'perfect-attendance',
    name: 'Perfect Attendance',
    icon: '⭐',
    locked: true,
    unlockHint: 'Maintain 100% attendance across all scheduled classes.',
  },
  {
    id: 'first-class-scholar',
    name: 'First Class Scholar',
    icon: '🎓',
    locked: true,
    unlockHint: 'Achieve first-class level grades in your modules.',
  },
  {
    id: 'extra-mile',
    name: 'Extra Mile',
    icon: '🚀',
    locked: true,
    unlockHint: 'Complete optional academic activities and bonus tasks.',
  },
  {
    id: 'halfway-hero',
    name: 'Halfway Hero',
    icon: '🏆',
    locked: true,
    unlockHint: 'Reach the midpoint milestone of your degree progression.',
  },
  {
    id: 'rising-star',
    name: 'Rising Star',
    icon: '📈',
    locked: true,
    unlockHint: 'Show consistent improvement in academic performance.',
  },
  {
    id: 'peer-champion',
    name: 'Peer Champion',
    icon: '🤝',
    locked: true,
    unlockHint: 'Actively help classmates through peer support activities.',
  },
  {
    id: 'academic-contributor',
    name: 'Academic Contributor',
    icon: '✭',
    locked: true,
    unlockHint: 'Contribute to extracurricular academic events and initiatives.',
  },
]

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
  padding: 1rem;
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

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.85rem;
`

const cardStyles = (darkMode, locked) => css`
  border: 1px dashed ${darkMode ? '#3f3f46' : '#e5e7eb'};
  border-radius: 12px;
  min-height: 150px;
  padding: 0.9rem 0.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  opacity: ${locked ? 0.55 : 1};
`

const iconStyles = (locked) => css`
  font-size: 2.85rem;
  line-height: 1;
  margin-bottom: 0.65rem;
  filter: ${locked ? 'grayscale(100%)' : 'none'};
`

const nameStyles = (darkMode) => css`
  margin: 0 0 0.45rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#e5e7eb' : '#1f2937'};
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

function StudentBadges({ darkMode }) {
  const [selectedBadge, setSelectedBadge] = useState(null)
  const unlockedCount = BADGES.filter((b) => !b.locked).length

  return (
    <div css={wrapStyles}>
      <h1 css={headingStyles}>Badges</h1>
      <p css={subheadingStyles(darkMode)}>Collect badges by achieving academic milestones</p>

      <section css={panelStyles(darkMode)}>
        <h2 css={panelHeaderStyles(darkMode)}>
          <HiOutlineTrophy />
          All Badges ({unlockedCount}/{BADGES.length})
        </h2>

        <div css={gridStyles}>
          {BADGES.map((badge) => (
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
              <p css={css`margin: 0 0 0.6rem 0;`}>
                <strong>Requirement:</strong> {selectedBadge.unlockHint}
              </p>
              <p css={css`margin: 0; font-size: 0.88rem; opacity: 0.9;`}>
                Keep progressing in the portal. This badge will unlock once the requirement is met.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentBadges
