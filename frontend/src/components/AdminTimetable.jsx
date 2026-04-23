/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useMemo, useCallback } from 'react'
import {
  HiOutlineSquares2X2,
  HiOutlineViewColumns,
  HiOutlineListBullet,
  HiOutlinePlus,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineBookOpen,
  HiOutlineSparkles,
  HiOutlineXMark,
  HiOutlineCalendar,
} from 'react-icons/hi2'

const BASE = '/strack'
const themeTransition = '0.35s ease'

const ACCENT = '#7c3aed'
const ACCENT_HOVER = '#6d28d9'

const BAR_COLORS = [
  { bar: '#2563eb', bg: 'rgba(37, 99, 235, 0.12)' },
  { bar: '#7c3aed', bg: 'rgba(124, 58, 237, 0.12)' },
  { bar: '#db2777', bg: 'rgba(219, 39, 119, 0.12)' },
  { bar: '#059669', bg: 'rgba(5, 150, 105, 0.12)' },
  { bar: '#ea580c', bg: 'rgba(234, 88, 12, 0.12)' },
]

function toYMD(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function parseYMD(s) {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function isSameYMD(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function startOfWeekMonday(d) {
  const date = new Date(d)
  date.setHours(0, 0, 0, 0)
  const day = date.getDay()
  const diff = day === 0 ? -6 : 1 - day
  date.setDate(date.getDate() + diff)
  return date
}

function fmtTimeShort(t) {
  if (!t) return ''
  const p = t.split(':')
  return `${p[0]}:${p[1]}`
}

function timeToMinutes(t) {
  const p = t.split(':').map(Number)
  return p[0] * 60 + (p[1] || 0)
}

function colorIdx(entry) {
  const s =
    entry.entry_type === 'class' && entry.course_code
      ? entry.course_code
      : `${entry.entry_type}-${entry.id}-${entry.event_title || ''}`
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * (i + 1)) % 100000
  return Math.abs(h) % 5
}

function entryTitle(entry) {
  if (entry.entry_type === 'event') return entry.event_title || 'School event'
  return entry.course_code || 'Class'
}

function entrySubtitle(entry) {
  if (entry.entry_type === 'event') return entry.event_description || ''
  return entry.course_name || ''
}

function lecturersForCourse(course, allLecturers) {
  if (!course) return []
  const raw = (course.lecturer_id || '').toString().trim()
  if (!raw) return []
  const key = raw.toLowerCase()
  return allLecturers.filter((l) => (l.lecturer_id || '').toString().trim().toLowerCase() === key)
}

function getFetchRange(viewMode, cursor) {
  if (viewMode === 'monthly') {
    const y = cursor.getFullYear()
    const m = cursor.getMonth()
    const from = new Date(y, m, 1)
    const to = new Date(y, m + 1, 0)
    return { from: toYMD(from), to: toYMD(to) }
  }
  const ws = startOfWeekMonday(cursor)
  const we = new Date(ws)
  we.setDate(we.getDate() + 6)
  return { from: toYMD(ws), to: toYMD(we) }
}

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const WEEKDAY_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const wrapStyles = css`
  width: 100%;
`

const headerRowStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

const titleBlockStyles = css`
  flex: 1;
  min-width: 0;
`

const pageTitleStyles = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`

const pageSubtitleStyles = (darkMode) => css`
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  margin: 0;
  transition: color ${themeTransition};
`

const actionsStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`

const viewToggleStyles = (darkMode) => css`
  display: inline-flex;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  overflow: hidden;
  background: ${darkMode ? '#262626' : '#fff'};
`

const viewBtnStyles = (darkMode, active) => css`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  cursor: pointer;
  background: ${active ? ACCENT : 'transparent'};
  color: ${active ? '#fff' : darkMode ? '#e5e7eb' : '#1a1a1a'};
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${active ? ACCENT_HOVER : darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    flex-shrink: 0;
  }
`

const primaryBtnStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: ${ACCENT};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${ACCENT_HOVER};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }
`

const filterCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  justify-content: space-between;
  transition: background ${themeTransition}, border-color ${themeTransition};
`

const fieldStyles = css`
  flex: 1;
  min-width: 160px;
`

const labelStyles = (darkMode) => css`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
`

const selectStyles = (darkMode) => css`
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  font-size: 0.9rem;
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  color: inherit;
  box-sizing: border-box;
`

const navClusterStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
`

const navBtnStyles = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  color: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.06)' : '#f9fafb'};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const todayBtnStyles = (darkMode) => css`
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: inherit;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.06)' : '#f9fafb'};
  }
`

const periodLabelStyles = (darkMode) => css`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  min-width: 140px;
  text-align: center;
`

const monthGridStyles = (darkMode) => css`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.5rem;
  background: ${darkMode ? '#1a1a1a' : '#f3f4f6'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  padding: 0.75rem;
`

const dowHeaderStyles = (darkMode) => css`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  padding: 0.25rem;
`

const dayCellStyles = (darkMode, muted, isToday) => css`
  min-height: 104px;
  background: ${muted
    ? darkMode
      ? '#141414'
      : '#f9fafb'
    : isToday
      ? darkMode
        ? 'rgba(124, 58, 237, 0.16)'
        : 'rgba(124, 58, 237, 0.10)'
      : darkMode
        ? '#262626'
        : '#fff'};
  border: 1px solid
    ${isToday ? (darkMode ? 'rgba(167,139,250,0.65)' : 'rgba(124,58,237,0.45)') : darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 10px;
  padding: 0.4rem 0.45rem;
  cursor: ${muted ? 'default' : 'pointer'};
  transition: box-shadow 0.15s, border-color 0.15s, background 0.2s;

  &:hover {
    box-shadow: ${muted ? 'none' : darkMode ? '0 0 0 1px rgba(167,139,250,0.4)' : '0 0 0 1px rgba(124,58,237,0.25)'};
  }
`

const dayNumStyles = (darkMode, isToday) => css`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${isToday ? (darkMode ? '#e9d5ff' : '#6d28d9') : darkMode ? '#f3f4f6' : '#111827'};
`

const dayDowStyles = (darkMode) => css`
  font-size: 0.7rem;
  color: ${darkMode ? '#9ca3af' : '#9ca3af'};
  margin-bottom: 0.35rem;
`

const emptyHintStyles = css`
  font-size: 0.72rem;
  color: #9ca3af;
  font-style: italic;
  margin-top: 0.25rem;
`

const miniBarStyles = (bg) => css`
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.35rem;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  background: ${bg};
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  svg {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }
`

const weekOuterStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  max-height: min(78vh, 920px);
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  scrollbar-width: thin;

  @media (max-width: 767.98px) {
    max-height: min(68vh, 640px);
  }
`

const weekHeadRowStyles = css`
  display: flex;
  min-width: 720px;
`

const weekCornerStyles = (darkMode) => css`
  width: 56px;
  flex-shrink: 0;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
`

const weekDayHeadCellStyles = (darkMode, isToday) => css`
  flex: 1;
  min-width: 92px;
  text-align: center;
  padding: 0.55rem 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-left: 1px solid ${isToday ? (darkMode ? '#7c3aed' : '#a78bfa') : darkMode ? '#404040' : '#e5e7eb'};
  border-bottom: 1px solid ${isToday ? (darkMode ? '#7c3aed' : '#a78bfa') : darkMode ? '#404040' : '#e5e7eb'};
  background: ${isToday ? (darkMode ? 'rgba(124,58,237,0.24)' : 'rgba(124,58,237,0.10)') : darkMode ? '#262626' : '#f9fafb'};
`

const weekBodyFlexStyles = css`
  display: flex;
  min-width: 720px;
`

const weekRulerColStyles = (darkMode) => css`
  width: 56px;
  flex-shrink: 0;
  height: ${WEEK_GRID_HEIGHT}px;
  border-right: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  position: relative;
`

const weekRulerHourStyles = (darkMode) => css`
  position: absolute;
  left: 0;
  right: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  text-align: right;
  transform: translateY(-0.45rem);
`

const weekDayLaneStyles = (darkMode, isToday) => css`
  flex: 1;
  min-width: 92px;
  height: ${WEEK_GRID_HEIGHT}px;
  position: relative;
  border-left: 1px solid ${isToday ? (darkMode ? '#7c3aed' : '#a78bfa') : darkMode ? '#404040' : '#e5e7eb'};
  background: ${isToday
    ? darkMode
      ? `repeating-linear-gradient(to bottom, rgba(124,58,237,0.16) 0, rgba(124,58,237,0.16) 47px, #5b21b6 47px, #5b21b6 48px)`
      : `repeating-linear-gradient(to bottom, rgba(124,58,237,0.06) 0, rgba(124,58,237,0.06) 47px, #ddd6fe 47px, #ddd6fe 48px)`
    : darkMode
      ? `repeating-linear-gradient(to bottom, #1a1a1a 0, #1a1a1a 47px, #333 47px, #333 48px)`
      : `repeating-linear-gradient(to bottom, #fff 0, #fff 47px, #f3f4f6 47px, #f3f4f6 48px)`};
`

const weekEventAbsStyles = (darkMode, top, height, bar, bg) => css`
  position: absolute;
  left: 4px;
  right: 4px;
  top: ${top}px;
  height: ${height}px;
  background: ${bg};
  border-left: 3px solid ${bar};
  border-radius: 8px;
  padding: 0.3rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${darkMode ? '#f3f4f6' : '#111827'};
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`

const listDayCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`

const listDayHeaderStyles = (darkMode, isToday) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
  font-weight: 700;
  font-size: 0.95rem;
  background: ${isToday ? (darkMode ? 'rgba(124,58,237,0.18)' : 'rgba(124,58,237,0.08)') : 'transparent'};

  svg {
    width: 20px;
    height: 20px;
    color: ${ACCENT};
  }
`

const badgeStyles = (darkMode) => css`
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: ${darkMode ? '#404040' : '#f3f4f6'};
  color: ${darkMode ? '#d1d5db' : '#6b7280'};
`

const todayPillStyles = (darkMode) => css`
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  background: ${darkMode ? '#7c3aed' : '#ede9fe'};
  color: ${darkMode ? '#fff' : '#5b21b6'};
`

const listEntryStyles = (darkMode, bar) => css`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
  &:last-of-type {
    border-bottom: none;
  }

  &::before {
    content: '';
    width: 4px;
    flex-shrink: 0;
    background: ${bar};
  }
`

const listEntryInnerStyles = css`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  min-width: 0;
`

const tagPillStyles = (darkMode) => css`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: ${darkMode ? '#404040' : '#f3f4f6'};
  color: ${darkMode ? '#d1d5db' : '#6b7280'};
  margin-left: 0.35rem;
  vertical-align: middle;
`

const metaRowStyles = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`

const iconActionsStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 0.35rem;
`

const iconBtnStyles = (darkMode, danger) => css`
  padding: 0.4rem;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: ${danger ? '#dc2626' : darkMode ? '#9ca3af' : '#6b7280'};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${danger ? 'rgba(220,38,38,0.12)' : darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
    color: ${danger ? '#b91c1c' : darkMode ? '#fff' : '#111'};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const modalOverlayStyles = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(1rem, env(safe-area-inset-left));
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`

const modalBoxStyles = (darkMode) => css`
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  border-radius: 12px;
  width: 100%;
  max-width: 520px;
  max-height: min(92vh, 92dvh, 900px);
  margin: 0.5rem 0 1.5rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
`

const modalHeadStyles = (darkMode) => css`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
`

const modalTitleStyles = (darkMode) => css`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${darkMode ? '#fff' : '#111'};
`

const modalSubStyles = (darkMode) => css`
  margin: 0.35rem 0 0 0;
  font-size: 0.85rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const modalBodyStyles = css`
  padding: 1.25rem 1.5rem;
`

const modalFooterStyles = (darkMode) => css`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.25rem;
  border-top: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
`

const modalHeadRowStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

const formSubmitBtnStyles = css`
  padding: 0.5rem 1.1rem;
  border: none;
  border-radius: 8px;
  background: ${ACCENT};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${ACCENT_HOVER};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const formCancelBtnStyles = (darkMode) => css`
  padding: 0.5rem 1rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
  }
`

const modalFieldGapStyles = css`
  margin-bottom: 1rem;
`

const inputStyles = (darkMode) => css`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${darkMode ? '#262626' : '#fff'};
  color: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${ACCENT};
  }
`

const textareaStyles = (darkMode) => css`
  ${inputStyles(darkMode)}
  min-height: 88px;
  resize: vertical;
`

const row2Styles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const lectListStyles = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  padding: 0.5rem;
  max-height: min(160px, 35vh);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`

const lectRowStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-size: 0.88rem;
`

const loadingStyles = (darkMode) => css`
  padding: 2rem;
  text-align: center;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const WEEK_START_HOUR = 8
const WEEK_END_HOUR = 18
const HOUR_PX = 48
const WEEK_GRID_HEIGHT = (WEEK_END_HOUR - WEEK_START_HOUR) * HOUR_PX

function buildMonthCells(cursor) {
  const y = cursor.getFullYear()
  const m = cursor.getMonth()
  const first = new Date(y, m, 1)
  const last = new Date(y, m + 1, 0)
  const startPad = first.getDay()
  const daysInMonth = last.getDate()
  const cells = []
  for (let i = 0; i < startPad; i++) cells.push({ type: 'pad', date: null })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ type: 'day', date: new Date(y, m, d) })
  while (cells.length % 7 !== 0) cells.push({ type: 'pad', date: null })
  return cells
}

function weekEventPlacement(ev) {
  const startM = timeToMinutes(ev.start_time)
  const endM = timeToMinutes(ev.end_time)
  const gridStart = WEEK_START_HOUR * 60
  const gridEnd = WEEK_END_HOUR * 60
  if (endM <= gridStart || startM >= gridEnd) return null
  const clampStart = Math.max(startM, gridStart)
  const clampEnd = Math.min(endM, gridEnd)
  const top = ((clampStart - gridStart) / 60) * HOUR_PX
  const height = Math.max(((clampEnd - clampStart) / 60) * HOUR_PX, 28)
  return { top, height }
}

function AdminTimetable({ darkMode }) {
  const [viewMode, setViewMode] = useState('monthly')
  const [cursor, setCursor] = useState(() => new Date())
  const [filterDept, setFilterDept] = useState('')
  const [filterLecturer, setFilterLecturer] = useState('')

  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState([])
  const [lecturers, setLecturers] = useState([])
  const [departments, setDepartments] = useState([])

  const [modalOpen, setModalOpen] = useState(false)
  const [editId, setEditId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    entry_type: 'class',
    course_id: '',
    event_title: '',
    event_description: '',
    entry_date: '',
    start_time: '09:00',
    end_time: '11:00',
    room_location: '',
    lecturer_ids: [],
  })

  const cursorTs = cursor.getTime()

  const { from, to } = useMemo(() => getFetchRange(viewMode, cursor), [viewMode, cursorTs])

  const loadMeta = useCallback(async () => {
    try {
      const [cRes, lRes, dRes] = await Promise.all([
        fetch(`${BASE}/backend/courses.php`),
        fetch(`${BASE}/backend/lecturers.php`),
        fetch(`${BASE}/backend/departments.php`),
      ])
      const cJson = await cRes.json()
      const lJson = await lRes.json()
      const dJson = await dRes.json()
      if (cJson.success) setCourses(cJson.courses || [])
      if (lJson.success) setLecturers(lJson.lecturers || [])
      if (dJson.success) setDepartments(dJson.departments || [])
    } catch (_) {
      setCourses([])
      setLecturers([])
      setDepartments([])
    }
  }, [])

  const loadEntries = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/timetable.php?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`, {
        cache: 'no-store',
      })
      const data = await res.json()
      if (data.success) setEntries(data.entries || [])
      else setEntries([])
    } catch (_) {
      setEntries([])
    } finally {
      setLoading(false)
    }
  }, [from, to])

  useEffect(() => {
    loadMeta()
  }, [loadMeta])

  useEffect(() => {
    loadEntries()
  }, [loadEntries])

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      if (filterDept) {
        const deptMatch =
          (e.department && e.department === filterDept) ||
          (e.lecturers && e.lecturers.some((l) => l.department === filterDept))
        if (!deptMatch) return false
      }
      if (filterLecturer) {
        const lid = parseInt(filterLecturer, 10)
        const has = e.lecturers && e.lecturers.some((l) => l.id === lid)
        if (!has) return false
      }
      return true
    })
  }, [entries, filterDept, filterLecturer])

  const deptOptions = useMemo(() => {
    const names = new Set(departments.map((d) => d.name).filter(Boolean))
    courses.forEach((c) => {
      if (c.department) names.add(c.department)
    })
    return Array.from(names).sort()
  }, [departments, courses])

  const selectedCourse = useMemo(
    () => (form.course_id ? courses.find((c) => String(c.id) === String(form.course_id)) : null),
    [courses, form.course_id]
  )

  const moduleLecturers = useMemo(
    () => lecturersForCourse(selectedCourse, lecturers),
    [selectedCourse, lecturers]
  )

  const periodLabel = useMemo(() => {
    if (viewMode === 'monthly') {
      return cursor.toLocaleString(undefined, { month: 'long', year: 'numeric' })
    }
    const ws = startOfWeekMonday(cursor)
    const we = new Date(ws)
    we.setDate(we.getDate() + 6)
    return `${toYMD(ws).replace(/-/g, '/')} – ${toYMD(we).replace(/-/g, '/')}`
  }, [viewMode, cursorTs])

  const openAdd = (prefillDate) => {
    setEditId(null)
    const d = prefillDate ? toYMD(prefillDate) : toYMD(new Date())
    setForm({
      entry_type: 'class',
      course_id: '',
      event_title: '',
      event_description: '',
      entry_date: d,
      start_time: '09:00',
      end_time: '11:00',
      room_location: '',
      lecturer_ids: [],
    })
    setModalOpen(true)
  }

  const openEdit = (e) => {
    setEditId(e.id)
    const course =
      e.entry_type === 'class' && e.course_id
        ? courses.find((c) => Number(c.id) === Number(e.course_id))
        : null
    const allowed = new Set(lecturersForCourse(course, lecturers).map((l) => l.id))
    const lids =
      e.entry_type === 'class'
        ? (e.lecturers || []).map((l) => l.id).filter((id) => allowed.has(id))
        : []
    setForm({
      entry_type: e.entry_type,
      course_id: e.course_id ? String(e.course_id) : '',
      event_title: e.event_title || '',
      event_description: e.event_description || '',
      entry_date: e.entry_date,
      start_time: fmtTimeShort(e.start_time),
      end_time: fmtTimeShort(e.end_time),
      room_location: e.room_location || '',
      lecturer_ids: lids,
    })
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const toggleLecturer = (id) => {
    setForm((f) => {
      const set = new Set(f.lecturer_ids)
      if (set.has(id)) set.delete(id)
      else set.add(id)
      return { ...f, lecturer_ids: Array.from(set) }
    })
  }

  const saveEntry = async () => {
    const payload = {
      entry_type: form.entry_type,
      course_id: form.entry_type === 'class' ? parseInt(form.course_id, 10) : 0,
      event_title: form.event_title,
      event_description: form.event_description,
      entry_date: form.entry_date,
      start_time: form.start_time,
      end_time: form.end_time,
      room_location: form.room_location,
      lecturer_account_ids: form.entry_type === 'class' ? form.lecturer_ids : [],
    }
    if (form.entry_type === 'class' && !payload.course_id) {
      window.alert('Please select a module.')
      return
    }
    if (form.entry_type === 'event' && !payload.event_title.trim()) {
      window.alert('Please enter an event title.')
      return
    }
    setSaving(true)
    try {
      const url = `${BASE}/backend/timetable.php`
      const opt = editId
        ? { method: 'PUT', body: JSON.stringify({ id: editId, ...payload }) }
        : { method: 'POST', body: JSON.stringify(payload) }
      const res = await fetch(url, {
        ...opt,
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if (!data.success) {
        window.alert(data.error || 'Could not save.')
        return
      }
      closeModal()
      loadEntries()
    } catch (_) {
      window.alert('Network error.')
    } finally {
      setSaving(false)
    }
  }

  const deleteEntry = async (e) => {
    if (!window.confirm('Delete this timetable entry?')) return
    try {
      const res = await fetch(`${BASE}/backend/timetable.php?id=${e.id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!data.success) {
        window.alert(data.error || 'Could not delete.')
        return
      }
      loadEntries()
    } catch (_) {
      window.alert('Network error.')
    }
  }

  const goToday = () => setCursor(new Date())
  const goPrev = () => {
    if (viewMode === 'monthly') {
      setCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
    } else {
      setCursor((d) => {
        const x = new Date(d)
        x.setDate(x.getDate() - 7)
        return x
      })
    }
  }
  const goNext = () => {
    if (viewMode === 'monthly') {
      setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
    } else {
      setCursor((d) => {
        const x = new Date(d)
        x.setDate(x.getDate() + 7)
        return x
      })
    }
  }

  const derivedDay = form.entry_date
    ? WEEKDAY_FULL[parseYMD(form.entry_date).getDay()]
    : ''
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])
  const todayYmd = toYMD(today)

  const monthCells = useMemo(() => buildMonthCells(cursor), [cursorTs, viewMode])

  const entriesByDate = useMemo(() => {
    const m = {}
    filtered.forEach((e) => {
      if (!m[e.entry_date]) m[e.entry_date] = []
      m[e.entry_date].push(e)
    })
    Object.keys(m).forEach((k) => m[k].sort((a, b) => a.start_time.localeCompare(b.start_time)))
    return m
  }, [filtered])

  const listGrouped = useMemo(() => {
    const keys = Object.keys(entriesByDate).sort()
    return keys.map((k) => ({ date: k, items: entriesByDate[k] }))
  }, [entriesByDate])

  const weekStart = startOfWeekMonday(cursor)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart)
    d.setDate(d.getDate() + i)
    return d
  })

  const hourLabels = Array.from({ length: WEEK_END_HOUR - WEEK_START_HOUR }, (_, i) => WEEK_START_HOUR + i)

  return (
    <div css={wrapStyles}>
      <div css={headerRowStyles}>
        <div css={titleBlockStyles}>
          <h1 css={pageTitleStyles}>Timetable Management</h1>
          <p css={pageSubtitleStyles(darkMode)}>Manage class schedules and school events</p>
        </div>
        <div css={actionsStyles}>
          <div css={viewToggleStyles(darkMode)}>
            <button
              type="button"
              css={viewBtnStyles(darkMode, viewMode === 'monthly')}
              onClick={() => setViewMode('monthly')}
            >
              <HiOutlineSquares2X2 aria-hidden />
              Monthly
            </button>
            <button
              type="button"
              css={viewBtnStyles(darkMode, viewMode === 'weekly')}
              onClick={() => setViewMode('weekly')}
            >
              <HiOutlineViewColumns aria-hidden />
              Weekly
            </button>
            <button
              type="button"
              css={viewBtnStyles(darkMode, viewMode === 'list')}
              onClick={() => setViewMode('list')}
            >
              <HiOutlineListBullet aria-hidden />
              List
            </button>
          </div>
          <button type="button" css={primaryBtnStyles} onClick={() => openAdd(null)}>
            <HiOutlinePlus aria-hidden />
            Add Entry
          </button>
        </div>
      </div>

      <div css={filterCardStyles(darkMode)}>
        <div css={fieldStyles}>
          <label css={labelStyles(darkMode)}>Filter by Department</label>
          <select
            css={selectStyles(darkMode)}
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {deptOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div css={fieldStyles}>
          <label css={labelStyles(darkMode)}>Filter by Lecturer</label>
          <select
            css={selectStyles(darkMode)}
            value={filterLecturer}
            onChange={(e) => setFilterLecturer(e.target.value)}
          >
            <option value="">All Lecturers</option>
            {lecturers.map((l) => (
              <option key={l.id} value={String(l.id)}>
                {l.full_name} ({l.lecturer_id})
              </option>
            ))}
          </select>
        </div>
        <div css={navClusterStyles}>
          <button type="button" css={navBtnStyles(darkMode)} onClick={goPrev} aria-label="Previous">
            <HiOutlineChevronLeft />
          </button>
          <button type="button" css={todayBtnStyles(darkMode)} onClick={goToday}>
            Today
          </button>
          <button type="button" css={navBtnStyles(darkMode)} onClick={goNext} aria-label="Next">
            <HiOutlineChevronRight />
          </button>
          <span css={periodLabelStyles(darkMode)}>{periodLabel}</span>
        </div>
      </div>

      {loading ? (
        <p css={loadingStyles(darkMode)}>Loading timetable…</p>
      ) : viewMode === 'monthly' ? (
        <div css={monthGridStyles(darkMode)}>
          {WEEKDAY_LABELS.map((d) => (
            <div key={d} css={dowHeaderStyles(darkMode)}>
              {d}
            </div>
          ))}
          {monthCells.map((cell, i) => {
            if (cell.type === 'pad') {
              return <div key={`pad-${i}`} css={dayCellStyles(darkMode, true, false)} />
            }
            const ymd = toYMD(cell.date)
            const isToday = ymd === todayYmd
            const dayEntries = entriesByDate[ymd] || []
            const show = dayEntries.slice(0, 3)
            const more = dayEntries.length - show.length
            return (
              <div
                key={ymd}
                role="button"
                tabIndex={0}
                css={dayCellStyles(darkMode, false, isToday)}
                onClick={() => openAdd(cell.date)}
                onKeyDown={(ev) => ev.key === 'Enter' && openAdd(cell.date)}
              >
                <div css={dayNumStyles(darkMode, isToday)}>
                  {cell.date.getDate()} {isToday ? '• Today' : ''}
                </div>
                <div css={dayDowStyles(darkMode)}>{WEEKDAY_LABELS[cell.date.getDay()]}</div>
                {show.length === 0 ? (
                  <p css={emptyHintStyles}>Click to add</p>
                ) : (
                  show.map((ev) => {
                    const ci = colorIdx(ev)
                    const pal = BAR_COLORS[ci]
                    return (
                      <div
                        key={ev.id}
                        css={miniBarStyles(pal.bar)}
                        onClick={(e) => {
                          e.stopPropagation()
                          openEdit(ev)
                        }}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="presentation"
                      >
                        <HiOutlineClock />
                        {entryTitle(ev)}
                        <span style={{ opacity: 0.95, fontWeight: 600 }}>{fmtTimeShort(ev.start_time)}</span>
                      </div>
                    )
                  })
                )}
                {more > 0 && (
                  <div style={{ fontSize: '0.65rem', color: '#6b7280', marginTop: 2 }}>+{more} more</div>
                )}
              </div>
            )
          })}
        </div>
      ) : viewMode === 'weekly' ? (
        <div css={weekOuterStyles(darkMode)}>
          <div css={weekHeadRowStyles}>
            <div css={weekCornerStyles(darkMode)} />
            {weekDays.map((d) => (
              <div key={toYMD(d)} css={weekDayHeadCellStyles(darkMode, isSameYMD(d, today))}>
                {WEEKDAY_LABELS[d.getDay()]}
                <div style={{ fontWeight: 500, fontSize: '0.75rem', opacity: 0.85 }}>{d.getDate()}</div>
              </div>
            ))}
          </div>
          <div css={weekBodyFlexStyles}>
            <div css={weekRulerColStyles(darkMode)}>
              {hourLabels.map((h) => (
                <div
                  key={h}
                  css={weekRulerHourStyles(darkMode)}
                  style={{ top: (h - WEEK_START_HOUR) * HOUR_PX }}
                >
                  {String(h).padStart(2, '0')}:00
                </div>
              ))}
            </div>
            {weekDays.map((d) => {
              const ymd = toYMD(d)
              return (
                <div key={ymd} css={weekDayLaneStyles(darkMode, ymd === todayYmd)}>
                  {(entriesByDate[ymd] || []).map((ev) => {
                    const pos = weekEventPlacement(ev)
                    if (!pos) return null
                    const ci = colorIdx(ev)
                    const pal = BAR_COLORS[ci]
                    const isEv = ev.entry_type === 'event'
                    return (
                      <div
                        key={ev.id}
                        role="button"
                        tabIndex={0}
                        css={weekEventAbsStyles(darkMode, pos.top, pos.height, pal.bar, pal.bg)}
                        onClick={() => openEdit(ev)}
                        onKeyDown={(k) => k.key === 'Enter' && openEdit(ev)}
                      >
                        {isEv && (
                          <HiOutlineSparkles
                            style={{ width: 11, height: 11, opacity: 0.9, marginBottom: 2, display: 'block' }}
                          />
                        )}
                        <div style={{ fontWeight: 800 }}>{entryTitle(ev)}</div>
                        <div style={{ fontWeight: 500, opacity: 0.95, marginTop: 2 }}>
                          {fmtTimeShort(ev.start_time)} – {fmtTimeShort(ev.end_time)}
                        </div>
                        {ev.room_location && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                              marginTop: 4,
                              fontWeight: 600,
                              opacity: 0.9,
                            }}
                          >
                            <HiOutlineMapPin style={{ width: 12, height: 12 }} />
                            {ev.room_location}
                          </div>
                        )}
                        {(ev.lecturers || []).length > 0 && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 4,
                              marginTop: 2,
                              fontWeight: 500,
                              fontSize: '0.68rem',
                              opacity: 0.95,
                            }}
                          >
                            <HiOutlineUser style={{ width: 12, height: 12 }} />
                            {ev.lecturers[0].full_name}
                            {(ev.lecturers || []).length > 1 ? '…' : ''}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div>
          {listGrouped.length === 0 ? (
            <p css={loadingStyles(darkMode)}>No entries in this range. Use Add Entry or pick another week.</p>
          ) : (
            listGrouped.map(({ date, items }) => {
              const d = parseYMD(date)
              const isToday = date === todayYmd
              const label = d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
              return (
                <div key={date} css={listDayCardStyles(darkMode)}>
                  <div css={listDayHeaderStyles(darkMode, isToday)}>
                    <HiOutlineCalendar aria-hidden />
                    {label}
                    {isToday && <span css={todayPillStyles(darkMode)}>Today</span>}
                    <span css={badgeStyles(darkMode)}>
                      {items.length} {items.length === 1 ? 'entry' : 'entries'}
                    </span>
                  </div>
                  {items.map((ev) => {
                    const ci = colorIdx(ev)
                    const pal = BAR_COLORS[ci]
                    return (
                      <div key={ev.id} css={listEntryStyles(darkMode, pal.bar)}>
                        <div css={listEntryInnerStyles}>
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem' }}>
                              {ev.entry_type === 'event' ? (
                                <HiOutlineSparkles style={{ width: 18, height: 18, color: pal.bar }} />
                              ) : (
                                <HiOutlineBookOpen style={{ width: 18, height: 18, color: pal.bar }} />
                              )}
                              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                                {ev.entry_type === 'class'
                                  ? `${entryTitle(ev)} – ${ev.course_name || 'Module'}`
                                  : entryTitle(ev)}
                              </span>
                              <span css={tagPillStyles(darkMode)}>
                                {ev.entry_type === 'class' ? 'Class' : 'Event'}
                              </span>
                            </div>
                            {ev.entry_type === 'event' && ev.event_description && (
                              <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.85rem', opacity: 0.85 }}>
                                {ev.event_description}
                              </p>
                            )}
                            <div css={metaRowStyles(darkMode)}>
                              <span>
                                <HiOutlineClock />
                                {fmtTimeShort(ev.start_time)} – {fmtTimeShort(ev.end_time)}
                              </span>
                              {ev.room_location && (
                                <span>
                                  <HiOutlineMapPin />
                                  {ev.room_location}
                                </span>
                              )}
                              {(ev.lecturers || []).length > 0 && (
                                <span>
                                  <HiOutlineUser />
                                  {(ev.lecturers || []).map((l) => l.full_name).join(', ')}
                                </span>
                              )}
                            </div>
                          </div>
                          <div css={iconActionsStyles}>
                            <button
                              type="button"
                              css={iconBtnStyles(darkMode, false)}
                              title="Edit"
                              onClick={() => openEdit(ev)}
                            >
                              <HiOutlinePencil />
                            </button>
                            <button
                              type="button"
                              css={iconBtnStyles(darkMode, true)}
                              title="Delete"
                              onClick={() => deleteEntry(ev)}
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })
          )}
        </div>
      )}

      {modalOpen && (
        <div
          css={modalOverlayStyles}
          role="presentation"
          onClick={closeModal}
        >
          <div css={modalBoxStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeadStyles(darkMode)}>
              <div css={modalHeadRowStyles}>
                <div>
                  <h3 css={modalTitleStyles(darkMode)}>
                    {editId ? 'Edit Timetable Entry' : 'Add New Timetable Entry'}
                  </h3>
                  <p css={modalSubStyles(darkMode)}>Create or update a class or school event.</p>
                </div>
                <button type="button" css={iconBtnStyles(darkMode, false)} onClick={closeModal} aria-label="Close">
                  <HiOutlineXMark />
                </button>
              </div>
            </div>
            <div css={modalBodyStyles}>
              <div css={modalFieldGapStyles}>
                <label css={labelStyles(darkMode)}>Entry Type</label>
                <select
                  css={selectStyles(darkMode)}
                  value={form.entry_type}
                  onChange={(e) => {
                    const t = e.target.value === 'event' ? 'event' : 'class'
                    setForm((f) => ({
                      ...f,
                      entry_type: t,
                      lecturer_ids: t === 'event' ? [] : f.entry_type === 'event' ? [] : f.lecturer_ids,
                    }))
                  }}
                >
                  <option value="class">Class</option>
                  <option value="event">School Event</option>
                </select>
              </div>
              {form.entry_type === 'class' ? (
                <div css={modalFieldGapStyles}>
                  <label css={labelStyles(darkMode)}>Module</label>
                  <select
                    css={selectStyles(darkMode)}
                    value={form.course_id}
                    onChange={(e) => {
                      const cid = e.target.value
                      const course = courses.find((c) => String(c.id) === cid)
                      const related = lecturersForCourse(course, lecturers)
                      const nextIds = related.length === 1 ? [related[0].id] : []
                      setForm((f) => ({ ...f, course_id: cid, lecturer_ids: nextIds }))
                    }}
                  >
                    <option value="">Select module</option>
                    {courses.map((c) => (
                      <option key={c.id} value={String(c.id)}>
                        {c.course_code} — {c.course_name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <>
                  <div css={modalFieldGapStyles}>
                    <label css={labelStyles(darkMode)}>Event Title</label>
                    <input
                      type="text"
                      css={inputStyles(darkMode)}
                      placeholder="e.g. Annual Sports Day"
                      value={form.event_title}
                      onChange={(e) => setForm((f) => ({ ...f, event_title: e.target.value }))}
                    />
                  </div>
                  <div css={modalFieldGapStyles}>
                    <label css={labelStyles(darkMode)}>Event Description</label>
                    <textarea
                      css={textareaStyles(darkMode)}
                      placeholder="Brief description of the event"
                      value={form.event_description}
                      onChange={(e) => setForm((f) => ({ ...f, event_description: e.target.value }))}
                    />
                  </div>
                </>
              )}
              <div css={modalFieldGapStyles}>
                <label css={labelStyles(darkMode)}>Specific Date</label>
                <input
                  type="date"
                  css={inputStyles(darkMode)}
                  value={form.entry_date}
                  onChange={(e) => setForm((f) => ({ ...f, entry_date: e.target.value }))}
                />
                <p css={modalSubStyles(darkMode)} style={{ marginTop: '0.35rem' }}>
                  Select the specific date for this class or event.
                </p>
              </div>
              <div css={modalFieldGapStyles}>
                <label css={labelStyles(darkMode)}>Day (auto-filled)</label>
                <input
                  type="text"
                  css={inputStyles(darkMode)}
                  value={derivedDay}
                  readOnly
                  disabled
                  placeholder="Will be set based on selected date"
                />
              </div>
              <div css={row2Styles}>
                <div css={modalFieldGapStyles}>
                  <label css={labelStyles(darkMode)}>Start Time</label>
                  <input
                    type="time"
                    css={inputStyles(darkMode)}
                    value={form.start_time}
                    onChange={(e) => setForm((f) => ({ ...f, start_time: e.target.value }))}
                  />
                </div>
                <div css={modalFieldGapStyles}>
                  <label css={labelStyles(darkMode)}>End Time</label>
                  <input
                    type="time"
                    css={inputStyles(darkMode)}
                    value={form.end_time}
                    onChange={(e) => setForm((f) => ({ ...f, end_time: e.target.value }))}
                  />
                </div>
              </div>
              <div css={modalFieldGapStyles}>
                <label css={labelStyles(darkMode)}>Room / Location</label>
                <input
                  type="text"
                  css={inputStyles(darkMode)}
                  placeholder="e.g. CS-101, Lab 3"
                  value={form.room_location}
                  onChange={(e) => setForm((f) => ({ ...f, room_location: e.target.value }))}
                />
              </div>
              {form.entry_type === 'class' && (
                <div css={modalFieldGapStyles}>
                  <label css={labelStyles(darkMode)}>Lecturer(s) for this module</label>
                  <div css={lectListStyles(darkMode)}>
                    {!form.course_id ? (
                      <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>Select a module to see assigned lecturer(s).</span>
                    ) : moduleLecturers.length === 0 ? (
                      <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        This module has no linked lecturer. Assign one in the Courses section.
                      </span>
                    ) : (
                      moduleLecturers.map((l) => (
                        <label key={l.id} css={lectRowStyles}>
                          <input
                            type="checkbox"
                            checked={form.lecturer_ids.includes(l.id)}
                            onChange={() => toggleLecturer(l.id)}
                          />
                          {l.full_name}
                          {l.department ? ` (${l.department})` : ''}
                        </label>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={formCancelBtnStyles(darkMode)} onClick={closeModal}>
                Cancel
              </button>
              <button type="button" css={formSubmitBtnStyles} onClick={saveEntry} disabled={saving}>
                {saving ? 'Saving…' : editId ? 'Save Changes' : 'Create Entry'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminTimetable
