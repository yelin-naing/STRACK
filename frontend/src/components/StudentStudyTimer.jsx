/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  HiOutlineArrowPath,
  HiOutlineArrowTrendingUp,
  HiOutlineBellSlash,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCpuChip,
  HiOutlineMoon,
  HiOutlinePause,
  HiOutlinePlay,
  HiOutlineStopCircle,
} from 'react-icons/hi2'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from 'recharts'
import { getCoursesVisibleToStudent } from '../getCoursesVisibleToStudent'
import { findStudentMe } from '../findStudentMe'
import { useStudyDnd } from '../context/StudyDndContext'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'
const MODULE_LINE = '#22c55e'

const POMO_SEC = 25 * 60
const SHORT_SEC = 5 * 60
const LONG_SEC = 15 * 60
const DAILY_POMO_GOAL = 8
const DAILY_STUDY_GOAL_MINUTES = 4 * 60

function storageKey(email) {
  return `strack_study_timer_${String(email || '').toLowerCase()}`
}

function localYMD(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function startOfWeekSunday(d) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const dow = x.getDay()
  x.setDate(x.getDate() - dow)
  x.setHours(0, 0, 0, 0)
  return x.getTime()
}

function eventDedupeKey(ev) {
  return `${Math.floor(ev.at.getTime() / 1000)}_${ev.courseId}`
}

function parseEvent(e) {
  if (!e || typeof e !== 'object') return null
  const rawAt = e.at ?? e.completed_at
  const at = new Date(rawAt)
  if (Number.isNaN(at.getTime())) return null
  const dm = Number(e.durationMinutes ?? e.duration_minutes ?? 25)
  const courseId = Number(e.courseId ?? e.course_id) || 0
  const explicitKind =
    e.kind === 'pomodoro' || String(e.session_kind || '').toLowerCase() === 'pomodoro'
  const kind = (explicitKind || courseId > 0) ? 'pomodoro' : null
  return {
    at,
    courseId,
    courseCode: String(e.courseCode ?? e.course_code ?? ''),
    courseName: String(e.courseName ?? e.course_name ?? ''),
    kind,
    durationMinutes: Number.isFinite(dm) && dm > 0 ? Math.min(240, dm) : 25,
  }
}

function parseApiEvent(row) {
  return parseEvent({
    at: row.completed_at,
    courseId: row.course_id,
    courseCode: row.course_code,
    courseName: row.course_name,
    duration_minutes: row.duration_minutes,
    kind: 'pomodoro',
  })
}

function mergeEventLists(remote, local) {
  const map = new Map()
  for (const e of remote) {
    if (!e || e.kind !== 'pomodoro') continue
    map.set(eventDedupeKey(e), e)
  }
  for (const e of local) {
    if (!e || e.kind !== 'pomodoro') continue
    const k = eventDedupeKey(e)
    if (!map.has(k)) map.set(k, e)
  }
  return Array.from(map.values()).sort((a, b) => a.at.getTime() - b.at.getTime())
}

async function postStudySession(email, ev) {
  if (!email || !ev?.courseId) return { success: false, message: 'Missing email or course' }
  try {
    const res = await fetch(`${apiBase}/backend/study_sessions.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_email: email,
        course_id: ev.courseId,
        duration_minutes: ev.durationMinutes || 25,
        completed_at: ev.at.toISOString(),
        kind: 'pomodoro',
      }),
    })
    const data = await res.json().catch(() => ({}))
    return data
  } catch (_) {
    return { success: false, message: 'Network error' }
  }
}

async function fetchStudySessions(email) {
  if (!email) return { success: false, events: [] }
  try {
    const res = await fetch(
      `${apiBase}/backend/study_sessions.php?user_email=${encodeURIComponent(email)}&t=${Date.now()}`,
      { cache: 'no-store' }
    )
    return await res.json()
  } catch (_) {
    return { success: false, events: [] }
  }
}

function loadEvents(email) {
  try {
    const raw = localStorage.getItem(storageKey(email))
    if (!raw) return []
    const j = JSON.parse(raw)
    const arr = Array.isArray(j?.events) ? j.events : []
    return arr.map(parseEvent).filter(Boolean).filter((x) => x.kind === 'pomodoro')
  } catch (_) {
    return []
  }
}

function saveEvents(email, events) {
  try {
    localStorage.setItem(
      storageKey(email),
      JSON.stringify({
        version: 1,
        events: events.map((e) => ({
          at: e.at.toISOString(),
          courseId: e.courseId,
          courseCode: e.courseCode,
          courseName: e.courseName,
          durationMinutes: e.durationMinutes || 25,
          kind: 'pomodoro',
        })),
      })
    )
  } catch (_) {}
}

const pageTitle = (darkMode) => css`
  margin: 0;
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const pageSub = (darkMode) => css`
  margin: 0.35rem 0 1.1rem;
  font-size: 0.95rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const gridTop = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`

const sidebarStack = css`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-height: 100%;
`

const weeklyCardFill = (darkMode) => css`
  ${card(darkMode)}
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const bottomPageStack = css`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 0.9rem;
`

const chartsRowPair = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const chartPanel = (darkMode) => css`
  ${card(darkMode)}
  display: flex;
  flex-direction: column;
  min-height: 0;
`

const chartPlotArea = css`
  flex: 1;
  min-height: 260px;
  width: 100%;
`

const card = (darkMode) => css`
  border-radius: 12px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 1rem 1.05rem;
  box-shadow: ${darkMode ? 'none' : '0 1px 2px rgba(0,0,0,0.04)'};
`

const timerCard = (darkMode) => css`
  ${card(darkMode)}
  padding: 1.1rem 1.15rem 1.15rem;
`

const tabRow = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.35rem;
  border-radius: 12px;
  background: ${darkMode ? '#1f1f1f' : '#f3f4f6'};
  margin-bottom: 1rem;
`

const tabBtn = (darkMode, active) => css`
  flex: 1;
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  border-radius: 10px;
  padding: 0.55rem 0.65rem;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${active ? (darkMode ? '#262626' : '#fff') : 'transparent'};
  color: ${active ? ACCENT : darkMode ? '#9ca3af' : '#6b7280'};
  box-shadow: ${active && !darkMode ? '0 1px 2px rgba(0,0,0,0.06)' : 'none'};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }

  &:hover {
    color: ${active ? ACCENT : darkMode ? '#e5e7eb' : '#374151'};
  }
`

const selectLabel = (darkMode) => css`
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  margin-bottom: 0.4rem;
`

const selectField = (darkMode) => css`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  font-size: 0.92rem;
  padding: 0.55rem 0.65rem;
  margin-bottom: 1rem;
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: ${ACCENT};
    box-shadow: 0 0 0 2px ${darkMode ? 'rgba(99,102,241,0.35)' : 'rgba(99,102,241,0.2)'};
  }
`

const timerDigits = (darkMode) => css`
  font-size: clamp(2.8rem, 8vw, 4.25rem);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0.2rem 0 0.65rem;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const progressTrack = (darkMode) => css`
  height: 6px;
  border-radius: 999px;
  background: ${darkMode ? '#404040' : '#e5e7eb'};
  overflow: hidden;
  margin-bottom: 0.5rem;
`

const progressFill = (pct) => css`
  height: 100%;
  width: ${Math.max(0, Math.min(100, pct))}%;
  background: ${ACCENT};
  border-radius: 999px;
  transition: width 0.3s linear;
`

const statusText = (darkMode) => css`
  text-align: center;
  font-size: 0.88rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  margin: 0 0 1rem;
  min-height: 1.25em;
`

const btnRow = css`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  justify-content: center;
`

const btnPrimary = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: none;
  border-radius: 10px;
  padding: 0.62rem 1.35rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  background: ${ACCENT};
  color: #fff;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`

const btnGhost = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  border-radius: 10px;
  padding: 0.62rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  background: ${darkMode ? '#262626' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#374151'};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`

const pillBadge = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  background: ${darkMode ? '#1f1f1f' : '#f3f4f6'};

  svg {
    width: 1rem;
    height: 1rem;
  }
`

const sideCardTitle = (darkMode) => css`
  margin: 0 0 0.85rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const statRow = css`
  margin-bottom: 0.85rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const statHead = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.35rem;
`

const statLabel = (darkMode) => css`
  font-size: 0.86rem;
  font-weight: 600;
  color: ${darkMode ? '#d1d5db' : '#374151'};
`

const statVal = (darkMode) => css`
  font-size: 0.86rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const segments = css`
  display: flex;
  gap: 0.28rem;
`

const segment = (darkMode, filled) => css`
  flex: 1;
  height: 6px;
  border-radius: 4px;
  background: ${filled ? ACCENT : darkMode ? '#404040' : '#e5e7eb'};
`

const summaryRowAccent = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  background: ${darkMode ? 'rgba(99, 102, 241, 0.2)' : '#eef2ff'};
  margin-bottom: 0.55rem;
  font-weight: 700;
  font-size: 0.88rem;
  color: ${darkMode ? '#e5e7eb' : '#3730a3'};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }
`

const summaryRowPlain = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
  padding: 0.55rem 0.15rem;
  font-weight: 700;
  font-size: 0.88rem;
  color: ${darkMode ? '#e5e7eb' : '#111827'};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
    color: ${darkMode ? '#9ca3af' : '#6b7280'};
  }
`

const chartCardTitle = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};

  svg {
    width: 1.15rem;
    height: 1.15rem;
    color: ${ACCENT};
  }
`

const tipsCard = (darkMode) => css`
  ${card(darkMode)}
  background: ${darkMode ? 'rgba(99, 102, 241, 0.12)' : '#f5f3ff'};
  border-color: ${darkMode ? '#4c1d95' : '#ddd6fe'};
`

const tipsTitle = (darkMode) => css`
  margin: 0 0 0.75rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${darkMode ? '#e9d5ff' : '#5b21b6'};
`

const tipsGridWrap = css`
  display: grid;
  gap: 0.65rem 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  & > div {
    margin-bottom: 0;
  }
`

const tipLine = (darkMode) => css`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  margin-bottom: 0.55rem;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    width: 1.05rem;
    height: 1.05rem;
    flex-shrink: 0;
    margin-top: 0.12rem;
    color: ${ACCENT};
  }
`

const muted = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.88rem;
  text-align: center;
  padding: 1rem 0;
`

const syncBanner = (darkMode) => css`
  margin: 0 0 0.85rem;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  font-size: 0.86rem;
  line-height: 1.4;
  border: 1px solid ${darkMode ? '#854d0e' : '#fcd34d'};
  background: ${darkMode ? 'rgba(234, 179, 8, 0.12)' : '#fffbeb'};
  color: ${darkMode ? '#fcd34d' : '#92400e'};
`

const dndStrip = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0.32rem 0.65rem;
  padding-top: max(0.3rem, env(safe-area-inset-top, 0px));
  background: linear-gradient(90deg, #4338ca, #6366f1);
  color: #fff;
  font-size: 0.74rem;
  line-height: 1.3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
`

const dndStripInner = css`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem 0.45rem;
`

const dndStripStrong = css`
  font-weight: 800;
  font-size: 0.8rem;
  white-space: nowrap;
`

const dndStripMeta = css`
  opacity: 0.92;
  font-size: 0.72rem;
  text-align: center;
  max-width: 36rem;
`

function fmtMMSS(sec) {
  const m = Math.floor(Math.max(0, sec) / 60)
  const s = Math.max(0, sec) % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function modeTotalSeconds(mode) {
  if (mode === 'short') return SHORT_SEC
  if (mode === 'long') return LONG_SEC
  return POMO_SEC
}

function chartMinuteTicks(maxMinutes) {
  const m = Math.max(0, Math.ceil(Number(maxMinutes) || 0))
  let hi = m <= 0 ? 60 : Math.ceil(m * 1.08)
  hi = Math.max(30, Math.min(hi, 24 * 60))
  hi = Math.ceil(hi / 15) * 15
  const step = hi <= 90 ? 15 : hi <= 180 ? 30 : 60
  const ticks = []
  for (let x = 0; x <= hi; x += step) ticks.push(x)
  return ticks
}

function StudentStudyTimer({ darkMode, userEmail, studentId, studentDatabaseId }) {
  const { setSimulatedDnd } = useStudyDnd()
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState([])
  const [syncWarning, setSyncWarning] = useState(null)
  const [mode, setMode] = useState('pomodoro')
  const [secondsLeft, setSecondsLeft] = useState(POMO_SEC)
  const [running, setRunning] = useState(false)
  const [status, setStatus] = useState('Ready to start')
  const [selectedCourseId, setSelectedCourseId] = useState('')
  const pomodoroPostedSeconds = useRef(0)

  useEffect(() => {
    setSimulatedDnd(running)
    return () => setSimulatedDnd(false)
  }, [running, setSimulatedDnd])

  useEffect(() => {
    if (!userEmail) return
    let active = true
    async function load() {
      setLoading(true)
      setSyncWarning(null)
      try {
        const [sRes, cRes, studyData] = await Promise.all([
          fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetchStudySessions(userEmail),
        ])
        const [sData, cData] = await Promise.all([sRes.json(), cRes.json()])
        if (!active) return
        setStudents(sData.success ? sData.students || [] : [])
        setCourses(cData.success ? cData.courses || [] : [])

        const local = loadEvents(userEmail)
        let remote = []
        if (studyData.success && Array.isArray(studyData.events)) {
          remote = studyData.events.map(parseApiEvent).filter(Boolean)
        }

        let merged = mergeEventLists(remote, local)

        if (studyData.success && remote.length === 0 && local.length > 0) {
          let anyFail = false
          for (const ev of local) {
            const r = await postStudySession(userEmail, ev)
            if (!r.success) anyFail = true
          }
          if (anyFail) {
            setSyncWarning('Some older sessions could not be uploaded; they remain on this device.')
          }
          const again = await fetchStudySessions(userEmail)
          if (active && again.success && Array.isArray(again.events)) {
            const remote2 = again.events.map(parseApiEvent).filter(Boolean)
            merged = mergeEventLists(remote2, local)
          }
        }

        if (!studyData.success) {
          setSyncWarning('Server study log unavailable — showing on-device history only.')
        }

        if (active) {
          setEvents(merged)
          saveEvents(userEmail, merged)
        }
      } catch (_) {
        if (active) {
          setStudents([])
          setCourses([])
          setEvents(loadEvents(userEmail))
          setSyncWarning('Could not reach server — showing on-device history only.')
        }
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [userEmail])

  const me = useMemo(
    () => findStudentMe(students, { userEmail, studentId, studentDatabaseId }),
    [students, userEmail, studentId, studentDatabaseId]
  )

  const myCourses = useMemo(() => getCoursesVisibleToStudent(courses, me), [courses, me])

  useEffect(() => {
    if (myCourses.length === 0) {
      setSelectedCourseId('')
      return
    }
    setSelectedCourseId((prev) => {
      const ids = new Set(myCourses.map((c) => String(c.id)))
      if (prev && ids.has(prev)) return prev
      return String(myCourses[0].id)
    })
  }, [myCourses])

  const totalForMode = modeTotalSeconds(mode)
  const progressPct = running || secondsLeft < totalForMode ? ((totalForMode - secondsLeft) / totalForMode) * 100 : 0

  const todayYmd = useMemo(() => localYMD(new Date()), [])
  const weekStartMs = useMemo(() => startOfWeekSunday(new Date()), [])

  const stats = useMemo(() => {
    const mins = (e) => e.durationMinutes || 25
    const todayEvents = events.filter((e) => localYMD(e.at) === todayYmd)
    const todayPomos = todayEvents.filter((e) => (e.durationMinutes || 25) >= 25).length
    const studyMinutesToday = todayEvents.reduce((sum, e) => sum + mins(e), 0)

    const weekPomos = events.filter((e) => e.at.getTime() >= weekStartMs)
    const weekMinutesTotal = weekPomos.reduce((sum, e) => sum + mins(e), 0)
    const dailyAvgMinutes = weekMinutesTotal / 7

    const dayOrder = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const byDow = dayOrder.map((label) => ({ day: label, minutes: 0 }))
    weekPomos.forEach((e) => {
      const dow = e.at.getDay()
      byDow[dow].minutes += mins(e)
    })
    const maxDayMinutes = Math.max(30, ...byDow.map((d) => d.minutes), 1)

    const moduleMap = new Map()
    weekPomos.forEach((e) => {
      const code = e.courseCode || 'Module'
      moduleMap.set(code, (moduleMap.get(code) || 0) + mins(e))
    })
    const moduleRows = Array.from(moduleMap.entries())
      .map(([code, minutes]) => ({ code, minutes: Math.round(minutes) }))
      .sort((a, b) => b.minutes - a.minutes)
    if (moduleRows.length === 0) {
      myCourses.slice(0, 8).forEach((c) => {
        moduleRows.push({ code: c.course_code || 'Course', minutes: 0 })
      })
    }
    const maxModMinutes = Math.max(30, ...moduleRows.map((r) => r.minutes), 1)

    return {
      todayPomos,
      studyMinutesToday,
      weekMinutesTotal,
      dailyAvgMinutes,
      byDow,
      maxDayMinutes,
      moduleRows,
      maxModMinutes,
    }
  }, [events, todayYmd, weekStartMs, myCourses])

  const appendStudyMinutes = useCallback(
    (minutes) => {
      const raw = Math.floor(Number(minutes) || 0)
      if (raw < 1) return
      const m = Math.min(240, raw)
      const course = myCourses.find((c) => String(c.id) === String(selectedCourseId))
      if (!course || !selectedCourseId) return
      const row = {
        at: new Date(),
        courseId: Number(course.id),
        courseCode: course.course_code || '',
        courseName: course.course_name || '',
        kind: 'pomodoro',
        durationMinutes: m,
      }
      setEvents((prev) => {
        const nowMs = Date.now()
        const last = prev[prev.length - 1]
        if (last && nowMs - last.at.getTime() < 900) return prev
        const next = [...prev, row]
        saveEvents(userEmail, next)
        void postStudySession(userEmail, row).then((data) => {
          if (!data?.success) {
            setSyncWarning(
              data?.message
                ? `Could not save to server: ${data.message} (session kept on this device).`
                : 'Could not save to server (session kept on this device).'
            )
          } else {
            setSyncWarning(null)
          }
        })
        return next
      })
    },
    [myCourses, selectedCourseId, userEmail]
  )

  const flushPomodoroProgress = useCallback(
    (secondsRemaining) => {
      if (secondsRemaining < 0 || secondsRemaining > POMO_SEC) return
      const progressSec = POMO_SEC - secondsRemaining
      const unposted = progressSec - pomodoroPostedSeconds.current
      const mins = Math.floor(unposted / 60)
      if (mins < 1) return
      appendStudyMinutes(mins)
      pomodoroPostedSeconds.current += mins * 60
    },
    [appendStudyMinutes]
  )

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running])

  useEffect(() => {
    if (!running || secondsLeft !== 0) return
    setRunning(false)
    if (mode === 'pomodoro') {
      flushPomodoroProgress(0)
      pomodoroPostedSeconds.current = 0
      setStatus('Session complete — take a break when you are ready.')
      setMode('short')
      setSecondsLeft(SHORT_SEC)
    } else {
      setStatus('Break finished. Ready for another focus block?')
      setMode('pomodoro')
      setSecondsLeft(POMO_SEC)
    }
  }, [running, secondsLeft, mode, flushPomodoroProgress])

  const switchMode = (next) => {
    setRunning(false)
    if (mode === 'pomodoro') {
      flushPomodoroProgress(secondsLeft)
      pomodoroPostedSeconds.current = 0
    }
    setMode(next)
    setSecondsLeft(modeTotalSeconds(next))
    setStatus('Ready to start')
  }

  const handleReset = () => {
    setRunning(false)
    if (mode === 'pomodoro') {
      flushPomodoroProgress(secondsLeft)
      pomodoroPostedSeconds.current = 0
    }
    setSecondsLeft(modeTotalSeconds(mode))
    setStatus('Ready to start')
  }

  const handleStartPause = () => {
    if (running) {
      if (mode === 'pomodoro') {
        flushPomodoroProgress(secondsLeft)
      }
      setRunning(false)
      setStatus('Paused')
      return
    }
    if (mode === 'pomodoro' && !selectedCourseId) {
      setStatus('Select a module to start tracking.')
      return
    }
    if (secondsLeft <= 0) {
      setSecondsLeft(modeTotalSeconds(mode))
    }
    setRunning(true)
    setStatus(mode === 'pomodoro' ? 'Stay focused…' : 'Relax and recharge…')
  }

  const chartTooltipStyle = {
    background: darkMode ? '#262626' : '#fff',
    border: `1px solid ${darkMode ? '#404040' : '#e5e7eb'}`,
    borderRadius: 8,
    fontSize: 12,
    color: darkMode ? '#e5e7eb' : '#111827',
  }
  const axisColor = darkMode ? '#9ca3af' : '#6b7280'
  const gridStroke = darkMode ? '#404040' : '#e5e7eb'

  const pomodoroStartDisabled = mode === 'pomodoro' && !selectedCourseId

  const weekYTicks = chartMinuteTicks(stats.maxDayMinutes)
  const weekYMax = weekYTicks[weekYTicks.length - 1] || 30
  const moduleYTicks = chartMinuteTicks(stats.maxModMinutes)
  const moduleYMax = moduleYTicks[moduleYTicks.length - 1] || 30

  return (
    <div
      css={css`
        width: 100%;
        padding-top: ${running ? '2.55rem' : '0'};
        transition: padding-top 0.2s ease;
      `}
    >
      {running ? (
        <div css={dndStrip} role="status" aria-live="polite">
          <div css={dndStripInner}>
            <HiOutlineBellSlash style={{ width: 17, height: 17, flexShrink: 0 }} aria-hidden />
            <span css={dndStripStrong}>Do Not Disturb is on</span>
            <span css={dndStripMeta}>
              Notifications, pop-ups, and non-essential banners are simulated as off. Prototype only — not your device
              settings; ends when you pause, reset, or finish.
            </span>
          </div>
        </div>
      ) : null}

      <h1 css={pageTitle(darkMode)}>Pomodoro Study Timer</h1>
      <p css={pageSub(darkMode)}>Track your study sessions and stay focused</p>

      {syncWarning && !running ? (
        <div css={syncBanner(darkMode)} role="status">
          {syncWarning}
        </div>
      ) : null}

      {loading ? (
        <p css={muted(darkMode)}>Loading your modules…</p>
      ) : (
        <>
          <div css={gridTop}>
            <section css={timerCard(darkMode)}>
              <div css={tabRow(darkMode)}>
                <button
                  type="button"
                  css={tabBtn(darkMode, mode === 'pomodoro')}
                  onClick={() => switchMode('pomodoro')}
                >
                  <HiOutlineCpuChip aria-hidden />
                  Pomodoro
                </button>
                <button
                  type="button"
                  css={tabBtn(darkMode, mode === 'short')}
                  onClick={() => switchMode('short')}
                >
                  <HiOutlineStopCircle aria-hidden />
                  Short Break
                </button>
                <button
                  type="button"
                  css={tabBtn(darkMode, mode === 'long')}
                  onClick={() => switchMode('long')}
                >
                  <HiOutlineMoon aria-hidden />
                  Long Break
                </button>
              </div>

              <label css={selectLabel(darkMode)} htmlFor="study-timer-module">
                Select module
              </label>
              <select
                id="study-timer-module"
                css={selectField(darkMode)}
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
              >
                {myCourses.length === 0 ? (
                  <option value="">No modules linked</option>
                ) : (
                  myCourses.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                      {[c.course_code || 'Course', c.course_name].filter(Boolean).join(' — ')}
                    </option>
                  ))
                )}
              </select>

              <div css={timerDigits(darkMode)}>{fmtMMSS(secondsLeft)}</div>
              <div css={progressTrack(darkMode)}>
                <div css={progressFill(progressPct)} />
              </div>
              <p css={statusText(darkMode)}>{status}</p>

              <div css={btnRow}>
                <button
                  type="button"
                  css={btnPrimary}
                  onClick={handleStartPause}
                  disabled={pomodoroStartDisabled && !running}
                >
                  {running ? <HiOutlinePause aria-hidden /> : <HiOutlinePlay aria-hidden />}
                  {running ? 'Pause' : 'Start'}
                </button>
                <button type="button" css={btnGhost(darkMode)} onClick={handleReset}>
                  <HiOutlineArrowPath aria-hidden />
                  Reset
                </button>
              </div>

              <div css={pillBadge(darkMode)}>
                <HiOutlineClock aria-hidden />
                {stats.todayPomos} Pomodoro{stats.todayPomos === 1 ? '' : 's'} completed today
              </div>
            </section>

            <div css={sidebarStack}>
              <section css={card(darkMode)}>
                <h2 css={sideCardTitle(darkMode)}>Today&apos;s Progress</h2>
                <div css={statRow}>
                  <div css={statHead}>
                    <span css={statLabel(darkMode)}>Study time</span>
                    <span css={statVal(darkMode)}>{Math.round(stats.studyMinutesToday)}m</span>
                  </div>
                  <div css={progressTrack(darkMode)}>
                    <div
                      css={progressFill(
                        Math.min(100, (stats.studyMinutesToday / DAILY_STUDY_GOAL_MINUTES) * 100)
                      )}
                    />
                  </div>
                </div>
                <div css={statRow}>
                  <div css={statHead}>
                    <span css={statLabel(darkMode)}>Pomodoros</span>
                    <span css={statVal(darkMode)}>{stats.todayPomos}</span>
                  </div>
                  <div css={segments}>
                    {Array.from({ length: DAILY_POMO_GOAL }, (_, i) => (
                      <div key={i} css={segment(darkMode, i < stats.todayPomos)} />
                    ))}
                  </div>
                </div>
              </section>

              <section css={weeklyCardFill(darkMode)}>
                <h2 css={sideCardTitle(darkMode)}>Weekly Summary</h2>
                <div css={summaryRowAccent(darkMode)}>
                  <span css={css`display:inline-flex;align-items:center;gap:.45rem;`}>
                    <HiOutlineClock aria-hidden />
                    Total (this week)
                  </span>
                  <span>{Math.round(stats.weekMinutesTotal)}m</span>
                </div>
                <div css={summaryRowPlain(darkMode)}>
                  <span css={css`display:inline-flex;align-items:center;gap:.45rem;`}>
                    <HiOutlineArrowTrendingUp aria-hidden />
                    Daily average
                  </span>
                  <span>{Math.round(stats.dailyAvgMinutes)}m</span>
                </div>
              </section>
            </div>
          </div>

          <div css={bottomPageStack}>
            <div css={chartsRowPair}>
              <section css={chartPanel(darkMode)}>
                <h2 css={chartCardTitle(darkMode)}>
                  <HiOutlineCalendarDays aria-hidden />
                  This Week&apos;s Study Time
                </h2>
                <div css={chartPlotArea}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats.byDow} margin={{ top: 10, right: 12, left: 0, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                      <XAxis dataKey="day" tick={{ fill: axisColor, fontSize: 12 }} />
                      <YAxis
                        domain={[0, weekYMax]}
                        tick={{ fill: axisColor, fontSize: 11 }}
                        width={40}
                        ticks={weekYTicks}
                        tickFormatter={(v) => `${Math.round(v)}m`}
                      />
                      <Tooltip
                        formatter={(v) => [`${typeof v === 'number' ? Math.round(v) : v} min`, 'Study time']}
                        contentStyle={chartTooltipStyle}
                      />
                      <Bar dataKey="minutes" fill={ACCENT} radius={[6, 6, 0, 0]} maxBarSize={48} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </section>

              <section css={chartPanel(darkMode)}>
                <h2 css={sideCardTitle(darkMode)}>Study time by module</h2>
                <div css={chartPlotArea}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stats.moduleRows} margin={{ top: 8, right: 8, left: 0, bottom: 36 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis
                        dataKey="code"
                        tick={{ fill: axisColor, fontSize: 11 }}
                        interval={0}
                        angle={-12}
                        textAnchor="end"
                        height={48}
                      />
                      <YAxis
                        domain={[0, moduleYMax]}
                        tick={{ fill: axisColor, fontSize: 11 }}
                        width={40}
                        ticks={moduleYTicks}
                        tickFormatter={(v) => `${Math.round(v)}m`}
                      />
                      <Tooltip
                        formatter={(v) => [`${typeof v === 'number' ? Math.round(v) : v} min`, 'This week']}
                        contentStyle={chartTooltipStyle}
                      />
                      <Line
                        type="monotone"
                        dataKey="minutes"
                        stroke={MODULE_LINE}
                        strokeWidth={2}
                        dot={{ r: 4, fill: MODULE_LINE }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </section>
            </div>

            <section css={tipsCard(darkMode)}>
              <h2 css={tipsTitle(darkMode)}>Pomodoro Tips</h2>
              <div css={tipsGridWrap}>
                <div css={tipLine(darkMode)}>
                  <HiOutlineCheckCircle aria-hidden />
                  <span>Work for 25 minutes without distractions</span>
                </div>
                <div css={tipLine(darkMode)}>
                  <HiOutlineCheckCircle aria-hidden />
                  <span>Take 5-minute breaks between sessions</span>
                </div>
                <div css={tipLine(darkMode)}>
                  <HiOutlineCheckCircle aria-hidden />
                  <span>After 4 pomodoros, take a 15-minute break</span>
                </div>
                <div css={tipLine(darkMode)}>
                  <HiOutlineCheckCircle aria-hidden />
                  <span>Select a module to track your study time</span>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  )
}

export default StudentStudyTimer
