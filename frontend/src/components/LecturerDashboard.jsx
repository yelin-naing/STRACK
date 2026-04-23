/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMobileDrawer } from '../hooks/useMobileDrawer'
import {
  appLayoutStyles,
  appSidebarStyles,
  appMobileBackdrop,
  appMainColumn,
  appMobileTopBar,
  appMobileMenuBtn,
  appMobileTopBarTitle,
  appSidebarCloseBtn,
  appMainStyles,
} from '../styles/appShell'
import {
  profilePageWrap,
  profilePageHeader,
  profilePageTitle,
  profilePageSubtitle,
  profileTopCard,
  profileTopRow,
  profileHeadBlock,
  profileTextCol,
  profileHeroAvatar,
  profileTitleName,
  profileMetaLine,
  profileBadgeRow,
  profileBadgeAccent,
  profileBadgeMuted,
  editProfileBtn,
  kpiGridThree,
  kpiCard,
  kpiLabelRow,
  kpiLabel,
  kpiValue,
  kpiSub,
  personalCard,
  personalTitle,
  personalGrid,
  personalField,
  personalFieldAddress,
  personalLabel,
  personalValue,
  personalValueIcon,
  personalValueText,
  personalInput,
  personalInputReadonly,
  editActions,
  actionBtn,
  profileError,
} from '../styles/profilePageStyles'
import ProfilePasswordChange from './ProfilePasswordChange'
import LecturerCalendar from './LecturerCalendar'
import LecturerCourses from './LecturerCourses'
import LecturerAttendance from './LecturerAttendance'
import LecturerPerformance from './LecturerPerformance'
import LecturerAnnouncements from './LecturerAnnouncements'
import LecturerDashboardHome from './LecturerDashboardHome'
import LecturerAwardBadges from './LecturerAwardBadges'
import NotificationBell from './NotificationBell'
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
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlinePencil,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineTrophy,
} from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const themeTransition = '0.35s ease'

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

const contentStyles = (darkMode, profileTab, wideTab) => css`
  max-width: ${wideTab ? 'min(100%, 1280px)' : profileTab ? 'min(100%, 920px)' : '800px'};
  margin: 0 auto;
  width: 100%;
`

const LECTURER_NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HiOutlineSquares2X2 },
  { id: 'attendance', label: 'Attendance', icon: HiOutlineClipboardDocumentCheck },
  { id: 'performance', label: 'Performance', icon: HiOutlineChartBar },
  { id: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { id: 'badges', label: 'Badge awards', icon: HiOutlineTrophy },
  { id: 'announcements', label: 'Announcements', icon: HiOutlineDocumentText },
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

function lecturerProfileStorageKey(email) {
  return `strack_lecturer_profile_extra_${(email || '').toLowerCase()}`
}

function normalizeUkPhone(value) {
  const raw = String(value || '').trim().replace(/\s+/g, ' ')
  if (!raw) return '+44 7700 900123'
  return raw
}

function toYmd(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function getCurrentWeekRange() {
  const now = new Date()
  const day = now.getDay()
  const mondayOffset = day === 0 ? -6 : 1 - day
  const from = new Date(now)
  from.setDate(now.getDate() + mondayOffset)
  const to = new Date(from)
  to.setDate(from.getDate() + 6)
  return { from: toYmd(from), to: toYmd(to) }
}

function timeToMinutes(value) {
  const text = String(value || '')
  const parts = text.split(':')
  if (parts.length < 2) return null
  const hh = Number(parts[0])
  const mm = Number(parts[1])
  if (!Number.isFinite(hh) || !Number.isFinite(mm)) return null
  return hh * 60 + mm
}

function LecturerDashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const { mobileMenuOpen, setMobileMenuOpen, closeMenu } = useMobileDrawer()
  const [activeNav, setActiveNav] = useState('dashboard')
  const [performanceIntent, setPerformanceIntent] = useState(null)
  const consumePerformanceIntent = useCallback(() => setPerformanceIntent(null), [])
  const [userEmail, setUserEmail] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [departmentCode, setDepartmentCode] = useState('')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileErrorMsg, setProfileErrorMsg] = useState('')
  const [profileStats, setProfileStats] = useState({
    courses: 0,
    students: 0,
    hoursPerWeek: 0,
  })
  const [lecturerProfile, setLecturerProfile] = useState({
    phone: '+44 7700 900123',
    office: 'Building A, Room 305',
    address: '123 University Avenue, Newcastle upon Tyne',
  })
  const [profileDraft, setProfileDraft] = useState(lecturerProfile)

  useEffect(() => {
    if (activeNav !== 'performance') {
      setPerformanceIntent(null)
    }
  }, [activeNav])

  let userName = 'Lecturer'
  try {
    const stored = localStorage.getItem('strack_user')
    if (stored) {
      const user = JSON.parse(stored)
      if (user?.name) userName = user.name
    }
  } catch (_) {}

  useEffect(() => {
    try {
      const stored = localStorage.getItem('strack_user')
      if (stored) {
        const user = JSON.parse(stored)
        if (user?.email) setUserEmail(user.email)
        const dn = typeof user?.department === 'string' ? user.department.trim() : ''
        const dc = typeof user?.department_code === 'string' ? user.department_code.trim() : ''
        if (dn) setDepartmentName(dn)
        if (dc) setDepartmentCode(dc)
      }
    } catch (_) {}
  }, [])

  const refreshDepartmentFromApi = useCallback(async () => {
    if (!userEmail) return
    try {
      const [lecRes, deptRes] = await Promise.all([
        fetch(`${apiBase}/backend/lecturers.php`, { cache: 'no-store' }),
        fetch(`${apiBase}/backend/departments.php`, { cache: 'no-store' }),
      ])
      const lecData = await lecRes.json()
      const deptData = await deptRes.json()
      const lecturers = lecData.success ? lecData.lecturers || [] : []
      const emailLower = userEmail.toLowerCase().trim()
      const me = lecturers.find(
        (l) => String(l.email || '').toLowerCase().trim() === emailLower
      )
      const rawDept = me?.department != null ? String(me.department).trim() : ''
      if (!rawDept) return

      const depts = deptData.success ? deptData.departments || [] : []
      const match = depts.find(
        (d) =>
          String(d.name || '').trim() === rawDept ||
          String(d.code || '').trim() === rawDept ||
          String(d.name || '').trim().toLowerCase() === rawDept.toLowerCase() ||
          String(d.code || '').trim().toLowerCase() === rawDept.toLowerCase()
      )
      if (match) {
        setDepartmentName(String(match.name || rawDept).trim())
        setDepartmentCode(String(match.code || '').trim())
      } else {
        setDepartmentName(rawDept)
        setDepartmentCode('')
      }
    } catch (_) {}
  }, [userEmail])

  useEffect(() => {
    refreshDepartmentFromApi()
  }, [refreshDepartmentFromApi])

  const refreshProfileStatsFromApi = useCallback(async () => {
    if (!userEmail) return
    try {
      const week = getCurrentWeekRange()
      const [lectRes, courseRes, timetableRes] = await Promise.all([
        fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(
          `${apiBase}/backend/timetable.php?from=${encodeURIComponent(week.from)}&to=${encodeURIComponent(week.to)}&t=${Date.now()}`,
          { cache: 'no-store' }
        ),
      ])
      const [lectData, courseData, timetableData] = await Promise.all([
        lectRes.json(),
        courseRes.json(),
        timetableRes.json(),
      ])
      const lecturers = lectData.success ? lectData.lecturers || [] : []
      const courses = courseData.success ? courseData.courses || [] : []
      const entries = timetableData.success ? timetableData.entries || [] : []

      const me = lecturers.find(
        (l) => String(l.email || '').trim().toLowerCase() === String(userEmail).trim().toLowerCase()
      )
      if (!me) {
        setProfileStats({ courses: 0, students: 0, hoursPerWeek: 0 })
        return
      }

      const lid = String(me.lecturer_id || '').trim()
      const myCourses = courses.filter((c) => String(c.lecturer_id || '').trim() === lid)
      const uniqueStudents = new Set()
      myCourses.forEach((course) => {
        ;(Array.isArray(course.students) ? course.students : []).forEach((s) => {
          uniqueStudents.add(String(s.id))
        })
      })

      const weekMinutes = entries.reduce((sum, entry) => {
        const isMyEntry =
          Array.isArray(entry.lecturers) &&
          entry.lecturers.some((l) => Number(l.id) === Number(me.id))
        if (!isMyEntry || entry.entry_type !== 'class') return sum
        const start = timeToMinutes(entry.start_time)
        const end = timeToMinutes(entry.end_time)
        if (start == null || end == null || end <= start) return sum
        return sum + (end - start)
      }, 0)

      setProfileStats({
        courses: myCourses.length,
        students: uniqueStudents.size,
        hoursPerWeek: Number((weekMinutes / 60).toFixed(1)),
      })
    } catch (_) {
      setProfileStats({ courses: 0, students: 0, hoursPerWeek: 0 })
    }
  }, [userEmail])

  useEffect(() => {
    refreshProfileStatsFromApi()
  }, [refreshProfileStatsFromApi])

  useEffect(() => {
    if (!userEmail) return
    try {
      const raw = localStorage.getItem(lecturerProfileStorageKey(userEmail))
      if (!raw) return
      const parsed = JSON.parse(raw)
      const next = {
        phone: normalizeUkPhone(parsed?.phone),
        office: String(parsed?.office || lecturerProfile.office),
        address: String(parsed?.address || lecturerProfile.address),
      }
      setLecturerProfile(next)
      setProfileDraft(next)
    } catch (_) {}
  }, [userEmail])

  const handleLogout = () => {
    try {
      localStorage.removeItem('strack_user')
    } catch (_) {}
    navigate('/')
  }

  const goNav = (id) => {
    setActiveNav(id)
    closeMenu()
  }

  const handleEditStart = () => {
    setProfileDraft(lecturerProfile)
    setProfileErrorMsg('')
    setIsEditingProfile(true)
  }

  const handleEditCancel = () => {
    setProfileDraft(lecturerProfile)
    setProfileErrorMsg('')
    setIsEditingProfile(false)
  }

  const handleEditSave = () => {
    const phone = normalizeUkPhone(profileDraft.phone)
    const isUkLike = /^(\+44\s?7\d{3}\s?\d{6}|07\d{3}\s?\d{6})$/.test(phone.replace(/\s+/g, ' '))
    if (!isUkLike) {
      setProfileErrorMsg('Please enter a UK mobile format like +44 7700 900123 or 07700 900123.')
      return
    }
    const next = {
      phone,
      office: (profileDraft.office || '').trim() || lecturerProfile.office,
      address: (profileDraft.address || '').trim() || lecturerProfile.address,
    }
    setLecturerProfile(next)
    setProfileDraft(next)
    setProfileErrorMsg('')
    setIsEditingProfile(false)
    try {
      localStorage.setItem(lecturerProfileStorageKey(userEmail), JSON.stringify(next))
    } catch (_) {}
  }

  return (
    <div css={appLayoutStyles(darkMode)}>
      {mobileMenuOpen ? (
        <button
          type="button"
          css={appMobileBackdrop(darkMode)}
          onClick={closeMenu}
          aria-label="Close menu"
        />
      ) : null}
      <aside css={appSidebarStyles(darkMode, mobileMenuOpen)}>
        <header css={headerStyles}>
          <div css={logoStyles}>
            <div css={logoIconStyles(darkMode)}>
              <HiOutlineAcademicCap />
            </div>
            <span css={logoTextStyles(darkMode)}>STRACK</span>
          </div>
          <div css={css`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`}>
            <NotificationBell darkMode={darkMode} userEmail={userEmail} placement="sidebar" />
            <button
              type="button"
              css={themeToggleStyles(darkMode)}
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>
            <button
              type="button"
              css={appSidebarCloseBtn(darkMode)}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <HiOutlineXMark />
            </button>
          </div>
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
              onClick={() => goNav(id)}
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

      <div css={appMainColumn}>
        <header css={appMobileTopBar(darkMode)}>
          <button
            type="button"
            css={appMobileMenuBtn(darkMode)}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineBars3 />
          </button>
          <span css={appMobileTopBarTitle(darkMode)}>STRACK</span>
          <div css={css`display: inline-flex; align-items: center; gap: 0.3rem;`}>
            <NotificationBell darkMode={darkMode} userEmail={userEmail} />
            <button
              type="button"
              css={themeToggleStyles(darkMode)}
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </button>
          </div>
        </header>
        <main css={appMainStyles(darkMode)}>
        <div
          css={contentStyles(
            darkMode,
            activeNav === 'profile',
            activeNav === 'calendar' ||
              activeNav === 'courses' ||
              activeNav === 'badges' ||
              activeNav === 'announcements' ||
              activeNav === 'attendance' ||
              activeNav === 'performance' ||
              activeNav === 'dashboard'
          )}
        >
          {activeNav === 'dashboard' && (
            <LecturerDashboardHome
              darkMode={darkMode}
              userEmail={userEmail}
              onOpenPerformance={(payload) => {
                setPerformanceIntent(payload && typeof payload === 'object' ? payload : {})
                setActiveNav('performance')
              }}
              onGoToAttendance={() => {
                setActiveNav('attendance')
                closeMenu()
              }}
              onGoToGrades={() => {
                setPerformanceIntent({})
                setActiveNav('performance')
                closeMenu()
              }}
              onViewAllCourses={() => {
                setActiveNav('courses')
                closeMenu()
              }}
            />
          )}
          {activeNav === 'attendance' && <LecturerAttendance darkMode={darkMode} userEmail={userEmail} />}
          {activeNav === 'performance' && (
            <LecturerPerformance
              darkMode={darkMode}
              userEmail={userEmail}
              performanceIntent={performanceIntent}
              onConsumePerformanceIntent={consumePerformanceIntent}
            />
          )}
          {activeNav === 'courses' && <LecturerCourses darkMode={darkMode} userEmail={userEmail} />}
          {activeNav === 'badges' && <LecturerAwardBadges darkMode={darkMode} userEmail={userEmail} />}
          {activeNav === 'announcements' && (
            <LecturerAnnouncements darkMode={darkMode} userEmail={userEmail} />
          )}
          {activeNav === 'calendar' && (
            <LecturerCalendar darkMode={darkMode} userEmail={userEmail} />
          )}
          {activeNav === 'profile' && (
            <div css={profilePageWrap(darkMode)}>
              <header css={profilePageHeader}>
                <h1 css={profilePageTitle(darkMode)}>My Profile</h1>
                <p css={profilePageSubtitle(darkMode)}>
                  Manage your personal information and teaching profile.
                </p>
              </header>

              <section css={profileTopCard(darkMode)}>
                <div css={profileTopRow}>
                  <div css={profileHeadBlock}>
                    <div css={profileHeroAvatar}>{getInitials(userName)}</div>
                    <div css={profileTextCol}>
                      <h2 css={profileTitleName}>{userName}</h2>
                      <div css={profileMetaLine(darkMode)}>
                        Department: {departmentName || '—'}
                      </div>
                      <div css={profileMetaLine(darkMode)}>
                        Department code: {departmentCode || '—'}
                      </div>
                      <div css={profileBadgeRow}>
                        <span css={profileBadgeAccent}>Lecturer</span>
                        <span css={profileBadgeMuted(darkMode)}>{profileStats.courses} Courses</span>
                      </div>
                    </div>
                  </div>
                  {!isEditingProfile ? (
                    <button type="button" css={editProfileBtn} onClick={handleEditStart}>
                      <HiOutlinePencil aria-hidden />
                      Edit Profile
                    </button>
                  ) : null}
                </div>
              </section>

              <section css={kpiGridThree} aria-label="Teaching statistics">
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineBookOpen aria-hidden />
                    <span css={kpiLabel}>Courses</span>
                  </div>
                  <div css={kpiValue}>{profileStats.courses}</div>
                  <div css={kpiSub(darkMode)}>Active courses</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineUserGroup aria-hidden />
                    <span css={kpiLabel}>Students</span>
                  </div>
                  <div css={kpiValue}>{profileStats.students}</div>
                  <div css={kpiSub(darkMode)}>Total enrolled</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineClock aria-hidden />
                    <span css={kpiLabel}>Hours / week</span>
                  </div>
                  <div css={kpiValue}>{profileStats.hoursPerWeek}</div>
                  <div css={kpiSub(darkMode)}>Teaching hours</div>
                </article>
              </section>

              <section css={personalCard(darkMode)}>
                <h2 css={personalTitle(darkMode)}>Personal Information</h2>
                <div css={personalGrid}>
                  <div css={personalField}>
                    <span css={personalLabel}>Full Name</span>
                    {isEditingProfile ? (
                      <input
                        css={personalInputReadonly(darkMode)}
                        value={userName}
                        readOnly
                        aria-readonly="true"
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlineUser aria-hidden />
                        </span>
                        <span css={personalValueText}>{userName}</span>
                      </div>
                    )}
                  </div>
                  <div css={personalField}>
                    <span css={personalLabel}>Email Address</span>
                    {isEditingProfile ? (
                      <input
                        css={personalInputReadonly(darkMode)}
                        value={userEmail || 'lecturer@uni.ac.uk'}
                        readOnly
                        aria-readonly="true"
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlineEnvelope aria-hidden />
                        </span>
                        <span css={personalValueText}>{userEmail || 'lecturer@uni.ac.uk'}</span>
                      </div>
                    )}
                  </div>
                  <div css={personalField}>
                    <span css={personalLabel}>Phone Number</span>
                    {isEditingProfile ? (
                      <input
                        css={personalInput(darkMode)}
                        value={profileDraft.phone}
                        onChange={(e) => setProfileDraft((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="+44 7700 900123"
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlinePhone aria-hidden />
                        </span>
                        <span css={personalValueText}>{lecturerProfile.phone}</span>
                      </div>
                    )}
                  </div>
                  <div css={personalField}>
                    <span css={personalLabel}>Office Location</span>
                    {isEditingProfile ? (
                      <input
                        css={personalInput(darkMode)}
                        value={profileDraft.office}
                        onChange={(e) => setProfileDraft((p) => ({ ...p, office: e.target.value }))}
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlineBuildingOffice2 aria-hidden />
                        </span>
                        <span css={personalValueText}>{lecturerProfile.office}</span>
                      </div>
                    )}
                  </div>
                  <div css={[personalField, personalFieldAddress]}>
                    <span css={personalLabel}>Address</span>
                    {isEditingProfile ? (
                      <input
                        css={personalInput(darkMode)}
                        value={profileDraft.address}
                        onChange={(e) => setProfileDraft((p) => ({ ...p, address: e.target.value }))}
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlineMapPin aria-hidden />
                        </span>
                        <span css={personalValueText}>{lecturerProfile.address}</span>
                      </div>
                    )}
                  </div>
                </div>
                {isEditingProfile ? (
                  <div css={editActions(darkMode)}>
                    <button type="button" css={actionBtn(true)} onClick={handleEditSave}>
                      Save
                    </button>
                    <button type="button" css={actionBtn(false)} onClick={handleEditCancel}>
                      Cancel
                    </button>
                  </div>
                ) : null}
                {profileErrorMsg ? <div css={profileError(darkMode)}>{profileErrorMsg}</div> : null}
              </section>

              <ProfilePasswordChange darkMode={darkMode} userEmail={userEmail} />
            </div>
          )}
        </div>
      </main>
      </div>
    </div>
  )
}

export default LecturerDashboard
