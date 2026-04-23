import { studentCohortMatchesCourse } from './courseDisplayUtils'

function normDept(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
}

/**
 * Courses visible to a student: explicit enrollments plus courses in the same department.
 * If we only used enrollments whenever any existed, new department courses (not yet in
 * strack_course_students) would disappear from the dashboard after the first enrollment.
 * Department match is case-insensitive so admin UI values still align with student records.
 * When the student has intake month + year set, only courses with the same cohort are included.
 */
export function getCoursesVisibleToStudent(courses, me) {
  if (!me || !Array.isArray(courses)) return []
  const deptKey = normDept(me.department)
  const cohortOk = (c) => studentCohortMatchesCourse(me, c)
  const enrolled = courses.filter(
    (c) =>
      cohortOk(c) &&
      Array.isArray(c.student_ids) &&
      c.student_ids.map(Number).includes(Number(me.id))
  )
  const sameDept =
    deptKey === ''
      ? courses.filter((c) => cohortOk(c) && normDept(c.department) === '')
      : courses.filter((c) => cohortOk(c) && normDept(c.department) === deptKey)
  const map = new Map()
  for (const c of enrolled) map.set(Number(c.id), c)
  for (const c of sameDept) map.set(Number(c.id), c)
  return Array.from(map.values())
}
