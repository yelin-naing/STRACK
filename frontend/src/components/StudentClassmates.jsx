/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineStar, HiOutlineUserCircle, HiOutlineXMark } from 'react-icons/hi2'

import { findStudentMe } from '../findStudentMe'
import { BADGE_CATALOG, POMODORO_BADGE_MIN_SESSIONS, countUnlockedBadges } from '../badgeCatalog'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const BADGE_TOTAL = BADGE_CATALOG.length

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const heading = css`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`

const subtitle = (darkMode) => css`
  margin: 0.25rem 0 0;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const listWrap = css`
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

const card = (darkMode) => css`
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 14px;
  background: ${darkMode ? '#171717' : '#fff'};
  padding: 1.35rem 1.4rem 1.25rem;
  min-height: 178px;
  display: flex;
  flex-direction: column;
`

const cardBtn = css`
  all: unset;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  min-height: 0;
`

const profileStack = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.55rem;
  width: 100%;
`

const avatar = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const name = css`
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;
  word-break: break-word;
`

const meta = (darkMode) => css`
  margin: 0;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.88rem;
  line-height: 1.4;
  width: 100%;
  word-break: break-word;
`

const stats = css`
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const badgeMini = (darkMode) => css`
  font-size: 0.86rem;
  color: ${darkMode ? '#a5b4fc' : '#4f46e5'};
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`

const modalOverlay = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const modal = (darkMode) => css`
  width: 100%;
  max-width: 760px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 12px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
`

const modalHead = (darkMode) => css`
  padding: 0.9rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const closeBtn = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const modalBody = css`
  padding: 1rem;
  display: grid;
  gap: 1rem;
`

const section = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.8rem;
`

const sectionTitle = css`
  margin: 0 0 0.55rem;
  font-weight: 700;
`

const detailsGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem;
`

const detailItem = (darkMode) => css`
  border: 1px solid ${darkMode ? '#3f3f46' : '#e5e7eb'};
  border-radius: 8px;
  padding: 0.55rem 0.65rem;
`

const detailLabel = (darkMode) => css`
  margin: 0;
  font-size: 0.8rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const detailValue = css`
  margin: 0.2rem 0 0;
  font-weight: 700;
`

const badgesGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.55rem;
`

const badgeCard = (darkMode, unlocked) => css`
  border: 1px dashed ${darkMode ? '#4b5563' : '#d1d5db'};
  border-radius: 10px;
  padding: 0.55rem;
  opacity: ${unlocked ? 1 : 0.55};
  background: ${darkMode ? '#262626' : '#fff'};
`

function initials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function buildBadgeDisplayList(student, awards) {
  const pomo = Number(student.pomodoro_sessions_count || 0)
  const byId = new Map()
  for (const a of awards || []) {
    if (a.badge_id && !byId.has(a.badge_id)) byId.set(a.badge_id, a)
  }
  return BADGE_CATALOG.map((b) => {
    if (byId.has(b.id)) {
      return { id: b.id, name: b.name, icon: b.icon, unlocked: true }
    }
    if (b.id === 'pomodoro-focus' && pomo >= POMODORO_BADGE_MIN_SESSIONS) {
      return { id: b.id, name: b.name, icon: b.icon, unlocked: true }
    }
    return { id: b.id, name: b.name, icon: b.icon, unlocked: false }
  })
}

function getClassmatesList(students, courses, me) {
  if (!me) return []

  const myCourseIds = courses
    .filter((course) => Array.isArray(course.student_ids) && course.student_ids.map(Number).includes(Number(me.id)))
    .map((course) => Number(course.id))

  const byId = new Map()
  if (myCourseIds.length > 0) {
    courses.forEach((course) => {
      if (!myCourseIds.includes(Number(course.id))) return
      ;(course.students || []).forEach((student) => {
        if (Number(student.id) === Number(me.id)) return
        if (!byId.has(Number(student.id))) {
          const full = students.find((s) => Number(s.id) === Number(student.id))
          if (full) {
            byId.set(Number(student.id), {
              ...full,
              sharedCourses: [course.course_code],
            })
          }
        } else {
          const existing = byId.get(Number(student.id))
          if (existing && !existing.sharedCourses.includes(course.course_code)) {
            existing.sharedCourses.push(course.course_code)
          }
        }
      })
    })
  } else {
    students
      .filter((s) => Number(s.id) !== Number(me.id) && (s.department || '') === (me.department || ''))
      .forEach((s) => {
        byId.set(Number(s.id), { ...s, sharedCourses: [] })
      })
  }

  return Array.from(byId.values()).sort((a, b) => String(a.full_name || '').localeCompare(String(b.full_name || '')))
}

function StudentClassmates({ darkMode, userEmail, studentId, studentDatabaseId }) {
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [awardsByStudentId, setAwardsByStudentId] = useState({})
  const [awardsStatus, setAwardsStatus] = useState('idle')

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      try {
        const [sRes, cRes] = await Promise.all([
          fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        ])
        const [sData, cData] = await Promise.all([sRes.json(), cRes.json()])
        if (!active) return
        setStudents(sData.success ? sData.students || [] : [])
        setCourses(cData.success ? cData.courses || [] : [])
      } catch (_) {
        if (!active) return
        setStudents([])
        setCourses([])
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const me = useMemo(
    () => findStudentMe(students, { userEmail, studentId, studentDatabaseId }),
    [students, userEmail, studentId, studentDatabaseId]
  )

  useEffect(() => {
    if (loading || !me) {
      setAwardsByStudentId({})
      setAwardsStatus('idle')
      return
    }
    const mates = getClassmatesList(students, courses, me)
    if (mates.length === 0) {
      setAwardsByStudentId({})
      setAwardsStatus('ready')
      return
    }
    let active = true
    setAwardsStatus('loading')
    setAwardsByStudentId({})
    ;(async () => {
      const results = await Promise.all(
        mates.map(async (m) => {
          const em = String(m.email || '').trim()
          if (!em) {
            return { id: m.id, awards: [] }
          }
          try {
            const r = await fetch(
              `${apiBase}/backend/student_badges.php?user_email=${encodeURIComponent(em)}&t=${Date.now()}`,
              { cache: 'no-store' }
            )
            const d = await r.json().catch(() => ({}))
            return {
              id: m.id,
              awards: d.success && Array.isArray(d.awards) ? d.awards : [],
            }
          } catch {
            return { id: m.id, awards: [] }
          }
        })
      )
      if (!active) return
      const next = {}
      for (const x of results) {
        next[x.id] = { awards: x.awards }
      }
      setAwardsByStudentId(next)
      setAwardsStatus('ready')
    })()
    return () => {
      active = false
    }
  }, [loading, students, courses, me])

  const classmates = useMemo(() => {
    if (!me) return []
    const pending = awardsStatus === 'loading'
    return getClassmatesList(students, courses, me).map((m) => {
      const listAwards = pending ? [] : (awardsByStudentId[m.id]?.awards ?? [])
      const badges = buildBadgeDisplayList(m, listAwards)
      const pomo = Number(m.pomodoro_sessions_count || 0)
      const unlockedCount = pending ? null : countUnlockedBadges(listAwards, pomo)
      return { ...m, badges, unlockedCount, badgesCountPending: pending }
    })
  }, [students, courses, me, awardsByStudentId, awardsStatus])

  return (
    <div css={wrap}>
      <h1 css={heading}>Classmates</h1>
      <p css={subtitle(darkMode)}>See students in your shared classes and view their profile details.</p>

      {loading ? <p css={subtitle(darkMode)}>Loading classmates...</p> : null}
      {!loading && classmates.length === 0 ? (
        <p css={subtitle(darkMode)}>No classmates found yet.</p>
      ) : null}

      <div css={listWrap}>
        {classmates.map((mate) => (
          <article key={mate.id} css={card(darkMode)}>
            <button type="button" css={cardBtn} onClick={() => setSelected(mate)}>
              <div css={profileStack}>
                <div css={avatar} aria-hidden>
                  {initials(mate.full_name)}
                </div>
                <p css={name}>{mate.full_name}</p>
                <p css={meta(darkMode)}>{mate.email || 'No Gmail available'}</p>
              </div>
              <div css={stats}>
                <span css={badgeMini(darkMode)}>
                  <HiOutlineStar />
                  {mate.badgesCountPending
                    ? `… / ${BADGE_TOTAL}`
                    : `${mate.unlockedCount ?? 0}/${BADGE_TOTAL} badges`}
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {selected ? (
        <div css={modalOverlay} onClick={() => setSelected(null)}>
          <div css={modal(darkMode)} onClick={(e) => e.stopPropagation()}>
            <header css={modalHead(darkMode)}>
              <div css={css`display:flex; gap:.65rem; align-items:center;`}>
                <div css={css`width:42px;height:42px;border-radius:50%;background:#eef2ff;color:#4f46e5;display:flex;align-items:center;justify-content:center;`}>
                  <HiOutlineUserCircle style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <h3 css={css`margin:0;font-size:1.2rem;`}>{selected.full_name}</h3>
                  <p css={meta(darkMode)}>{selected.student_id || 'Student'} · {selected.email}</p>
                </div>
              </div>
              <button type="button" css={closeBtn(darkMode)} onClick={() => setSelected(null)} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </header>

            <div css={modalBody}>
              <section css={section(darkMode)}>
                <h4 css={sectionTitle}>Student Details</h4>
                <div css={detailsGrid}>
                  <div css={detailItem(darkMode)}>
                    <p css={detailLabel(darkMode)}>Email</p>
                    <p css={detailValue}>{selected.email || 'N/A'}</p>
                  </div>
                  <div css={detailItem(darkMode)}>
                    <p css={detailLabel(darkMode)}>Department</p>
                    <p css={detailValue}>{selected.department || 'N/A'}</p>
                  </div>
                  <div css={detailItem(darkMode)}>
                    <p css={detailLabel(darkMode)}>Degree</p>
                    <p css={detailValue}>{selected.degree || 'N/A'}</p>
                  </div>
                  <div css={detailItem(darkMode)}>
                    <p css={detailLabel(darkMode)}>Year</p>
                    <p css={detailValue}>{selected.year || 'N/A'}</p>
                  </div>
                  <div css={detailItem(darkMode)}>
                    <p css={detailLabel(darkMode)}>Class Of</p>
                    <p css={detailValue}>{selected.class_of || 'N/A'}</p>
                  </div>
                </div>
              </section>

              <section css={section(darkMode)}>
                <h4 css={sectionTitle}>Badges</h4>
                <div css={badgesGrid}>
                  {(selected.badges || []).map((badge) => (
                    <div key={badge.id} css={badgeCard(darkMode, badge.unlocked)}>
                      <div css={css`font-size:1.4rem;`}>{badge.icon}</div>
                      <div css={css`font-weight:700;margin-top:.15rem;`}>{badge.name}</div>
                      <div css={meta(darkMode)}>{badge.unlocked ? 'Unlocked' : 'Locked'}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentClassmates

