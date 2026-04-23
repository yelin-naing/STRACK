/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import {
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineUsers,
  HiOutlineXCircle,
} from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'

const STATUS = {
  present: 'Present',
  late: 'Late',
  absent: 'Absent',
}

function todaysYmd() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function getAttendanceRangeYmd() {
  const now = new Date()
  const from = new Date(now)
  const to = new Date(now)
  from.setDate(now.getDate() - 365)
  to.setDate(now.getDate() + 365)
  const toYmd = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  return { from: toYmd(from), to: toYmd(to) }
}

function fmtHm(value) {
  const txt = String(value || '')
  const parts = txt.split(':')
  if (parts.length < 2) return txt
  return `${parts[0]}:${parts[1]}`
}

function initials(name) {
  const text = String(name || '').trim()
  if (!text) return 'S'
  const parts = text.split(/\s+/)
  if (parts.length < 2) return text.slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function avatarColor(seed) {
  const palette = ['#6366f1', '#8b5cf6', '#0ea5e9', '#14b8a6', '#f97316', '#ec4899']
  const str = String(seed || '')
  let hash = 0
  for (let i = 0; i < str.length; i += 1) hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  return palette[hash % palette.length]
}

const wrapStyles = css`
  width: 100%;
`

const headingRowStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const titleStyles = css`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
`

const subtitleStyles = (darkMode) => css`
  margin: 0.25rem 0 0;
  font-size: 1.1rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const iconBtnStyles = (darkMode) => css`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  color: ${ACCENT};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const panelStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 1rem 1.1rem;
  margin-bottom: 1rem;
`

const panelTitleStyles = css`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
`

const panelSubStyles = (darkMode) => css`
  margin: 0.25rem 0 0.75rem;
  font-size: 1rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const selectStyles = (darkMode) => css`
  width: 100%;
  border: 1px solid ${darkMode ? '#404040' : '#d1d5db'};
  border-radius: 10px;
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  color: inherit;
  padding: 0.7rem 0.8rem;
  font-size: 1rem;
  font-family: inherit;
`

const filterGridStyles = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const todayChipStyles = (darkMode) => css`
  margin-top: 0.75rem;
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  border-radius: 8px;
  background: ${darkMode ? '#1f2937' : '#eef2f7'};
  color: ${darkMode ? '#d1d5db' : '#1f2937'};
  padding: 0.55rem 0.7rem;
  font-size: 0.95rem;
  font-weight: 700;
`

const studentsHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
`

const saveBtnStyles = css`
  border: none;
  border-radius: 8px;
  background: ${ACCENT};
  color: #fff;
  padding: 0.55rem 0.95rem;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
`

const mutedStyles = (darkMode) => css`
  margin: 0.2rem 0 0;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 1rem;
`

const studentRowStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.65rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.8rem;
  align-items: center;
`

const studentLeftStyles = css`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
`

const avatarStyles = (bg) => css`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: ${bg};
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const studentNameStyles = css`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
`

const studentIdStyles = (darkMode) => css`
  margin: 0.1rem 0 0;
  font-size: 0.92rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const actionsStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
`

const statusPillStyles = (darkMode, status) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  border-radius: 7px;
  padding: 0.25rem 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${status === 'present' ? '#059669' : status === 'late' ? '#d97706' : status === 'absent' ? '#dc2626' : darkMode ? '#9ca3af' : '#6b7280'};
  background: ${status === 'present'
    ? 'rgba(16,185,129,0.12)'
    : status === 'late'
      ? 'rgba(245,158,11,0.12)'
      : status === 'absent'
        ? 'rgba(239,68,68,0.12)'
        : 'transparent'};
`

const actionBtnStyles = (darkMode, active) => css`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid ${active ? ACCENT : darkMode ? '#4b5563' : '#d1d5db'};
  background: ${active ? (darkMode ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.1)') : 'transparent'};
  color: ${active ? ACCENT : darkMode ? '#d1d5db' : '#4b5563'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const statsGridStyles = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const statCardStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 0.9rem;
`

const statTitleStyles = css`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`

const statValueStyles = css`
  margin: 0.8rem 0 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
`

const emptyStateStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  background: ${darkMode ? '#262626' : '#fff'};
  min-height: 220px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 1rem;
`

function LecturerAttendance({ darkMode, userEmail }) {
  const [lecturerId, setLecturerId] = useState('')
  const [lecturerAccountId, setLecturerAccountId] = useState('')
  const [courses, setCourses] = useState([])
  const [dayClasses, setDayClasses] = useState([])
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const [selectedClassId, setSelectedClassId] = useState('')
  const [marks, setMarks] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      try {
        const [lectRes, courseRes] = await Promise.all([
          fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        ])
        const lectData = await lectRes.json()
        const courseData = await courseRes.json()
        if (!active) return
        const allLecturers = lectData.success ? lectData.lecturers || [] : []
        const me = allLecturers.find(
          (l) => String(l.email || '').trim().toLowerCase() === String(userEmail || '').trim().toLowerCase()
        )
        const lid = String(me?.lecturer_id || '')
        const aid = String(me?.id || '')
        setLecturerId(lid)
        setLecturerAccountId(aid)
        const allCourses = courseData.success ? courseData.courses || [] : []
        const mine = allCourses.filter((c) => String(c.lecturer_id || '').trim() === lid)
        setCourses(mine)
      } catch (_) {
        if (!active) return
        setLecturerId('')
        setLecturerAccountId('')
        setCourses([])
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [userEmail])

  useEffect(() => {
    let active = true
    async function loadDayClasses() {
      if (!lecturerAccountId && courses.length === 0) {
        setDayClasses([])
        setSelectedClassId('')
        return
      }
      try {
        const range = getAttendanceRangeYmd()
        const res = await fetch(
          `${apiBase}/backend/timetable.php?from=${encodeURIComponent(range.from)}&to=${encodeURIComponent(range.to)}&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const data = await res.json()
        if (!active) return
        const entries = data.success ? data.entries || [] : []
        const myCourseIds = new Set(courses.map((course) => String(course.id)))
        const mine = entries.filter((entry) => {
          if (entry.entry_type !== 'class') return false
          const assignedByLecturer = Array.isArray(entry.lecturers)
            ? entry.lecturers.some((l) => Number(l.id) === Number(lecturerAccountId))
            : false
          const assignedByCourse = myCourseIds.has(String(entry.course_id || ''))
          return assignedByLecturer || assignedByCourse
        })
        setDayClasses(mine)
      } catch (_) {
        if (!active) return
        setDayClasses([])
      }
    }
    loadDayClasses()
    return () => {
      active = false
    }
  }, [courses, lecturerAccountId])

  useEffect(() => {
    setSelectedClassId((prev) => {
      const options = dayClasses.filter(
        (entry) => String(entry.course_id || '') === String(selectedCourseId)
      )
      if (options.some((entry) => String(entry.id) === String(prev))) return prev
      return options[0] ? String(options[0].id) : ''
    })
  }, [dayClasses, selectedCourseId])

  useEffect(() => {
    if (!selectedClassId) return
    const chosen = dayClasses.find((entry) => String(entry.id) === String(selectedClassId))
    const cid = chosen?.course_id != null ? String(chosen.course_id) : ''
    if (cid && cid !== selectedCourseId) setSelectedCourseId(cid)
  }, [dayClasses, selectedClassId, selectedCourseId])

  const selectedCourse = useMemo(
    () => courses.find((c) => String(c.id) === String(selectedCourseId)) || null,
    [courses, selectedCourseId]
  )

  const students = useMemo(
    () => (Array.isArray(selectedCourse?.students) ? selectedCourse.students : []),
    [selectedCourse]
  )

  const classOptions = useMemo(
    () =>
      dayClasses.filter(
        (entry) => String(entry.course_id || '') === String(selectedCourseId)
      ),
    [dayClasses, selectedCourseId]
  )

  const selectedClass = useMemo(
    () => classOptions.find((entry) => String(entry.id) === String(selectedClassId)) || null,
    [classOptions, selectedClassId]
  )
  const classDateYmd = selectedClass?.entry_date || todaysYmd()
  const classDateLabel = useMemo(
    () =>
      new Date(`${classDateYmd}T00:00:00`).toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    [classDateYmd]
  )

  useEffect(() => {
    if (!selectedCourseId || !selectedClassId) {
      setMarks({})
      return
    }
    let active = true
    async function loadMarks() {
      try {
        const query = new URLSearchParams({
          user_email: userEmail,
          class_id: String(selectedClassId),
        })
        const res = await fetch(`${apiBase}/backend/attendance_marks.php?${query.toString()}`, {
          cache: 'no-store',
        })
        const data = await res.json()
        if (!active) return
        if (data?.success && data.marks && typeof data.marks === 'object') {
          setMarks(data.marks)
        } else {
          setMarks({})
        }
      } catch (_) {
        if (active) setMarks({})
      }
    }
    loadMarks()
    return () => {
      active = false
    }
  }, [selectedClassId, selectedCourseId, userEmail])

  const counts = useMemo(() => {
    const total = students.length
    const marked = students.filter((s) => ['present', 'late', 'absent'].includes(marks[s.id])).length
    const present = students.filter((s) => marks[s.id] === 'present').length
    return { total, marked, present }
  }, [students, marks])

  const setStatus = (studentId, status) => {
    setSaveMessage('')
    setMarks((prev) => ({ ...prev, [studentId]: status }))
  }

  const handleSave = async () => {
    if (!selectedCourseId || !selectedClassId) return
    setSaving(true)
    try {
      const res = await fetch(`${apiBase}/backend/attendance_marks.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: userEmail,
          class_id: Number(selectedClassId),
          marks,
        }),
      })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Failed to save attendance')
      setSaveMessage(`Attendance saved for ${classDateLabel}.`)
      window.setTimeout(() => setSaveMessage(''), 2200)
    } catch (_) {
      setSaveMessage('Could not save attendance to database.')
      window.setTimeout(() => setSaveMessage(''), 2200)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div css={wrapStyles}>
      <div css={headingRowStyles}>
        <div>
          <h1 css={titleStyles}>Mark Attendance</h1>
          <p css={subtitleStyles(darkMode)}>Track student attendance for your classes</p>
        </div>
        <div css={iconBtnStyles(darkMode)} aria-hidden>
          <HiOutlineCalendarDays style={{ width: 24, height: 24 }} />
        </div>
      </div>

      <section css={panelStyles(darkMode)}>
        <h2 css={panelTitleStyles}>Select Module</h2>
        <p css={panelSubStyles(darkMode)}>
          Choose a module, then select one assigned class to mark attendance.
        </p>
        <div css={filterGridStyles}>
          <select
            css={selectStyles(darkMode)}
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            disabled={loading || courses.length === 0}
          >
            <option value="">Select a module</option>
            {courses.map((course) => (
              <option key={course.id} value={String(course.id)}>
                {course.course_code} - {course.course_name}
              </option>
            ))}
          </select>
          <select
            css={selectStyles(darkMode)}
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
            disabled={!selectedCourseId || loading || classOptions.length === 0}
          >
            <option value="">
              {selectedCourseId ? 'Select an assigned class' : 'Select a module first'}
            </option>
            {classOptions.map((entry) => (
              <option key={entry.id} value={String(entry.id)}>
                {entry.course_code || 'Class'} | {entry.entry_date} | {fmtHm(entry.start_time)}-{fmtHm(entry.end_time)}
              </option>
            ))}
          </select>
        </div>
        {selectedCourseId ? (
          <div css={todayChipStyles(darkMode)}>
            Classes found: {classOptions.length}
            {selectedClass ? ` | Class date: ${classDateLabel}` : ''}
          </div>
        ) : null}
      </section>

      {!selectedCourseId || !selectedClassId ? (
        <div css={emptyStateStyles(darkMode)}>
          <div>
            <HiOutlineUsers style={{ width: 38, height: 38, opacity: 0.5 }} />
            <h3 css={css`margin: 0.75rem 0 0.35rem; font-size: 1.75rem;`}>Select module and class to begin</h3>
            <p css={mutedStyles(darkMode)}>
              After choosing a module, select one assigned class to show enrolled students.
            </p>
          </div>
        </div>
      ) : (
        <>
          <section css={panelStyles(darkMode)}>
            <div css={studentsHeaderStyles}>
              <div>
                <h2 css={panelTitleStyles}>Students</h2>
                <p css={panelSubStyles(darkMode)}>Mark attendance for each student</p>
              </div>
              <button type="button" css={saveBtnStyles} onClick={handleSave}>
                {saving ? 'Saving...' : 'Save Attendance'}
              </button>
            </div>

            {students.map((student) => {
              const status = marks[student.id] || ''
              return (
                <article key={student.id} css={studentRowStyles(darkMode)}>
                  <div css={studentLeftStyles}>
                    <span css={avatarStyles(avatarColor(student.student_id || student.id))}>{initials(student.full_name)}</span>
                    <div>
                      <p css={studentNameStyles}>{student.full_name || 'Unknown student'}</p>
                      <p css={studentIdStyles(darkMode)}>{student.student_id || 'No student id'}</p>
                    </div>
                  </div>

                  <div css={actionsStyles}>
                    <span css={statusPillStyles(darkMode, status)}>{status ? STATUS[status] : 'Not Marked'}</span>
                    <button
                      type="button"
                      css={actionBtnStyles(darkMode, status === 'present')}
                      onClick={() => setStatus(student.id, 'present')}
                      aria-label={`Mark ${student.full_name} present`}
                    >
                      <HiOutlineCheckCircle />
                    </button>
                    <button
                      type="button"
                      css={actionBtnStyles(darkMode, status === 'absent')}
                      onClick={() => setStatus(student.id, 'absent')}
                      aria-label={`Mark ${student.full_name} absent`}
                    >
                      <HiOutlineXCircle />
                    </button>
                  </div>
                </article>
              )
            })}
            {students.length === 0 ? (
              <p css={mutedStyles(darkMode)}>No students enrolled in this module yet.</p>
            ) : null}
            {saveMessage ? (
              <p css={css`margin: 0.6rem 0 0; font-size: 0.9rem; color: #059669; font-weight: 600;`}>
                {saveMessage}
              </p>
            ) : null}
          </section>

          <section css={statsGridStyles}>
            <article css={statCardStyles(darkMode)}>
              <h3 css={statTitleStyles}>Total Students</h3>
              <p css={statValueStyles}>{counts.total}</p>
            </article>
            <article css={statCardStyles(darkMode)}>
              <h3 css={statTitleStyles}>Marked for Class</h3>
              <p css={statValueStyles}>{counts.marked}</p>
            </article>
            <article css={statCardStyles(darkMode)}>
              <h3 css={statTitleStyles}>Present</h3>
              <p css={statValueStyles}>{counts.present}</p>
            </article>
          </section>
        </>
      )}

      {!loading && !lecturerId ? (
        <p css={mutedStyles(darkMode)} style={{ marginTop: '0.9rem' }}>
          We could not match your account to a lecturer profile.
        </p>
      ) : null}
    </div>
  )
}

export default LecturerAttendance
