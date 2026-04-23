/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiOutlineChatBubbleLeft, HiOutlineUserCircle } from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const REACTIONS = [
  { id: 'like', emoji: '👍' },
  { id: 'love', emoji: '❤️' },
  { id: 'celebrate', emoji: '🎉' },
  { id: 'idea', emoji: '💡' },
  { id: 'fire', emoji: '🔥' },
]

const wrapper = css`
  display: grid;
  gap: 1.12rem;
`

const heading = css`
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.55rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
`

const subheading = (darkMode) => css`
  margin: 0.3rem 0 0;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 1rem;
`

const toolbar = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#ffffff'};
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.1rem 1rem;
`

const filterLabel = css`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
`

const filterSelect = (darkMode) => css`
  width: min(320px, 100%);
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  background: ${darkMode ? '#09090b' : '#fff'};
  color: inherit;
  border-radius: 9px;
  padding: 0.53rem 0.68rem;
  font-size: 0.92rem;
`

const card = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#fff'};
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.18rem 1.2rem 1.08rem;
`

const row = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const authorRow = css`
  display: inline-flex;
  gap: 0.58rem;
  align-items: center;
`

const avatar = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
`

const authorBlock = css`
  display: grid;
  gap: 0.16rem;
`

const author = css`
  font-weight: 700;
  font-size: 0.92rem;
`

const meta = (darkMode) => css`
  font-size: 0.8rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const title = css`
  margin: 0.72rem 0 0.56rem;
  font-size: clamp(1.75rem, 2.6vw, 2.2rem);
  line-height: 1.15;
  letter-spacing: -0.018em;
`

const content = (darkMode) => css`
  margin: 0 0 0.75rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  white-space: pre-wrap;
  font-size: 1.02rem;
  line-height: 1.5;
`

const reactionRow = css`
  display: flex;
  gap: 0.35rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.7rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
`

const reactionBtn = (darkMode, active) => css`
  border: 1px solid ${active ? '#6366f1' : darkMode ? '#3f3f46' : '#e5e7eb'};
  background: ${active ? (darkMode ? 'rgba(99,102,241,0.2)' : '#eef2ff') : 'transparent'};
  color: inherit;
  border-radius: 8px;
  font-size: 0.86rem;
  padding: 0.28rem 0.5rem;
  cursor: pointer;
`

const commentsMeta = (darkMode) => css`
  margin-top: 0.65rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.86rem;

  svg {
    width: 0.92rem;
    height: 0.92rem;
  }
`

const commentsWrap = css`
  margin-top: 0.62rem;
  display: grid;
  gap: 0.52rem;
`

const commentItem = (darkMode) => css`
  border: 1px solid ${darkMode ? '#3f3f46' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.56rem 0.68rem;
`

const commentHead = css`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
`

const commentAvatar = css`
  width: 1.05rem;
  height: 1.05rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`

const commentAuthor = css`
  font-size: 0.83rem;
  font-weight: 700;
`

const commentTime = (darkMode) => css`
  font-size: 0.77rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const commentText = (darkMode) => css`
  margin-top: 0.35rem;
  white-space: pre-wrap;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  font-size: 0.9rem;
  line-height: 1.45;
`

const commentComposer = css`
  margin-top: 0.62rem;
  display: flex;
  gap: 0.5rem;
`

const commentInput = (darkMode) => css`
  flex: 1;
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  border-radius: 9px;
  padding: 0.52rem 0.68rem;
  background: ${darkMode ? '#09090b' : '#fff'};
  color: inherit;
  font-size: 0.9rem;
`

const primaryBtn = css`
  border: none;
  border-radius: 9px;
  background: #6366f1;
  color: #fff;
  font-weight: 600;
  padding: 0.52rem 0.82rem;
  font-size: 0.88rem;
  cursor: pointer;
`

const muted = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

function formatDateTime(value) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return String(value)
  return d.toLocaleString([], {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function initials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function StudentAnnouncements({ darkMode, userEmail }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [courses, setCourses] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')
  const [commentDrafts, setCommentDrafts] = useState({})
  const [busyId, setBusyId] = useState(0)

  const canLoad = useMemo(() => String(userEmail || '').trim() !== '', [userEmail])

  const loadData = useCallback(async () => {
    if (!canLoad) return
    setLoading(true)
    setError('')
    try {
      const query = new URLSearchParams({ user_email: userEmail })
      if (selectedCourse) query.set('course_id', selectedCourse)
      const res = await fetch(`${apiBase}/backend/announcements.php?${query.toString()}`, { cache: 'no-store' })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Failed to load announcements')
      setCourses(Array.isArray(data.available_courses) ? data.available_courses : [])
      setAnnouncements(Array.isArray(data.announcements) ? data.announcements : [])
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load announcements')
    } finally {
      setLoading(false)
    }
  }, [canLoad, userEmail, selectedCourse])

  useEffect(() => {
    loadData()
  }, [loadData])

  const reactToAnnouncement = async (announcementId, nextReaction, currentReaction) => {
    if (!canLoad) return
    setBusyId(announcementId)
    try {
      const payload = {
        user_email: userEmail,
        announcement_id: announcementId,
      }
      if (nextReaction === currentReaction) {
        await fetch(`${apiBase}/backend/announcement_reactions.php`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        await fetch(`${apiBase}/backend/announcement_reactions.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, reaction_type: nextReaction }),
        })
      }
      await loadData()
    } catch (_) {
      setError('Could not update your reaction. Please try again.')
    } finally {
      setBusyId(0)
    }
  }

  const postComment = async (announcementId) => {
    const text = String(commentDrafts[announcementId] || '').trim()
    if (!text || !canLoad) return
    setBusyId(announcementId)
    try {
      const res = await fetch(`${apiBase}/backend/announcement_comments.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: userEmail,
          announcement_id: announcementId,
          comment_text: text,
        }),
      })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Unable to post comment')
      setCommentDrafts((prev) => ({ ...prev, [announcementId]: '' }))
      await loadData()
    } catch (_) {
      setError('Could not post your comment. Please try again.')
    } finally {
      setBusyId(0)
    }
  }

  return (
    <section css={wrapper}>
      <header>
        <h1 css={heading}>Class Announcements</h1>
        <p css={subheading(darkMode)}>Stay updated with your course announcements</p>
      </header>

      <div css={toolbar(darkMode)}>
        <label css={filterLabel} htmlFor="student-ann-course">
          Filter by course:
        </label>
        <select
          id="student-ann-course"
          css={filterSelect(darkMode)}
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">All Courses</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.course_code} {course.course_name ? `- ${course.course_name}` : ''}
            </option>
          ))}
        </select>
      </div>

      {error ? <p css={muted(darkMode)}>{error}</p> : null}
      {loading ? <p css={muted(darkMode)}>Loading announcements...</p> : null}

      {!loading && announcements.length === 0 ? (
        <p css={muted(darkMode)}>No announcements available yet.</p>
      ) : null}

      {announcements.map((item) => {
        const myReaction = item.my_reaction || ''
        const counts = item.reaction_counts || {}
        const comments = Array.isArray(item.comments) ? item.comments : []
        return (
          <article key={item.id} css={card(darkMode)}>
            <div css={row}>
              <div css={authorRow}>
                <div css={avatar}>{initials(item.lecturer_name || 'Lecturer')}</div>
                <div css={authorBlock}>
                  <div css={author}>{item.lecturer_name || 'Lecturer'}</div>
                  <div css={meta(darkMode)}>
                    {(item.course_code || 'General') + ' · ' + formatDateTime(item.created_at)}
                  </div>
                </div>
              </div>
            </div>

            <h2 css={title}>{item.title}</h2>
            <p css={content(darkMode)}>{item.content}</p>

            <div css={reactionRow}>
              {REACTIONS.map((reaction) => {
                const count = Number(counts[reaction.id] || 0)
                const active = myReaction === reaction.id
                return (
                  <button
                    key={reaction.id}
                    type="button"
                    css={reactionBtn(darkMode, active)}
                    onClick={() => reactToAnnouncement(item.id, reaction.id, myReaction)}
                    disabled={busyId === item.id}
                  >
                    {reaction.emoji} {count > 0 ? count : ''}
                  </button>
                )
              })}
            </div>

            <div css={commentsMeta(darkMode)}>
              <HiOutlineChatBubbleLeft />
              {item.comment_count || 0} comments
            </div>

            <div css={commentsWrap}>
              {comments.map((comment) => (
                <div key={comment.id} css={commentItem(darkMode)}>
                  <div css={commentHead}>
                    <span css={commentAvatar}>
                      <HiOutlineUserCircle />
                    </span>
                    <span css={commentAuthor}>{comment.student_name}</span>
                    <span css={commentTime(darkMode)}>{formatDateTime(comment.created_at)}</span>
                  </div>
                  <div css={commentText(darkMode)}>{comment.comment_text}</div>
                </div>
              ))}

              <div css={commentComposer}>
                <input
                  css={commentInput(darkMode)}
                  placeholder="Write a comment..."
                  value={commentDrafts[item.id] || ''}
                  onChange={(e) =>
                    setCommentDrafts((prev) => ({ ...prev, [item.id]: e.target.value }))
                  }
                  maxLength={1000}
                />
                <button
                  type="button"
                  css={primaryBtn}
                  disabled={busyId === item.id}
                  onClick={() => postComment(item.id)}
                >
                  Post
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default StudentAnnouncements

