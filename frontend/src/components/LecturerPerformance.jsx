/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowDownTray,
  HiOutlineChartBar,
  HiOutlineMagnifyingGlass,
  HiOutlinePencil,
  HiOutlinePlus,
  HiOutlineStar,
  HiOutlineXMark,
} from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const transition = '0.25s ease'

const pageWrap = css`
  display: grid;
  gap: 1rem;
`

const titleStyles = css`
  font-size: 1.5rem;
  margin: 0;
`

const subtitleStyles = (darkMode) => css`
  margin: 0.25rem 0 0;
  color: ${darkMode ? '#a3a3a3' : '#6b7280'};
`

const cardGrid = css`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

const statCard = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb'};
  border-radius: 16px;
  padding: 1rem;
  background: ${darkMode ? '#111827' : '#fff'};
`

const statLabel = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  font-weight: 700;
  font-size: 0.95rem;
`

const statValue = css`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0.75rem;
  line-height: 1;
`

const statSub = (darkMode, tone = 'neutral') => css`
  margin-top: 0.35rem;
  font-size: 0.92rem;
  color: ${
    tone === 'success'
      ? '#059669'
      : tone === 'danger'
        ? '#dc2626'
        : darkMode
          ? '#9ca3af'
          : '#6b7280'
  };
  font-weight: 600;
`

const sectionCard = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb'};
  border-radius: 16px;
  background: ${darkMode ? '#111827' : '#fff'};
  padding: 1rem;
`

const sectionHead = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
`

const sectionTitle = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-size: 1.05rem;
`

const controlsRow = css`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: minmax(180px, 2fr) minmax(180px, 1.3fr) auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const inputShell = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : '#d1d5db'};
  border-radius: 10px;
  background: ${darkMode ? '#0b1220' : '#fff'};
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  transition: border-color ${transition};

  &:focus-within {
    border-color: #7c3aed;
  }

  svg {
    flex-shrink: 0;
    color: ${darkMode ? '#9ca3af' : '#6b7280'};
  }

  input,
  select {
    border: none;
    background: transparent;
    color: ${darkMode ? '#fff' : '#111827'};
    font: inherit;
    width: 100%;
    outline: none;
  }
`

const ghostBtn = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : '#d1d5db'};
  background: transparent;
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  border-radius: 10px;
  padding: 0 0.95rem;
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  font-weight: 700;
`

const primaryBtn = css`
  border: none;
  background: #7c3aed;
  color: #fff;
  border-radius: 9px;
  padding: 0.58rem 0.95rem;
  font-weight: 700;
  cursor: pointer;
`

const muttedText = (darkMode) => css`
  font-size: 0.86rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const builderRow = css`
  display: grid;
  gap: 0.6rem;
  grid-template-columns: minmax(120px, 1.4fr) minmax(90px, 0.6fr) auto;
  margin-top: 0.75rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const chips = css`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const chip = (darkMode) => css`
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.17)' : '#d1d5db'};
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.55rem 0.2rem 0.7rem;
  font-size: 0.84rem;
  font-weight: 700;
`

const chipDelete = css`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const tableWrap = (darkMode) => css`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: min(72vh, 800px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb'};
  border-radius: 16px;
  background: ${darkMode ? '#111827' : '#fff'};
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#4b5563 #111827' : '#bdbdbd #f3f4f6'};

  @media (max-width: 767.98px) {
    max-height: min(62vh, 560px);
  }
`

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  min-width: 860px;
`

const thStyles = (darkMode) => css`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 800;
  text-align: left;
  padding: 0.8rem 0.9rem;
  border-bottom: 1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb'};
  white-space: nowrap;
  color: ${darkMode ? '#d1d5db' : '#374151'};
`

const tdStyles = (darkMode) => css`
  padding: 0.75rem 0.9rem;
  border-bottom: 1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : '#f1f5f9'};
  white-space: nowrap;
`

const badge = css`
  background: #4f46e5;
  color: #fff;
  border-radius: 8px;
  min-width: 34px;
  text-align: center;
  font-weight: 700;
  padding: 0.2rem 0.45rem;
`

const iconBtn = (darkMode) => css`
  border: none;
  background: transparent;
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 7px;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.09)' : '#f3f4f6'};
  }
`

const modalScrim = css`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
  padding: 1rem;
`

const modal = (darkMode) => css`
  width: min(100%, 520px);
  border-radius: 14px;
  border: 1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : '#d1d5db'};
  background: ${darkMode ? '#0f172a' : '#fff'};
  padding: 1rem;
`

const gradeColor = (score) => {
  if (score >= 70) return '#16a34a'
  if (score >= 60) return '#2563eb'
  if (score >= 40) return '#d97706'
  return '#dc2626'
}

const toGradeBand = (score) => {
  if (score >= 70) return 'D'
  if (score >= 60) return 'M'
  if (score >= 40) return 'P'
  return 'F'
}

const normalizeName = (value) => String(value || '').trim().toLowerCase()

const structureStorageKey = (email) => `strack_perf_assessments_${normalizeName(email)}`
const scoreStorageKey = (email) => `strack_perf_scores_${normalizeName(email)}`
const statusStorageKey = (email) => `strack_perf_status_${normalizeName(email)}`

const MARK_STATUS_NOT_MARKED = 'not_marked'
const MARK_STATUS_COMPLETED = 'completed'

const safeJson = (raw, fallback) => {
  if (!raw) return fallback
  try {
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : fallback
  } catch (_) {
    return fallback
  }
}

function mergeServerScoresIntoLocal(localScores, serverNested) {
  const out = { ...(localScores && typeof localScores === 'object' ? localScores : {}) }
  if (!serverNested || typeof serverNested !== 'object') {
    return out
  }
  Object.keys(serverNested).forEach((courseId) => {
    const serverCourse = serverNested[courseId]
    if (!serverCourse || typeof serverCourse !== 'object') {
      return
    }
    out[courseId] = { ...(out[courseId] || {}) }
    Object.keys(serverCourse).forEach((studentId) => {
      const serverStudent = serverCourse[studentId]
      if (!serverStudent || typeof serverStudent !== 'object') {
        return
      }
      const prev = out[courseId][studentId] && typeof out[courseId][studentId] === 'object' ? out[courseId][studentId] : {}
      const merged = { ...prev }
      Object.keys(serverStudent).forEach((aid) => {
        const v = serverStudent[aid]
        merged[aid] = typeof v === 'number' && Number.isFinite(v) ? v : Number(v) || 0
      })
      out[courseId][studentId] = merged
    })
  })
  return out
}

function mergeServerStatusesIntoLocal(localStatuses, serverNested) {
  const out = { ...(localStatuses && typeof localStatuses === 'object' ? localStatuses : {}) }
  if (!serverNested || typeof serverNested !== 'object') {
    return out
  }
  Object.keys(serverNested).forEach((courseId) => {
    const serverCourse = serverNested[courseId]
    if (!serverCourse || typeof serverCourse !== 'object') {
      return
    }
    out[courseId] = { ...(out[courseId] || {}) }
    Object.keys(serverCourse).forEach((studentId) => {
      const serverStudent = serverCourse[studentId]
      if (!serverStudent || typeof serverStudent !== 'object') {
        return
      }
      const prev =
        out[courseId][studentId] && typeof out[courseId][studentId] === 'object'
          ? out[courseId][studentId]
          : {}
      const merged = { ...prev }
      Object.keys(serverStudent).forEach((aid) => {
        const v = serverStudent[aid]
        merged[aid] = v === MARK_STATUS_COMPLETED || v === MARK_STATUS_NOT_MARKED ? v : MARK_STATUS_NOT_MARKED
      })
      out[courseId][studentId] = merged
    })
  })
  return out
}

function escapeForCssAttributeSelector(value) {
  const s = String(value ?? '')
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(s)
  }
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

export default function LecturerPerformance({
  darkMode,
  userEmail,
  performanceIntent = null,
  onConsumePerformanceIntent,
}) {
  const pendingAssessmentScrollId = useRef(null)
  const [performanceScrollNonce, setPerformanceScrollNonce] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [assessmentStructures, setAssessmentStructures] = useState({})
  const [assessmentScores, setAssessmentScores] = useState({})
  const [assessmentStatuses, setAssessmentStatuses] = useState({})
  const [showBuilder, setShowBuilder] = useState(false)
  const [newAssessmentName, setNewAssessmentName] = useState('')
  const [newAssessmentWeight, setNewAssessmentWeight] = useState('20')
  const [editingRow, setEditingRow] = useState(null)
  const [editValues, setEditValues] = useState({})
  const [editStatuses, setEditStatuses] = useState({})

  const loadData = useCallback(async () => {
    if (!userEmail) {
      setLoading(false)
      setCourses([])
      setSelectedCourse('')
      setAssessmentStructures({})
      setAssessmentScores({})
      setAssessmentStatuses({})
      setIsHydrated(false)
      return
    }
    setLoading(true)
    setIsHydrated(false)
    try {
      const [courseRes, lecturerRes] = await Promise.all([
        fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
      ])
      const [courseData, lecturerData] = await Promise.all([courseRes.json(), lecturerRes.json()])
      const allCourses = courseData.success ? courseData.courses || [] : []
      const allLecturers = lecturerData.success ? lecturerData.lecturers || [] : []
      const me = allLecturers.find((item) => normalizeName(item.email) === normalizeName(userEmail))
      const lecturerId = String(me?.lecturer_id || '').trim()
      const myCourses = lecturerId
        ? allCourses.filter((item) => String(item.lecturer_id || '').trim() === lecturerId)
        : allCourses

      setCourses(myCourses)
      setSelectedCourse((prev) =>
        myCourses.some((item) => String(item.id) === prev)
          ? prev
          : myCourses[0]
            ? String(myCourses[0].id)
            : ''
      )

      const savedStructures = safeJson(
        localStorage.getItem(structureStorageKey(userEmail)),
        {}
      )
      const nextStructures = { ...savedStructures }
      myCourses.forEach((course) => {
        const key = String(course.id)
        if (!Array.isArray(nextStructures[key])) {
          nextStructures[key] = []
        }
      })
      setAssessmentStructures(nextStructures)

      const savedScores = safeJson(localStorage.getItem(scoreStorageKey(userEmail)), {})
      const nextScores = { ...savedScores }
      myCourses.forEach((course) => {
        const courseId = String(course.id)
        const students = Array.isArray(course.students) ? course.students : []
        const assessments = Array.isArray(nextStructures[courseId]) ? nextStructures[courseId] : []
        const byCourse = { ...(nextScores[courseId] || {}) }
        students.forEach((student) => {
          const sid = String(student.id)
          const byStudent = { ...(byCourse[sid] || {}) }
          assessments.forEach((assessment) => {
            if (typeof byStudent[assessment.id] !== 'number') {
              byStudent[assessment.id] = 0
            }
          })
          byCourse[sid] = byStudent
        })
        nextScores[courseId] = byCourse
      })

      const savedStatuses = safeJson(localStorage.getItem(statusStorageKey(userEmail)), {})
      const nextStatuses = { ...savedStatuses }
      myCourses.forEach((course) => {
        const courseId = String(course.id)
        const students = Array.isArray(course.students) ? course.students : []
        const assessments = Array.isArray(nextStructures[courseId]) ? nextStructures[courseId] : []
        const byCourse = { ...(nextStatuses[courseId] || {}) }
        students.forEach((student) => {
          const sid = String(student.id)
          const byStudent = { ...(byCourse[sid] || {}) }
          assessments.forEach((assessment) => {
            if (byStudent[assessment.id] !== MARK_STATUS_COMPLETED && byStudent[assessment.id] !== MARK_STATUS_NOT_MARKED) {
              byStudent[assessment.id] = MARK_STATUS_NOT_MARKED
            }
          })
          byCourse[sid] = byStudent
        })
        nextStatuses[courseId] = byCourse
      })

      let mergedScores = nextScores
      let mergedStatuses = nextStatuses
      try {
        const syncRes = await fetch(
          `${apiBase}/backend/assessment_scores.php?user_email=${encodeURIComponent(userEmail)}&lecturer_sync=1&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const syncData = await syncRes.json()
        if (syncData.success && syncData.nested && typeof syncData.nested === 'object') {
          mergedScores = mergeServerScoresIntoLocal(nextScores, syncData.nested)
        }
        if (syncData.success && syncData.nested_status && typeof syncData.nested_status === 'object') {
          mergedStatuses = mergeServerStatusesIntoLocal(nextStatuses, syncData.nested_status)
        }
      } catch (_) {}
      setAssessmentScores(mergedScores)
      setAssessmentStatuses(mergedStatuses)
    } catch (_) {
      setCourses([])
    } finally {
      setIsHydrated(true)
      setLoading(false)
    }
  }, [userEmail])

  useEffect(() => {
    setIsHydrated(false)
    loadData()
  }, [loadData])

  useEffect(() => {
    if (!performanceIntent || !isHydrated) return
    const { courseId, assessmentId } = performanceIntent
    if (assessmentId) {
      pendingAssessmentScrollId.current = String(assessmentId)
      setPerformanceScrollNonce((n) => n + 1)
    } else {
      pendingAssessmentScrollId.current = null
    }
    if (courseId && courses.some((c) => String(c.id) === String(courseId))) {
      setSelectedCourse(String(courseId))
    }
    onConsumePerformanceIntent?.()
  }, [performanceIntent, isHydrated, courses, onConsumePerformanceIntent])

  useEffect(() => {
    const aid = pendingAssessmentScrollId.current
    if (!aid || !isHydrated) return
    const list = Array.isArray(assessmentStructures[selectedCourse]) ? assessmentStructures[selectedCourse] : []
    if (!list.some((a) => String(a.id) === String(aid))) {
      pendingAssessmentScrollId.current = null
      return
    }
    const t = window.setTimeout(() => {
      const el = document.querySelector(`[data-assessment-id="${escapeForCssAttributeSelector(aid)}"]`)
      el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      pendingAssessmentScrollId.current = null
    }, 220)
    return () => window.clearTimeout(t)
  }, [selectedCourse, assessmentStructures, isHydrated, performanceScrollNonce])

  useEffect(() => {
    if (!userEmail || !isHydrated) return
    try {
      localStorage.setItem(structureStorageKey(userEmail), JSON.stringify(assessmentStructures))
    } catch (_) {}
  }, [assessmentStructures, isHydrated, userEmail])

  useEffect(() => {
    if (!userEmail || !isHydrated) return
    try {
      localStorage.setItem(scoreStorageKey(userEmail), JSON.stringify(assessmentScores))
    } catch (_) {}
  }, [assessmentScores, isHydrated, userEmail])

  useEffect(() => {
    if (!userEmail || !isHydrated) return
    try {
      localStorage.setItem(statusStorageKey(userEmail), JSON.stringify(assessmentStatuses))
    } catch (_) {}
  }, [assessmentStatuses, isHydrated, userEmail])

  useEffect(() => {
    if (!userEmail || !isHydrated || !courses.length) return
    const timer = window.setTimeout(() => {
      courses.forEach((course) => {
        const list = assessmentStructures[String(course.id)]
        if (!Array.isArray(list)) return
        void fetch(`${apiBase}/backend/assessment_scores.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_email: userEmail,
            set_course_assessment_structure: true,
            course_id: Number(course.id),
            assessments: list.map((a) => ({
              id: String(a.id),
              name: String(a.name ?? ''),
              weight: Number(a.weight) || 0,
            })),
          }),
        }).catch(() => {})
      })
    }, 650)
    return () => window.clearTimeout(timer)
  }, [assessmentStructures, courses, userEmail, isHydrated])

  const courseRows = useMemo(() => {
    const rows = []
    courses.forEach((course) => {
      const students = Array.isArray(course.students) ? course.students : []
      students.forEach((student) => {
        rows.push({
          rowId: `${course.id}_${student.id}`,
          courseId: String(course.id),
          courseLabel: `${course.course_code} - ${course.course_name}`,
          studentId: String(student.id),
          studentCode: student.student_id || '-',
          studentName: student.full_name || 'Unknown Student',
        })
      })
    })
    return rows
  }, [courses])

  const filteredRows = useMemo(() => {
    const q = normalizeName(searchValue)
    return courseRows.filter((row) => {
      const courseMatch = row.courseId === selectedCourse
      if (!courseMatch) return false
      if (!q) return true
      return (
        normalizeName(row.studentName).includes(q) ||
        normalizeName(row.studentCode).includes(q) ||
        normalizeName(row.courseLabel).includes(q)
      )
    })
  }, [courseRows, searchValue, selectedCourse])

  const assessmentColumns = useMemo(() => {
    return Array.isArray(assessmentStructures[selectedCourse])
      ? assessmentStructures[selectedCourse]
      : []
  }, [assessmentStructures, selectedCourse])

  const getAssessmentScore = useCallback(
    (row, assessment) => {
      const list = Array.isArray(assessmentStructures[row.courseId])
        ? assessmentStructures[row.courseId]
        : []
      const match = list.find((item) => item.id === assessment.id)

      if (!match) return null
      const stored = assessmentScores?.[row.courseId]?.[row.studentId]?.[match.id]
      if (typeof stored === 'number' && Number.isFinite(stored)) return stored
      return 0
    },
    [assessmentScores, assessmentStructures, selectedCourse]
  )

  const getAssessmentStatus = useCallback(
    (row, assessment) => {
      const list = Array.isArray(assessmentStructures[row.courseId])
        ? assessmentStructures[row.courseId]
        : []
      const match = list.find((item) => item.id === assessment.id)
      if (!match) return MARK_STATUS_NOT_MARKED
      const st = assessmentStatuses?.[row.courseId]?.[row.studentId]?.[match.id]
      if (st === MARK_STATUS_COMPLETED || st === MARK_STATUS_NOT_MARKED) return st
      return MARK_STATUS_NOT_MARKED
    },
    [assessmentStatuses, assessmentStructures]
  )

  const getOverall = useCallback(
    (row) => {
      const list = Array.isArray(assessmentStructures[row.courseId])
        ? assessmentStructures[row.courseId]
        : []
      if (!list.length) return 0

      let weightedTotal = 0
      let totalWeight = 0
      list.forEach((assessment) => {
        if (getAssessmentStatus(row, assessment) !== MARK_STATUS_COMPLETED) return
        const score = getAssessmentScore(row, assessment)
        if (score == null) return
        const weight = Number(assessment.weight) > 0 ? Number(assessment.weight) : 1
        weightedTotal += score * weight
        totalWeight += weight
      })

      if (!totalWeight) return 0
      return Number((weightedTotal / totalWeight).toFixed(1))
    },
    [assessmentStructures, getAssessmentScore, getAssessmentStatus]
  )

  const performanceRows = useMemo(
    () =>
      filteredRows.map((row) => {
        const overall = getOverall(row)
        return {
          ...row,
          overall,
          letter: toGradeBand(overall),
        }
      }),
    [filteredRows, getOverall]
  )

  const averageGrade = useMemo(() => {
    if (!performanceRows.length) return 0
    const total = performanceRows.reduce((sum, row) => sum + row.overall, 0)
    return Number((total / performanceRows.length).toFixed(1))
  }, [performanceRows])

  const topPerformers = useMemo(
    () => performanceRows.filter((row) => row.overall >= 70).length,
    [performanceRows]
  )
  const atRiskCount = useMemo(
    () => performanceRows.filter((row) => row.overall < 40).length,
    [performanceRows]
  )

  const addAssessment = () => {
    const name = newAssessmentName.trim()
    const weight = Number(newAssessmentWeight)
    if (!name || !Number.isFinite(weight) || weight <= 0) return
    const newAssessmentId = `${Date.now()}_${Math.round(Math.random() * 10000)}`
    setAssessmentStructures((prev) => ({
      ...prev,
      [selectedCourse]: [
        ...(Array.isArray(prev[selectedCourse]) ? prev[selectedCourse] : []),
        {
          id: newAssessmentId,
          name,
          weight: Number(weight.toFixed(2)),
        },
      ],
    }))
    setAssessmentScores((prev) => {
      const next = { ...prev }
      const byCourse = { ...(next[selectedCourse] || {}) }
      const course = courses.find((item) => String(item.id) === selectedCourse)
      const students = Array.isArray(course?.students) ? course.students : []
      students.forEach((student) => {
        const sid = String(student.id)
        const byStudent = { ...(byCourse[sid] || {}) }
        if (typeof byStudent[newAssessmentId] !== 'number') {
          byStudent[newAssessmentId] = 0
        }
        byCourse[sid] = byStudent
      })
      next[selectedCourse] = byCourse
      return next
    })
    setAssessmentStatuses((prev) => {
      const next = { ...prev }
      const course = courses.find((item) => String(item.id) === selectedCourse)
      const students = Array.isArray(course?.students) ? course.students : []
      const byCourse = { ...(next[selectedCourse] || {}) }
      students.forEach((student) => {
        const sid = String(student.id)
        byCourse[sid] = {
          ...(byCourse[sid] || {}),
          [newAssessmentId]: MARK_STATUS_NOT_MARKED,
        }
      })
      next[selectedCourse] = byCourse
      return next
    })
    setNewAssessmentName('')
    setNewAssessmentWeight('20')
  }

  const removeAssessment = async (courseId, assessmentId) => {
    try {
      const res = await fetch(`${apiBase}/backend/assessment_scores.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: userEmail,
          delete_assessment_column: true,
          course_id: Number(courseId),
          assessment_id: String(assessmentId),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) {
        window.alert(String(data.error || 'Could not remove this assessment on the server.'))
        return
      }
    } catch (_) {
      window.alert('Could not reach the server. The assessment column was not removed.')
      return
    }

    setAssessmentStructures((prev) => ({
      ...prev,
      [courseId]: (Array.isArray(prev[courseId]) ? prev[courseId] : []).filter(
        (item) => item.id !== assessmentId
      ),
    }))
    setAssessmentScores((prev) => {
      const next = { ...prev }
      const byCourse = { ...(next[courseId] || {}) }
      Object.keys(byCourse).forEach((studentId) => {
        const studentMap = { ...(byCourse[studentId] || {}) }
        delete studentMap[assessmentId]
        byCourse[studentId] = studentMap
      })
      next[courseId] = byCourse
      return next
    })
    setAssessmentStatuses((prev) => {
      const next = { ...prev }
      const byCourse = { ...(next[courseId] || {}) }
      Object.keys(byCourse).forEach((studentId) => {
        const studentMap = { ...(byCourse[studentId] || {}) }
        delete studentMap[assessmentId]
        byCourse[studentId] = studentMap
      })
      next[courseId] = byCourse
      return next
    })
  }

  const openEdit = (row) => {
    const list = Array.isArray(assessmentStructures[row.courseId])
      ? assessmentStructures[row.courseId]
      : []
    const nextValues = {}
    list.forEach((assessment) => {
      nextValues[assessment.id] = getAssessmentScore(row, assessment)
    })
    const nextStatuses = {}
    list.forEach((assessment) => {
      nextStatuses[assessment.id] = getAssessmentStatus(row, assessment)
    })
    setEditingRow(row)
    setEditValues(nextValues)
    setEditStatuses(nextStatuses)
  }

  const saveRowScores = async () => {
    if (!editingRow) return
    setAssessmentScores((prev) => ({
      ...prev,
      [editingRow.courseId]: {
        ...(prev[editingRow.courseId] || {}),
        [editingRow.studentId]: { ...editValues },
      },
    }))
    setAssessmentStatuses((prev) => ({
      ...prev,
      [editingRow.courseId]: {
        ...(prev[editingRow.courseId] || {}),
        [editingRow.studentId]: {
          ...(prev[editingRow.courseId]?.[editingRow.studentId] || {}),
          ...editStatuses,
        },
      },
    }))
    const labels = {}
    ;(assessmentStructures[editingRow.courseId] || []).forEach((a) => {
      labels[a.id] = a.name
    })
    try {
      await fetch(`${apiBase}/backend/assessment_scores.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: userEmail,
          course_id: Number(editingRow.courseId),
          student_id: Number(editingRow.studentId),
          scores: editValues,
          assessment_labels: labels,
          assessment_statuses: editStatuses,
        }),
      })
    } catch (_) {}
    setEditingRow(null)
    setEditStatuses({})
  }

  const exportCsv = () => {
    const headers = ['Student', 'Student ID', 'Module', ...assessmentColumns.map((c) => c.name), 'Overall']
    const lines = [headers]
    performanceRows.forEach((row) => {
      const values = [
        row.studentName,
        row.studentCode,
        row.courseLabel,
        ...assessmentColumns.map((col) => {
          const score = getAssessmentScore(row, col)
          const st = getAssessmentStatus(row, col)
          const mark = score == null ? '-' : `${score}`
          return st === MARK_STATUS_NOT_MARKED ? `${mark} (Not marked)` : `${mark} (Completed)`
        }),
        `${row.overall}`,
      ]
      lines.push(values)
    })
    const csv = lines
      .map((line) => line.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'performance-export.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const currentCourseLabel =
    courses.find((item) => String(item.id) === selectedCourse)?.course_name || 'selected module'

  return (
    <section css={pageWrap}>
      <div>
        <h1 css={titleStyles}>Performance</h1>
        <p css={subtitleStyles(darkMode)}>
          Create assessment columns per module and track student outcomes in one place. Marks you save are stored for
          students and power the <strong>Performance — by module</strong> chart (one bar per course) on their dashboard.
        </p>
      </div>

      <section css={cardGrid}>
        <article css={statCard(darkMode)}>
          <div css={statLabel(darkMode)}>
            Average Grade
            <HiOutlineStar />
          </div>
          <div css={statValue}>{averageGrade}</div>
          <div css={statSub(darkMode, averageGrade >= 80 ? 'success' : 'neutral')}>
            Average marks from current assessment columns
          </div>
        </article>
        <article css={statCard(darkMode)}>
          <div css={statLabel(darkMode)}>
            Top Performers
            <HiOutlineChartBar />
          </div>
          <div css={statValue}>{topPerformers}</div>
          <div css={statSub(darkMode, 'success')}>Students with Distinction</div>
        </article>
        <article css={statCard(darkMode)}>
          <div css={statLabel(darkMode)}>
            At Risk
            <HiOutlineAdjustmentsHorizontal />
          </div>
          <div css={statValue}>{atRiskCount}</div>
          <div css={statSub(darkMode, atRiskCount > 0 ? 'danger' : 'neutral')}>Students below Pass mark</div>
        </article>
      </section>

      <section css={sectionCard(darkMode)}>
        <div css={sectionHead}>
          <h2 css={sectionTitle}>
            <HiOutlineAdjustmentsHorizontal />
            Performance Filters
          </h2>
          <button type="button" css={ghostBtn(darkMode)} onClick={() => setShowBuilder((prev) => !prev)}>
            <HiOutlinePlus />
            Assessment Columns
          </button>
        </div>
        <div css={controlsRow}>
          <label css={inputShell(darkMode)}>
            <HiOutlineMagnifyingGlass />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by name or student ID..."
            />
          </label>
          <label css={inputShell(darkMode)}>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              {courses.map((course) => (
                <option key={course.id} value={String(course.id)}>
                  {course.course_code} - {course.course_name}
                </option>
              ))}
            </select>
          </label>
          <button type="button" css={ghostBtn(darkMode)} onClick={exportCsv}>
            <HiOutlineArrowDownTray />
            Export
          </button>
        </div>

        {showBuilder ? (
          <>
            <div css={builderRow}>
              <label css={inputShell(darkMode)}>
                <input
                  value={newAssessmentName}
                  onChange={(e) => setNewAssessmentName(e.target.value)}
                  placeholder="Assessment name (e.g. Report)"
                />
              </label>
              <label css={inputShell(darkMode)}>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={newAssessmentWeight}
                  onChange={(e) => setNewAssessmentWeight(e.target.value)}
                  placeholder="Weight %"
                />
              </label>
              <button type="button" css={primaryBtn} onClick={addAssessment}>
                Add Column
              </button>
            </div>
            <p css={muttedText(darkMode)}>{`Assessment structure for ${currentCourseLabel}.`}</p>
            <div css={chips}>
              {(assessmentStructures[selectedCourse] || []).map((item) => (
                <span key={item.id} css={chip(darkMode)}>
                  {item.name} ({item.weight}%)
                  <button
                    type="button"
                    css={chipDelete}
                    onClick={() => removeAssessment(selectedCourse, item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <HiOutlineXMark />
                  </button>
                </span>
              ))}
            </div>
          </>
        ) : null}
      </section>

      <section css={tableWrap(darkMode)}>
        <table css={tableStyles}>
          <thead>
            <tr>
              <th css={thStyles(darkMode)}>Student</th>
              <th css={thStyles(darkMode)}>Student ID</th>
              {assessmentColumns.map((assessment) => (
                <th key={assessment.id} data-assessment-id={assessment.id} css={thStyles(darkMode)}>
                  {assessment.name}
                </th>
              ))}
              <th css={thStyles(darkMode)}>Overall</th>
              <th css={thStyles(darkMode)}>Grade</th>
              <th css={thStyles(darkMode)}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td css={tdStyles(darkMode)} colSpan={7 + assessmentColumns.length}>
                  Loading performance data...
                </td>
              </tr>
            ) : performanceRows.length ? (
              performanceRows.map((row) => (
                <tr key={row.rowId}>
                  <td css={tdStyles(darkMode)}>{row.studentName}</td>
                  <td css={tdStyles(darkMode)}>{row.studentCode}</td>
                  {assessmentColumns.map((assessment) => {
                    const score = getAssessmentScore(row, assessment)
                    const st = getAssessmentStatus(row, assessment)
                    return (
                      <td key={`${row.rowId}_${assessment.id}`} css={tdStyles(darkMode)}>
                        {st === MARK_STATUS_NOT_MARKED ? (
                          <span
                            css={css`
                              color: ${darkMode ? '#9ca3af' : '#6b7280'};
                              font-weight: 700;
                            `}
                          >
                            Not marked
                          </span>
                        ) : (
                          <span css={css`color: ${gradeColor(score)}; font-weight: 700;`}>{score}</span>
                        )}
                      </td>
                    )
                  })}
                  <td css={[tdStyles(darkMode), css`font-size: 1.85rem; font-weight: 800; color: ${gradeColor(row.overall)};`]}>
                    {row.overall}
                  </td>
                  <td css={tdStyles(darkMode)}>
                    <span css={badge}>{row.letter}</span>
                  </td>
                  <td css={tdStyles(darkMode)}>
                    <button type="button" css={iconBtn(darkMode)} onClick={() => openEdit(row)} aria-label="Edit marks">
                      <HiOutlinePencil />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td css={tdStyles(darkMode)} colSpan={7 + assessmentColumns.length}>
                  No students found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      <p css={muttedText(darkMode)}>Grade key: D = Distinction, M = Merit, P = Pass.</p>

      {editingRow ? (
        <div
          css={modalScrim}
          onClick={() => {
            setEditingRow(null)
            setEditStatuses({})
          }}
        >
          <div css={modal(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={sectionHead}>
              <h3 css={css`margin: 0;`}>Edit scores for {editingRow.studentName}</h3>
              <button
                type="button"
                css={iconBtn(darkMode)}
                onClick={() => {
                  setEditingRow(null)
                  setEditStatuses({})
                }}
              >
                <HiOutlineXMark />
              </button>
            </div>
            <div css={css`display: grid; gap: 0.75rem;`}>
              {(assessmentStructures[editingRow.courseId] || []).map((assessment) => (
                <div
                  key={assessment.id}
                  css={css`
                    display: grid;
                    gap: 0.45rem;
                    padding: 0.55rem 0;
                    border-bottom: 1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : '#e5e7eb'};
                    &:last-of-type {
                      border-bottom: none;
                    }
                  `}
                >
                  <span css={css`font-weight: 800; font-size: 0.9rem;`}>{assessment.name}</span>
                  <div
                    css={css`
                      display: grid;
                      gap: 0.45rem;
                      grid-template-columns: 1fr 1fr;
                      align-items: center;
                      @media (max-width: 520px) {
                        grid-template-columns: 1fr;
                      }
                    `}
                  >
                    <label css={inputShell(darkMode)}>
                      <span css={css`font-size: 0.75rem; font-weight: 700; color: ${darkMode ? '#9ca3af' : '#6b7280'};`}>
                        Mark (0–100)
                      </span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={editValues[assessment.id] ?? ''}
                        onChange={(e) =>
                          setEditValues((prev) => ({ ...prev, [assessment.id]: Number(e.target.value) }))
                        }
                      />
                    </label>
                    <label css={inputShell(darkMode)}>
                      <span css={css`font-size: 0.75rem; font-weight: 700; color: ${darkMode ? '#9ca3af' : '#6b7280'};`}>
                        Status
                      </span>
                      <select
                        value={editStatuses[assessment.id] ?? MARK_STATUS_NOT_MARKED}
                        onChange={(e) =>
                          setEditStatuses((prev) => ({
                            ...prev,
                            [assessment.id]: e.target.value,
                          }))
                        }
                      >
                        <option value={MARK_STATUS_NOT_MARKED}>Not marked</option>
                        <option value={MARK_STATUS_COMPLETED}>Completed</option>
                      </select>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div css={css`display: flex; justify-content: flex-end; gap: 0.6rem; margin-top: 0.9rem;`}>
              <button
                type="button"
                css={ghostBtn(darkMode)}
                onClick={() => {
                  setEditingRow(null)
                  setEditStatuses({})
                }}
              >
                Cancel
              </button>
              <button type="button" css={primaryBtn} onClick={saveRowScores}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
