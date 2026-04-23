/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import {
  HiOutlineBookOpen,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineTrophy,
  HiOutlineUserGroup,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import {
  SEMESTER_FORM_OPTIONS,
  COURSE_STUDY_YEAR_OPTIONS,
  getIntakeYearSelectRange,
} from '../courseDisplayUtils'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const ACCENT = '#7c3aed'
const BAR_PURPLE = '#8b5cf6'
const BAR_MIN = '#94a3b8'
const BAR_MAX = '#34d399'
const GRADE_COLORS = { P: '#60a5fa', M: '#a78bfa', D: '#34d399', U: '#94a3b8' }
const SUBMISSION_BAND_COLORS = { onTime: '#22c55e', late: '#f97316', missing: '#ef4444' }

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const titleStyles = css`
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
  letter-spacing: -0.02em;
`

const subStyles = (darkMode) => css`
  margin: 0 0 0.25rem;
  font-size: 0.95rem;
  color: ${darkMode ? '#a3a3a3' : '#6b7280'};
  line-height: 1.45;
`

const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const kpiCard = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.12)' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem;
  background: ${darkMode ? '#111827' : '#fff'};
`

const kpiLabelRow = css`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #7c3aed;
  margin-bottom: 0.45rem;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`

const kpiValue = css`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
`

const chartGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const chartQuickActions = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.15rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const quickActionPrimary = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.32);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(124, 58, 237, 0.42);
  }

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 2px;
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
  }
`

const quickActionSecondary = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  background: ${darkMode ? '#111827' : '#fff'};
  color: ${darkMode ? '#f9fafb' : '#111827'};
  border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.18)' : '#d1d5db'};
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${darkMode ? 'rgba(167, 139, 250, 0.55)' : '#9ca3af'};
    background: ${darkMode ? '#1f2937' : '#f9fafb'};
  }

  &:focus-visible {
    outline: 2px solid ${darkMode ? '#a78bfa' : '#7c3aed'};
    outline-offset: 2px;
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
    color: inherit;
  }
`

const panel = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.12)' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem;
  background: ${darkMode ? '#111827' : '#fff'};
`

const panelTitle = (darkMode) => css`
  margin: 0 0 0.75rem;
  font-size: 1.02rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const filterBlock = (darkMode) => css`
  margin-bottom: 0.85rem;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.12)' : '#e5e7eb'};
  background: ${darkMode ? '#0b1220' : '#f9fafb'};
`

const filterLabel = (darkMode) => css`
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const chipRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`

const chip = (darkMode, active) => css`
  border: 1px solid ${active ? '#7c3aed' : darkMode ? 'rgba(255,255,255,0.15)' : '#d1d5db'};
  background: ${active ? (darkMode ? 'rgba(124,58,237,0.25)' : '#ede9fe') : darkMode ? '#111827' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.28rem 0.55rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: #7c3aed;
  }
`

const chartBody = css`
  width: 100%;
  min-height: 260px;
`

const muted = (darkMode) => css`
  margin: 0;
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

function courseMatchesDashboardCohort(course, intakeYear, semester, studyYear) {
  if (intakeYear && String(course?.intake_year ?? '') !== String(intakeYear)) return false
  if (semester && String(course?.semester || '') !== semester) return false
  if (studyYear && String(course?.course_study_year || '') !== studyYear) return false
  return true
}

const selectRow = css`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
`

const selectLabel = (darkMode) => css`
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const moduleSelect = (darkMode) => css`
  width: 100%;
  max-width: 22rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.45rem 0.6rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : '#d1d5db'};
  background: ${darkMode ? '#111827' : '#fff'};
  color: ${darkMode ? '#f9fafb' : '#111827'};
  font-family: inherit;
`

const cohortFilterRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-end;
  margin-top: 0.55rem;
`

const cohortSelect = (darkMode) => css`
  min-width: 8.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.38rem 0.5rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : '#d1d5db'};
  background: ${darkMode ? '#111827' : '#fff'};
  color: ${darkMode ? '#f9fafb' : '#111827'};
  font-family: inherit;
`

const modalScrim = css`
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
`

const modalCard = (darkMode) => css`
  width: 100%;
  max-width: 420px;
  border-radius: 14px;
  padding: 1.1rem 1.15rem;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.12)' : '#e5e7eb'};
  background: ${darkMode ? '#111827' : '#fff'};
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
`

const modalTitle = (darkMode) => css`
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
  line-height: 1.3;
`

const modalMeta = (darkMode) => css`
  margin: 0 0 0.85rem;
  font-size: 0.85rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const statGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const statBox = (darkMode) => css`
  border-radius: 10px;
  padding: 0.55rem 0.5rem;
  text-align: center;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb'};
  background: ${darkMode ? '#0b1220' : '#f9fafb'};
`

const statVal = (darkMode) => css`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const statLbl = (darkMode) => css`
  margin: 0.2rem 0 0;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const modalActions = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
`

const modalBtnGhost = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : '#d1d5db'};
  background: transparent;
  color: ${darkMode ? '#e5e7eb' : '#374151'};
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
`

const modalBtnPrimary = css`
  border: none;
  background: #7c3aed;
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
`

const myCoursesSectionHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const myCoursesSectionTitle = (darkMode) => css`
  margin: 0;
  font-size: 1.22rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const myCoursesViewAllBtn = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  color: #7c3aed;
  padding: 0.35rem 0.25rem;
  border-radius: 8px;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #6d28d9;
    background: ${darkMode ? 'rgba(124, 58, 237, 0.12)' : 'rgba(124, 58, 237, 0.08)'};
  }

  &:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`

const myCoursesScrollWrap = (darkMode) => css`
  margin-top: 0.65rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 0.25rem;
  scrollbar-gutter: stable;

  max-height: 17.5rem;

  @media (max-width: 768px) {
    max-height: 30rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${darkMode ? 'rgba(255,255,255,0.06)' : '#f3f4f6'};
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkMode ? 'rgba(167, 139, 250, 0.35)' : '#c4b5fd'};
    border-radius: 8px;
  }
`

const myCoursesGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const myCourseCard = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1rem 1rem 0.85rem;
  background: ${darkMode ? '#0b1220' : '#fff'};
  display: flex;
  flex-direction: column;
  min-height: 0;
  transition:
    box-shadow 0.22s ease,
    transform 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${darkMode ? 'rgba(167, 139, 250, 0.5)' : '#d8b4fe'};
    box-shadow:
      0 14px 32px ${darkMode ? 'rgba(0, 0, 0, 0.45)' : 'rgba(17, 24, 39, 0.1)'},
      0 0 0 1px ${darkMode ? 'rgba(167, 139, 250, 0.2)' : 'rgba(124, 58, 237, 0.12)'};
  }
`

const myCourseCardTop = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
`

const myCourseCodeBadge = (darkMode) => css`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  background: ${darkMode ? 'rgba(255, 255, 255, 0.08)' : '#f3f4f6'};
  border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.12)' : '#e5e7eb'};
  padding: 0.22rem 0.55rem;
  border-radius: 8px;
`

const myCourseBookIcon = (darkMode) => css`
  width: 1.35rem;
  height: 1.35rem;
  color: ${darkMode ? '#9ca3af' : '#9ca3af'};
  flex-shrink: 0;
`

const myCourseCardHeading = (darkMode) => css`
  margin: 0 0 0.45rem;
  font-size: 1.12rem;
  font-weight: 800;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const myCourseCardDesc = (darkMode) => css`
  margin: 0 0 auto;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.55em;
`

const myCourseCreditsRow = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.08)' : '#f3f4f6'};
  font-size: 0.82rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const myCourseCreditBadge = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 800;
  color: #fff;
  background: #7c3aed;
  box-shadow: 0 2px 6px rgba(124, 58, 237, 0.35);
`

function classifyGradeBand(score) {
  const s = Number(score)
  if (!Number.isFinite(s)) return null
  if (s >= 70) return 'D'
  if (s >= 60) return 'M'
  if (s >= 40) return 'P'
  return 'U'
}

function buildCourseCardDescription(c) {
  const name = String(c.course_name || 'Module').trim()
  const dept = String(c.department || '').trim()
  const sem = String(c.semester || '').trim()
  const study = String(c.course_study_year || '').trim()
  const meta = [sem, study].filter(Boolean).join(' · ')
  if (meta && dept) return `${name}. ${meta} · ${dept}.`
  if (meta) return `${name}. ${meta}.`
  if (dept) return `${name} — ${dept}.`
  return `${name}.`
}

const PERF_STRUCTURE_STORAGE_PREFIX = 'strack_perf_assessments_'

function normalizeEmailKey(email) {
  return String(email || '').trim().toLowerCase()
}

function readPerfStructureLabelsByCourse(userEmail) {
  if (!userEmail) return {}
  try {
    const raw = localStorage.getItem(`${PERF_STRUCTURE_STORAGE_PREFIX}${normalizeEmailKey(userEmail)}`)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    const out = {}
    Object.entries(parsed).forEach(([cid, list]) => {
      if (!Array.isArray(list)) return
      const m = {}
      list.forEach((a) => {
        if (!a || a.id == null) return
        const id = String(a.id)
        const nm = String(a.name ?? '').trim()
        if (nm) m[id] = nm
      })
      out[String(cid)] = m
    })
    return out
  } catch {
    return {}
  }
}

function resolveAssessmentDisplayName(assessmentId, apiLabelMap, localLabelMap) {
  const id = String(assessmentId)
  const api = String(apiLabelMap?.[id] ?? '').trim()
  const loc = String(localLabelMap?.[id] ?? '').trim()
  if (loc && loc !== id) return loc
  if (api && api !== id) return api
  if (api) return api
  if (loc) return loc
  return id
}

function buildPerAssessmentStats(
  nestedScores,
  courseIdStr,
  apiLabelMap,
  localLabelMap,
  nestedStatuses = null
) {
  const byStudent = nestedScores?.[courseIdStr]
  if (!byStudent || typeof byStudent !== 'object') return []
  const api = apiLabelMap && typeof apiLabelMap === 'object' ? apiLabelMap : {}
  const loc = localLabelMap && typeof localLabelMap === 'object' ? localLabelMap : {}
  const byAid = new Map()
  Object.entries(byStudent).forEach(([studentId, marks]) => {
    if (!marks || typeof marks !== 'object') return
    Object.entries(marks).forEach(([aid, raw]) => {
      const st = nestedStatuses?.[courseIdStr]?.[studentId]?.[aid]
      if (st === 'not_marked') return
      const n = Number(raw)
      if (!Number.isFinite(n)) return
      const key = String(aid)
      if (!byAid.has(key)) byAid.set(key, [])
      byAid.get(key).push(n)
    })
  })
  const rows = []
  byAid.forEach((vals, aid) => {
    const id = String(aid)
    const min = Math.min(...vals)
    const max = Math.max(...vals)
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length
    const full = resolveAssessmentDisplayName(id, api, loc)
    rows.push({
      assessmentId: id,
      fullLabel: full,
      name: full.length > 18 ? `${full.slice(0, 16)}…` : full,
      min: Math.round(min * 10) / 10,
      max: Math.round(max * 10) / 10,
      avg: Math.round(avg * 10) / 10,
      markCount: vals.length,
      apiAssessmentLabel: String(api[id] ?? '').trim(),
      localColumnTitle: String(loc[id] ?? '').trim(),
    })
  })
  rows.sort((a, b) => a.fullLabel.localeCompare(b.fullLabel, undefined, { sensitivity: 'base' }))
  return rows
}

function mapSubmissionBandsToChartRows(bands) {
  if (!Array.isArray(bands)) return []
  return bands
    .map((r) => {
      const d = String(r.entry_date || '')
      const code = String(r.course_code || 'Module')
      const xLabel = d.length >= 10 ? `${d.slice(5)} · ${code}` : code
      const timePart = String(r.start_time || '00:00:00').slice(0, 8)
      return {
        id: r.timetable_entry_id,
        dueDate: d,
        xLabel,
        sortKey: `${d}T${timePart}#${r.timetable_entry_id}`,
        assignmentTitle: String(r.event_title || 'Assignment'),
        courseLine: r.course_name ? `${r.course_code} — ${r.course_name}` : String(r.course_code || ''),
        onTime: Number(r.on_time) || 0,
        late: Number(r.late) || 0,
        missing: Number(r.missing) || 0,
        enrolled: Number(r.enrolled) || 0,
        onTimeCount: Number(r.on_time_count) || 0,
        lateCount: Number(r.late_count) || 0,
        missingCount: Number(r.missing_count) || 0,
      }
    })
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
}

function LecturerDashboardHome({
  darkMode,
  userEmail,
  onOpenPerformance,
  onGoToAttendance,
  onGoToGrades,
  onViewAllCourses,
}) {
  const [loading, setLoading] = useState(true)
  const [myCourses, setMyCourses] = useState([])
  const [nestedScores, setNestedScores] = useState({})
  const [nestedStatuses, setNestedStatuses] = useState({})
  const [rollup, setRollup] = useState({ present: 0, late: 0, absent: 0, total: 0, rate: 0 })
  const [trend, setTrend] = useState([])
  const [assignmentSubmissionBands, setAssignmentSubmissionBands] = useState([])
  const [labelsByCourse, setLabelsByCourse] = useState({})
  const [performanceFocusCourseId, setPerformanceFocusCourseId] = useState('')
  const [assessmentDetailModal, setAssessmentDetailModal] = useState(null)
  const [structureLabelTick, setStructureLabelTick] = useState(0)
  const [selectedCourseIds, setSelectedCourseIds] = useState(null)
  const [fltIntakeYear, setFltIntakeYear] = useState('')
  const [fltSemester, setFltSemester] = useState('')
  const [fltStudyYear, setFltStudyYear] = useState('')

  const cohortFilteredCourses = useMemo(
    () => myCourses.filter((c) => courseMatchesDashboardCohort(c, fltIntakeYear, fltSemester, fltStudyYear)),
    [myCourses, fltIntakeYear, fltSemester, fltStudyYear]
  )

  const cohortCourseIdsSorted = useMemo(
    () =>
      cohortFilteredCourses
        .map((c) => Number(c.id))
        .filter((id) => Number.isFinite(id) && id > 0)
        .sort((a, b) => a - b),
    [cohortFilteredCourses]
  )

  const intakeYearOptions = useMemo(() => {
    const fromCourses = new Set()
    myCourses.forEach((c) => {
      const y = Number(c.intake_year)
      if (Number.isFinite(y) && y > 0) fromCourses.add(y)
    })
    const range = getIntakeYearSelectRange()
    const merged = new Set([...range, ...fromCourses])
    return [...merged].sort((a, b) => a - b)
  }, [myCourses])

  useEffect(() => {
    setSelectedCourseIds(null)
  }, [fltIntakeYear, fltSemester, fltStudyYear])

  useEffect(() => {
    if (cohortCourseIdsSorted.length === 0) {
      setSelectedCourseIds([])
      return
    }
    setSelectedCourseIds((prev) => {
      if (prev === null) return null
      if (prev.length === 0) return []
      const valid = new Set(cohortCourseIdsSorted)
      return [...prev.filter((id) => valid.has(id)), ...cohortCourseIdsSorted.filter((id) => !prev.includes(id))].sort(
        (a, b) => a - b
      )
    })
  }, [cohortCourseIdsSorted])

  const effectiveCourseIds = useMemo(() => {
    if (selectedCourseIds === null) return cohortCourseIdsSorted
    const allowed = new Set(cohortCourseIdsSorted)
    return selectedCourseIds.filter((id) => allowed.has(id))
  }, [selectedCourseIds, cohortCourseIdsSorted])

  const effectiveCourseIdsKey = useMemo(() => effectiveCourseIds.join(','), [effectiveCourseIds])

  const coursesForPerformanceSelect = useMemo(() => {
    const sel = new Set(effectiveCourseIds)
    return [...myCourses]
      .filter((c) => sel.has(Number(c.id)))
      .sort((a, b) => String(a.course_code || '').localeCompare(String(b.course_code || '')))
  }, [myCourses, effectiveCourseIds])

  const dashboardMyCoursesCards = useMemo(() => {
    const sel = new Set(effectiveCourseIds)
    return [...cohortFilteredCourses]
      .filter((c) => sel.has(Number(c.id)))
      .sort((a, b) => String(a.course_code || '').localeCompare(String(b.course_code || '')))
  }, [cohortFilteredCourses, effectiveCourseIds])

  const fetchAttendanceSlice = useCallback(async () => {
    if (!userEmail) return
    if (effectiveCourseIds.length === 0) {
      setRollup({ present: 0, late: 0, absent: 0, total: 0, rate: 0 })
      setTrend([])
      return
    }
    const params = new URLSearchParams({
      user_email: userEmail,
      lecturer_summary: '1',
      t: String(Date.now()),
    })
    if (effectiveCourseIds.length > 0) {
      params.set('course_ids', effectiveCourseIds.join(','))
    }
    const res = await fetch(`${apiBase}/backend/attendance_marks.php?${params}`, { cache: 'no-store' })
    const data = await res.json().catch(() => ({}))
    if (!data.success) {
      setRollup({ present: 0, late: 0, absent: 0, total: 0, rate: 0 })
      setTrend([])
      return
    }
    setRollup(
      data.rollup || {
        present: 0,
        late: 0,
        absent: 0,
        total: 0,
        rate: 0,
      }
    )
    setTrend(Array.isArray(data.trend) ? data.trend : [])
  }, [userEmail, effectiveCourseIds, effectiveCourseIdsKey, cohortCourseIdsSorted.join(',')])

  useEffect(() => {
    if (!userEmail) return
    let active = true
    async function load() {
      setLoading(true)
      try {
        const [lectRes, courseRes] = await Promise.all([
          fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        ])
        const [lectData, courseData] = await Promise.all([lectRes.json(), courseRes.json()])
        if (!active) return
        const lecturers = lectData.success ? lectData.lecturers || [] : []
        const courses = courseData.success ? courseData.courses || [] : []
        const emailLower = String(userEmail).trim().toLowerCase()
        const me = lecturers.find((l) => String(l.email || '').trim().toLowerCase() === emailLower)
        const lid = String(me?.lecturer_id || '').trim()
        const myList = courses.filter((c) => String(c.lecturer_id || '').trim() === lid)
        setMyCourses(myList)
        setFltIntakeYear('')
        setFltSemester('')
        setFltStudyYear('')
        setSelectedCourseIds(null)
      } catch (_) {
        if (!active) return
        setMyCourses([])
        setNestedScores({})
        setNestedStatuses({})
        setLabelsByCourse({})
        setRollup({ present: 0, late: 0, absent: 0, total: 0, rate: 0 })
        setTrend([])
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
    if (!userEmail || myCourses.length === 0) {
      setNestedScores({})
      setNestedStatuses({})
      setLabelsByCourse({})
      return undefined
    }
    if (effectiveCourseIds.length === 0) {
      setNestedScores({})
      setNestedStatuses({})
      setLabelsByCourse({})
      return undefined
    }
    let cancelled = false
    const params = new URLSearchParams({
      user_email: userEmail,
      lecturer_sync: '1',
      t: String(Date.now()),
    })
    if (effectiveCourseIds.length > 0) {
      params.set('course_ids', effectiveCourseIds.join(','))
    }
    ;(async () => {
      try {
        const scoreRes = await fetch(`${apiBase}/backend/assessment_scores.php?${params}`, { cache: 'no-store' })
        const scoreData = await scoreRes.json().catch(() => ({}))
        if (cancelled) return
        if (scoreData.success && scoreData.nested && typeof scoreData.nested === 'object') {
          setNestedScores(scoreData.nested)
        } else {
          setNestedScores({})
        }
        if (scoreData.success && scoreData.nested_status && typeof scoreData.nested_status === 'object') {
          setNestedStatuses(scoreData.nested_status)
        } else {
          setNestedStatuses({})
        }
        const rawLabels = scoreData.labels_by_course
        if (rawLabels && typeof rawLabels === 'object' && !Array.isArray(rawLabels)) {
          const next = {}
          Object.entries(rawLabels).forEach(([cid, map]) => {
            if (map && typeof map === 'object' && !Array.isArray(map)) {
              const inner = {}
              Object.entries(map).forEach(([aid, lab]) => {
                inner[String(aid)] = String(lab ?? '').trim() || String(aid)
              })
              next[String(cid)] = inner
            }
          })
          setLabelsByCourse(next)
        } else {
          setLabelsByCourse({})
        }
        setStructureLabelTick((t) => t + 1)
      } catch (_) {
        if (!cancelled) {
          setNestedScores({})
          setNestedStatuses({})
          setLabelsByCourse({})
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail, myCourses.length, effectiveCourseIdsKey, cohortCourseIdsSorted.join(',')])

  useEffect(() => {
    if (!userEmail || effectiveCourseIds.length === 0) {
      setAssignmentSubmissionBands([])
      return undefined
    }
    let cancelled = false
    const from = new Date()
    from.setMonth(from.getMonth() - 6)
    const to = new Date()
    to.setMonth(to.getMonth() + 12)
    const fromStr = from.toISOString().slice(0, 10)
    const toStr = to.toISOString().slice(0, 10)
    ;(async () => {
      try {
        const params = new URLSearchParams({
          lecturer_submission_bands: '1',
          lecturer_email: userEmail,
          course_ids: effectiveCourseIds.join(','),
          from: fromStr,
          to: toStr,
          t: String(Date.now()),
        })
        const res = await fetch(`${apiBase}/backend/demo_assignment_submissions.php?${params}`, { cache: 'no-store' })
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        setAssignmentSubmissionBands(Array.isArray(data.submission_bands) ? data.submission_bands : [])
      } catch (_) {
        if (!cancelled) setAssignmentSubmissionBands([])
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail, effectiveCourseIdsKey])

  useEffect(() => {
    if (!userEmail) return
    let cancelled = false
    ;(async () => {
      try {
        await fetchAttendanceSlice()
      } catch (_) {
        if (!cancelled) {
          setRollup({ present: 0, late: 0, absent: 0, total: 0, rate: 0 })
          setTrend([])
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail, fetchAttendanceSlice])

  useEffect(() => {
    const bump = () => setStructureLabelTick((t) => t + 1)
    window.addEventListener('focus', bump)
    const onVis = () => {
      if (document.visibilityState === 'visible') bump()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      window.removeEventListener('focus', bump)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  useEffect(() => {
    if (!performanceFocusCourseId) return
    const n = Number(performanceFocusCourseId)
    if (!Number.isFinite(n) || !effectiveCourseIds.includes(n)) {
      setPerformanceFocusCourseId('')
    }
  }, [effectiveCourseIdsKey, performanceFocusCourseId, effectiveCourseIds])

  useLayoutEffect(() => {
    if (loading) return
    if (coursesForPerformanceSelect.length === 0) {
      setPerformanceFocusCourseId('')
      return
    }
    setPerformanceFocusCourseId((prev) => {
      const valid = new Set(coursesForPerformanceSelect.map((c) => String(c.id)))
      if (prev && valid.has(String(prev))) return prev
      return String(coursesForPerformanceSelect[0].id)
    })
  }, [loading, coursesForPerformanceSelect])

  useEffect(() => {
    if (!assessmentDetailModal) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setAssessmentDetailModal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [assessmentDetailModal])

  const performanceFocusCourseLabel = useMemo(() => {
    if (!performanceFocusCourseId) return ''
    const c = myCourses.find((x) => String(x.id) === String(performanceFocusCourseId))
    if (!c) return ''
    const code = c.course_code || 'Module'
    const name = c.course_name ? ` — ${c.course_name}` : ''
    return `${code}${name}`
  }, [myCourses, performanceFocusCourseId])

  const structureLabelsByCourse = useMemo(
    () => readPerfStructureLabelsByCourse(userEmail),
    [userEmail, structureLabelTick]
  )

  const assignmentDueLineData = useMemo(
    () => mapSubmissionBandsToChartRows(assignmentSubmissionBands),
    [assignmentSubmissionBands]
  )

  const performanceByAssessmentChartData = useMemo(() => {
    if (!performanceFocusCourseId) return []
    const cid = String(performanceFocusCourseId)
    return buildPerAssessmentStats(
      nestedScores,
      cid,
      labelsByCourse[cid] || {},
      structureLabelsByCourse[cid] || {},
      nestedStatuses
    )
  }, [nestedScores, nestedStatuses, performanceFocusCourseId, labelsByCourse, structureLabelsByCourse])

  const totalStudents = useMemo(() => {
    const set = new Set()
    const allowed = new Set(effectiveCourseIds)
    myCourses.forEach((course) => {
      const cid = Number(course.id)
      if (!allowed.has(cid)) return
      ;(Array.isArray(course.students) ? course.students : []).forEach((s) => {
        set.add(String(s.id))
      })
    })
    return set.size
  }, [myCourses, effectiveCourseIds])

  const activeCourses = useMemo(() => effectiveCourseIds.length, [effectiveCourseIds])

  const avgAttendancePct = useMemo(() => {
    const t = Number(rollup.total || 0)
    const p = Number(rollup.present || 0)
    if (t <= 0) return 0
    return Math.round((p / t) * 100)
  }, [rollup])

  const gradeFilteredScores = useMemo(() => {
    const allowed = new Set(effectiveCourseIds)
    const scores = []
    Object.entries(nestedScores).forEach(([cid, byStudent]) => {
      const courseId = Number(cid)
      if (!allowed.has(courseId)) return
      if (!byStudent || typeof byStudent !== 'object') return
      Object.entries(byStudent).forEach(([studentId, assessMap]) => {
        if (!assessMap || typeof assessMap !== 'object') return
        Object.entries(assessMap).forEach(([aid, raw]) => {
          const st = nestedStatuses?.[cid]?.[studentId]?.[aid]
          if (st === 'not_marked') return
          const n = Number(raw)
          if (Number.isFinite(n)) scores.push(n)
        })
      })
    })
    return scores
  }, [nestedScores, nestedStatuses, effectiveCourseIds])

  const gradeBarData = useMemo(() => {
    let p = 0
    let m = 0
    let d = 0
    let u = 0
    gradeFilteredScores.forEach((s) => {
      const b = classifyGradeBand(s)
      if (b === 'P') p += 1
      else if (b === 'M') m += 1
      else if (b === 'D') d += 1
      else u += 1
    })
    return [
      { band: 'F', key: 'U', count: u, fill: GRADE_COLORS.U },
      { band: 'P (Pass)', key: 'P', count: p, fill: GRADE_COLORS.P },
      { band: 'M (Merit)', key: 'M', count: m, fill: GRADE_COLORS.M },
      { band: 'D (Distinction)', key: 'D', count: d, fill: GRADE_COLORS.D },
    ]
  }, [gradeFilteredScores])

  const trendChartData = useMemo(() => {
    return trend.map((row) => {
      const t = Number(row.total) || 0
      const absent = Number(row.absent) || 0
      const absentRate = t > 0 ? Math.round((absent / t) * 100) : 0
      return {
        ...row,
        absentRate,
        label:
          row.session_date && String(row.session_date).length >= 10
            ? String(row.session_date).slice(5)
            : row.session_date || '',
      }
    })
  }, [trend])

  const handlePerformanceAssessmentBarClick = useCallback((data) => {
    const payload = data?.payload && typeof data.payload === 'object' ? data.payload : data
    if (!payload?.assessmentId) return
    setAssessmentDetailModal({
      assessmentId: String(payload.assessmentId),
      fullLabel: String(payload.fullLabel || payload.name || 'Assessment'),
      min: Number(payload.min) || 0,
      avg: Number(payload.avg) || 0,
      max: Number(payload.max) || 0,
      markCount: Number(payload.markCount) || 0,
      apiAssessmentLabel: String(payload.apiAssessmentLabel ?? '').trim(),
      localColumnTitle: String(payload.localColumnTitle ?? '').trim(),
    })
  }, [])

  const openPerformanceFromModal = useCallback(() => {
    if (!assessmentDetailModal?.assessmentId || !performanceFocusCourseId || !onOpenPerformance) return
    onOpenPerformance({
      assessmentId: String(assessmentDetailModal.assessmentId),
      courseId: String(performanceFocusCourseId),
    })
    setAssessmentDetailModal(null)
  }, [assessmentDetailModal, performanceFocusCourseId, onOpenPerformance])

  const chartTooltipStyle = useMemo(
    () => ({
      backgroundColor: darkMode ? '#1f2937' : '#fff',
      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
      borderRadius: 8,
      color: darkMode ? '#f9fafb' : '#111827',
    }),
    [darkMode]
  )
  const axisStroke = darkMode ? '#9ca3af' : '#6b7280'
  const gridStroke = darkMode ? '#374151' : '#e5e7eb'

  const toggleCourse = (id) => {
    const cid = Number(id)
    if (!Number.isFinite(cid) || cid <= 0) return
    setSelectedCourseIds((prev) => {
      const base = prev === null ? [...cohortCourseIdsSorted] : [...prev]
      if (base.includes(cid)) return base.filter((x) => x !== cid)
      return [...base, cid].sort((a, b) => a - b)
    })
  }

  const selectAllCourses = () => setSelectedCourseIds(null)
  const clearCourseFilter = () => setSelectedCourseIds([])

  const filterSummary =
    cohortCourseIdsSorted.length === 0
      ? 'No modules match cohort filters'
      : effectiveCourseIds.length === 0
        ? 'None selected'
        : selectedCourseIds === null || effectiveCourseIds.length === cohortCourseIdsSorted.length
          ? `All ${cohortCourseIdsSorted.length} module${cohortCourseIdsSorted.length === 1 ? '' : 's'}`
          : `${effectiveCourseIds.length} module${effectiveCourseIds.length === 1 ? '' : 's'}`

  return (
    <div css={wrap}>
      <h1 css={titleStyles}>Dashboard</h1>
      <p css={subStyles(darkMode)}>
        Overview of your teaching load, cohort attendance, and assessment outcomes. Narrow by intake year, semester,
        and study year, then use module chips (reload defaults to <strong>all modules</strong> selected).
      </p>

      <div css={kpiGrid}>
        <article css={kpiCard(darkMode)}>
          <div css={kpiLabelRow}>
            <HiOutlineUserGroup aria-hidden />
            <span>Total students</span>
          </div>
          <p css={kpiValue}>{loading ? '—' : totalStudents}</p>
        </article>
        <article css={kpiCard(darkMode)}>
          <div css={kpiLabelRow}>
            <HiOutlineClipboardDocumentCheck aria-hidden />
            <span>Avg attendance</span>
          </div>
          <p css={kpiValue}>{loading ? '—' : `${avgAttendancePct}%`}</p>
        </article>
        <article css={kpiCard(darkMode)}>
          <div css={kpiLabelRow}>
            <HiOutlineBookOpen aria-hidden />
            <span>Active courses</span>
          </div>
          <p css={kpiValue}>{loading ? '—' : activeCourses}</p>
        </article>
      </div>

      <div css={filterBlock(darkMode)}>
        <p css={filterLabel(darkMode)}>Cohort &amp; module filters</p>
        <div css={cohortFilterRow}>
          <div css={selectRow} style={{ marginBottom: 0, minWidth: '7.5rem' }}>
            <label css={selectLabel(darkMode)} htmlFor="dash-flt-intake">
              Intake year
            </label>
            <select
              id="dash-flt-intake"
              css={cohortSelect(darkMode)}
              value={fltIntakeYear}
              onChange={(e) => setFltIntakeYear(e.target.value)}
            >
              <option value="">Any</option>
              {intakeYearOptions.map((y) => (
                <option key={y} value={String(y)}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div css={selectRow} style={{ marginBottom: 0, minWidth: '9.5rem' }}>
            <label css={selectLabel(darkMode)} htmlFor="dash-flt-sem">
              Semester
            </label>
            <select
              id="dash-flt-sem"
              css={cohortSelect(darkMode)}
              value={fltSemester}
              onChange={(e) => setFltSemester(e.target.value)}
            >
              {SEMESTER_FORM_OPTIONS.map((o) => (
                <option key={o.value || 'any'} value={o.value}>
                  {o.value ? o.label : 'Any'}
                </option>
              ))}
            </select>
          </div>
          <div css={selectRow} style={{ marginBottom: 0, minWidth: '9rem' }}>
            <label css={selectLabel(darkMode)} htmlFor="dash-flt-study">
              Study year
            </label>
            <select
              id="dash-flt-study"
              css={cohortSelect(darkMode)}
              value={fltStudyYear}
              onChange={(e) => setFltStudyYear(e.target.value)}
            >
              {COURSE_STUDY_YEAR_OPTIONS.map((o) => (
                <option key={o.value || 'any'} value={o.value}>
                  {o.value ? o.label : 'Any'}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p css={[filterLabel(darkMode), css`margin-top:0.65rem;`]}>Modules in scope</p>
        <div css={chipRow}>
          <button type="button" css={chip(darkMode, false)} onClick={selectAllCourses}>
            Select all
          </button>
          <button type="button" css={chip(darkMode, false)} onClick={clearCourseFilter}>
            Clear
          </button>
          <span css={css`align-self:center;font-size:0.82rem;color:${darkMode ? '#9ca3af' : '#6b7280'};font-weight:600;`}>
            {filterSummary}
          </span>
        </div>
        {cohortFilteredCourses.length > 0 ? (
          <div css={[chipRow, css`margin-top:0.55rem;`]}>
            {cohortFilteredCourses.map((c) => {
              const id = Number(c.id)
              const active = effectiveCourseIds.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  css={chip(darkMode, active)}
                  onClick={() => toggleCourse(id)}
                >
                  {c.course_code || 'Module'}
                </button>
              )
            })}
          </div>
        ) : myCourses.length > 0 ? (
          <p css={muted(darkMode)} style={{ marginTop: '0.45rem' }}>
            No modules match the cohort filters above. Set filters to &quot;Any&quot; to see all your modules.
          </p>
        ) : (
          <p css={muted(darkMode)} style={{ marginTop: '0.45rem' }}>
            No courses assigned to your lecturer account.
          </p>
        )}
      </div>

      <div css={chartGrid}>
        <section css={panel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineChartBar style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 6 }} />
            Grade distribution (all bands)
          </h2>
          {loading ? (
            <p css={muted(darkMode)}>Loading…</p>
          ) : (
            <div css={chartBody}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={gradeBarData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="band" tick={{ fill: axisStroke, fontSize: 10 }} interval={0} angle={-12} textAnchor="end" height={52} />
                  <YAxis allowDecimals={false} tick={{ fill: axisStroke, fontSize: 11 }} width={40} />
                  <Tooltip
                    formatter={(v) => [String(v), 'Total students']}
                    contentStyle={chartTooltipStyle}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]} maxBarSize={56}>
                    {gradeBarData.map((e) => (
                      <Cell key={e.key} fill={e.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              {gradeFilteredScores.length === 0 ? (
                <p css={[muted(darkMode), css`margin-top: 0.25rem;`]}>No assessment marks yet. Add scores under Performance.</p>
              ) : null}
            </div>
          )}
        </section>

        <section css={panel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>Attendance trend</h2>
          {loading ? (
            <p css={muted(darkMode)}>Loading…</p>
          ) : effectiveCourseIds.length === 0 ? (
            <p css={muted(darkMode)}>Select at least one module to show attendance.</p>
          ) : trendChartData.length === 0 ? (
            <p css={muted(darkMode)}>No attendance sessions recorded for this selection yet.</p>
          ) : (
            <div css={chartBody}>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={trendChartData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="label" tick={{ fill: axisStroke, fontSize: 10 }} interval="preserveStartEnd" />
                  <YAxis domain={[0, 100]} tick={{ fill: axisStroke, fontSize: 11 }} width={36} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    formatter={(v, name, props) => {
                      const key = props?.dataKey
                      if (key === 'rate') return [`${v}%`, 'Present rate']
                      if (key === 'absentRate') return [`${v}%`, 'Absent rate']
                      return [`${v}%`, name]
                    }}
                    labelFormatter={(l) => `Class day ${l}`}
                    contentStyle={chartTooltipStyle}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="rate" name="Present %" stroke={ACCENT} strokeWidth={2} dot={{ r: 3 }} />
                  <Line
                    type="monotone"
                    dataKey="absentRate"
                    name="Absent %"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </section>

        <section css={panel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineCheckCircle style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 6 }} />
            Assignment submission trends
          </h2>
          {loading ? (
            <p css={muted(darkMode)}>Loading…</p>
          ) : effectiveCourseIds.length === 0 ? (
            <p css={muted(darkMode)}>Select at least one module to show charts.</p>
          ) : (
            <div css={chartBody}>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={assignmentDueLineData} margin={{ top: 8, right: 12, left: 0, bottom: 52 }} barCategoryGap="18%">
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis
                    dataKey="xLabel"
                    tick={{ fill: axisStroke, fontSize: 10 }}
                    interval={0}
                    angle={-32}
                    textAnchor="end"
                    height={68}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: axisStroke, fontSize: 11 }}
                    width={44}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null
                      const p = payload[0].payload
                      const dueFmt =
                        p.dueDate && /^\d{4}-\d{2}-\d{2}$/.test(p.dueDate)
                          ? new Date(`${p.dueDate}T12:00:00`).toLocaleDateString(undefined, {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          : p.dueDate || ''
                      const hasData = Number(p.enrolled) > 0
                      return (
                        <div
                          style={{
                            padding: '0.5rem 0.65rem',
                            fontSize: '0.82rem',
                            lineHeight: 1.45,
                            maxWidth: '22rem',
                            backgroundColor: darkMode ? '#1f2937' : '#fff',
                            border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                            borderRadius: 8,
                            color: darkMode ? '#f9fafb' : '#111827',
                          }}
                        >
                          <div style={{ fontWeight: 800, marginBottom: '0.35rem' }}>{dueFmt}</div>
                          <div style={{ opacity: 0.95 }}>{p.courseLine}</div>
                          <div style={{ marginTop: '0.25rem', fontWeight: 600 }}>{p.assignmentTitle}</div>
                          {hasData ? (
                            <div style={{ marginTop: '0.45rem' }}>
                              <div style={{ color: SUBMISSION_BAND_COLORS.onTime }}>
                                On time (by deadline): <strong>{p.onTime}%</strong>
                                {p.onTimeCount != null ? ` (${p.onTimeCount} students)` : ''}
                              </div>
                              <div style={{ color: SUBMISSION_BAND_COLORS.late }}>
                                Late (after deadline): <strong>{p.late}%</strong>
                                {p.lateCount != null ? ` (${p.lateCount} students)` : ''}
                              </div>
                              <div style={{ color: SUBMISSION_BAND_COLORS.missing }}>
                                Missing (no upload): <strong>{p.missing}%</strong>
                                {p.missingCount != null ? ` (${p.missingCount} students)` : ''}
                              </div>
                              <div style={{ marginTop: '0.35rem', fontSize: '0.78rem', opacity: 0.88 }}>
                                Enrolled students: {p.enrolled}
                              </div>
                            </div>
                          ) : (
                            <div style={{ marginTop: '0.4rem', fontSize: '0.8rem', opacity: 0.88 }}>
                              No students enrolled on this module for this count.
                            </div>
                          )}
                        </div>
                      )
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="onTime"
                    name="On time (by deadline)"
                    stackId="bands"
                    fill={SUBMISSION_BAND_COLORS.onTime}
                    maxBarSize={48}
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="late"
                    name="Late (after deadline)"
                    stackId="bands"
                    fill={SUBMISSION_BAND_COLORS.late}
                    maxBarSize={48}
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="missing"
                    name="Missing (no upload)"
                    stackId="bands"
                    fill={SUBMISSION_BAND_COLORS.missing}
                    maxBarSize={48}
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              {assignmentDueLineData.length === 0 ? (
                <p css={[muted(darkMode), css`margin-top: 0.25rem;`]}>
                  No assignment due dates in Calendar for the selected modules (add events in the Calendar tab).
                </p>
              ) : null}
            </div>
          )}
        </section>

        <section css={panel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineChartBar style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 6 }} />
            Performance by assessment
          </h2>
          {loading ? (
            <p css={muted(darkMode)}>Loading…</p>
          ) : effectiveCourseIds.length === 0 ? (
            <p css={muted(darkMode)}>Select at least one module in the filter above to use this chart.</p>
          ) : coursesForPerformanceSelect.length === 0 ? (
            <p css={muted(darkMode)}>No modules in the current selection.</p>
          ) : (
            <>
              <div css={selectRow}>
                <label htmlFor="perf-module-select" css={selectLabel(darkMode)}>
                  Module (one subject)
                </label>
                <select
                  id="perf-module-select"
                  css={moduleSelect(darkMode)}
                  value={performanceFocusCourseId}
                  onChange={(e) => setPerformanceFocusCourseId(e.target.value)}
                >
                  {coursesForPerformanceSelect.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                      {(c.course_code || 'Module') + (c.course_name ? ` — ${c.course_name}` : '')}
                    </option>
                  ))}
                </select>
              </div>
              {!performanceFocusCourseId ? (
                <p css={muted(darkMode)}>Loading…</p>
              ) : performanceByAssessmentChartData.length === 0 ? (
                <p css={muted(darkMode)}>No assessment marks saved for this module yet. Enter scores under Performance.</p>
              ) : (
                <div css={chartBody}>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={performanceByAssessmentChartData} margin={{ top: 8, right: 12, left: 0, bottom: 56 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: axisStroke, fontSize: 10 }}
                        interval={0}
                        angle={-20}
                        textAnchor="end"
                        height={52}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fill: axisStroke, fontSize: 11 }}
                        width={40}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip
                        contentStyle={chartTooltipStyle}
                        formatter={(value, name) => [`${value}%`, name]}
                        labelFormatter={(_, payload) => payload?.[0]?.payload?.fullLabel || ''}
                      />
                      <Legend />
                      <Bar
                        dataKey="min"
                        name="Min"
                        fill={BAR_MIN}
                        radius={[6, 0, 0, 6]}
                        maxBarSize={28}
                        cursor="pointer"
                        onClick={handlePerformanceAssessmentBarClick}
                      />
                      <Bar
                        dataKey="avg"
                        name="Average"
                        fill={BAR_PURPLE}
                        maxBarSize={28}
                        cursor="pointer"
                        onClick={handlePerformanceAssessmentBarClick}
                      />
                      <Bar
                        dataKey="max"
                        name="Max"
                        fill={BAR_MAX}
                        radius={[0, 6, 6, 0]}
                        maxBarSize={28}
                        cursor="pointer"
                        onClick={handlePerformanceAssessmentBarClick}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {(onGoToAttendance || onGoToGrades) && (
        <div css={chartQuickActions}>
          {onGoToAttendance ? (
            <button
              type="button"
              css={quickActionPrimary}
              onClick={onGoToAttendance}
              aria-label="Open attendance – mark attendance for your sessions"
            >
              <HiOutlineCheckCircle aria-hidden />
              Mark Attendance
            </button>
          ) : null}
          {onGoToGrades ? (
            <button
              type="button"
              css={quickActionSecondary(darkMode)}
              onClick={onGoToGrades}
              aria-label="Open performance – update grades"
            >
              <HiOutlineTrophy aria-hidden />
              Update Grades
            </button>
          ) : null}
        </div>
      )}

      <section css={panel(darkMode)} aria-labelledby="dash-my-courses-heading">
        <div css={myCoursesSectionHeader}>
          <h2 id="dash-my-courses-heading" css={myCoursesSectionTitle(darkMode)}>
            My Courses
          </h2>
          {onViewAllCourses && !loading && dashboardMyCoursesCards.length > 0 ? (
            <button
              type="button"
              css={myCoursesViewAllBtn(darkMode)}
              onClick={onViewAllCourses}
              aria-label="View all courses — open Courses section"
            >
              View all
              <HiOutlineArrowRight aria-hidden />
            </button>
          ) : null}
        </div>
        {loading ? (
          <p css={muted(darkMode)} style={{ marginTop: '0.5rem' }}>
            Loading…
          </p>
        ) : cohortFilteredCourses.length === 0 ? (
          <p css={muted(darkMode)} style={{ marginTop: '0.5rem' }}>
            No modules match the cohort filters. Set intake, semester, or study year to &quot;Any&quot; to see your modules.
          </p>
        ) : effectiveCourseIds.length === 0 ? (
          <p css={muted(darkMode)} style={{ marginTop: '0.5rem' }}>
            Select at least one module in the filter above to list courses here.
          </p>
        ) : dashboardMyCoursesCards.length === 0 ? (
          <p css={muted(darkMode)} style={{ marginTop: '0.5rem' }}>
            No modules in the current selection.
          </p>
        ) : (
          <div css={myCoursesScrollWrap(darkMode)} role="region" aria-label="Course cards — scroll for more">
            <div css={myCoursesGrid}>
              {dashboardMyCoursesCards.map((c) => {
                const code = String(c.course_code || 'Module').trim() || 'Module'
                const title = String(c.course_name || 'Untitled module').trim()
                const credits = Number(c.credits)
                const creditLabel = Number.isFinite(credits) && credits > 0 ? String(credits) : '—'
                return (
                  <article key={c.id} css={myCourseCard(darkMode)}>
                    <div css={myCourseCardTop}>
                      <span css={myCourseCodeBadge(darkMode)}>{code}</span>
                      <HiOutlineBookOpen css={myCourseBookIcon(darkMode)} aria-hidden />
                    </div>
                    <h3 css={myCourseCardHeading(darkMode)}>{title}</h3>
                    <p css={myCourseCardDesc(darkMode)}>{buildCourseCardDescription(c)}</p>
                    <div css={myCourseCreditsRow(darkMode)}>
                      <span>Credits</span>
                      <span css={myCourseCreditBadge}>{creditLabel}</span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </section>

      {assessmentDetailModal && (
        <div
          css={modalScrim}
          onClick={() => setAssessmentDetailModal(null)}
          onKeyDown={(e) => e.key === 'Escape' && setAssessmentDetailModal(null)}
          role="presentation"
        >
          <div
            css={modalCard(darkMode)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="perf-assessment-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="perf-assessment-modal-title" css={modalTitle(darkMode)}>
              {assessmentDetailModal.fullLabel}
            </h3>
            <p css={modalMeta(darkMode)}>{performanceFocusCourseLabel || 'Selected module'}</p>
            <p
              css={modalMeta(darkMode)}
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '0.78rem',
                lineHeight: 1.45,
                marginBottom: '0.85rem',
              }}
            >
              <strong>Database</strong> (table <code>strack_assessment_scores</code>):
              <br />
              • assessment_id: {assessmentDetailModal.assessmentId}
              <br />
              • assessment_label:{' '}
              {!assessmentDetailModal.apiAssessmentLabel
                ? '(empty in DB — open Performance, edit marks, Save to store the column name)'
                : assessmentDetailModal.apiAssessmentLabel === assessmentDetailModal.assessmentId
                  ? `${assessmentDetailModal.apiAssessmentLabel} (same as id — save again from Performance to store a proper title)`
                  : assessmentDetailModal.apiAssessmentLabel}
              {assessmentDetailModal.localColumnTitle ? (
                <>
                  <br />
                  • Performance column title (this device): {assessmentDetailModal.localColumnTitle}
                </>
              ) : null}
            </p>
            <div css={statGrid}>
              <div css={statBox(darkMode)}>
                <p css={statVal(darkMode)}>{assessmentDetailModal.min}%</p>
                <p css={statLbl(darkMode)}>Min</p>
              </div>
              <div css={statBox(darkMode)}>
                <p css={statVal(darkMode)}>{assessmentDetailModal.avg}%</p>
                <p css={statLbl(darkMode)}>Average</p>
              </div>
              <div css={statBox(darkMode)}>
                <p css={statVal(darkMode)}>{assessmentDetailModal.max}%</p>
                <p css={statLbl(darkMode)}>Max</p>
              </div>
            </div>
            <p css={modalMeta(darkMode)} style={{ marginBottom: '1rem' }}>
              Based on <strong>{assessmentDetailModal.markCount}</strong> saved mark
              {assessmentDetailModal.markCount === 1 ? '' : 's'} (all students on this assessment).
            </p>
            <div css={modalActions}>
              <button type="button" css={modalBtnGhost(darkMode)} onClick={() => setAssessmentDetailModal(null)}>
                Close
              </button>
              {onOpenPerformance ? (
                <button type="button" css={modalBtnPrimary} onClick={openPerformanceFromModal}>
                  Open in Performance
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LecturerDashboardHome
