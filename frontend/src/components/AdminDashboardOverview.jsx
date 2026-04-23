/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts'
import {
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice,
  HiOutlineChartBar,
} from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const PIE_COLORS = [
  '#7c3aed',
  '#2563eb',
  '#0891b2',
  '#059669',
  '#65a30d',
  '#ca8a04',
  '#ea580c',
  '#dc2626',
  '#db2777',
  '#4f46e5',
  '#0d9488',
  '#15803d',
  '#b45309',
  '#be185d',
  '#475569',
  '#a855f7',
]

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`

const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
`

const kpiCard = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  border: 1px solid ${darkMode ? '#333' : 'rgba(0, 0, 0, 0.06)'};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

const kpiIcon = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${darkMode ? '#a78bfa' : '#2563eb'};
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${darkMode ? 'rgba(167, 139, 250, 0.14)' : 'rgba(37, 99, 235, 0.1)'};
  svg {
    width: 22px;
    height: 22px;
  }
`

const kpiLabel = (darkMode) => css`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#64748b'};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`

const kpiValue = (darkMode) => css`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${darkMode ? '#fff' : '#111'};
  margin: 0;
  line-height: 1.2;
`

const kpiHint = (darkMode) => css`
  margin: 0.25rem 0 0;
  font-size: 0.72rem;
  font-weight: 500;
  color: ${darkMode ? '#6b7280' : '#64748b'};
  line-height: 1.25;
`

const chartGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const chartPanel = (darkMode) => css`
  border: 1px solid ${darkMode ? '#333' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem;
  background: ${darkMode ? '#1a1a1a' : '#fafafa'};
  min-height: 320px;
`

const chartTitle = (darkMode) => css`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

const chartSub = (darkMode) => css`
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  line-height: 1.4;
`

const chartTotalLine = (darkMode) => css`
  margin: 0.6rem 0 0;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${darkMode ? '#e5e7eb' : '#111827'};
`

const enrollmentFilterRow = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.82rem;

  label {
    font-weight: 600;
    color: ${darkMode ? '#d1d5db' : '#374151'};
  }

  select {
    font-size: 0.88rem;
    font-weight: 600;
    padding: 0.4rem 0.65rem;
    border-radius: 10px;
    border: 1px solid ${darkMode ? 'rgba(255,255,255,0.18)' : '#d1d5db'};
    background: ${darkMode ? '#111827' : '#fff'};
    color: ${darkMode ? '#f9fafb' : '#111827'};
    font-family: inherit;
    min-width: 10rem;
  }
`

const INTAKE_BAR_COLORS = ['#2563eb', '#7c3aed', '#059669']

const muted = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.9rem;
  margin: 0;
`

function chartTooltipStyle(darkMode) {
  return {
    backgroundColor: darkMode ? '#262626' : '#fff',
    border: `1px solid ${darkMode ? '#404040' : '#e5e7eb'}`,
    borderRadius: 8,
    color: darkMode ? '#f9fafb' : '#111827',
  }
}

export default function AdminDashboardOverview({ darkMode }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [payload, setPayload] = useState(null)
  const [enrollmentIntakeYear, setEnrollmentIntakeYear] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const params = new URLSearchParams()
        params.set('t', String(Date.now()))
        if (enrollmentIntakeYear !== '') {
          params.set('enrollment_intake_year', enrollmentIntakeYear)
        }
        const res = await fetch(`${apiBase}/backend/admin_analytics.php?${params.toString()}`, {
          cache: 'no-store',
        })
        const data = await res.json().catch(() => ({}))
        if (cancelled) return
        if (!data.success) {
          setError(String(data.error || 'Could not load dashboard data.'))
          setPayload(null)
          return
        }
        setPayload(data)
      } catch {
        if (!cancelled) {
          setError('Could not reach the server.')
          setPayload(null)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [enrollmentIntakeYear])

  const kpis = payload?.kpis
  const ttStyle = useMemo(() => chartTooltipStyle(darkMode), [darkMode])
  const axisStroke = darkMode ? '#9ca3af' : '#6b7280'
  const gridStroke = darkMode ? '#404040' : '#e5e7eb'

  const deptPieData = Array.isArray(payload?.students_by_department) ? payload.students_by_department : []
  const gpaDist = Array.isArray(payload?.gpa_distribution) ? payload.gpa_distribution : []
  const gpaDistSource = payload?.gpa_distribution_source
  const gpaTrend = Array.isArray(payload?.gpa_monthly_trend) ? payload.gpa_monthly_trend : []
  const attTrend = Array.isArray(payload?.attendance_trend) ? payload.attendance_trend : []
  const enrollmentByIntake = Array.isArray(payload?.enrollment_by_intake) ? payload.enrollment_by_intake : []
  const enrollmentIntakeYears = Array.isArray(payload?.enrollment_intake_years)
    ? payload.enrollment_intake_years
    : []
  const enrollmentIntakeTotal =
    payload?.enrollment_intake_total != null
      ? Number(payload.enrollment_intake_total)
      : enrollmentByIntake.reduce((s, r) => s + (Number(r.count) || 0), 0)

  const marksDistTotal = useMemo(() => {
    if (payload?.marks_distribution_total != null) return Number(payload.marks_distribution_total)
    return gpaDist.reduce((sum, row) => sum + (Number(row.count) || 0), 0)
  }, [payload?.marks_distribution_total, gpaDist])

  const headlineKind = kpis?.headline_kind
  const headlineAvg = kpis?.headline_average
  const avgLine1 =
    headlineAvg != null
      ? headlineKind === 'assessment_pct'
        ? `${Number(headlineAvg).toFixed(1)}%`
        : `${Number(headlineAvg).toFixed(2)}`
      : '—'
  const avgTitle =
    headlineKind === 'assessment_pct'
      ? 'Avg. mark (all scores)'
      : headlineKind === 'profile_gpa'
        ? 'Average GPA'
        : 'Average performance'
  const avgHint =
    headlineKind === 'assessment_pct' && kpis?.average_gpa != null
      ? `Profile GPA mean: ${Number(kpis.average_gpa).toFixed(2)}`
      : headlineKind === 'profile_gpa' && kpis?.average_assessment_pct != null
        ? `Mean mark % in DB: ${Number(kpis.average_assessment_pct).toFixed(1)}%`
        : null

  return (
    <div css={wrap}>
      <div>
        <h1
          css={css`
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0 0 0.35rem;
          `}
        >
          Dashboard
        </h1>
        <p css={muted(darkMode)}>
          Overview of students, staff, modules, and trends across STRACK.
        </p>
      </div>

      {loading ? (
        <p css={muted(darkMode)}>Loading analytics…</p>
      ) : error ? (
        <p css={muted(darkMode)}>{error}</p>
      ) : (
        <>
          <div css={kpiGrid}>
            <div css={kpiCard(darkMode)}>
              <span css={kpiIcon(darkMode)}>
                <HiOutlineUserGroup aria-hidden />
              </span>
              <div>
                <p css={kpiLabel(darkMode)}>Total students</p>
                <p css={kpiValue(darkMode)}>{kpis?.total_students ?? 0}</p>
              </div>
            </div>
            <div css={kpiCard(darkMode)}>
              <span css={kpiIcon(darkMode)}>
                <HiOutlineAcademicCap aria-hidden />
              </span>
              <div>
                <p css={kpiLabel(darkMode)}>Total lecturers</p>
                <p css={kpiValue(darkMode)}>{kpis?.total_lecturers ?? 0}</p>
              </div>
            </div>
            <div css={kpiCard(darkMode)}>
              <span css={kpiIcon(darkMode)}>
                <HiOutlineBookOpen aria-hidden />
              </span>
              <div>
                <p css={kpiLabel(darkMode)}>Total courses</p>
                <p css={kpiValue(darkMode)}>{kpis?.total_courses ?? 0}</p>
              </div>
            </div>
            <div css={kpiCard(darkMode)}>
              <span css={kpiIcon(darkMode)}>
                <HiOutlineBuildingOffice aria-hidden />
              </span>
              <div>
                <p css={kpiLabel(darkMode)}>Departments</p>
                <p css={kpiValue(darkMode)}>{kpis?.total_departments ?? 0}</p>
              </div>
            </div>
            <div css={kpiCard(darkMode)}>
              <span css={kpiIcon(darkMode)}>
                <HiOutlineChartBar aria-hidden />
              </span>
              <div>
                <p css={kpiLabel(darkMode)}>{avgTitle}</p>
                <p css={kpiValue(darkMode)}>{avgLine1}</p>
                {avgHint ? <p css={kpiHint(darkMode)}>{avgHint}</p> : null}
              </div>
            </div>
          </div>

          <div css={chartGrid}>
            <div css={chartPanel(darkMode)}>
              <h2 css={chartTitle(darkMode)}>Students by department</h2>
              <p css={chartSub(darkMode)}>
                Slices use <strong>department codes</strong> from strack_departments (or N/A / initials). Hover a slice
                for the full department name and student count.
              </p>
              {deptPieData.length === 0 || deptPieData.every((d) => !d.value) ? (
                <p css={muted(darkMode)}>No student rows to chart.</p>
              ) : (
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={deptPieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={88}
                      label={({ name, percent }) =>
                        `${name} ${percent != null ? (percent * 100).toFixed(0) : 0}%`
                      }
                    >
                      {deptPieData.map((_, i) => (
                        <Cell
                          key={`${deptPieData[i]?.name}-${i}`}
                          fill={PIE_COLORS[i % PIE_COLORS.length]}
                          stroke={darkMode ? '#171717' : '#fff'}
                          strokeWidth={1}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (!active || !payload?.length) return null
                        const p = payload[0].payload
                        const code = p?.name ?? ''
                        const full = p?.fullName ?? code
                        const v = p?.value ?? 0
                        return (
                          <div
                            style={{
                              ...ttStyle,
                              padding: '10px 12px',
                              fontSize: '0.85rem',
                            }}
                          >
                            <div style={{ fontWeight: 800, marginBottom: 4 }}>{code}</div>
                            <div style={{ opacity: 0.92, marginBottom: 6 }}>{full}</div>
                            <div>
                              <strong>{v}</strong> students
                            </div>
                          </div>
                        )
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            <div css={chartPanel(darkMode)}>
              <h2 css={chartTitle(darkMode)}>Marks distribution</h2>
              <p css={chartSub(darkMode)}>
                {gpaDistSource === 'assessment_scores'
                  ? 'Count of marks in each percentage band (rows in strack_assessment_scores).'
                  : 'Count of students in each GPA band from strack_students.gpa (no saved marks yet).'}
              </p>
              {gpaDist.length === 0 || (gpaDist.length === 1 && gpaDist[0]?.name === 'No data') ? (
                <p css={muted(darkMode)}>No marks or GPA values in the database yet.</p>
              ) : (
                <>
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={gpaDist} margin={{ top: 8, right: 8, left: 4, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                      <XAxis dataKey="name" tick={{ fill: axisStroke, fontSize: 11 }} />
                      <YAxis
                        allowDecimals={false}
                        tick={{ fill: axisStroke, fontSize: 11 }}
                        width={40}
                        label={{
                          value: 'Count',
                          angle: -90,
                          position: 'insideLeft',
                          fill: axisStroke,
                          fontSize: 11,
                          offset: 4,
                        }}
                      />
                      <Tooltip contentStyle={ttStyle} formatter={(value) => [value, 'Count']} />
                      <Bar
                        dataKey="count"
                        name="Count"
                        fill="#7c3aed"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={48}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  <p css={chartTotalLine(darkMode)}>Total count: {marksDistTotal}</p>
                </>
              )}
            </div>

            <div css={chartPanel(darkMode)}>
              <h2 css={chartTitle(darkMode)}>GPA-related history</h2>
              <p css={chartSub(darkMode)}>
                Monthly average of saved assessment scores (%), institution-wide — shows grading activity over time.
              </p>
              {gpaTrend.length === 0 ? (
                <p css={muted(darkMode)}>No assessment scores in the database yet.</p>
              ) : (
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={gpaTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                    <XAxis dataKey="month" tick={{ fill: axisStroke, fontSize: 10 }} />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fill: axisStroke, fontSize: 11 }}
                      width={36}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip contentStyle={ttStyle} formatter={(v) => [`${v}%`, 'Avg score']} />
                    <Line
                      type="monotone"
                      dataKey="avgAssessmentPct"
                      name="Avg assessment %"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div css={chartPanel(darkMode)}>
              <h2 css={chartTitle(darkMode)}>Attendance trend</h2>
              <p css={chartSub(darkMode)}>
                Present and absent shares by calendar month (each mark is one student-class session; percentages are of
                all marks that month).
              </p>
              {attTrend.length === 0 ? (
                <p css={muted(darkMode)}>No attendance marks yet.</p>
              ) : (
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={attTrend} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                    <XAxis dataKey="month" tick={{ fill: axisStroke, fontSize: 10 }} />
                    <YAxis
                      domain={[0, 100]}
                      tick={{ fill: axisStroke, fontSize: 11 }}
                      width={36}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip contentStyle={ttStyle} formatter={(v, name) => [`${v}%`, name]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="presentRate"
                      name="Present %"
                      stroke="#059669"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="absentRate"
                      name="Absent %"
                      stroke="#dc2626"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div css={[chartPanel(darkMode), css`grid-column: 1 / -1;`]}>
              <h2 css={chartTitle(darkMode)}>Enrollment by intake</h2>
              <p css={chartSub(darkMode)}>
                Students with <strong>Sep / Jan / May</strong> intake on their record (strack_students). The intake year
                filter below only changes this chart; other dashboard figures stay institution-wide.
              </p>
              <div css={enrollmentFilterRow(darkMode)}>
                <label htmlFor="admin-enrollment-intake-year">Intake year</label>
                <select
                  id="admin-enrollment-intake-year"
                  value={enrollmentIntakeYear}
                  onChange={(e) => setEnrollmentIntakeYear(e.target.value)}
                  aria-label="Filter enrollment chart by intake year"
                >
                  <option value="">All years</option>
                  {enrollmentIntakeYears.map((y) => (
                    <option key={y} value={String(y)}>
                      {y}
                    </option>
                  ))}
                </select>
                {payload?.enrollment_intake_year_applied ? (
                  <span css={muted(darkMode)} style={{ fontSize: '0.78rem' }}>
                    Showing intake year {payload.enrollment_intake_year_applied}
                  </span>
                ) : null}
              </div>
              {enrollmentByIntake.length === 0 ? (
                <p css={muted(darkMode)}>
                  No intake chart data returned. Ensure strack_students has intake_month and intake_year columns.
                </p>
              ) : (
                <>
                  {enrollmentIntakeTotal === 0 ? (
                    <p css={muted(darkMode)} style={{ marginBottom: '0.65rem' }}>
                      No students with September / January / May intake for this filter. Try &quot;All years&quot; or
                      check student intake fields in Manage Students.
                    </p>
                  ) : null}
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={enrollmentByIntake} margin={{ top: 8, right: 12, left: 8, bottom: 52 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                      <XAxis
                        dataKey="label"
                        tick={{ fill: axisStroke, fontSize: 10 }}
                        interval={0}
                        angle={-14}
                        textAnchor="end"
                        height={56}
                      />
                      <YAxis
                        allowDecimals={false}
                        tick={{ fill: axisStroke, fontSize: 11 }}
                        width={40}
                        label={{
                          value: 'Students',
                          angle: -90,
                          position: 'insideLeft',
                          fill: axisStroke,
                          fontSize: 11,
                          offset: 4,
                        }}
                      />
                      <Tooltip contentStyle={ttStyle} formatter={(v) => [v, 'Students']} />
                      <Bar dataKey="count" name="Students" radius={[6, 6, 0, 0]} maxBarSize={72}>
                        {enrollmentByIntake.map((_, i) => (
                          <Cell key={enrollmentByIntake[i]?.key ?? i} fill={INTAKE_BAR_COLORS[i % INTAKE_BAR_COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <p css={chartTotalLine(darkMode)}>Total students (this chart): {enrollmentIntakeTotal}</p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
