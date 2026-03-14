/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineAcademicCap,
  HiOutlineClock,
} from 'react-icons/hi2'

const themeTransition = '0.35s ease'

const layoutStyles = (darkMode) => css`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${darkMode ? '#0f0f0f' : '#F8F8F8'};
  display: flex;
  flex-direction: column;
  transition: background-color ${themeTransition};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const sidebarStyles = (darkMode) => css`
  background-color: ${darkMode ? '#1a1a1a' : '#FFFFFF'};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${darkMode ? 'none' : '0 2px 12px rgba(0,0,0,0.06)'};
  transition: background-color ${themeTransition}, box-shadow ${themeTransition};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`

const logoStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`

const logoIconStyles = (darkMode) => css`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${darkMode ? '#a78bfa' : '#1a1a1a'};
    transition: stroke ${themeTransition};
  }
`

const logoTextStyles = (darkMode) => css`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${darkMode ? '#ffffff' : 'inherit'};
  transition: color ${themeTransition};
`

const themeToggleStyles = (darkMode) => css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkMode ? '#ffffff' : '#1a1a1a'};
  border-radius: 8px;
  flex-shrink: 0;
  transition: color ${themeTransition};

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`

const profileStyles = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`

const avatarStyles = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
`

const profileInfoStyles = css`
  flex: 1;
  min-width: 0;
`

const profileNameStyles = (darkMode) => css`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${darkMode ? '#ffffff' : 'inherit'};
  transition: color ${themeTransition};
`

const profileRoleStyles = (darkMode) => css`
  font-size: 0.8rem;
  color: ${darkMode ? '#9ca3af' : '#666666'};
  font-weight: 400;
  transition: color ${themeTransition};
`

const pointsCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : 'rgba(124,58,237,0.08)'};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  transition: background ${themeTransition};
`

const pointsRowStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

const pointsLabelStyles = (darkMode) => css`
  font-size: 0.85rem;
  color: ${darkMode ? '#9ca3af' : '#6d28d9'};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: color ${themeTransition};
`

const pointsValueStyles = (darkMode) => css`
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#3b82f6' : '#7c3aed'};
  transition: color ${themeTransition};
`

const navStyles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const navItemStyles = (darkMode, active) => css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${active ? (darkMode ? 'rgba(124, 58, 237, 0.4)' : '#7c3aed') : 'transparent'};
  color: ${active ? '#fff' : darkMode ? '#d1d5db' : '#1a1a1a'};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${themeTransition}, color ${themeTransition};

  &:hover {
    background: ${active ? (darkMode ? 'rgba(124, 58, 237, 0.5)' : '#6d28d9') : darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`

const logoutStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: auto;
  background: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.35);
  color: #c0392b;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(192, 57, 43, 0.15);
    border-color: rgba(192, 57, 43, 0.5);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`

const mainStyles = (darkMode) => css`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${darkMode ? '#f3f4f6' : '#1a1a1a'};
  overflow-y: auto;
  transition: color ${themeTransition};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const contentStyles = (darkMode) => css`
  max-width: 800px;
  margin: 0 auto;
`

const titleStyles = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const textStyles = css`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HiOutlineSquares2X2 },
  { id: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { id: 'calendar', label: 'Calendar', icon: HiOutlineCalendar },
  { id: 'leaderboard', label: 'Leaderboard', icon: HiOutlineChartBar },
  { id: 'badges', label: 'Badges', icon: HiOutlineSparkles },
  { id: 'rewards', label: 'Rewards', icon: HiOutlineStar },
  { id: 'profile', label: 'Profile', icon: HiOutlineUser },
]

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function Dashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')

  let userName = 'Alex Thompson'
  let userPoints = 2450
  try {
    const stored = localStorage.getItem('strack_user')
    if (stored) {
      const user = JSON.parse(stored)
      if (user?.name) userName = user.name
    }
  } catch (_) {}

  const handleLogout = () => {
    try {
      localStorage.removeItem('strack_user')
    } catch (_) {}
    navigate('/')
  }

  return (
    <div css={layoutStyles(darkMode)}>
      <aside css={sidebarStyles(darkMode)}>
        <header css={headerStyles}>
          <div css={logoStyles}>
            <div css={logoIconStyles(darkMode)}>
              <HiOutlineAcademicCap />
            </div>
            <span css={logoTextStyles(darkMode)}>Strack</span>
          </div>
          <button
            type="button"
            css={themeToggleStyles(darkMode)}
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </header>

        <div css={profileStyles}>
          <div css={avatarStyles}>{getInitials(userName)}</div>
          <div css={profileInfoStyles}>
            <div css={profileNameStyles(darkMode)}>{userName}</div>
            <div css={profileRoleStyles(darkMode)}>Student</div>
          </div>
        </div>

        <div css={pointsCardStyles(darkMode)}>
          <div css={pointsRowStyles}>
            <span css={pointsLabelStyles(darkMode)}>
              <HiOutlineClock /> Points
            </span>
            <span css={pointsValueStyles(darkMode)}>{userPoints}</span>
          </div>
        </div>

        <nav css={navStyles}>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              css={navItemStyles(darkMode, activeNav === id)}
              onClick={() => setActiveNav(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>

        <button css={logoutStyles} onClick={handleLogout}>
          <HiOutlineArrowRightOnRectangle />
          Logout
        </button>
      </aside>

      <main css={mainStyles(darkMode)}>
        <div css={contentStyles(darkMode)}>
          {activeNav === 'dashboard' && (
            <>
              <h1 css={titleStyles}>Dashboard</h1>
              <p css={textStyles}>
                Welcome to the student portal. Here you can view your performance, grades, and progress.
              </p>
            </>
          )}
          {activeNav === 'courses' && (
            <>
              <h1 css={titleStyles}>Courses</h1>
              <p css={textStyles}>
                This is the courses page. View your enrolled courses, materials, and grades here.
              </p>
            </>
          )}
          {activeNav === 'calendar' && (
            <>
              <h1 css={titleStyles}>Calendar</h1>
              <p css={textStyles}>
                This is the calendar page. View your schedule, deadlines, and important dates here.
              </p>
            </>
          )}
          {activeNav === 'leaderboard' && (
            <>
              <h1 css={titleStyles}>Leaderboard</h1>
              <p css={textStyles}>
                This is the leaderboard page. See how you rank against other students and track your position.
              </p>
            </>
          )}
          {activeNav === 'badges' && (
            <>
              <h1 css={titleStyles}>Badges</h1>
              <p css={textStyles}>
                This is the badges page. View and collect achievement badges earned from your activities.
              </p>
            </>
          )}
          {activeNav === 'rewards' && (
            <>
              <h1 css={titleStyles}>Rewards</h1>
              <p css={textStyles}>
                This is the rewards page. Redeem your points for rewards and see what you can earn.
              </p>
            </>
          )}
          {activeNav === 'profile' && (
            <>
              <h1 css={titleStyles}>Profile</h1>
              <p css={textStyles}>
                This is your profile page. Manage your account details, preferences, and settings here.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
