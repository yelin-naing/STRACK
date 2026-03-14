/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice,
  HiOutlineCalendar,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
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

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const BuildingOfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

const ADMIN_NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HiOutlineSquares2X2 },
  { id: 'students', label: 'Students', icon: HiOutlineUserGroup },
  { id: 'lecturers', label: 'Lecturers', icon: HiOutlineAcademicCap },
  { id: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { id: 'departments', label: 'Departments', icon: HiOutlineBuildingOffice },
  { id: 'calendar', label: 'Calendar', icon: HiOutlineCalendar },
]

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function AdminDashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')

  let userName = 'Admin'
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
            <div css={profileRoleStyles(darkMode)}>Admin</div>
          </div>
        </div>

        <nav css={navStyles}>
          {ADMIN_NAV_ITEMS.map(({ id, label, icon: Icon }) => (
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
                Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings.
              </p>
            </>
          )}
          {activeNav === 'students' && (
            <>
              <h1 css={titleStyles}>Students</h1>
              <p css={textStyles}>
                This is the students page. View and manage student accounts, enrolments, and records here.
              </p>
            </>
          )}
          {activeNav === 'lecturers' && (
            <>
              <h1 css={titleStyles}>Lecturers</h1>
              <p css={textStyles}>
                This is the lecturers page. View and manage lecturer accounts and teaching assignments here.
              </p>
            </>
          )}
          {activeNav === 'courses' && (
            <>
              <h1 css={titleStyles}>Courses</h1>
              <p css={textStyles}>
                This is the courses page. Manage course catalog, assignments, and offerings here.
              </p>
            </>
          )}
          {activeNav === 'departments' && (
            <>
              <h1 css={titleStyles}>Departments</h1>
              <p css={textStyles}>
                This is the departments page. Manage departments, faculties, and organisational structure here.
              </p>
            </>
          )}
          {activeNav === 'calendar' && (
            <>
              <h1 css={titleStyles}>Calendar</h1>
              <p css={textStyles}>
                This is the calendar page. View and manage academic calendar, deadlines, and events here.
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
