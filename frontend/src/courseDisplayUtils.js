export const INTAKE_MONTH_FORM_OPTIONS = [
  { value: '', label: '— Month —' },
  { value: 'Sep', label: 'September' },
  { value: 'Jan', label: 'January' },
  { value: 'May', label: 'May' },
]

export const SEMESTER_FORM_OPTIONS = [
  { value: '', label: '— Not set —' },
  { value: '1st semester', label: '1st semester' },
  { value: '2nd semester', label: '2nd semester' },
]

export const COURSE_STUDY_YEAR_OPTIONS = [
  { value: '', label: '— Not set —' },
  { value: 'Foundation', label: 'Foundation' },
  { value: '1', label: 'Year 1' },
  { value: '2', label: 'Year 2' },
  { value: '3', label: 'Year 3' },
  { value: '4', label: 'Year 4' },
]

export function getIntakeYearSelectRange() {
  const y0 = new Date().getFullYear() - 2
  const out = []
  for (let y = y0; y <= y0 + 12; y += 1) out.push(y)
  return out
}

export function formatIntakeDisplay(courseOrStudent) {
  const m = courseOrStudent?.intake_month
  const y = courseOrStudent?.intake_year
  if (!m && (y === undefined || y === null || y === '' || Number(y) <= 0)) return '—'
  const opt = INTAKE_MONTH_FORM_OPTIONS.find((o) => o.value === m)
  const monthLabel = opt && opt.value ? opt.label : m || ''
  if (y !== undefined && y !== null && y !== '' && Number(y) > 0) {
    return `${monthLabel} ${y}`.trim()
  }
  return monthLabel || '—'
}

export function formatStudyYearDisplay(value) {
  const v = String(value ?? '').trim()
  if (!v) return '—'
  const opt = COURSE_STUDY_YEAR_OPTIONS.find((o) => o.value === v)
  return opt && opt.value ? opt.label : v
}

export function studentCohortMatchesCourse(student, course) {
  if (!student || !course) return true
  const sm = String(student.intake_month || '').trim()
  const sy = Number(student.intake_year)
  if (!sm || !Number.isFinite(sy) || sy <= 0) return true
  const cm = String(course.intake_month || '').trim()
  const cy = Number(course.intake_year)
  if (!cm || !Number.isFinite(cy) || cy <= 0) return false
  return sm === cm && sy === cy
}
