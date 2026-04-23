/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const title = css`
  margin: 0;
  font-size: clamp(1.65rem, 2.5vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
`

const sub = (darkMode) => css`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  max-width: 52rem;
`

const panel = (darkMode) => css`
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem 1.05rem;
  background: ${darkMode ? '#171717' : '#fff'};
`

const courseHead = css`
  margin: 0 0 0.65rem;
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.25;
`

const courseMeta = (darkMode) => css`
  margin: 0 0 0.85rem;
  font-size: 0.82rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const tableWrap = (darkMode) => css`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: min(72vh, 720px);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  border: 1px solid ${darkMode ? '#2a2a2a' : '#e5e7eb'};
  border-radius: 10px;
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#525252 #171717' : '#bdbdbd #f3f4f6'};

  @media (max-width: 767.98px) {
    max-height: min(62vh, 520px);
  }
`

const table = css`
  width: 100%;
  min-width: 480px;
  border-collapse: collapse;
  font-size: 0.9rem;
`

const th = (darkMode) => css`
  text-align: left;
  padding: 0.55rem 0.65rem;
  font-weight: 700;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  background: ${darkMode ? '#111' : '#f9fafb'};
  border-bottom: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
`

const td = (darkMode) => css`
  padding: 0.55rem 0.65rem;
  border-bottom: 1px solid ${darkMode ? '#262626' : '#f3f4f6'};
  vertical-align: middle;
`

const tdLast = (darkMode) => css`
  ${td(darkMode)}
  border-bottom: none;
`

const tdFoot = (darkMode) => css`
  padding: 0.65rem 0.65rem;
  border-top: 2px solid ${darkMode ? '#3f3f3f' : '#e5e7eb'};
  vertical-align: middle;
  background: ${darkMode ? '#141414' : '#fafafa'};
  font-weight: 800;
  font-size: 0.9rem;
`

const bandBadge = (letter, darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  padding: 0.15rem 0.45rem;
  border-radius: 8px;
  font-weight: 900;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
  color: ${letter === '—' ? (darkMode ? '#e5e5e5' : '#374151') : '#fff'};
  background: ${letter === '—' ? (darkMode ? '#404040' : '#d1d5db') : bandHue(letter)};
`

const scoreCell = css`
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

const muted = (darkMode) => css`
  margin: 0;
  font-size: 0.92rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

function formatMarkOutOf100(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return '0/100'
  const r = Math.round(n * 10) / 10
  return `${r}/100`
}

function gradeBandLetter(score) {
  const s = Number(score)
  if (!Number.isFinite(s)) return '—'
  if (s >= 70) return 'D'
  if (s >= 60) return 'M'
  if (s >= 40) return 'P'
  return 'F'
}

function bandHue(letter) {
  switch (letter) {
    case 'D':
      return '#22c55e'
    case 'M':
      return '#38bdf8'
    case 'P':
      return '#f59e0b'
    case 'F':
      return '#f87171'
    default:
      return '#71717a'
  }
}

function buildWeightMap(assessmentWeights) {
  const map = new Map()
  if (!Array.isArray(assessmentWeights)) return map
  assessmentWeights.forEach((row) => {
    const id = String(row.assessment_id ?? '')
    if (!id) return
    const w = Number(row.weight)
    if (Number.isFinite(w) && w > 0) map.set(id, w)
  })
  return map
}

function sumModuleWeights(assessmentWeights) {
  if (!Array.isArray(assessmentWeights)) return null
  let s = 0
  assessmentWeights.forEach((row) => {
    const w = Number(row.weight)
    if (Number.isFinite(w) && w > 0) s += w
  })
  return Math.round(s * 10) / 10
}

function computeModuleOverall(marks, assessmentWeights) {
  const weightMap = buildWeightMap(assessmentWeights)
  const hasWeights = weightMap.size > 0

  let weightedTotal = 0
  let totalWeight = 0
  for (const m of marks) {
    if (String(m.mark_status || '') === 'not_marked') continue
    const aid = String(m.assessment_id || '')
    const score = Number(m.score ?? 0)
    const w = weightMap.get(aid)
    if (w == null || !Number.isFinite(w) || w <= 0) continue
    weightedTotal += score * w
    totalWeight += w
  }

  if (hasWeights && totalWeight > 0) {
    const rounded = Math.round((weightedTotal / totalWeight) * 10) / 10
    return { avg: rounded, band: gradeBandLetter(rounded), mode: 'weighted' }
  }

  const done = marks.filter((m) => String(m.mark_status || '') !== 'not_marked')
  if (!done.length) return null
  const sum = done.reduce((s, m) => s + Number(m.score ?? 0), 0)
  const avg = sum / done.length
  const rounded = Math.round(avg * 10) / 10
  return { avg: rounded, band: gradeBandLetter(rounded), mode: 'simple' }
}

function formatModuleWeightCell(weightMap, assessmentId) {
  const w = weightMap.get(String(assessmentId || ''))
  if (w == null || !Number.isFinite(w)) return '—'
  const n = Math.round(Number(w) * 10) / 10
  return `${n}%`
}

function scoreHue(score) {
  const s = Number(score)
  if (!Number.isFinite(s)) return '#71717a'
  if (s >= 70) return '#22c55e'
  if (s >= 60) return '#38bdf8'
  if (s >= 40) return '#f59e0b'
  return '#f87171'
}

export default function StudentAssignmentsGrades({ darkMode, userEmail }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [courses, setCourses] = useState([])

  useEffect(() => {
    if (!userEmail) {
      setLoading(false)
      setCourses([])
      return undefined
    }
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(
          `${apiBase}/backend/assessment_scores.php?user_email=${encodeURIComponent(userEmail)}&t=${Date.now()}`,
          { cache: 'no-store' }
        )
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        if (!data.success) {
          setError(String(data.error || 'Could not load grades.'))
          setCourses([])
          return
        }
        const list = Array.isArray(data.bars_by_course) ? data.bars_by_course : []
        setCourses(list)
      } catch (_) {
        if (!cancelled) {
          setError('Could not reach the server.')
          setCourses([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [userEmail])

  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) =>
      String(a.course_code || '').localeCompare(String(b.course_code || ''), undefined, { sensitivity: 'base' })
    )
  }, [courses])

  return (
    <div css={wrap}>
      <div css={css`display:flex;align-items:center;gap:0.55rem;`}>
        <HiOutlineClipboardDocumentCheck
          aria-hidden
          style={{ width: '1.85rem', height: '1.85rem', color: '#6366f1', flexShrink: 0 }}
        />
        <h1 css={title}>Assignments & grades</h1>
      </div>
      <p css={sub(darkMode)}>
        <strong>Weight</strong> is each assessment share of the module (your lecturer sets these to total 100%).{' '}
        <strong>Module overall</strong> uses those weights for completed items (same as lecturer Performance). Not marked
        rows are excluded. Bands: D (70+), M (60–69), P (40–59), F (under 40).
      </p>

      {loading ? (
        <p css={muted(darkMode)}>Loading…</p>
      ) : error ? (
        <p css={muted(darkMode)}>{error}</p>
      ) : sortedCourses.length === 0 ? (
        <div css={panel(darkMode)}>
          <p css={muted(darkMode)} style={{ margin: 0 }}>
            No grades have been published for you yet. When your module leaders save marks in STRACK, they will show
            up here grouped by module.
          </p>
        </div>
      ) : (
        sortedCourses.map((c) => {
          const marks = Array.isArray(c.marks) ? c.marks : []
          const weights = Array.isArray(c.assessment_weights) ? c.assessment_weights : []
          const weightMap = buildWeightMap(weights)
          const totalModuleWeight = sumModuleWeights(weights)
          const moduleOverall = computeModuleOverall(marks, weights)
          const titleLine = [c.course_code, c.course_name].filter(Boolean).join(' — ') || 'Module'
          return (
            <article key={c.course_id} css={panel(darkMode)}>
              <h2 css={courseHead}>{titleLine}</h2>
              <p css={courseMeta(darkMode)}>
                {marks.length} assessment{marks.length === 1 ? '' : 's'}
                {totalModuleWeight != null && totalModuleWeight > 0
                  ? ` · Weights total ${totalModuleWeight}%`
                  : ''}
                {moduleOverall != null
                  ? ` · Module overall ${formatMarkOutOf100(moduleOverall.avg)} (${moduleOverall.band})${
                      moduleOverall.mode === 'simple' ? ' — simple average (weights not published yet)' : ''
                    }`
                  : marks.length > 0
                    ? ' · Complete at least one assessment to see module overall'
                    : ''}
              </p>
              {marks.length === 0 ? (
                <p css={muted(darkMode)} style={{ margin: 0 }}>
                  No individual marks listed for this module.
                </p>
              ) : (
                <div css={tableWrap(darkMode)}>
                  <table css={table}>
                    <thead>
                      <tr>
                        <th css={th(darkMode)}>Assessment</th>
                        <th css={th(darkMode)}>Weight</th>
                        <th css={th(darkMode)}>Status</th>
                        <th css={th(darkMode)}>Your mark</th>
                        <th css={th(darkMode)}>Band</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marks.map((m, idx) => {
                        const label = String(m.label || m.assessment_id || 'Assessment').trim()
                        const aid = String(m.assessment_id || '')
                        const isNotMarked = String(m.mark_status || '') === 'not_marked'
                        const band = isNotMarked ? '—' : gradeBandLetter(m.score)
                        return (
                          <tr key={`${c.course_id}-${aid}-${idx}`}>
                            <td css={td(darkMode)}>
                              <span css={css`font-weight:600;`}>{label}</span>
                            </td>
                            <td css={td(darkMode)}>
                              <span
                                css={css`
                                  font-weight: 700;
                                  font-variant-numeric: tabular-nums;
                                  color: ${darkMode ? '#d4d4d4' : '#374151'};
                                `}
                              >
                                {formatModuleWeightCell(weightMap, aid)}
                              </span>
                            </td>
                            <td css={td(darkMode)}>
                              <span
                                css={css`
                                  font-weight: 700;
                                  font-size: 0.85rem;
                                  color: ${isNotMarked ? (darkMode ? '#a3a3a3' : '#6b7280') : '#059669'};
                                `}
                              >
                                {isNotMarked ? 'Not marked' : 'Completed'}
                              </span>
                            </td>
                            <td css={td(darkMode)}>
                              {isNotMarked ? (
                                <span css={[scoreCell, css`color: ${darkMode ? '#737373' : '#9ca3af'};`]}>
                                  —
                                </span>
                              ) : (
                                <span css={[scoreCell, css`color: ${scoreHue(m.score)};`]}>
                                  {formatMarkOutOf100(m.score)}
                                </span>
                              )}
                            </td>
                            <td css={td(darkMode)}>
                              <span css={bandBadge(band, darkMode)}>{band}</span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td css={tdFoot(darkMode)}>Module overall</td>
                        <td css={tdFoot(darkMode)}>
                          {totalModuleWeight != null && totalModuleWeight > 0
                            ? `${totalModuleWeight}%`
                            : '—'}
                        </td>
                        <td css={tdFoot(darkMode)} />
                        <td css={tdFoot(darkMode)}>
                          {moduleOverall != null ? (
                            <span css={[scoreCell, css`color: ${scoreHue(moduleOverall.avg)};`]}>
                              {formatMarkOutOf100(moduleOverall.avg)}
                            </span>
                          ) : (
                            <span css={css`color: ${darkMode ? '#737373' : '#9ca3af'};`}>—</span>
                          )}
                        </td>
                        <td css={tdFoot(darkMode)}>
                          {moduleOverall != null ? (
                            <span css={bandBadge(moduleOverall.band, darkMode)}>{moduleOverall.band}</span>
                          ) : (
                            <span css={bandBadge('—', darkMode)}>—</span>
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </article>
          )
        })
      )}
    </div>
  )
}
