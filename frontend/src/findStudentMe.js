/**
 * Resolve the current user against the students list from the API.
 * Prefer numeric DB id from login (student_db_id or id like "s12") so we still match when
 * student_id is a university code (not STU-padded) or email differs slightly from roster.
 */
export function findStudentMe(students, { userEmail, studentId, studentDatabaseId }) {
  const list = Array.isArray(students) ? students : []
  const dbId =
    studentDatabaseId != null && Number.isFinite(Number(studentDatabaseId)) ? Number(studentDatabaseId) : null
  if (dbId != null && dbId > 0) {
    const byId = list.find((s) => Number(s.id) === dbId)
    if (byId) return byId
  }
  const email = String(userEmail || '').trim().toLowerCase()
  const sid = String(studentId || '').trim().toUpperCase()
  return (
    list.find((s) => String(s.email || '').trim().toLowerCase() === email) ||
    list.find((s) => String(s.student_id || '').trim().toUpperCase() === sid) ||
    null
  )
}
