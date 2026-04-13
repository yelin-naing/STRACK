/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import RewardsStore from './RewardsStore'
import ProfilePasswordChange from './ProfilePasswordChange'
import StudentCalendar from './StudentCalendar'
import StudentBadges from './StudentBadges'
import StudentCourses from './StudentCourses'
import StudentLeaderboard from './StudentLeaderboard'
import NotificationBell from './NotificationBell'
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
  kpiGrid,
  kpiCard,
  kpiLabelRow,
  kpiLabel,
  kpiValue,
  kpiSub,
  personalCard,
  personalTitle,
  personalGrid,
  personalField,
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
  HiOutlineBars3,
  HiOutlineXMark,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePencil,
  HiOutlineDocumentText,
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

function formatStudentId(userId) {
  const id = String(userId || '').trim()
  if (/^STU/i.test(id)) return id.toUpperCase()
  if (/^s\d+$/i.test(id)) {
    const n = Number(id.slice(1))
    if (Number.isFinite(n)) return `STU${String(n).padStart(3, '0')}`
  }
  if (/^\d+$/.test(id)) return `STU${String(Number(id)).padStart(3, '0')}`
  return 'STU001'
}

function profileStorageKey(email) {
  return `strack_profile_extra_${(email || '').toLowerCase()}`
}

function normalizeUkPhone(value) {
  const raw = String(value || '').trim().replace(/\s+/g, ' ')
  if (!raw) return '+44 7700 900123'
  return raw
}

function Dashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const { mobileMenuOpen, setMobileMenuOpen, closeMenu } = useMobileDrawer()
  const [activeNav, setActiveNav] = useState('dashboard')
  const [userPoints, setUserPoints] = useState(0)
  const [userEmail, setUserEmail] = useState('')
  const [studentId, setStudentId] = useState('STU001')
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileErrorMsg, setProfileErrorMsg] = useState('')
  const [profileInfo, setProfileInfo] = useState({
    phone: '+44 7700 900123',
    address: '123 University Avenue, Newcastle',
    bio: 'Computer Science student passionate about software development.',
  })
  const [profileDraft, setProfileDraft] = useState(profileInfo)

  let userName = 'Student'
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
        if (user?.id) setStudentId(formatStudentId(user.id))
      }
    } catch (_) {}
  }, [])

  useEffect(() => {
    if (!userEmail) return
    try {
      const raw = localStorage.getItem(profileStorageKey(userEmail))
      if (!raw) return
      const parsed = JSON.parse(raw)
      const next = {
        phone: normalizeUkPhone(parsed?.phone),
        address: String(parsed?.address || profileInfo.address),
        bio: String(parsed?.bio || profileInfo.bio),
      }
      setProfileInfo(next)
      setProfileDraft(next)
    } catch (_) {}
  }, [userEmail])

  const refreshPoints = useCallback(async () => {
    if (!userEmail) return
    try {
      const res = await fetch(
        `${apiBase}/backend/student_points.php?email=${encodeURIComponent(userEmail)}`,
        { cache: 'no-store' }
      )
      const data = await res.json()
      if (data.success && typeof data.points === 'number') setUserPoints(data.points)
    } catch (_) {}
  }, [userEmail])

  useEffect(() => {
    refreshPoints()
  }, [refreshPoints])

  const handleLogout = () => {
    try {
      localStorage.removeItem('strack_user')
    } catch (_) {}
    navigate('/')
  }

  const handleEditStart = () => {
    setProfileDraft(profileInfo)
    setProfileErrorMsg('')
    setIsEditingProfile(true)
  }

  const handleEditCancel = () => {
    setProfileDraft(profileInfo)
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
      address: (profileDraft.address || '').trim() || profileInfo.address,
      bio: (profileDraft.bio || '').trim() || profileInfo.bio,
    }
    setProfileInfo(next)
    setProfileDraft(next)
    setProfileErrorMsg('')
    setIsEditingProfile(false)
    try {
      localStorage.setItem(profileStorageKey(userEmail), JSON.stringify(next))
    } catch (_) {}
  }

  const goNav = (id) => {
    setActiveNav(id)
    closeMenu()
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
              onClick={() => goNav(id)}
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
        {activeNav === 'rewards' ? (
          <RewardsStore
            darkMode={darkMode}
            userEmail={userEmail}
            points={userPoints}
            onPointsChange={setUserPoints}
          />
        ) : (
        <div
          css={contentStyles(
            darkMode,
            activeNav === 'profile',
            activeNav === 'calendar' || activeNav === 'courses' || activeNav === 'leaderboard' || activeNav === 'badges'
          )}
        >
          {activeNav === 'dashboard' && (
            <>
              <h1 css={titleStyles}>Dashboard</h1>
              <p css={textStyles}>
                Welcome to the student portal. Here you can view your performance, grades, and progress.
              </p>
            </>
          )}
          {activeNav === 'courses' && (
            <StudentCourses darkMode={darkMode} userEmail={userEmail} studentId={studentId} />
          )}
          {activeNav === 'calendar' && (
            <StudentCalendar darkMode={darkMode} userEmail={userEmail} studentId={studentId} />
          )}
          {activeNav === 'leaderboard' && <StudentLeaderboard darkMode={darkMode} userEmail={userEmail} />}
          {activeNav === 'badges' && (
            <StudentBadges darkMode={darkMode} />
          )}
          {activeNav === 'profile' && (
            <div css={profilePageWrap(darkMode)}>
              <header css={profilePageHeader}>
                <h1 css={profilePageTitle(darkMode)}>My Profile</h1>
                <p css={profilePageSubtitle(darkMode)}>
                  Manage your personal information and account details.
                </p>
              </header>

              <section css={profileTopCard(darkMode)}>
                <div css={profileTopRow}>
                  <div css={profileHeadBlock}>
                    <div css={profileHeroAvatar}>{getInitials(userName)}</div>
                    <div css={profileTextCol}>
                      <h2 css={profileTitleName}>{userName}</h2>
                      <div css={profileMetaLine(darkMode)}>Student ID: {studentId}</div>
                      <div css={profileMetaLine(darkMode)}>Computer Science</div>
                      <div css={profileBadgeRow}>
                        <span css={profileBadgeAccent}>Student</span>
                        <span css={profileBadgeMuted(darkMode)}>Undergraduate</span>
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

              <section css={kpiGrid} aria-label="Profile statistics">
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineStar aria-hidden />
                    <span css={kpiLabel}>Points</span>
                  </div>
                  <div css={kpiValue}>{userPoints}</div>
                  <div css={kpiSub(darkMode)}>Total earned</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineSparkles aria-hidden />
                    <span css={kpiLabel}>Badges</span>
                  </div>
                  <div css={kpiValue}>3</div>
                  <div css={kpiSub(darkMode)}>Achievements</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineBookOpen aria-hidden />
                    <span css={kpiLabel}>Courses</span>
                  </div>
                  <div css={kpiValue}>6</div>
                  <div css={kpiSub(darkMode)}>Enrolled</div>
                </article>
                <article css={kpiCard(darkMode)}>
                  <div css={kpiLabelRow}>
                    <HiOutlineChartBar aria-hidden />
                    <span css={kpiLabel}>Rank</span>
                  </div>
                  <div css={kpiValue}>#3</div>
                  <div css={kpiSub(darkMode)}>Leaderboard</div>
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
                          value={userEmail || 'student@uni.ac.uk'}
                          readOnly
                          aria-readonly="true"
                        />
                      ) : (
                        <div css={personalValue(darkMode)}>
                          <span css={personalValueIcon}>
                            <HiOutlineEnvelope aria-hidden />
                          </span>
                          <span css={personalValueText}>{userEmail || 'student@uni.ac.uk'}</span>
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
                          <span css={personalValueText}>{profileInfo.phone}</span>
                        </div>
                      )}
                    </div>
                    <div css={personalField}>
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
                          <span css={personalValueText}>{profileInfo.address}</span>
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
                          <span css={personalValueText}>{profileInfo.bio}</span>
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
        )}
      </main>
      </div>
    </div>
  )
}

export default Dashboard
