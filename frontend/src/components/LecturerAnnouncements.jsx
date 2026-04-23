/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineUserCircle,
} from 'react-icons/hi2'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const wrapper = css`
  display: grid;
  gap: 1.1rem;
`

const headingRow = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
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

const addBtn = css`
  border: none;
  border-radius: 9px;
  background: #6366f1;
  color: #fff;
  font-weight: 700;
  padding: 0.66rem 1rem;
  font-size: 0.93rem;
  cursor: pointer;
`

const toolbar = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#ffffff'};
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.1rem 1rem;
`

const label = css`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
`

const select = (darkMode) => css`
  width: min(320px, 100%);
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  background: ${darkMode ? '#09090b' : '#fff'};
  color: inherit;
  border-radius: 9px;
  padding: 0.53rem 0.68rem;
  font-size: 0.92rem;
`

const editor = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#fff'};
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  border-radius: 12px;
  padding: 1rem;
  display: grid;
  gap: 0.62rem;
`

const input = (darkMode) => css`
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  border-radius: 9px;
  padding: 0.52rem 0.68rem;
  background: ${darkMode ? '#09090b' : '#fff'};
  color: inherit;
  font-size: 0.93rem;
`

const textarea = (darkMode) => css`
  ${input(darkMode)};
  min-height: 132px;
  resize: vertical;
`

const actionRow = css`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`

const ghostBtn = (darkMode) => css`
  border: 1px solid ${darkMode ? '#3f3f46' : '#d1d5db'};
  border-radius: 9px;
  background: transparent;
  color: inherit;
  font-weight: 600;
  padding: 0.53rem 0.82rem;
  cursor: pointer;
`

const card = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#fff'};
  border: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1.15rem 1.2rem 1.05rem;
`

const topRow = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
`

const topMeta = css`
  display: grid;
  gap: 0.2rem;
`

const codeLine = css`
  font-size: 0.9rem;
  font-weight: 600;
`

const meta = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.8rem;
`

const title = css`
  margin: 0.72rem 0 0.55rem;
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

const secondaryRow = (darkMode) => css`
  margin-top: 0.58rem;
  padding-top: 0.65rem;
  border-top: 1px solid ${darkMode ? '#2f2f2f' : '#e5e7eb'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.86rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const miniActions = css`
  display: inline-flex;
  gap: 0.1rem;
`

const miniActionBtn = (danger = false) => css`
  border: none;
  background: transparent;
  color: ${danger ? '#ef4444' : '#6366f1'};
  cursor: pointer;
  font-weight: 700;
  padding: 0.2rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
`

const commentsToggle = (darkMode) => css`
  border: none;
  background: transparent;
  color: ${darkMode ? '#a5b4fc' : '#4f46e5'};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.86rem;
  padding: 0;

  svg {
    width: 0.92rem;
    height: 0.92rem;
  }
`

const commentsList = css`
  margin-top: 0.62rem;
  display: grid;
  gap: 0.52rem;
`

const commentItem = (darkMode) => css`
  border: 1px solid ${darkMode ? '#3f3f46' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.55rem 0.66rem;
`

const commentHead = css`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`

const commentIdentity = css`
  display: inline-flex;
  align-items: center;
  gap: 0.36rem;
  min-width: 0;
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

const commentBody = (darkMode) => css`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  white-space: pre-wrap;
`

const commentDeleteBtn = css`
  border: none;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }
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

function LecturerAnnouncements({ darkMode, userEmail }) {
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [courses, setCourses] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [editingId, setEditingId] = useState(0)
  const [expandedComments, setExpandedComments] = useState({})
  const [deletingCommentId, setDeletingCommentId] = useState(0)
  const [form, setForm] = useState({
    course_id: '',
    title: '',
    content: '',
  })

  const canLoad = useMemo(() => String(userEmail || '').trim() !== '', [userEmail])

  const resetForm = () => {
    setForm({ course_id: '', title: '', content: '' })
    setEditingId(0)
    setIsEditorOpen(false)
  }

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
  }, [canLoad, selectedCourse, userEmail])

  useEffect(() => {
    loadData()
  }, [loadData])

  const saveAnnouncement = async () => {
    const title = form.title.trim()
    const content = form.content.trim()
    if (!title || !content || !canLoad) {
      setError('Title and content are required.')
      return
    }
    setSaving(true)
    setError('')
    try {
      const payload = {
        user_email: userEmail,
        course_id: form.course_id ? Number(form.course_id) : null,
        title,
        content,
      }
      const method = editingId > 0 ? 'PUT' : 'POST'
      const res = await fetch(`${apiBase}/backend/announcements.php`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId > 0 ? { ...payload, id: editingId } : payload),
      })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Failed to save announcement')
      resetForm()
      await loadData()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to save announcement')
    } finally {
      setSaving(false)
    }
  }

  const editAnnouncement = (item) => {
    setIsEditorOpen(true)
    setEditingId(Number(item.id || 0))
    setForm({
      course_id: item.course_id ? String(item.course_id) : '',
      title: item.title || '',
      content: item.content || '',
    })
  }

  const deleteAnnouncement = async (id) => {
    if (!canLoad || !id) return
    const ok = window.confirm('Delete this announcement?')
    if (!ok) return
    setSaving(true)
    setError('')
    try {
      const query = new URLSearchParams({ id: String(id), user_email: userEmail })
      const res = await fetch(`${apiBase}/backend/announcements.php?${query.toString()}`, { method: 'DELETE' })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Failed to delete announcement')
      await loadData()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete announcement')
    } finally {
      setSaving(false)
    }
  }

  const deleteComment = async (commentId) => {
    if (!canLoad || !commentId) return
    const ok = window.confirm('Delete this comment?')
    if (!ok) return
    setDeletingCommentId(commentId)
    setError('')
    try {
      const res = await fetch(`${apiBase}/backend/announcement_comments.php`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: userEmail,
          comment_id: commentId,
        }),
      })
      const data = await res.json()
      if (!data?.success) throw new Error(data?.error || 'Failed to delete comment')
      await loadData()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete comment')
    } finally {
      setDeletingCommentId(0)
    }
  }

  return (
    <section css={wrapper}>
      <header css={headingRow}>
        <div>
          <h1 css={heading}>Class Announcements</h1>
          <p css={subheading(darkMode)}>Post updates and communicate with your students</p>
        </div>
        <button
          type="button"
          css={addBtn}
          onClick={() => {
            setIsEditorOpen(true)
            setEditingId(0)
            setForm({ course_id: '', title: '', content: '' })
          }}
        >
          + New Announcement
        </button>
      </header>

      <div css={toolbar(darkMode)}>
        <label css={label} htmlFor="lecturer-ann-course-filter">
          Filter by course:
        </label>
        <select
          id="lecturer-ann-course-filter"
          css={select(darkMode)}
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

      {isEditorOpen ? (
        <section css={editor(darkMode)}>
          <strong>{editingId > 0 ? 'Edit announcement' : 'New announcement'}</strong>
          <label css={label} htmlFor="lecturer-ann-course">
            Course (optional):
          </label>
          <select
            id="lecturer-ann-course"
            css={select(darkMode)}
            value={form.course_id}
            onChange={(e) => setForm((prev) => ({ ...prev, course_id: e.target.value }))}
          >
            <option value="">All Courses (General)</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.course_code} {course.course_name ? `- ${course.course_name}` : ''}
              </option>
            ))}
          </select>

          <label css={label} htmlFor="lecturer-ann-title">
            Title:
          </label>
          <input
            id="lecturer-ann-title"
            css={input(darkMode)}
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            maxLength={255}
          />

          <label css={label} htmlFor="lecturer-ann-content">
            Message:
          </label>
          <textarea
            id="lecturer-ann-content"
            css={textarea(darkMode)}
            value={form.content}
            onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
          />

          <div css={actionRow}>
            <button type="button" css={ghostBtn(darkMode)} onClick={resetForm} disabled={saving}>
              Cancel
            </button>
            <button type="button" css={addBtn} onClick={saveAnnouncement} disabled={saving}>
              {editingId > 0 ? 'Update' : 'Post'}
            </button>
          </div>
        </section>
      ) : null}

      {error ? <p css={muted(darkMode)}>{error}</p> : null}
      {loading ? <p css={muted(darkMode)}>Loading announcements...</p> : null}

      {!loading && announcements.length === 0 ? (
        <p css={muted(darkMode)}>No announcements yet. Create your first update.</p>
      ) : null}

      {announcements.map((item) => (
        <article key={item.id} css={card(darkMode)}>
          <div css={topRow}>
            <div css={topMeta}>
              <span css={codeLine}>{item.course_code || 'General'}</span>
              <span css={meta(darkMode)}>{formatDateTime(item.created_at)}</span>
            </div>
            {item.editable ? (
              <div css={miniActions}>
                <button
                  type="button"
                  css={miniActionBtn(false)}
                  onClick={() => editAnnouncement(item)}
                  title="Edit announcement"
                  aria-label="Edit announcement"
                >
                  <HiOutlinePencilSquare />
                </button>
                <button
                  type="button"
                  css={miniActionBtn(true)}
                  onClick={() => deleteAnnouncement(item.id)}
                  title="Delete announcement"
                  aria-label="Delete announcement"
                >
                  <HiOutlineTrash />
                </button>
              </div>
            ) : null}
          </div>

          <h2 css={title}>{item.title}</h2>
          <p css={content(darkMode)}>{item.content}</p>

          <div css={secondaryRow(darkMode)}>
            <button
              type="button"
              css={commentsToggle(darkMode)}
              onClick={() =>
                setExpandedComments((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
              }
            >
              <HiOutlineChatBubbleLeftRight />
              {item.comment_count || 0} comments
            </button>
            <span>
              👍 {item.reaction_counts?.like || 0} · ❤️ {item.reaction_counts?.love || 0} · 🎉{' '}
              {item.reaction_counts?.celebrate || 0}
            </span>
          </div>

          {expandedComments[item.id] ? (
            <div css={commentsList}>
              {(item.comments || []).length === 0 ? (
                <div css={muted(darkMode)}>No comments yet.</div>
              ) : (
                (item.comments || []).map((comment) => (
                  <div key={comment.id} css={commentItem(darkMode)}>
                    <div css={commentHead}>
                      <div css={commentIdentity}>
                        <span css={commentAvatar}>
                          <HiOutlineUserCircle />
                        </span>
                        <span css={commentAuthor}>{comment.student_name || 'Student'}</span>
                        <span css={commentTime(darkMode)}>{formatDateTime(comment.created_at)}</span>
                      </div>
                      {comment.can_delete ? (
                        <button
                          type="button"
                          css={commentDeleteBtn}
                          title="Delete comment"
                          aria-label="Delete comment"
                          onClick={() => deleteComment(comment.id)}
                          disabled={deletingCommentId === comment.id}
                        >
                          <HiOutlineTrash />
                        </button>
                      ) : null}
                    </div>
                    <div css={commentBody(darkMode)}>{comment.comment_text}</div>
                  </div>
                ))
              )}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  )
}

export default LecturerAnnouncements

