/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlinePlus,
  HiOutlineXMark,
  HiOutlineDocumentText,
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

function plusOneHour(timeHHMM) {
  const [h, m] = String(timeHHMM || '00:00').split(':').map(Number)
  const d = new Date()
  d.setHours(h || 0, m || 0, 0, 0)
  d.setHours(d.getHours() + 1)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
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
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const primaryBtnStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  border-radius: 8px;
  background: ${ACCENT};
  color: #fff;
  padding: 0.45rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
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
`
const dayCellStyles = (darkMode, selected, isToday, muted) => css`
  min-height: 74px;
  border-radius: 10px;
  border: 1px solid ${selected ? ACCENT : isToday ? '#c7d2fe' : darkMode ? '#404040' : '#e5e7eb'};
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
  border-radius: 10px;
  padding: 0.7rem 0.8rem;
  margin-bottom: 0.55rem;
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
`
const upcomingItemStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.65rem 0.75rem;
  margin-bottom: 0.55rem;
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
const overlayStyles = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`
const modalStyles = (darkMode) => css`
  width: 100%;
  max-width: 520px;
  border-radius: 12px;
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`
const modalHeadStyles = (darkMode) => css`
  padding: 1rem 1.1rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`
const modalBodyStyles = css`
  padding: 1rem 1.1rem 1.2rem;
`
const inputStyles = (darkMode) => css`
  width: 100%;
  padding: 0.5rem 0.7rem;
  border: 1px solid ${darkMode ? '#404040' : '#d1d5db'};
  border-radius: 8px;
  background: ${darkMode ? '#262626' : '#fff'};
  color: inherit;
  box-sizing: border-box;
`
const fieldStyles = css`
  margin-bottom: 0.8rem;
`
const labelStyles = (darkMode) => css`
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
`
const footerStyles = (darkMode) => css`
  padding: 0.85rem 1.1rem 1rem;
  border-top: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
`
const cancelBtnStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  background: transparent;
  color: inherit;
  border-radius: 8px;
  padding: 0.45rem 0.8rem;
  cursor: pointer;
`

function LecturerCalendar({ darkMode, userEmail }) {
  const [monthCursor, setMonthCursor] = useState(new Date())
  const [entries, setEntries] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(toYMD(new Date()))
  const [lecturer, setLecturer] = useState(null)
  const [addOpen, setAddOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    course_id: '',
    title: '',
    description: '',
    due_date: toYMD(new Date()),
    due_time: '23:59',
    location: 'Online',
  })

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const range = useMemo(() => {
    const y = monthCursor.getFullYear()
    const m = monthCursor.getMonth()
    return { from: toYMD(new Date(y, m, 1)), to: toYMD(new Date(y, m + 1, 0)) }
  }, [monthCursor])

  useEffect(() => {
    let active = true
    async function loadBase() {
      try {
        const [lectRes, courseRes] = await Promise.all([
          fetch(`${BASE}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${BASE}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        ])
        const lectJson = await lectRes.json()
        const courseJson = await courseRes.json()
        if (!active) return
        const allLects = lectJson.success ? lectJson.lecturers || [] : []
        const me = allLects.find((l) => String(l.email || '').trim().toLowerCase() === String(userEmail || '').trim().toLowerCase()) || null
        setLecturer(me)
        setCourses(courseJson.success ? courseJson.courses || [] : [])
      } catch (_) {
        if (!active) return
        setLecturer(null)
        setCourses([])
      }
    }
    loadBase()
    return () => {
      active = false
    }
  }, [userEmail])

  useEffect(() => {
    let active = true
    async function loadEntries() {
      setLoading(true)
      try {
        const res = await fetch(`${BASE}/backend/timetable.php?from=${encodeURIComponent(range.from)}&to=${encodeURIComponent(range.to)}`)
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
    loadEntries()
    return () => {
      active = false
    }
  }, [range.from, range.to])

  const myCourses = useMemo(() => {
    if (!lecturer) return []
    const lid = String(lecturer.lecturer_id || '').trim()
    return courses.filter((c) => String(c.lecturer_id || '').trim() === lid)
  }, [courses, lecturer])

  const scopedEntries = useMemo(() => {
    if (!lecturer) return []
    const myCourseIds = new Set(myCourses.map((c) => Number(c.id)))
    return entries.filter((e) => {
      if (e.entry_type === 'class') return myCourseIds.has(Number(e.course_id))
      return Array.isArray(e.lecturers) && e.lecturers.some((l) => Number(l.id) === Number(lecturer.id))
    })
  }, [entries, lecturer, myCourses])

  const entriesByDate = useMemo(() => {
    const map = {}
    for (const e of scopedEntries) {
      if (!map[e.entry_date]) map[e.entry_date] = []
      map[e.entry_date].push(e)
    }
    Object.keys(map).forEach((k) => map[k].sort((a, b) => a.start_time.localeCompare(b.start_time)))
    return map
  }, [scopedEntries])

  const selectedEvents = entriesByDate[selectedDate] || []
  const todaysEvents = entriesByDate[toYMD(today)] || []
  const upcoming = useMemo(() => {
    const list = scopedEntries
      .filter((e) => e.entry_date > toYMD(today) || (e.entry_date === toYMD(today) && e.start_time >= '00:00:00'))
      .sort((a, b) => `${a.entry_date} ${a.start_time}`.localeCompare(`${b.entry_date} ${b.start_time}`))
    return list.slice(0, 5)
  }, [scopedEntries, today])

  const cells = useMemo(() => buildCells(monthCursor), [monthCursor])
  const monthLabel = monthCursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
  const selectedLabel = parseYMD(selectedDate).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })

  const goPrevMonth = () => setMonthCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
  const goNextMonth = () => setMonthCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))

  const saveAssignment = async () => {
    if (!lecturer || !form.course_id || !form.title.trim() || !form.due_date || !form.due_time) return
    setSaving(true)
    try {
      const payload = {
        entry_type: 'event',
        course_id: Number(form.course_id),
        event_title: `Assignment Due: ${form.title.trim()}`,
        event_description: form.description.trim(),
        entry_date: form.due_date,
        start_time: form.due_time,
        end_time: plusOneHour(form.due_time),
        room_location: (form.location || '').trim() || 'Online',
        lecturer_account_ids: [Number(lecturer.id)],
      }
      const res = await fetch(`${BASE}/backend/timetable.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!data.success) {
        window.alert(data.error || 'Could not save assignment due date')
        return
      }
      setAddOpen(false)
      setForm((f) => ({ ...f, title: '', description: '', due_time: '23:59', location: 'Online' }))
      const refresh = await fetch(`${BASE}/backend/timetable.php?from=${encodeURIComponent(range.from)}&to=${encodeURIComponent(range.to)}`, {
        cache: 'no-store',
      })
      const refreshData = await refresh.json()
      setEntries(refreshData.success ? refreshData.entries || [] : [])
    } catch (_) {
      window.alert('Network error while saving assignment.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div css={wrapStyles}>
      <div css={cardStyles(darkMode)}>
        <div css={monthHeaderStyles}>
          <h2 css={monthTitleStyles(darkMode)}>{monthLabel}</h2>
          <div style={{ display: 'inline-flex', gap: '0.35rem', alignItems: 'center' }}>
            <button type="button" css={primaryBtnStyles} onClick={() => setAddOpen(true)}>
              <HiOutlinePlus /> Assignment Due Date
            </button>
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
            if (cell.type === 'pad') return <div key={`pad-${idx}`} css={dayCellStyles(darkMode, false, false, true)} />
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
        {loading ? (
          <p css={emptyTextStyles(darkMode)}>Loading events...</p>
        ) : selectedEvents.length === 0 ? (
          <p css={emptyTextStyles(darkMode)}>No events for this date.</p>
        ) : (
          selectedEvents.map((ev) => (
            <div key={ev.id} css={eventCardStyles(darkMode, ev.entry_type)}>
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
            <p css={emptyTextStyles(darkMode)}>No classes or deadlines today.</p>
          ) : (
            todaysEvents.map((ev) => (
              <div key={`today-${ev.id}`} css={eventCardStyles(darkMode, ev.entry_type)}>
                <p css={eventNameStyles}>{ev.entry_type === 'class' ? ev.course_name || ev.course_code : ev.event_title}</p>
                <div css={eventMetaStyles(darkMode)}>
                  <span>
                    <HiOutlineClock />
                    {fmtTime(ev.start_time)}
                  </span>
                </div>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <strong style={{ fontSize: '0.92rem' }}>{ev.entry_type === 'class' ? ev.course_name || ev.course_code : ev.event_title}</strong>
                  <span css={upcomingTypeStyles(darkMode)}>{ev.entry_type === 'class' ? 'Lecture' : 'Assignment'}</span>
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
              </div>
            ))
          )}
        </div>
      </div>

      {addOpen ? (
        <div css={overlayStyles} onClick={() => setAddOpen(false)}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeadStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>Add Assignment Due Date</h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={() => setAddOpen(false)} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Course</label>
                <select
                  css={inputStyles(darkMode)}
                  value={form.course_id}
                  onChange={(e) => setForm((f) => ({ ...f, course_id: e.target.value }))}
                >
                  <option value="">Select your course</option>
                  {myCourses.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                      {c.course_code} - {c.course_name}
                    </option>
                  ))}
                </select>
              </div>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Assignment Title</label>
                <input
                  type="text"
                  css={inputStyles(darkMode)}
                  placeholder="e.g. Lab Report 2"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                />
              </div>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Description</label>
                <textarea
                  css={inputStyles(darkMode)}
                  style={{ minHeight: '80px', resize: 'vertical' }}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Due Date</label>
                <input
                  type="date"
                  css={inputStyles(darkMode)}
                  value={form.due_date}
                  onChange={(e) => setForm((f) => ({ ...f, due_date: e.target.value }))}
                />
              </div>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Due Time</label>
                <input
                  type="time"
                  css={inputStyles(darkMode)}
                  value={form.due_time}
                  onChange={(e) => setForm((f) => ({ ...f, due_time: e.target.value }))}
                />
              </div>
              <div css={fieldStyles}>
                <label css={labelStyles(darkMode)}>Location</label>
                <input
                  type="text"
                  css={inputStyles(darkMode)}
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                />
              </div>
            </div>
            <div css={footerStyles(darkMode)}>
              <button type="button" css={cancelBtnStyles(darkMode)} onClick={() => setAddOpen(false)}>
                Cancel
              </button>
              <button type="button" css={primaryBtnStyles} onClick={saveAssignment} disabled={saving}>
                <HiOutlineDocumentText />
                {saving ? 'Saving...' : 'Save Due Date'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default LecturerCalendar
