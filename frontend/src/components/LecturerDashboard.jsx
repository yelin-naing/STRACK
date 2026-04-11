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
  personalFieldBio,
  personalLabel,
  personalValue,
  personalValueIcon,
  personalValueText,
  personalInput,
  personalInputReadonly,
  personalTextArea,
  editActions,
  actionBtn,
  profileError,
} from '../styles/profilePageStyles'
import ProfilePasswordChange from './ProfilePasswordChange'
import LecturerCalendar from './LecturerCalendar'
import LecturerCourses from './LecturerCourses'
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
  HiOutlineDocumentText,
  HiOutlineBuildingOffice2,
  HiOutlineClock,
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

function lecturerProfileStorageKey(email) {
  return `strack_lecturer_profile_extra_${(email || '').toLowerCase()}`
}

function normalizeUkPhone(value) {
  const raw = String(value || '').trim().replace(/\s+/g, ' ')
  if (!raw) return '+44 7700 900123'
  return raw
}

function LecturerDashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const { mobileMenuOpen, setMobileMenuOpen, closeMenu } = useMobileDrawer()
  const [activeNav, setActiveNav] = useState('dashboard')
  const [userEmail, setUserEmail] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  const [departmentCode, setDepartmentCode] = useState('')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileErrorMsg, setProfileErrorMsg] = useState('')
  const [lecturerProfile, setLecturerProfile] = useState({
    phone: '+44 7700 900123',
    office: 'Building A, Room 305',
    address: '123 University Avenue, Newcastle upon Tyne',
    bio: 'Computer Science lecturer focused on software engineering and student success.',
  })
  const [profileDraft, setProfileDraft] = useState(lecturerProfile)

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
        bio: String(parsed?.bio || lecturerProfile.bio),
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
      bio: (profileDraft.bio || '').trim() || lecturerProfile.bio,
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
            <span css={logoTextStyles(darkMode)}>Strack</span>
          </div>
          <div css={css`display: flex; align-items: center; gap: 0.15rem; flex-shrink: 0;`}>
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
          <span css={appMobileTopBarTitle(darkMode)}>Strack</span>
          <button
            type="button"
            css={themeToggleStyles(darkMode)}
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </header>
        <main css={appMainStyles(darkMode)}>
        <div
          css={contentStyles(
            darkMode,
            activeNav === 'profile',
            activeNav === 'calendar' || activeNav === 'courses'
          )}
        >
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
          {activeNav === 'courses' && <LecturerCourses darkMode={darkMode} userEmail={userEmail} />}
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
                        <span css={profileBadgeMuted(darkMode)}>2 Courses</span>
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
                  <div css={kpiValue}>2</div>
                  <div css={kpiSub(darkMode)}>Active courses</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineUserGroup aria-hidden />
                    <span css={kpiLabel}>Students</span>
                  </div>
                  <div css={kpiValue}>156</div>
                  <div css={kpiSub(darkMode)}>Total enrolled</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineClock aria-hidden />
                    <span css={kpiLabel}>Hours / week</span>
                  </div>
                  <div css={kpiValue}>18</div>
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
                  <div css={[personalField, personalFieldBio]}>
                    <span css={personalLabel}>Bio</span>
                    {isEditingProfile ? (
                      <textarea
                        css={personalTextArea(darkMode)}
                        value={profileDraft.bio}
                        onChange={(e) => setProfileDraft((p) => ({ ...p, bio: e.target.value }))}
                      />
                    ) : (
                      <div css={personalValue(darkMode)}>
                        <span css={personalValueIcon}>
                          <HiOutlineDocumentText aria-hidden />
                        </span>
                        <span css={personalValueText}>{lecturerProfile.bio}</span>
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
