/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlineXMark,
  HiOutlineUser,
} from 'react-icons/hi2'

const BASE = '/strack'
const ACCENT = '#6366f1'

function toYMD(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function parseYMD(s) {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function fmtTime(t) {
  if (!t) return ''
  const [hh, mm] = t.split(':').map(Number)
  const h12 = ((hh + 11) % 12) + 1
  const ampm = hh >= 12 ? 'PM' : 'AM'
  return `${h12}:${String(mm).padStart(2, '0')} ${ampm}`
}

function buildCells(monthCursor) {
  const y = monthCursor.getFullYear()
  const m = monthCursor.getMonth()
  const first = new Date(y, m, 1)
  const last = new Date(y, m + 1, 0)
  const lead = first.getDay()
  const cells = []
  for (let i = 0; i < lead; i++) cells.push({ type: 'pad' })
  for (let d = 1; d <= last.getDate(); d++) cells.push({ type: 'day', date: new Date(y, m, d) })
  while (cells.length % 7 !== 0) cells.push({ type: 'pad' })
  return cells
}

const wrapStyles = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  @media (min-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`

const cardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem;
`

const monthHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9rem;
`

const monthTitleStyles = (darkMode) => css`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const navBtnStyles = (darkMode) => css`
  width: 32px;
  height: 32px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  color: inherit;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.45rem;
`

const dowStyles = (darkMode) => css`
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  margin-bottom: 0.1rem;
`

const dayCellStyles = (darkMode, selected, isToday, muted) => css`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid
    ${selected
      ? ACCENT
      : isToday
        ? darkMode
          ? '#a5b4fc'
          : '#c7d2fe'
        : darkMode
          ? '#404040'
          : '#e5e7eb'};
  background: ${selected
    ? ACCENT
    : muted
      ? darkMode
        ? '#1f1f1f'
        : '#fafafa'
      : isToday
        ? darkMode
          ? 'rgba(99,102,241,0.16)'
          : 'rgba(99,102,241,0.08)'
        : darkMode
          ? '#262626'
          : '#fff'};
  color: ${selected ? '#fff' : 'inherit'};
  padding: 0.45rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${muted ? 'default' : 'pointer'};
`

const dayNumberStyles = css`
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
`

const dotStyles = (selected) => css`
  width: 4px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto;
  background: ${selected ? '#fff' : '#111827'};
  opacity: 0.9;
`

const sectionTitleStyles = (darkMode) => css`
  margin: 1rem 0 0.6rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const eventCardStyles = (darkMode, type) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-left: 4px solid ${type === 'event' ? '#ef4444' : ACCENT};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
  cursor: pointer;
`

const eventNameStyles = css`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
`

const eventMetaStyles = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`

const rightSectionStyles = css`
  display: grid;
  gap: 1rem;
`

const rightTitleStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};

  svg {
    width: 18px;
    height: 18px;
    color: ${ACCENT};
  }
`

const upcomingItemStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
  background: ${darkMode ? '#1f1f1f' : '#fff'};
`

const upcomingTypeStyles = (darkMode) => css`
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  border-radius: 999px;
  padding: 0.1rem 0.4rem;
  color: ${darkMode ? '#d1d5db' : '#6b7280'};
`

const emptyTextStyles = (darkMode) => css`
  margin: 0.25rem 0 0;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.9rem;
`

const modalOverlayStyles = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const modalBoxStyles = (darkMode) => css`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  box-shadow: 0 24px 30px -12px rgba(0, 0, 0, 0.25);
`

const modalHeaderStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const modalTitleStyles = (darkMode) => css`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const modalCloseBtnStyles = (darkMode) => css`
  border: none;
  background: transparent;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)'};
  }

  svg {
    width: 19px;
    height: 19px;
  }
`

const modalBodyStyles = css`
  padding: 1rem 1.1rem 1.2rem;
`

const detailRowStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${darkMode ? '#a5b4fc' : ACCENT};
    flex-shrink: 0;
  }
`

function StudentCalendar({ darkMode, userEmail, studentId }) {
  const [monthCursor, setMonthCursor] = useState(new Date())
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(toYMD(new Date()))
  const [allowedCourseIds, setAllowedCourseIds] = useState([])
  const [degreeName, setDegreeName] = useState('')
  const [courseFilterReady, setCourseFilterReady] = useState(false)
  const [detailEvent, setDetailEvent] = useState(null)

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const range = useMemo(() => {
    const y = monthCursor.getFullYear()
    const m = monthCursor.getMonth()
    return {
      from: toYMD(new Date(y, m, 1)),
      to: toYMD(new Date(y, m + 1, 0)),
    }
  }, [monthCursor])

  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(
          `${BASE}/backend/timetable.php?from=${encodeURIComponent(range.from)}&to=${encodeURIComponent(range.to)}`
        )
        const data = await res.json()
        if (!active) return
        setEntries(data.success ? data.entries || [] : [])
      } catch (_) {
        if (!active) return
        setEntries([])
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [range.from, range.to])

  useEffect(() => {
    let active = true
    async function loadStudentCourseScope() {
      setCourseFilterReady(false)
      try {
        const [studentsRes, coursesRes] = await Promise.all([
          fetch(`${BASE}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${BASE}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        ])
        const studentsJson = await studentsRes.json()
        const coursesJson = await coursesRes.json()
        if (!active) return

        const students = studentsJson.success ? studentsJson.students || [] : []
        const courses = coursesJson.success ? coursesJson.courses || [] : []
        const targetEmail = String(userEmail || '').trim().toLowerCase()
        const targetStudentId = String(studentId || '').trim().toUpperCase()
        const me =
          students.find((s) => String(s.email || '').trim().toLowerCase() === targetEmail) ||
          students.find((s) => String(s.student_id || '').trim().toUpperCase() === targetStudentId) ||
          null

        if (!me) {
          setAllowedCourseIds([])
          setDegreeName('')
          setCourseFilterReady(true)
          return
        }

        setDegreeName(String(me.degree || '').trim())

        const enrolledIds = courses
          .filter((c) => Array.isArray(c.student_ids) && c.student_ids.map((v) => Number(v)).includes(Number(me.id)))
          .map((c) => Number(c.id))
          .filter((id) => Number.isFinite(id) && id > 0)

        // Fallback: if no explicit enrollments yet, show courses from student's department.
        const fallbackIds =
          enrolledIds.length === 0
            ? courses
                .filter((c) => String(c.department || '').trim() !== '' && String(c.department || '').trim() === String(me.department || '').trim())
                .map((c) => Number(c.id))
                .filter((id) => Number.isFinite(id) && id > 0)
            : []

        setAllowedCourseIds(Array.from(new Set(enrolledIds.length > 0 ? enrolledIds : fallbackIds)))
      } catch (_) {
        if (!active) return
        setAllowedCourseIds([])
        setDegreeName('')
      } finally {
        if (active) setCourseFilterReady(true)
      }
    }
    loadStudentCourseScope()
    return () => {
      active = false
    }
  }, [userEmail, studentId])

  const scopedEntries = useMemo(() => {
    if (!courseFilterReady) return []
    const allowed = new Set((allowedCourseIds || []).map((id) => Number(id)))
    return entries.filter((e) => {
      if (e.entry_type !== 'class') return true
      const cid = Number(e.course_id)
      if (!Number.isFinite(cid) || cid <= 0) return false
      return allowed.has(cid)
    })
  }, [entries, allowedCourseIds, courseFilterReady])

  const entriesByDate = useMemo(() => {
    const map = {}
    for (const e of scopedEntries) {
      if (!map[e.entry_date]) map[e.entry_date] = []
      map[e.entry_date].push(e)
    }
    Object.keys(map).forEach((k) => map[k].sort((a, b) => a.start_time.localeCompare(b.start_time)))
    return map
  }, [scopedEntries])

  const cells = useMemo(() => buildCells(monthCursor), [monthCursor])
  const selectedEvents = entriesByDate[selectedDate] || []
  const todaysEvents = entriesByDate[toYMD(today)] || []

  const upcoming = useMemo(() => {
    const list = scopedEntries
      .filter((e) => e.entry_date > toYMD(today) || (e.entry_date === toYMD(today) && e.start_time >= '00:00:00'))
      .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
    return list.slice(0, 5)
  }, [scopedEntries, today])

  const monthLabel = monthCursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
  const selectedLabel = parseYMD(selectedDate).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const goPrevMonth = () => setMonthCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
  const goNextMonth = () => setMonthCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
  const closeDetailModal = () => setDetailEvent(null)

  return (
    <div css={wrapStyles}>
      <div css={cardStyles(darkMode)}>
        <div css={monthHeaderStyles}>
          <h2 css={monthTitleStyles(darkMode)}>{monthLabel}</h2>
          <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
            <button type="button" css={navBtnStyles(darkMode)} onClick={goPrevMonth} aria-label="Previous month">
              <HiOutlineChevronLeft />
            </button>
            <button type="button" css={navBtnStyles(darkMode)} onClick={goNextMonth} aria-label="Next month">
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>

        <div css={gridStyles}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <div key={d} css={dowStyles(darkMode)}>
              {d}
            </div>
          ))}
          {cells.map((cell, idx) => {
            if (cell.type === 'pad') {
              return <div key={`pad-${idx}`} css={dayCellStyles(darkMode, false, false, true)} />
            }
            const ymd = toYMD(cell.date)
            const selected = ymd === selectedDate
            const isToday = ymd === toYMD(today)
            const hasEntries = (entriesByDate[ymd] || []).length > 0
            return (
              <div
                key={ymd}
                role="button"
                tabIndex={0}
                css={dayCellStyles(darkMode, selected, isToday, false)}
                onClick={() => setSelectedDate(ymd)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedDate(ymd)}
              >
                <div css={dayNumberStyles}>{cell.date.getDate()}</div>
                {hasEntries ? <div css={dotStyles(selected)} /> : <div />}
              </div>
            )
          })}
        </div>

        <h3 css={sectionTitleStyles(darkMode)}>Events on {selectedLabel}</h3>
        {degreeName ? (
          <p css={emptyTextStyles(darkMode)} style={{ marginTop: 0, marginBottom: '0.5rem' }}>
            Showing timetable for degree: {degreeName}
          </p>
        ) : null}
        {loading || !courseFilterReady ? (
          <p css={emptyTextStyles(darkMode)}>Loading events...</p>
        ) : selectedEvents.length === 0 ? (
          <p css={emptyTextStyles(darkMode)}>No events for this date.</p>
        ) : (
          selectedEvents.map((ev) => (
            <div key={ev.id} css={eventCardStyles(darkMode, ev.entry_type)}>
              <button
                type="button"
                onClick={() => setDetailEvent(ev)}
                css={css`
                  all: unset;
                  display: block;
                  width: 100%;
                  cursor: pointer;
                `}
              >
                <p css={eventNameStyles}>{ev.entry_type === 'class' ? ev.course_name || ev.course_code : ev.event_title}</p>
                <div css={eventMetaStyles(darkMode)}>
                  <span>
                    <HiOutlineClock />
                    {fmtTime(ev.start_time)}
                  </span>
                  {(ev.room_location || '').trim() ? (
                    <span>
                      <HiOutlineMapPin />
                      {ev.room_location}
                    </span>
                  ) : null}
                </div>
              </button>
            </div>
          ))
        )}
      </div>

      <div css={rightSectionStyles}>
        <div css={cardStyles(darkMode)}>
          <h3 css={rightTitleStyles(darkMode)}>
            <HiOutlineCalendar />
            Today's Schedule
          </h3>
          {todaysEvents.length === 0 ? (
            <p css={emptyTextStyles(darkMode)}>No classes or events today.</p>
          ) : (
            todaysEvents.map((ev) => (
              <div key={`today-${ev.id}`} css={eventCardStyles(darkMode, ev.entry_type)}>
                <button
                  type="button"
                  onClick={() => setDetailEvent(ev)}
                  css={css`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `}
                >
                  <p css={eventNameStyles}>{ev.entry_type === 'class' ? ev.course_name || ev.course_code : ev.event_title}</p>
                  <div css={eventMetaStyles(darkMode)}>
                    <span>
                      <HiOutlineClock />
                      {fmtTime(ev.start_time)}
                    </span>
                    {(ev.room_location || '').trim() ? (
                      <span>
                        <HiOutlineMapPin />
                        {ev.room_location}
                      </span>
                    ) : null}
                  </div>
                </button>
              </div>
            ))
          )}
        </div>

        <div css={cardStyles(darkMode)}>
          <h3 css={rightTitleStyles(darkMode)}>
            <HiOutlineClock />
            Upcoming
          </h3>
          {upcoming.length === 0 ? (
            <p css={emptyTextStyles(darkMode)}>No upcoming entries.</p>
          ) : (
            upcoming.map((ev) => (
              <div key={`up-${ev.id}`} css={upcomingItemStyles(darkMode)}>
                <button
                  type="button"
                  onClick={() => setDetailEvent(ev)}
                  css={css`
                    all: unset;
                    display: block;
                    width: 100%;
                    cursor: pointer;
                  `}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ fontSize: '0.92rem' }}>
                      {ev.entry_type === 'class' ? ev.course_name || ev.course_code : ev.event_title}
                    </strong>
                    <span css={upcomingTypeStyles(darkMode)}>{ev.entry_type === 'class' ? 'Lecture' : 'Event'}</span>
                  </div>
                  <div css={eventMetaStyles(darkMode)} style={{ marginTop: '0.25rem' }}>
                    <span>
                      <HiOutlineCalendar />
                      {parseYMD(ev.entry_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </span>
                    <span>
                      <HiOutlineClock />
                      {fmtTime(ev.start_time)}
                    </span>
                  </div>
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {detailEvent ? (
        <div css={modalOverlayStyles} onClick={closeDetailModal}>
          <div css={modalBoxStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>Event Details</h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeDetailModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <p css={eventNameStyles} style={{ marginBottom: '0.45rem' }}>
                {detailEvent.entry_type === 'class'
                  ? detailEvent.course_name || detailEvent.course_code
                  : detailEvent.event_title || 'Event'}
              </p>
              <div css={detailRowStyles(darkMode)}>
                <HiOutlineCalendar />
                <span>
                  {parseYMD(detailEvent.entry_date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div css={detailRowStyles(darkMode)}>
                <HiOutlineClock />
                <span>
                  {fmtTime(detailEvent.start_time)} - {fmtTime(detailEvent.end_time)}
                </span>
              </div>
              <div css={detailRowStyles(darkMode)}>
                <HiOutlineMapPin />
                <span>{(detailEvent.room_location || '').trim() || 'Location not specified'}</span>
              </div>
              {(detailEvent.lecturers || []).length > 0 ? (
                <div css={detailRowStyles(darkMode)}>
                  <HiOutlineUser />
                  <span>{detailEvent.lecturers.map((l) => l.full_name).join(', ')}</span>
                </div>
              ) : null}
              {detailEvent.entry_type === 'event' && detailEvent.event_description ? (
                <p
                  css={css`
                    margin: 0.7rem 0 0;
                    font-size: 0.9rem;
                    line-height: 1.45;
                    color: ${darkMode ? '#d1d5db' : '#374151'};
                  `}
                >
                  {detailEvent.event_description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentCalendar
