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
  HiOutlineTrash,
  HiOutlineArrowUpTray,
  HiOutlineEnvelope,
} from 'react-icons/hi2'

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
const dangerBtnStyles = (darkMode) => css`border:1px solid ${darkMode ? '#7f1d1d' : '#fecaca'}; color:#dc2626; background:${darkMode ? 'rgba(127,29,29,0.22)' : '#fef2f2'}; border-radius:10px; padding:.4rem .65rem; font-weight:700; font-size:.85rem; cursor:pointer; display:inline-flex; align-items:center; gap:.35rem;`
const uploadToolbarStyles = (darkMode) => css`display:flex; flex-wrap:wrap; align-items:center; gap:.55rem; margin-bottom:1rem; padding:.75rem; border-radius:10px; border:1px dashed ${darkMode ? '#525252' : '#d1d5db'}; background:${darkMode ? '#1f1f1f' : '#f9fafb'};`
const assignmentCardStyles = (darkMode) => css`border:1px solid ${darkMode ? '#404040' : '#e5e7eb'}; border-radius:10px; padding:.8rem; margin-bottom:.7rem;`
const enrolledTriggerStyles = (darkMode) => css`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
  max-width: 100%;
  &:hover {
    color: ${ACCENT};
  }
  &:focus-visible {
    outline: 2px solid ${ACCENT};
    outline-offset: 2px;
  }
`
const enrolledListRowStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  margin-bottom: 0.55rem;
`
const enrolledModalStyles = (darkMode) => css`
  ${cardStyles(darkMode)};
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow: auto;
`

function LecturerCourses({ darkMode, userEmail }) {
  const [courses, setCourses] = useState([])
  const [lecturer, setLecturer] = useState(null)
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [resourceCourse, setResourceCourse] = useState(null)
  const [assignmentCourse, setAssignmentCourse] = useState(null)
  const [detailCourse, setDetailCourse] = useState(null)
  const [courseResources, setCourseResources] = useState([])
  const [resourcesLoading, setResourcesLoading] = useState(false)
  const [resourcesError, setResourcesError] = useState('')
  const [uploadReport, setUploadReport] = useState(null)
  const [uploadBusy, setUploadBusy] = useState(false)
  const fileInputRef = useRef(null)
  const [enrolledModalCourse, setEnrolledModalCourse] = useState(null)

  const openEnrolledModal = (course, closeDetail) => {
    if (closeDetail) setDetailCourse(null)
    setEnrolledModalCourse(course)
  }

  const enrolledListForCourse = (course) =>
    Array.isArray(course?.students) ? [...course.students].sort((a, b) => String(a.full_name || '').localeCompare(String(b.full_name || ''))) : []

  const downloadHref = (resourceId) =>
    `${apiBase}/backend/course_resources.php?download=1&id=${resourceId}&lecturer_email=${encodeURIComponent(userEmail || '')}`

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
          `${apiBase}/backend/course_resources.php?course_id=${resourceCourse.id}&lecturer_email=${encodeURIComponent(userEmail)}`,
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

  const handleResourceUpload = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !resourceCourse?.id || !userEmail) return
    setUploadBusy(true)
    setResourcesError('')
    setUploadReport(null)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('course_id', String(resourceCourse.id))
      fd.append('lecturer_email', userEmail)
      const res = await fetch(`${apiBase}/backend/course_resources.php`, { method: 'POST', body: fd })
      const data = await res.json()
      if (!data.success) {
        setResourcesError(data.error || 'Upload failed')
        return
      }
      const stats = data.notifications || {}
      setUploadReport({
        inApp: Number(stats.in_app_created) || 0,
      })
      const listRes = await fetch(
        `${apiBase}/backend/course_resources.php?course_id=${resourceCourse.id}&lecturer_email=${encodeURIComponent(userEmail)}`,
        { cache: 'no-store' }
      )
      const listJson = await listRes.json()
      if (listJson.success) setCourseResources(listJson.resources || [])
    } catch (_) {
      setResourcesError('Upload failed')
    } finally {
      setUploadBusy(false)
    }
  }

  const handleDeleteResource = async (id) => {
    if (!userEmail || !window.confirm('Remove this file for all students?')) return
    setResourcesError('')
    try {
      const res = await fetch(`${apiBase}/backend/course_resources.php`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, lecturer_email: userEmail }),
      })
      const data = await res.json()
      if (!data.success) {
        setResourcesError(data.error || 'Delete failed')
        return
      }
      setCourseResources((prev) => prev.filter((r) => r.id !== id))
    } catch (_) {
      setResourcesError('Delete failed')
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
        const [lRes, cRes, tRes] = await Promise.all([
          fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(
            `${apiBase}/backend/timetable.php?from=${encodeURIComponent(toYMD(from))}&to=${encodeURIComponent(toYMD(to))}`,
            { cache: 'no-store' }
          ),
        ])
        const lJson = await lRes.json()
        const cJson = await cRes.json()
        const tJson = await tRes.json()
        if (!active) return
        const allLecturers = lJson.success ? lJson.lecturers || [] : []
        const me =
          allLecturers.find(
            (l) => String(l.email || '').trim().toLowerCase() === String(userEmail || '').trim().toLowerCase()
          ) || null
        setLecturer(me)
        setCourses(cJson.success ? cJson.courses || [] : [])
        setEntries(tJson.success ? tJson.entries || [] : [])
      } catch (_) {
        if (!active) return
        setLecturer(null)
        setCourses([])
        setEntries([])
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [userEmail])

  const myCourses = useMemo(() => {
    if (!lecturer) return []
    const lid = String(lecturer.lecturer_id || '').trim()
    return courses.filter((c) => String(c.lecturer_id || '').trim() === lid)
  }, [courses, lecturer])

  const enriched = useMemo(() => {
    const todayYmd = toYMD(new Date())
    return myCourses.map((c) => {
      const cid = Number(c.id)
      const classes = entries
        .filter((e) => e.entry_type === 'class' && Number(e.course_id) === cid)
        .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
      const assignments = entries
        .filter((e) => e.entry_type === 'event' && Number(e.course_id) === cid)
        .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
        .map((e) => {
          let status = 'Upcoming'
          if (e.entry_date < todayYmd) status = 'Past due'
          else if (e.entry_date === todayYmd) status = 'Due today'
          return {
            id: e.id,
            title: e.event_title || 'Assignment',
            description: e.event_description || 'No description provided.',
            due: e.entry_date,
            dueTime: e.start_time,
            status,
          }
        })
      const pastDue = assignments.filter((a) => a.status === 'Past due').length
      const progress = assignments.length ? Math.round((pastDue / assignments.length) * 100) : 0
      const nextClass = classes.find((cl) => cl.entry_date >= todayYmd) || null
      const enrolled = Number(c.enrolled_count) || (Array.isArray(c.students) ? c.students.length : 0)
      return {
        ...c,
        meta: {
          instructor: c.lecturer_name || 'TBA',
          enrolled,
          description: `You teach ${c.course_name} (${c.course_code}) in ${c.department || 'General'}.`,
          classes,
          assignments,
          completedAssignments: pastDue,
          nextLecture: nextClass
            ? `${parseYMD(nextClass.entry_date).toLocaleDateString(undefined, { weekday: 'short' })} ${fmtTime(nextClass.start_time)}`
            : 'No upcoming session',
          progress,
        },
      }
    })
  }, [myCourses, entries])

  const totals = useMemo(() => {
    const totalCourses = enriched.length
    const totalCredits = enriched.reduce((a, c) => a + (Number(c.credits) || 0), 0)
    const avgProgress = totalCourses ? Math.round(enriched.reduce((a, c) => a + c.meta.progress, 0) / totalCourses) : 0
    const pastDue = enriched.reduce((a, c) => a + c.meta.completedAssignments, 0)
    const totalAssignments = enriched.reduce((a, c) => a + c.meta.assignments.length, 0)
    return { totalCourses, totalCredits, avgProgress, pastDue, totalAssignments }
  }, [enriched])

  const emptyMessage = !lecturer
    ? 'We could not match your account to a lecturer profile. Check that your email matches the staff record.'
    : 'No courses are assigned to you yet.'

  return (
    <div css={wrapStyles}>
      <h1 css={titleStyles}>My Courses</h1>
      <p css={subtitleStyles(darkMode)}>Modules you teach, timetable sessions, and assignment due dates</p>

      <div css={kpiGridStyles}>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Total Courses</p>
          <p css={kpiValueStyles}>{totals.totalCourses}</p>
          <p css={kpiSubStyles(darkMode)}>Your modules</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Total Credits</p>
          <p css={kpiValueStyles}>{totals.totalCredits}</p>
          <p css={kpiSubStyles(darkMode)}>Teaching load</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Timeline</p>
          <p css={kpiValueStyles}>{totals.avgProgress}%</p>
          <p css={kpiSubStyles(darkMode)}>Past due dates</p>
        </div>
        <div css={kpiCardStyles(darkMode)}>
          <p css={kpiLabelStyles(darkMode)}>Due dates</p>
          <p css={kpiValueStyles}>
            {totals.pastDue}/{totals.totalAssignments}
          </p>
          <p css={kpiSubStyles(darkMode)}>Past / total</p>
        </div>
      </div>

      <section css={sectionStyles(darkMode)}>
        <h2 css={sectionTitleStyles}>
          <HiOutlineBookOpen style={{ color: ACCENT, width: 24, height: 24 }} />
          Active Courses
        </h2>
        {loading ? (
          <p>Loading courses...</p>
        ) : enriched.length === 0 ? (
          <p>{emptyMessage}</p>
        ) : (
          enriched.map((c) => (
            <article key={c.id} css={courseCardStyles(darkMode)}>
              <div css={chipsRowStyles}>
                <span css={chipStyles(darkMode)}>{c.course_code}</span>
                <span css={chipStyles(darkMode)}>{Number(c.credits) || 0} Credits</span>
                <span css={activeChipStyles}>Active</span>
              </div>
              <h3 css={courseNameStyles}>{c.course_name}</h3>
              <p css={subtitleStyles(darkMode)} style={{ marginBottom: '.4rem' }}>
                {c.department || 'General'}
              </p>
              <div css={courseMetaStyles(darkMode)}>
                <button
                  type="button"
                  css={enrolledTriggerStyles(darkMode)}
                  onClick={() => openEnrolledModal(c, false)}
                  title="View enrolled students"
                >
                  <HiOutlineUserGroup aria-hidden /> Students: <strong>{c.meta.enrolled}</strong>
                </button>
                <span>
                  <HiOutlineClock /> Next: <strong>{c.meta.nextLecture}</strong>
                </span>
                <span>
                  <HiOutlineDocumentText /> Due dates: <strong>
                    {c.meta.completedAssignments}/{c.meta.assignments.length}
                  </strong>{' '}
                  past
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
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.png,.jpg,.jpeg,.gif,.webp"
                css={css`display:none;`}
                onChange={handleResourceUpload}
              />
              <div css={uploadToolbarStyles(darkMode)}>
                <button
                  type="button"
                  css={primaryBtnStyles}
                  disabled={uploadBusy}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <HiOutlineArrowUpTray style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                  {uploadBusy ? 'Uploading…' : 'Upload file'}
                </button>
                <span css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  PDF, Office, images, zip — max 20 MB
                </span>
              </div>
              {resourcesError ? (
                <p style={{ color: '#dc2626', margin: '0 0 .75rem', fontSize: '.9rem' }}>{resourcesError}</p>
              ) : null}
              {uploadReport ? (
                <div
                  css={css`
                    border: 1px solid #86efac;
                    background: #ecfdf5;
                    color: #065f46;
                    border-radius: 10px;
                    padding: 0.6rem 0.7rem;
                    margin: 0 0 0.75rem;
                    font-size: 0.9rem;
                  `}
                >
                  Upload complete. In-app notifications created: <strong>{uploadReport.inApp}</strong>.
                </div>
              ) : null}
              {resourcesLoading ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  Loading resources…
                </p>
              ) : courseResources.length === 0 ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  No files yet. Upload materials for students to download.
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.45rem', flexShrink: 0 }}>
                      <a href={downloadHref(r.id)} css={ghostBtnStyles(darkMode)} style={{ textDecoration: 'none' }}>
                        <HiOutlineArrowDownTray /> Download
                      </a>
                      <button type="button" css={dangerBtnStyles(darkMode)} onClick={() => handleDeleteResource(r.id)}>
                        <HiOutlineTrash /> Remove
                      </button>
                    </div>
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
              {assignmentCourse.meta.assignments.length === 0 ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  No assignment due dates found for this course yet. Add them from the Calendar tab.
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
                            a.status === 'Past due' ? '#059669' : a.status === 'Due today' ? '#ca8a04' : '#2563eb',
                          borderColor:
                            a.status === 'Past due' ? '#86efac' : a.status === 'Due today' ? '#fde68a' : '#bfdbfe',
                          background:
                            a.status === 'Past due' ? '#ecfdf5' : a.status === 'Due today' ? '#fffbeb' : '#eff6ff',
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

      {enrolledModalCourse ? (
        <div css={modalOverlayStyles} onClick={() => setEnrolledModalCourse(null)}>
          <div css={enrolledModalStyles(darkMode)} onClick={(e) => e.stopPropagation()} role="dialog" aria-labelledby="enrolled-modal-title">
            <div css={modalHeadStyles(darkMode)}>
              <div>
                <h3 id="enrolled-modal-title" css={modalTitleStyles}>
                  Enrolled students
                </h3>
                <p css={modalSubStyles(darkMode)}>
                  {enrolledModalCourse.course_name} ({enrolledModalCourse.course_code})
                </p>
              </div>
              <button type="button" css={closeBtnStyles(darkMode)} onClick={() => setEnrolledModalCourse(null)} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              {enrolledListForCourse(enrolledModalCourse).length === 0 ? (
                <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                  No students are enrolled in this module yet.
                </p>
              ) : (
                enrolledListForCourse(enrolledModalCourse).map((s) => (
                  <div key={s.id} css={enrolledListRowStyles(darkMode)}>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{s.full_name || '—'}</strong>
                    <p css={subtitleStyles(darkMode)} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                      <HiOutlineEnvelope style={{ flexShrink: 0, opacity: 0.85 }} aria-hidden />
                      {s.email && String(s.email).trim() ? (
                        <a
                          href={`mailto:${String(s.email).trim()}`}
                          css={css`
                            color: ${ACCENT};
                            text-decoration: none;
                            word-break: break-all;
                            &:hover {
                              text-decoration: underline;
                            }
                          `}
                        >
                          {String(s.email).trim()}
                        </a>
                      ) : (
                        <span>—</span>
                      )}
                    </p>
                    {s.student_id ? (
                      <p css={subtitleStyles(darkMode)} style={{ margin: '0.35rem 0 0', fontSize: '0.82rem' }}>
                        ID: {s.student_id}
                      </p>
                    ) : null}
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
                </p>
              </div>
              <button type="button" css={closeBtnStyles(darkMode)} onClick={() => setDetailCourse(null)}>
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <h4 style={{ margin: 0, fontSize: '1.8rem' }}>Overview</h4>
              <p css={subtitleStyles(darkMode)}>{detailCourse.meta.description}</p>
              <h4 style={{ margin: '0 0 .45rem 0', fontSize: '1.8rem' }}>Scheduled Sessions</h4>
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
                <button
                  type="button"
                  css={[
                    assignmentCardStyles(darkMode),
                    css`
                      cursor: pointer;
                      text-align: left;
                      font: inherit;
                      color: inherit;
                      transition: border-color 0.15s, box-shadow 0.15s;
                      &:hover {
                        border-color: ${ACCENT};
                        box-shadow: 0 0 0 1px ${ACCENT}33;
                      }
                    `,
                  ]}
                  onClick={() => openEnrolledModal(detailCourse, true)}
                >
                  <p css={subtitleStyles(darkMode)} style={{ margin: 0 }}>
                    Enrolled students
                  </p>
                  <strong>{detailCourse.meta.enrolled}</strong>
                  <p css={subtitleStyles(darkMode)} style={{ margin: '0.35rem 0 0', fontSize: '0.82rem' }}>
                    Click to view names and emails
                  </p>
                </button>
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

export default LecturerCourses
