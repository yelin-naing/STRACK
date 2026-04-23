/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiOutlineArrowPath, HiOutlineTrophy, HiOutlineUserGroup } from 'react-icons/hi2'

import { BADGE_CATALOG } from '../badgeCatalog'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const wrap = css`
  width: 100%;
`

const pageTitle = css`
  margin: 0 0 0.25rem;
  font-size: clamp(1.45rem, 2.2vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
`

const pageSub = (dark) => css`
  margin: 0 0 1.1rem;
  max-width: 40rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${dark ? '#9ca3af' : '#6b7280'};
`

const panel = (dark) => css`
  border: 1px solid ${dark ? '#404040' : '#e5e7eb'};
  border-radius: 14px;
  background: ${dark ? '#1f1f1f' : '#fff'};
  padding: 1.1rem 1.2rem 1.25rem;
  margin-bottom: 1rem;
`

const panelTitle = (dark) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${dark ? '#f9fafb' : '#111827'};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: #6366f1;
    flex-shrink: 0;
  }
`

const field = css`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.9rem;
`

const label = (dark) => css`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${dark ? '#9ca3af' : '#6b7280'};
`

const inputBase = (dark) => css`
  width: 100%;
  max-width: 28rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  border: 1px solid ${dark ? '#404040' : '#d1d5db'};
  background: ${dark ? '#262626' : '#fff'};
  color: inherit;
  font: inherit;
  font-size: 0.95rem;
  box-sizing: border-box;
`

const hint = (dark) => css`
  margin: 0.25rem 0 0;
  font-size: 0.82rem;
  color: ${dark ? '#9ca3af' : '#6b7280'};
  max-width: 32rem;
`

const btnPrimary = css`
  border: none;
  border-radius: 10px;
  background: #6366f1;
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.55rem 1.1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

const btnDanger = css`
  border: 1px solid #dc2626;
  border-radius: 10px;
  background: transparent;
  color: #dc2626;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

const dangerPanel = (dark) => css`
  border: 1px solid ${dark ? 'rgba(248, 113, 113, 0.4)' : '#fecaca'};
  border-radius: 14px;
  background: ${dark ? 'rgba(127, 29, 29, 0.2)' : '#fff7ed'};
  padding: 1.1rem 1.2rem 1.25rem;
  margin-top: 1rem;
`

const msg = (ok, dark) => css`
  margin: 0.75rem 0 0;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  max-width: 32rem;
  color: ${ok ? (dark ? '#a7f3d0' : '#065f46') : dark ? '#fecaca' : '#991b1b'};
  background: ${ok ? (dark ? 'rgba(6, 95, 70, 0.25)' : '#ecfdf5') : dark ? 'rgba(127, 29, 29, 0.25)' : '#fef2f2'};
  border: 1px solid
    ${ok ? (dark ? 'rgba(16, 185, 129, 0.4)' : '#a7f3d0') : dark ? 'rgba(248, 113, 113, 0.35)' : '#fecaca'};
`

const kpi = (dark) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-top: 0.4rem;
  font-size: 0.86rem;
  color: ${dark ? '#9ca3af' : '#6b7280'};
  font-variant-numeric: tabular-nums;
`

function LecturerAwardBadges({ darkMode, userEmail }) {
  const [loading, setLoading] = useState(true)
  const [eligibleStudents, setEligibleStudents] = useState([])
  const [studentId, setStudentId] = useState('')
  const [badgeId, setBadgeId] = useState(BADGE_CATALOG[0]?.id || '')
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState(null)
  const [resetting, setResetting] = useState(false)
  const [resetStatus, setResetStatus] = useState(null)

  const load = useCallback(async () => {
    if (!userEmail) {
      setLoading(false)
      setEligibleStudents([])
      return
    }
    setLoading(true)
    setStatus(null)
    try {
      const [lRes, cRes, sRes] = await Promise.all([
        fetch(`${apiBase}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
        fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
      ])
      const [lData, cData, sData] = await Promise.all([lRes.json(), cRes.json(), sRes.json()])
      const lecturers = lData.success ? lData.lecturers || [] : []
      const emailLower = String(userEmail).toLowerCase().trim()
      const me = lecturers.find((l) => String(l.email || '').toLowerCase().trim() === emailLower) || null
      const myLid = me ? String(me.lecturer_id || '').trim() : ''
      const courses = cData.success ? cData.courses || [] : []
      const allStudents = sData.success ? sData.students || [] : []
      const myCourses = myLid
        ? courses.filter((c) => String(c.lecturer_id || '').trim() === myLid)
        : []
      const idSet = new Set()
      myCourses.forEach((c) => {
        const ids = Array.isArray(c.students) ? c.students : []
        ids.forEach((st) => {
          const id = Number(st.id)
          if (Number.isFinite(id) && id > 0) idSet.add(id)
        })
      })
      const rows = allStudents
        .filter((st) => idSet.has(Number(st.id)))
        .map((st) => ({
          id: Number(st.id),
          label: [st.full_name, st.email, st.student_id].filter(Boolean).join(' · '),
        }))
        .sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }))
      setEligibleStudents(rows)
    } catch (_) {
      setEligibleStudents([])
    } finally {
      setLoading(false)
    }
  }, [userEmail])

  useEffect(() => {
    load()
  }, [load])

  const selectedBadge = useMemo(() => BADGE_CATALOG.find((b) => b.id === badgeId) || null, [badgeId])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!userEmail || !studentId || !badgeId) return
    setSaving(true)
    setStatus(null)
    try {
      const res = await fetch(`${apiBase}/backend/lecturer_award_badge.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lecturer_email: userEmail,
          student_id: Number(studentId),
          badge_id: badgeId,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        setStatus({
          ok: true,
          text: `Badge awarded. +${data.points_added} points added. Student’s total points: ${data.student_points}.`,
        })
        setStudentId('')
      } else {
        setStatus({ ok: false, text: data.message || 'Could not award badge.' })
      }
    } catch (_) {
      setStatus({ ok: false, text: 'Network error. Try again.' })
    } finally {
      setSaving(false)
    }
  }

  const onResetAll = async () => {
    if (!userEmail) return
    if (
      !window.confirm(
        'Reset all badge awards that you have issued? This cannot be undone.\n\n' +
          '• Those badges will show as locked again for affected students (except Pomodoro if earned via Study Timer).\n' +
          '• Each affected student’s total points will be set to 0 in STRACK.\n\n' +
          'Continue?'
      )
    ) {
      return
    }
    setResetting(true)
    setResetStatus(null)
    try {
      const res = await fetch(`${apiBase}/backend/lecturer_reset_badge_awards.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lecturer_email: userEmail }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        setResetStatus({
          ok: true,
          text: `Removed ${data.awards_deleted} award row(s). ${data.students_reset} student(s) affected; points set to 0 for each.`,
        })
        load()
      } else {
        setResetStatus({ ok: false, text: data.message || 'Could not reset.' })
      }
    } catch (_) {
      setResetStatus({ ok: false, text: 'Network error. Try again.' })
    } finally {
      setResetting(false)
    }
  }

  return (
    <div css={wrap}>
      <h1 css={pageTitle}>Badge awards</h1>
      <p css={pageSub(darkMode)}>
        Choose a student on one of your modules and a badge. The student’s points increase immediately and the badge
        records on their profile in <strong>Badges</strong>. Each badge can only be granted once per student.
      </p>

      {loading ? (
        <p css={pageSub(darkMode)}>Loading your classes…</p>
      ) : eligibleStudents.length === 0 ? (
        <div css={panel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineUserGroup />
            No students available
          </h2>
          <p css={hint(darkMode)}>Add students to your modules in Courses, then you can award badges here.</p>
        </div>
      ) : (
        <form css={panel(darkMode)} onSubmit={onSubmit}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineTrophy />
            Award a badge
          </h2>

          <div css={field}>
            <label htmlFor="award-student" css={label(darkMode)}>
              Student
            </label>
            <select
              id="award-student"
              css={inputBase(darkMode)}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            >
              <option value="">Select a student</option>
              {eligibleStudents.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <p css={hint(darkMode)}>Only students enrolled on your modules are listed.</p>
          </div>

          <div css={field}>
            <label htmlFor="award-badge" css={label(darkMode)}>
              Badge
            </label>
            <select
              id="award-badge"
              css={inputBase(darkMode)}
              value={badgeId}
              onChange={(e) => setBadgeId(e.target.value)}
              required
            >
              {BADGE_CATALOG.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.icon} {b.name} (+{b.pointsAward} pts)
                </option>
              ))}
            </select>
            {selectedBadge ? (
              <p css={kpi(darkMode)}>
                <span>
                  <strong>Points to add:</strong> {selectedBadge.pointsAward}
                </span>
              </p>
            ) : null}
          </div>

          <button type="submit" css={btnPrimary} disabled={saving || !studentId || !badgeId}>
            {saving ? 'Awarding…' : 'Award badge'}
          </button>

          {status ? (
            <p css={msg(status.ok, darkMode)} role="status">
              {status.text}
            </p>
          ) : null}
        </form>
      )}

      {!loading && userEmail ? (
        <div css={dangerPanel(darkMode)}>
          <h2 css={panelTitle(darkMode)}>
            <HiOutlineArrowPath />
            Reset your badge awards
          </h2>
          <p css={hint(darkMode)}>
            Removes <strong>every</strong> badge you have issued to any student. Affected students will see those badges
            as locked again, and <strong>their points total will be set to 0</strong> (Pomodoro progress from the Study
            Timer is separate). Use at the end of a term or for demos.
          </p>
          <button type="button" css={btnDanger} onClick={onResetAll} disabled={resetting}>
            <HiOutlineArrowPath style={{ width: 18, height: 18 }} />
            {resetting ? 'Resetting…' : 'Reset all my badge awards'}
          </button>
          {resetStatus ? (
            <p css={msg(resetStatus.ok, darkMode)} style={{ marginTop: '0.75rem' }} role="status">
              {resetStatus.text}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default LecturerAwardBadges
