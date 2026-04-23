/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineArrowDownTray,
  HiOutlineXMark,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowUpTray,
} from 'react-icons/hi2'
import { getCoursesVisibleToStudent } from '../getCoursesVisibleToStudent'
import { findStudentMe } from '../findStudentMe'
import {
  formatIntakeDisplay,
  formatStudyYearDisplay,
  SEMESTER_FORM_OPTIONS,
  COURSE_STUDY_YEAR_OPTIONS,
} from '../courseDisplayUtils'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'

function parseYMD(s) {
  const [y, m, d] = String(s || '').split('-').map(Number)
  return new Date(y, (m || 1) - 1, d || 1)
}

function toYMD(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function fmtTime(t) {
  if (!t) return ''
  const [hh, mm] = String(t).split(':').map(Number)
  const h12 = ((hh + 11) % 12) + 1
  const ampm = hh >= 12 ? 'PM' : 'AM'
  return `${h12}:${String(mm || 0).padStart(2, '0')} ${ampm}`
}

function formatBytes(n) {
  const b = Number(n) || 0
  if (b < 1024) return `${b} B`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`
  return `${(b / 1024 / 1024).toFixed(1)} MB`
}

const wrapStyles = css`width: 100%;`
const titleStyles = css`margin: 0; font-size: 1.5rem; font-weight: 700; line-height: 1.2;`
const subtitleStyles = (darkMode) => css`margin: 0.2rem 0 .9rem; font-size: .95rem; color: ${darkMode ? '#9ca3af' : '#6b7280'}; line-height: 1.4;`
const kpiGridStyles = css`display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .8rem; margin-bottom: .95rem; @media (max-width:1024px){grid-template-columns: repeat(2,minmax(0,1fr));}`
const cardStyles = (darkMode) => css`background:${darkMode ? '#262626' : '#fff'}; border:1px solid ${darkMode ? '#404040' : '#e5e7eb'}; border-radius:14px;`
const kpiCardStyles = (darkMode) => css`${cardStyles(darkMode)}; padding:.95rem;`
const kpiLabelStyles = (darkMode) => css`font-size:.78rem; letter-spacing:.03em; font-weight:700; color:${darkMode ? '#9ca3af' : '#6b7280'}; text-transform: uppercase;`
const kpiValueStyles = css`margin:.6rem 0 .15rem; font-size:1.85rem; font-weight:800; line-height:1.1;`
const kpiSubStyles = (darkMode) => css`margin:0; font-size:.95rem; color:${darkMode ? '#9ca3af' : '#6b7280'};`
const sectionStyles = (darkMode) => css`${cardStyles(darkMode)}; padding:.95rem; margin-bottom:.95rem;`
const sectionTitleStyles = css`display:flex; align-items:center; gap:.5rem; margin:0 0 .8rem; font-size:1.3rem; font-weight:700;`
const courseCardStyles = (darkMode) => css`border:1px solid ${darkMode ? '#404040' : '#e5e7eb'}; border-radius:12px; padding:.9rem; margin-bottom:.8rem;`
const chipsRowStyles = css`display:flex; align-items:center; gap:.5rem; flex-wrap:wrap;`
const chipStyles = (darkMode) => css`border:1px solid ${darkMode ? '#4b5563' : '#e5e7eb'}; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:600;`
const activeChipStyles = css`margin-left:auto; border:1px solid #bbf7d0; color:#059669; background:#ecfdf5; border-radius:10px; padding:.2rem .6rem; font-size:.95rem; font-weight:700;`
const courseNameStyles = css`margin:.55rem 0 .2rem; font-size:1.8rem; font-weight:800; line-height:1.2;`
const courseMetaStyles = (darkMode) => css`display:grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap:.8rem; margin:.7rem 0 .6rem; font-size:.95rem; color:${darkMode ? '#d1d5db' : '#374151'}; @media (max-width:900px){grid-template-columns:1fr;}`
const progressTrackStyles = (darkMode) => css`height:10px; border-radius:999px; background:${darkMode ? '#404040' : '#e5e7eb'}; overflow:hidden;`
const progressFillStyles = (p) => css`height:100%; width:${Math.max(0, Math.min(100, p))}%; background:${ACCENT};`
const btnRowStyles = css`display:flex; gap:.55rem; margin-top:.75rem; flex-wrap:wrap;`
const primaryBtnStyles = css`border:none; background:${ACCENT}; color:#fff; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`
const ghostBtnStyles = (darkMode) => css`border:1px solid ${darkMode ? '#4b5563' : '#e5e7eb'}; background:transparent; color:inherit; border-radius:10px; padding:.48rem .82rem; font-weight:700; font-size:.95rem; cursor:pointer;`
const modalOverlayStyles = css`position:fixed; inset:0; background:rgba(0,0,0,.45); display:flex; align-items:center; justify-content:center; z-index:1000; padding:1rem;`
const modalStyles = (darkMode) => css`${cardStyles(darkMode)}; width:100%; max-width:980px; max-height:90vh; overflow:auto;`
const modalHeadStyles = (darkMode) => css`display:flex; align-items:start; justify-content:space-between; padding:1rem; border-bottom:1px solid ${darkMode ? '#404040' : '#e5e7eb'};`
const modalTitleStyles = css`margin:0; font-size:1.45rem; font-weight:800;`
const modalSubStyles = (darkMode) => css`margin:.2rem 0 0; color:${darkMode ? '#9ca3af' : '#6b7280'};`
const closeBtnStyles = (darkMode) => css`border:1px solid ${darkMode ? '#4b5563' : '#d1d5db'}; background:transparent; width:38px; height:38px; border-radius:10px; cursor:pointer;`
const modalBodyStyles = css`padding:1rem;`
const resourceRowStyles = (darkMode) => css`display:flex; align-items:center; justify-content:space-between; gap:.8rem; border:1px solid ${darkMode ? '#404040' : '#e5e7eb'}; border-radius:10px; padding:.8rem; margin-bottom:.6rem;`
const assignmentCardStyles = (darkMode) => css`border:1px solid ${darkMode ? '#404040' : '#e5e7eb'}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`

const courseFilterBarStyles = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.95rem;
  padding: 0.75rem;
  border-radius: 12px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#f9fafb'};
`

const courseFilterSelectStyles = (darkMode) => css`
  min-width: 8.5rem;
  padding: 0.42rem 0.55rem;
  border-radius: 8px;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  background: ${darkMode ? '#262626' : '#fff'};
  color: inherit;
  font: inherit;
  font-size: 0.92rem;
`

const courseFilterSearchStyles = (darkMode) => css`
  flex: 1 1 12rem;
  min-width: min(100%, 12rem);
  padding: 0.42rem 0.65rem 0.42rem 2.15rem;
  border-radius: 8px;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  background: ${darkMode ? '#262626' : '#fff'};
  color: inherit;
  font: inherit;
  font-size: 0.92rem;
`

const courseFilterSearchWrapStyles = css`
  position: relative;
  flex: 1 1 12rem;
  min-width: min(100%, 12rem);
  display: flex;
  align-items: center;
`

function courseMatchesSearch(c, q) {
  const s = String(q || '').trim().toLowerCase()
  if (!s) return true
  const hay = [
    c.course_name,
    c.course_code,
    c.department,
    c.lecturer_name,
    formatStudyYearDisplay(c.course_study_year),
    c.semester,
    formatIntakeDisplay(c),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  return hay.includes(s)
}

function StudentCourses({ darkMode, userEmail, studentId, studentDatabaseId }) {
  const [courses, setCourses] = useState([])
  const [students, setStudents] = useState([])
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [resourceCourse, setResourceCourse] = useState(null)
  const [assignmentCourse, setAssignmentCourse] = useState(null)
  const [detailCourse, setDetailCourse] = useState(null)
  const [courseResources, setCourseResources] = useState([])
  const [resourcesLoading, setResourcesLoading] = useState(false)
  const [resourcesError, setResourcesError] = useState('')
  const [courseSearchQuery, setCourseSearchQuery] = useState('')
  const [fltSemester, setFltSemester] = useState('')
  const [fltStudyYear, setFltStudyYear] = useState('')
  const [demoSubmissions, setDemoSubmissions] = useState([])
  const [demoLoading, setDemoLoading] = useState(false)
  const [demoMsg, setDemoMsg] = useState('')
  const [demoAssignmentEntryId, setDemoAssignmentEntryId] = useState('')
  const demoFileInputRef = useRef(null)

  const studentDownloadHref = (resourceId) =>
    `${apiBase}/backend/course_resources.php?download=1&id=${resourceId}&student_email=${encodeURIComponent(userEmail || '')}`

  useEffect(() => {
    if (!resourceCourse?.id || !userEmail) {
      setCourseResources([])
      setResourcesError('')
      return undefined
    }
    let active = true
    async function loadResources() {
      setResourcesLoading(true)
      setResourcesError('')
      try {
        const res = await fetch(
          `${apiBase}/backend/course_resources.php?course_id=${resourceCourse.id}&student_email=${encodeURIComponent(userEmail)}`,
          { cache: 'no-store' }
        )
        const data = await res.json()
        if (!active) return
        if (data.success) setCourseResources(data.resources || [])
        else setResourcesError(data.error || 'Could not load resources')
      } catch (_) {
        if (active) setResourcesError('Network error')
      } finally {
        if (active) setResourcesLoading(false)
      }
    }
    loadResources()
    return () => {
      active = false
    }
  }, [resourceCourse?.id, userEmail])

  useEffect(() => {
    if (!assignmentCourse?.id || !userEmail) {
      setDemoSubmissions([])
      setDemoMsg('')
      return undefined
    }
    let active = true
    async function loadDemo() {
      setDemoLoading(true)
      setDemoMsg('')
      try {
        const res = await fetch(
          `${apiBase}/backend/demo_assignment_submissions.php?user_email=${encodeURIComponent(userEmail)}&course_id=${assignmentCourse.id}&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const data = await res.json().catch(() => ({}))
        if (!active) return
        if (data.success) setDemoSubmissions(Array.isArray(data.submissions) ? data.submissions : [])
        else setDemoMsg(data.error || 'Could not load demo uploads')
      } catch (_) {
        if (active) setDemoMsg('Could not load demo uploads')
      } finally {
        if (active) setDemoLoading(false)
      }
    }
    loadDemo()
    return () => {
      active = false
    }
  }, [assignmentCourse?.id, userEmail])

  useEffect(() => {
    if (!assignmentCourse) {
      setDemoAssignmentEntryId('')
      return
    }
    const list = assignmentCourse.meta?.assignments || []
    if (list.length === 0) {
      setDemoAssignmentEntryId('')
      return
    }
    setDemoAssignmentEntryId((prev) => {
      if (prev && list.some((a) => String(a.id) === String(prev))) return prev
      return String(list[0].id)
    })
  }, [assignmentCourse])

  const uploadDemoAssignment = async (file) => {
    if (!assignmentCourse?.id || !userEmail || !file) return
    if (!demoAssignmentEntryId) {
      setDemoMsg('Select which assignment you are submitting for.')
      return
    }
    setDemoMsg('')
    setDemoLoading(true)
    try {
      const fd = new FormData()
      fd.append('user_email', userEmail)
      fd.append('course_id', String(assignmentCourse.id))
      fd.append('timetable_entry_id', demoAssignmentEntryId)
      fd.append('file', file)
      const res = await fetch(`${apiBase}/backend/demo_assignment_submissions.php`, {
        method: 'POST',
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        setDemoMsg('Uploaded — your lecturer sees on-time / late / missing in Assignment submission trends (vs this due date).')
        const listRes = await fetch(
          `${apiBase}/backend/demo_assignment_submissions.php?user_email=${encodeURIComponent(userEmail)}&course_id=${assignmentCourse.id}&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const listData = await listRes.json().catch(() => ({}))
        if (listData.success) setDemoSubmissions(Array.isArray(listData.submissions) ? listData.submissions : [])
      } else {
        setDemoMsg(data.error || 'Upload failed')
      }
    } catch (_) {
      setDemoMsg('Upload failed')
    } finally {
      setDemoLoading(false)
      if (demoFileInputRef.current) demoFileInputRef.current.value = ''
    }
  }

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      try {
        const now = new Date()
        const from = new Date(now)
        from.setMonth(from.getMonth() - 6)
        const to = new Date(now)
        to.setMonth(to.getMonth() + 6)
        const [cRes, sRes, tRes] = await Promise.all([
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/timetable.php?from=${encodeURIComponent(toYMD(from))}&to=${encodeURIComponent(toYMD(to))}`, {
            cache: 'no-store',
          }),
        ])
        const cJson = await cRes.json()
        const sJson = await sRes.json()
        const tJson = await tRes.json()
        if (!active) return
        setCourses(cJson.success ? cJson.courses || [] : [])
        setStudents(sJson.success ? sJson.students || [] : [])
        setEntries(tJson.success ? tJson.entries || [] : [])
      } catch (_) {
        if (!active) return
        setCourses([])
        setStudents([])
        setEntries([])
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

  const myCourses = useMemo(() => getCoursesVisibleToStudent(courses, me), [courses, me])

  const filteredMyCourses = useMemo(() => {
    return myCourses.filter((c) => {
      if (!courseMatchesSearch(c, courseSearchQuery)) return false
      if (fltSemester && String(c.semester || '') !== fltSemester) return false
      if (fltStudyYear && String(c.course_study_year || '') !== fltStudyYear) return false
      return true
    })
  }, [myCourses, courseSearchQuery, fltSemester, fltStudyYear])

  const enriched = useMemo(() => {
    const todayYmd = toYMD(new Date())
    return filteredMyCourses.map((c) => {
      const cid = Number(c.id)
      const classes = entries
        .filter((e) => e.entry_type === 'class' && Number(e.course_id) === cid)
        .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
      const assignments = entries
        .filter((e) => e.entry_type === 'event' && Number(e.course_id) === cid)
        .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
        .map((e) => {
          let status = 'Not Started'
          if (e.entry_date < todayYmd) status = 'Completed'
          else if (e.entry_date === todayYmd) status = 'In Progress'
          return {
            id: e.id,
            title: e.event_title || 'Assignment',
            description: e.event_description || 'No description provided.',
            due: e.entry_date,
            dueTime: e.start_time,
            status,
          }
        })
      const completed = assignments.filter((a) => a.status === 'Completed').length
      const progress = assignments.length ? Math.round((completed / assignments.length) * 100) : 0
      const nextClass = classes.find((cl) => cl.entry_date >= todayYmd) || null
      const enrolled = Number(c.enrolled_count) || (Array.isArray(c.students) ? c.students.length : 0)
      return {
        ...c,
        meta: {
          instructor: c.lecturer_name || 'TBA',
          enrolled,
          description: `You are enrolled in ${c.course_name} (${c.course_code}) in ${c.department || 'General'}.`,
          classes,
          assignments,
          completedAssignments: completed,
          nextLecture: nextClass
            ? `${parseYMD(nextClass.entry_date).toLocaleDateString(undefined, { weekday: 'short' })} ${fmtTime(nextClass.start_time)}`
            : 'No upcoming session',
          progress,
        },
      }
    })
  }, [filteredMyCourses, entries])

  const totals = useMemo(() => {
    const totalCourses = enriched.length
    const totalCredits = enriched.reduce((a, c) => a + (Number(c.credits) || 0), 0)
    const avgProgress = totalCourses ? Math.round(enriched.reduce((a, c) => a + c.meta.progress, 0) / totalCourses) : 0
    const completed = enriched.reduce((a, c) => a + c.meta.completedAssignments, 0)
    const totalAssignments = enriched.reduce((a, c) => a + c.meta.assignments.length, 0)
    return { totalCourses, totalCredits, avgProgress, completed, totalAssignments }
  }, [enriched])

  const filtersActive =
    Boolean(courseSearchQuery.trim()) || Boolean(fltSemester) || Boolean(fltStudyYear)

  const clearCourseFilters = () => {
    setCourseSearchQuery('')
    setFltSemester('')
    setFltStudyYear('')
  }

  const emptyListMessage =
    myCourses.length === 0
      ? 'No enrolled courses found.'
      : filtersActive
        ? 'No courses match your filters.'
        : 'No enrolled courses found.'

  return (
    <div css={wrapStyles}>
      <h1 css={titleStyles}>My Courses</h1>
      <p css={subtitleStyles(darkMode)}>Modules you take, timetable sessions, and assignment due dates</p>

      <div css={kpiGridStyles}>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Total Courses</p>
          <p css={kpiValueStyles}>{totals.totalCourses}</p>
          <p css={kpiSubStyles(darkMode)}>Active enrollments</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Total Credits</p>
          <p css={kpiValueStyles}>{totals.totalCredits}</p>
          <p css={kpiSubStyles(darkMode)}>Credit hours</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Timeline</p>
          <p css={kpiValueStyles}>{totals.avgProgress}%</p>
          <p css={kpiSubStyles(darkMode)}>Assignments completed</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Due dates</p>
          <p css={kpiValueStyles}>
            {totals.completed}/{totals.totalAssignments}
          </p>
          <p css={kpiSubStyles(darkMode)}>Completed / total</p>
        </div>
      </div>

      {!loading && myCourses.length > 0 ? (
        <div css={courseFilterBarStyles(darkMode)} role="search" aria-label="Filter your courses">
          <span css={subtitleStyles(darkMode)} style={{ margin: 0, fontWeight: 700 }}>
            Filters
          </span>
          <div css={courseFilterSearchWrapStyles}>
            <HiOutlineMagnifyingGlass
              aria-hidden
              style={{
                position: 'absolute',
                left: '0.55rem',
                width: '1.1rem',
                height: '1.1rem',
                color: darkMode ? '#9ca3af' : '#6b7280',
                pointerEvents: 'none',
              }}
            />
            <input
              type="search"
              css={courseFilterSearchStyles(darkMode)}
              placeholder="Search name, code, department…"
              value={courseSearchQuery}
              onChange={(e) => setCourseSearchQuery(e.target.value)}
              aria-label="Search courses"
            />
          </div>
          <select
            css={courseFilterSelectStyles(darkMode)}
            value={fltSemester}
            onChange={(e) => setFltSemester(e.target.value)}
            aria-label="Semester"
          >
            {SEMESTER_FORM_OPTIONS.map((o) => (
              <option key={o.value || 'all-s'} value={o.value}>
                {o.value ? o.label : 'Any semester'}
              </option>
            ))}
          </select>
          <select
            css={courseFilterSelectStyles(darkMode)}
            value={fltStudyYear}
            onChange={(e) => setFltStudyYear(e.target.value)}
            aria-label="Study year"
          >
            {COURSE_STUDY_YEAR_OPTIONS.map((o) => (
              <option key={o.value || 'all-y'} value={o.value}>
                {o.value ? o.label : 'Any study year'}
              </option>
            ))}
          </select>
          {filtersActive ? (
            <button type="button" css={ghostBtnStyles(darkMode)} onClick={clearCourseFilters}>
              Clear filters
            </button>
          ) : null}
        </div>
      ) : null}

      <section css={sectionStyles(darkMode)}>
        <h2 css={sectionTitleStyles}>
          <HiOutlineBookOpen style={{ color: ACCENT, width: 24, height: 24 }} />
          Active Courses
        </h2>
        {loading ? (
          <p>Loading courses...</p>
        ) : enriched.length === 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.55rem' }}>
            <p style={{ margin: 0 }}>{emptyListMessage}</p>
            {filtersActive && myCourses.length > 0 ? (
              <button type="button" css={ghostBtnStyles(darkMode)} onClick={clearCourseFilters}>
                Reset filters
              </button>
            ) : null}
          </div>
        ) : (
          enriched.map((c) => (
            <article key={c.id} css={courseCardStyles(darkMode)}>
              <div css={chipsRowStyles}>
                <span css={chipStyles(darkMode)}>{c.course_code}</span>
                <span css={chipStyles(darkMode)}>{Number(c.credits) || 0} Credits</span>
                {c.semester ? <span css={chipStyles(darkMode)}>{c.semester}</span> : null}
                {c.course_study_year ? (
                  <span css={chipStyles(darkMode)}>{formatStudyYearDisplay(c.course_study_year)}</span>
                ) : null}
                <span css={activeChipStyles}>Active</span>
              </div>
              <h3 css={courseNameStyles}>{c.course_name}</h3>
              <p css={subtitleStyles(darkMode)} style={{ marginBottom: '.4rem' }}>
                {c.department || 'General'}
              </p>
              <div css={courseMetaStyles(darkMode)}>
                <span>
                  <HiOutlineUserGroup /> Students: <strong>{c.meta.enrolled}</strong>
                </span>
                <span>
                  <HiOutlineClock /> Next: <strong>{c.meta.nextLecture}</strong>
                </span>
                <span>
                  <HiOutlineDocumentText /> Assignments: <strong>
                    {c.meta.completedAssignments}/{c.meta.assignments.length}
                  </strong>{' '}
                  done
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.3rem' }}>
                <span css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  Assignment timeline
                </span>
                <strong>{c.meta.progress}%</strong>
              </div>
              <div css={progressTrackStyles(darkMode)}>
                <div css={progressFillStyles(c.meta.progress)} />
              </div>
              <div css={btnRowStyles}>
                <button type="button" css={primaryBtnStyles} onClick={() => setDetailCourse(c)}>
                  View Course
                </button>
                <button type="button" css={ghostBtnStyles(darkMode)} onClick={() => setResourceCourse(c)}>
                  Resources
                </button>
                <button type="button" css={ghostBtnStyles(darkMode)} onClick={() => setAssignmentCourse(c)}>
                  Assignments
                </button>
              </div>
            </article>
          ))
        )}
      </section>

      {resourceCourse ? (
        <div css={modalOverlayStyles} onClick={() => setResourceCourse(null)}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeadStyles(darkMode)}>
              <div>
                <h3 css={modalTitleStyles}>Course Resources</h3>
                <p css={modalSubStyles(darkMode)}>Materials for {resourceCourse.course_name}</p>
              </div>
              <button type="button" css={closeBtnStyles(darkMode)} onClick={() => setResourceCourse(null)}>
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              {resourcesError ? (
                <p style={{ color: '#dc2626', margin: '0 0 .75rem', fontSize: '.9rem' }}>{resourcesError}</p>
              ) : null}
              {resourcesLoading ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>Loading resources…</p>
              ) : courseResources.length === 0 ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  No files uploaded for this course yet.
                </p>
              ) : (
                courseResources.map((r) => (
                  <div key={r.id} css={resourceRowStyles(darkMode)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', minWidth: 0 }}>
                      <span
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 8,
                          background: '#eef2ff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: ACCENT,
                          flexShrink: 0,
                        }}
                      >
                        <HiOutlineDocumentText />
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <strong style={{ wordBreak: 'break-word' }}>{r.original_filename}</strong>
                        <p css={subtitleStyles(darkMode)} style={{ margin: '.1rem 0 0' }}>
                          {formatBytes(r.file_size)}
                          {r.created_at
                            ? ` · ${new Date(r.created_at.replace(' ', 'T')).toLocaleString(undefined, {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                              })}`
                            : ''}
                        </p>
                      </div>
                    </div>
                    <a href={studentDownloadHref(r.id)} css={ghostBtnStyles(darkMode)} style={{ textDecoration: 'none', flexShrink: 0 }}>
                      <HiOutlineArrowDownTray /> Download
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}

      {assignmentCourse ? (
        <div css={modalOverlayStyles} onClick={() => setAssignmentCourse(null)}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeadStyles(darkMode)}>
              <div>
                <h3 css={modalTitleStyles}>Course Assignments</h3>
                <p css={modalSubStyles(darkMode)}>Due dates for {assignmentCourse.course_name}</p>
              </div>
              <button type="button" css={closeBtnStyles(darkMode)} onClick={() => setAssignmentCourse(null)}>
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <div css={assignmentCardStyles(darkMode)} style={{ marginBottom: '1rem' }}>
                <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <HiOutlineArrowUpTray aria-hidden />
                  Demo assignment upload
                </h4>
                <p css={subtitleStyles(darkMode)} style={{ margin: '0 0 0.55rem' }}>
                  Pick the assignment, then upload a file. Your module leader sees <strong>on-time</strong> (before/on
                  deadline), <strong>late</strong> (after), and <strong>missing</strong> (no file) on{' '}
                  <strong>Assignment submission trends</strong>.
                </p>
                <label htmlFor="demo-assignment-pick" css={subtitleStyles(darkMode)} style={{ display: 'block', margin: '0 0 0.35rem', fontWeight: 700 }}>
                  Which assignment is this file for?
                </label>
                <select
                  id="demo-assignment-pick"
                  value={demoAssignmentEntryId}
                  onChange={(e) => setDemoAssignmentEntryId(e.target.value)}
                  disabled={demoLoading || !assignmentCourse.meta.assignments?.length}
                  style={{
                    width: '100%',
                    maxWidth: '28rem',
                    marginBottom: '0.55rem',
                    padding: '0.45rem 0.5rem',
                    borderRadius: 8,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: darkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                    background: darkMode ? '#1f1f1f' : '#fff',
                    color: 'inherit',
                  }}
                >
                  {assignmentCourse.meta.assignments.map((a) => (
                    <option key={a.id} value={String(a.id)}>
                      {a.title} — due{' '}
                      {parseYMD(a.due).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      {a.dueTime ? ` · ${fmtTime(a.dueTime)}` : ''}
                    </option>
                  ))}
                </select>
                <input
                  ref={demoFileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.zip,.png,.jpg,.jpeg"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    if (f) uploadDemoAssignment(f)
                  }}
                />
                <button
                  type="button"
                  css={primaryBtnStyles}
                  disabled={demoLoading || !demoAssignmentEntryId}
                  onClick={() => demoFileInputRef.current?.click()}
                >
                  {demoLoading ? 'Working…' : 'Choose file to upload'}
                </button>
                {demoMsg ? (
                  <p css={subtitleStyles(darkMode)} style={{ margin: '0.5rem 0 0' }}>
                    {demoMsg}
                  </p>
                ) : null}
                {demoSubmissions.length > 0 ? (
                  <div style={{ marginTop: '0.65rem' }}>
                    <p css={subtitleStyles(darkMode)} style={{ margin: '0 0 0.35rem', fontWeight: 700 }}>
                      Your recent demo uploads
                    </p>
                    <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.9rem' }}>
                      {demoSubmissions.slice(0, 8).map((s) => (
                        <li key={s.id} css={subtitleStyles(darkMode)}>
                          {s.original_filename}{' '}
                          <span style={{ opacity: 0.85 }}>
                            ({formatBytes(s.file_size)}
                            {s.uploaded_at
                              ? ` · ${new Date(String(s.uploaded_at).replace(' ', 'T')).toLocaleString(undefined, {
                                  dateStyle: 'short',
                                  timeStyle: 'short',
                                })}`
                              : ''}
                            )
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              {assignmentCourse.meta.assignments.length === 0 ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  No assignment due dates found for this course yet.
                </p>
              ) : (
                assignmentCourse.meta.assignments.map((a, i) => (
                  <div key={`${a.title}-${i}`} css={assignmentCardStyles(darkMode)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
                      <h4 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{a.title}</h4>
                      <span
                        css={chipStyles(darkMode)}
                        style={{
                          color:
                            a.status === 'Completed' ? '#059669' : a.status === 'In Progress' ? '#ca8a04' : '#2563eb',
                          borderColor:
                            a.status === 'Completed' ? '#86efac' : a.status === 'In Progress' ? '#fde68a' : '#bfdbfe',
                          background:
                            a.status === 'Completed' ? '#ecfdf5' : a.status === 'In Progress' ? '#fffbeb' : '#eff6ff',
                        }}
                      >
                        {a.status}
                      </span>
                    </div>
                    <p css={subtitleStyles(darkMode)} style={{ marginTop: '.3rem' }}>
                      {a.description}
                    </p>
                    <p css={subtitleStyles(darkMode)} style={{ marginTop: '.15rem' }}>
                      Due: {parseYMD(a.due).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      {a.dueTime ? ` · Time: ${fmtTime(a.dueTime)}` : ''}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}

      {detailCourse ? (
        <div css={modalOverlayStyles} onClick={() => setDetailCourse(null)}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeadStyles(darkMode)}>
              <div>
                <h3 css={modalTitleStyles}>{detailCourse.course_name}</h3>
                <p css={modalSubStyles(darkMode)}>
                  {detailCourse.course_code} · {Number(detailCourse.credits) || 0} Credits · {detailCourse.department || 'General'}
                  <br />
                  <span style={{ fontSize: '0.92rem' }}>
                    Intake {formatIntakeDisplay(detailCourse)}
                    {detailCourse.semester ? ` · ${detailCourse.semester}` : ''}
                    {detailCourse.course_study_year
                      ? ` · ${formatStudyYearDisplay(detailCourse.course_study_year)}`
                      : ''}
                  </span>
                </p>
              </div>
              <button type="button" css={closeBtnStyles(darkMode)} onClick={() => setDetailCourse(null)}>
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <h4 style={{ margin: 0, fontSize: '1.8rem' }}>Overview</h4>
              <p css={subtitleStyles(darkMode)}>{detailCourse.meta.description}</p>
              <p css={subtitleStyles(darkMode)} style={{ marginTop: '.35rem' }}>
                <strong>Instructor:</strong> {detailCourse.meta.instructor}
              </p>
              <h4 style={{ margin: '0.75rem 0 .45rem 0', fontSize: '1.8rem' }}>Scheduled Sessions</h4>
              <div>
                {detailCourse.meta.classes.length === 0 ? (
                  <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                    No scheduled classes found in timetable.
                  </p>
                ) : (
                  detailCourse.meta.classes.map((cl, i) => (
                    <div
                      key={`${cl.id}-${i}`}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '28px 1fr',
                        gap: '.5rem',
                        padding: '.5rem .6rem',
                        borderBottom: `1px solid ${darkMode ? '#303030' : '#f3f4f6'}`,
                      }}
                    >
                      <strong style={{ color: ACCENT }}>{i + 1}.</strong>
                      <span>
                        {parseYMD(cl.entry_date).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} ·{' '}
                        {fmtTime(cl.start_time)}-{fmtTime(cl.end_time)}
                        {cl.room_location ? ` · ${cl.room_location}` : ''}
                      </span>
                    </div>
                  ))
                )}
              </div>
              <h4 style={{ margin: '.8rem 0 .45rem 0', fontSize: '1.8rem' }}>Course Information</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
                <div css={assignmentCardStyles(darkMode)}>
                  <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                    Enrolled students
                  </p>
                  <strong>{detailCourse.meta.enrolled}</strong>
                </div>
                <div css={assignmentCardStyles(darkMode)}>
                  <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                    Next session
                  </p>
                  <strong>{detailCourse.meta.nextLecture}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentCourses
