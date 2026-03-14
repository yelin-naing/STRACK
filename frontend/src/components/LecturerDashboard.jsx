/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChartBar,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineAcademicCap,
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
  margin-bottom: 1.25rem;
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

const LECTURER_NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HiOutlineSquares2X2 },
  { id: 'students', label: 'Students', icon: HiOutlineUserGroup },
  { id: 'attendance', label: 'Attendance', icon: HiOutlineClipboardDocumentCheck },
  { id: 'performance', label: 'Performance', icon: HiOutlineChartBar },
  { id: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { id: 'calendar', label: 'Calendar', icon: HiOutlineCalendar },
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

function LecturerDashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')

  let userName = 'Lecturer'
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
            <div css={profileRoleStyles(darkMode)}>Lecturer</div>
          </div>
        </div>

        <nav css={navStyles}>
          {LECTURER_NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              css={navItemStyles(darkMode, activeNav === id)}
              onClick={() => setActiveNav(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>

        <button type="button" css={logoutStyles} onClick={handleLogout}>
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
                Welcome to the lecturer portal. Here you can manage courses, view student performance, and upload grades.
              </p>
            </>
          )}
          {activeNav === 'students' && (
            <>
              <h1 css={titleStyles}>Students</h1>
              <p css={textStyles}>
                This is the students page. View your class lists and student details here.
              </p>
            </>
          )}
          {activeNav === 'attendance' && (
            <>
              <h1 css={titleStyles}>Attendance</h1>
              <p css={textStyles}>
                This is the attendance page. Mark and view student attendance for your classes here.
              </p>
            </>
          )}
          {activeNav === 'performance' && (
            <>
              <h1 css={titleStyles}>Performance</h1>
              <p css={textStyles}>
                This is the performance page. View and analyse student performance and grades here.
              </p>
            </>
          )}
          {activeNav === 'courses' && (
            <>
              <h1 css={titleStyles}>Courses</h1>
              <p css={textStyles}>
                This is the courses page. Manage your courses, materials, and class lists here.
              </p>
            </>
          )}
          {activeNav === 'calendar' && (
            <>
              <h1 css={titleStyles}>Calendar</h1>
              <p css={textStyles}>
                This is the calendar page. View your teaching schedule, deadlines, and important dates here.
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

export default LecturerDashboard
