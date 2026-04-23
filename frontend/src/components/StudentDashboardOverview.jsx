/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  HiOutlineArrowRight,
  HiOutlineBookOpen,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineChevronDown,
  HiOutlineClock,
  HiOutlineMagnifyingGlass,
  HiOutlineMegaphone,
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineXMark,
} from 'react-icons/hi2'
import { getCoursesVisibleToStudent } from '../getCoursesVisibleToStudent'
import { findStudentMe } from '../findStudentMe'
import {
  COURSE_STUDY_YEAR_OPTIONS,
  SEMESTER_FORM_OPTIONS,
  formatStudyYearDisplay,
} from '../courseDisplayUtils'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
const ACCENT = '#6366f1'
const STUDY_MODULE_LINE = '#22c55e'

const PERFORMANCE_MARK_LINE_COLORS = ['#a78bfa', '#60a5fa', '#ec4899', '#34d399', '#fbbf24', '#38bdf8', '#fb923c']

const PIE_COLORS = {
  Present: '#22c55e',
  Late: '#eab308',
  Absent: '#ef4444',
}

const DASHBOARD_SCROLL_LIST_MAX = 40

const BADGE_RULES = [
  (s) => Number(s.attendance || 0) >= 95,
  (s) => Number(s.gpa || 0) >= 3.7,
  (s) => Number(s.points || 0) >= 500,
  (s) => Number(s.gpa || 0) >= 3.3,
  (s) => Number(s.points || 0) >= 250,
  (s) => Number(s.points || 0) >= 900,
  (s) => Number(s.pomodoro_sessions_count || 0) >= 10,
]

const wrap = css`
  width: 100%;
`

const heading = css`
  margin: 0;
  font-size: clamp(1.35rem, 2.3vw, 1.85rem);
  line-height: 1.15;
  font-weight: 800;
`

const subheading = (darkMode) => css`
  margin: 0.25rem 0 1rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.95rem;
`

const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.9rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const kpiCard = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 0.95rem;
`

const kpiLabel = (darkMode) => css`
  margin: 0;
  font-size: 0.78rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`

const kpiValue = css`
  margin: 0.55rem 0 0.15rem;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 800;
`

const kpiSub = (darkMode) => css`
  margin: 0;
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const grid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const chartGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 0.95rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const chartBody = css`
  width: 100%;
  min-height: 260px;
`

const perfMarksModalBackdrop = css`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(3px);
`

const perfMarksModalCard = (darkMode) => css`
  width: 100%;
  max-width: 22rem;
  max-height: min(85vh, 28rem);
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  border: 1px solid ${darkMode ? '#525252' : '#e5e7eb'};
  background: ${darkMode ? '#262626' : '#f3f4f6'};
  box-shadow: ${darkMode ? '0 24px 48px rgba(0,0,0,0.55)' : '0 20px 40px rgba(0,0,0,0.12)'};
  overflow: hidden;
`

const perfMarksModalHead = (darkMode) => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1rem 0.65rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#fff'};
`

const perfMarksModalTitle = (darkMode) => css`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: ${darkMode ? '#fafafa' : '#111827'};
`

const perfMarksModalSub = (darkMode) => css`
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  line-height: 1.35;
`

const perfMarksModalClose = (darkMode) => css`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${darkMode ? '#404040' : '#e5e7eb'};
  color: ${darkMode ? '#f9fafb' : '#111827'};

  &:hover {
    background: ${darkMode ? '#525252' : '#d1d5db'};
  }
`

const perfMarksModalBody = css`
  padding: 0.85rem 1rem 1rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`

const perfMarksModalAvg = (darkMode) => css`
  margin: 0 0 0.75rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${darkMode ? '#d1d5db' : '#374151'};
`

const perfMarksModalRow = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.42rem 0;
  font-size: 0.95rem;
  font-weight: 700;
`

const performanceBarChartShell = (barCount) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .recharts-responsive-container {
    width: 100% !important;
    max-width: ${barCount <= 1
      ? 'min(100%, 22rem)'
      : barCount <= 2
        ? 'min(100%, 32rem)'
        : barCount <= 4
          ? 'min(100%, 48rem)'
          : '100%'};
  }
`

const performanceModuleFilterBlock = (darkMode) => css`
  margin: -0.15rem 0 0.75rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#f9fafb'};
`

const performanceModuleFilterGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

const performanceModuleSelect = (darkMode) => css`
  width: 100%;
  margin-top: 0.35rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  background: ${darkMode ? '#262626' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.5rem 0.6rem;
  font-family: inherit;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px ${darkMode ? 'rgba(99, 102, 241, 0.35)' : 'rgba(99, 102, 241, 0.22)'};
  }
`

const attendanceFilterBlock = (darkMode) => css`
  margin-bottom: 0.75rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#f9fafb'};
`

const attendanceFilterLabel = (darkMode) => css`
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
`

const attendanceComboWrap = css`
  position: relative;
  width: 100%;
`

const attendanceComboTrigger = (darkMode, open) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-align: left;
  border-radius: 10px;
  border: 1px solid ${open ? '#6366f1' : darkMode ? '#525252' : '#d1d5db'};
  background: ${darkMode ? '#262626' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.52rem 0.65rem;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: ${open ? `0 0 0 2px ${darkMode ? 'rgba(99, 102, 241, 0.35)' : 'rgba(99, 102, 241, 0.22)'}` : 'none'};

  &:hover {
    border-color: #6366f1;
  }
`

const attendanceComboChevron = (open) => css`
  flex-shrink: 0;
  width: 1.15rem;
  height: 1.15rem;
  transition: transform 0.15s ease;
  transform: ${open ? 'rotate(180deg)' : 'none'};
  opacity: 0.75;
`

const attendanceDropdown = (darkMode) => css`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.35rem);
  z-index: 40;
  border-radius: 10px;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#262626' : '#fff'};
  box-shadow: ${darkMode ? '0 12px 32px rgba(0,0,0,0.45)' : '0 10px 28px rgba(0,0,0,0.1)'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: min(22rem, 70vh);
`

const attendanceSearchRow = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.55rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  background: ${darkMode ? '#1f1f1f' : '#f9fafb'};
`

const attendanceSearchInput = (darkMode) => css`
  flex: 1;
  min-width: 0;
  border: 1px solid ${darkMode ? '#525252' : '#d1d5db'};
  border-radius: 8px;
  padding: 0.38rem 0.5rem;
  font-size: 0.84rem;
  font-family: inherit;
  background: ${darkMode ? '#262626' : '#fff'};
  color: ${darkMode ? '#e5e7eb' : '#111827'};
  outline: none;

  &:focus {
    border-color: #6366f1;
  }
`

const attendanceDropdownActions = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.85rem;
  padding: 0.45rem 0.55rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  font-size: 0.78rem;
`

const attendanceFilterListScroll = (darkMode) => css`
  overflow-y: auto;
  max-height: 14rem;
  padding: 0.25rem 0.35rem 0.45rem;
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#525252 transparent' : '#d1d5db transparent'};
`

const attendanceCheckRow = (darkMode) => css`
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  padding: 0.38rem 0.45rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.84rem;
  color: ${darkMode ? '#e5e7eb' : '#111827'};

  &:hover {
    background: ${darkMode ? 'rgba(99,102,241,0.12)' : '#f3f4f6'};
  }

  input {
    margin-top: 0.15rem;
    accent-color: #6366f1;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }
`

const attendanceCheckMeta = (darkMode) => css`
  display: block;
  font-size: 0.72rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-weight: 500;
  margin-top: 0.08rem;
`

const attendanceChipsRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.45rem;
`

const attendanceChip = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  max-width: 100%;
  padding: 0.22rem 0.4rem 0.22rem 0.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  border: 1px solid ${darkMode ? '#6366f1' : '#c7d2fe'};
  background: ${darkMode ? 'rgba(99, 102, 241, 0.2)' : '#eef2ff'};
  color: ${darkMode ? '#e0e7ff' : '#3730a3'};
`

const attendanceChipRemove = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0.1rem;
  margin: 0;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    background: ${darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.06)'};
  }

  svg {
    width: 0.85rem;
    height: 0.85rem;
  }
`

const filterLinkBtn = (darkMode) => css`
  border: none;
  background: transparent;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${darkMode ? '#a5b4fc' : '#4f46e5'};
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
`

const panel = (darkMode) => css`
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 12px;
  background: ${darkMode ? '#262626' : '#fff'};
  padding: 0.95rem;
`

const panelHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
`

const panelTitle = (darkMode) => css`
  margin: 0;
  font-size: 1.02rem;
  font-weight: 700;
  color: ${darkMode ? '#f9fafb' : '#111827'};
  display: inline-flex;
  gap: 0.4rem;
  align-items: center;

  svg {
    width: 1.05rem;
    height: 1.05rem;
    color: #6366f1;
  }
`

const linkBtn = (darkMode) => css`
  border: none;
  background: transparent;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  font-size: 0.86rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0;
`

const muted = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.9rem;
`

const announcementHead = css`
  display: flex;
  align-items: center;
  gap: 0.58rem;
`

const announcementAvatar = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.73rem;
  font-weight: 700;
  flex-shrink: 0;
`

const announcementTitle = css`
  margin: 0.55rem 0 0.45rem;
  font-size: 1.55rem;
  font-weight: 800;
  line-height: 1.18;
`

const announcementBody = (darkMode) => css`
  margin: 0 0 0.5rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  line-height: 1.45;
`

const announcementItemWrap = (darkMode, isLast) => css`
  padding-bottom: 0.9rem;
  margin-bottom: 0.9rem;
  border-bottom: ${isLast ? 'none' : `1px solid ${darkMode ? '#404040' : '#e5e7eb'}`};
`

const metaLine = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.84rem;
`

const attendanceCourseRow = css`
  flex: 0 0 auto;
  min-width: 0;
  box-sizing: border-box;
`

const attendanceCourseNameMeta = (darkMode) => css`
  margin: 0.18rem 0 0.25rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.9rem;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
`

const courseRowTop = css`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`

const attendanceCourseCodeTitle = css`
  margin: 0;
  font-size: 1.45rem;
  font-weight: 800;
  line-height: 1.15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const countsRow = css`
  display: inline-flex;
  gap: 0.65rem;
  font-size: 0.82rem;
  margin-bottom: 0.2rem;
`

const track = (darkMode) => css`
  height: 8px;
  border-radius: 999px;
  background: ${darkMode ? '#404040' : '#e5e7eb'};
  overflow: hidden;
`

const fill = (pct) => css`
  height: 100%;
  width: ${Math.max(0, Math.min(100, pct))}%;
  background: ${ACCENT};
`

const attendanceListScroll = (darkMode, needsScroll) => css`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow-y: ${needsScroll ? 'scroll' : 'auto'};
  overflow-x: hidden;
  padding-right: 0.2rem;
  margin-right: -0.1rem;
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#737373 #2a2a2a' : '#c4c4c4 #f3f4f6'};
  scrollbar-gutter: ${needsScroll ? 'stable' : 'auto'};
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${darkMode ? '#2a2a2a' : '#f3f4f6'};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkMode ? '#737373' : '#c4c4c4'};
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`

const dashboardFeedScroll = (darkMode) => css`
  max-height: min(22rem, 52vh);
  overflow-y: auto;
  padding-right: 0.25rem;
  margin-right: -0.05rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#525252 transparent' : '#d1d5db transparent'};

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkMode ? '#525252' : '#d1d5db'};
    border-radius: 999px;
  }
`

const announcementsFeedScroll = (darkMode, needsScroll) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  overflow-y: ${needsScroll ? 'scroll' : 'auto'};
  overflow-x: hidden;
  padding-right: 0.25rem;
  margin-right: -0.05rem;
  scrollbar-width: thin;
  scrollbar-color: ${darkMode ? '#737373 #2a2a2a' : '#c4c4c4 #f3f4f6'};
  scrollbar-gutter: ${needsScroll ? 'stable' : 'auto'};
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${darkMode ? '#2a2a2a' : '#f3f4f6'};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${darkMode ? '#737373' : '#c4c4c4'};
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`

const sessionKindPillClass = css`
  border-radius: 8px;
  background: #6366f1;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.08rem 0.38rem;
  flex-shrink: 0;
`

const sessionKindPillEvent = css`
  border-radius: 8px;
  background: #7c3aed;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.08rem 0.38rem;
  flex-shrink: 0;
`

const nextClassCard = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4c1d95' : '#c7d2fe'};
  background: ${darkMode ? 'rgba(99, 102, 241, 0.18)' : '#eef2ff'};
  border-radius: 10px;
  padding: 0.8rem;
`

const nextClassTop = css`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.45rem;
`

const coursePill = css`
  border-radius: 8px;
  background: #6366f1;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.1rem 0.42rem;
`

const nextClassTitle = css`
  margin: 0 0 0.25rem;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.18;
`

const deadlineCard = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#f3e8b2'};
  background: ${darkMode ? '#3f3a26' : '#fffde7'};
  border-radius: 10px;
  padding: 0.75rem;
  margin-bottom: 0;
`

const deadlineHead = css`
  display: inline-flex;
  gap: 0.45rem;
  align-items: center;
  margin-bottom: 0.3rem;
`

const deadlineCourse = css`
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.06);
  padding: 0.08rem 0.38rem;
  font-size: 0.78rem;
  font-weight: 700;
`

const deadlineTitle = css`
  margin: 0;
  font-size: 1.38rem;
  line-height: 1.2;
  font-weight: 800;
`

const deadlineRow = css`
  margin-top: 0.28rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`

function toYmd(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function fmtTime(t) {
  if (!t) return ''
  const [hh, mm] = String(t).split(':').map(Number)
  const h12 = ((hh + 11) % 12) + 1
  const ampm = hh >= 12 ? 'PM' : 'AM'
  return `${h12}:${String(mm || 0).padStart(2, '0')} ${ampm}`
}

function initials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return 'S'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function formatDateTime(value) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return String(value)
  return d.toLocaleString([], { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })
}

function daysUntil(dateYmd) {
  const today = new Date()
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()
  const target = new Date(`${dateYmd}T00:00:00`).getTime()
  return Math.ceil((target - t0) / (24 * 60 * 60 * 1000))
}

function isAssignmentDueTimetableEvent(e) {
  return /^Assignment Due:/i.test(String(e?.event_title || '').trim())
}

function formatCalendarDay(ymd) {
  if (!ymd) return ''
  const d = new Date(`${ymd}T12:00:00`)
  if (Number.isNaN(d.getTime())) return String(ymd)
  return d.toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function extractPerformanceBarRow(clickArg) {
  if (!clickArg || typeof clickArg !== 'object') return null
  const p = clickArg.payload
  const candidates = [p, clickArg].filter((x) => x && typeof x === 'object')
  for (const cand of candidates) {
    const cid = Number(cand.courseId ?? cand.course_id)
    if (Number.isFinite(cid) && cid > 0) return cand
  }
  for (const cand of candidates) {
    if (cand.label != null && String(cand.label).trim() !== '') return cand
  }
  return null
}

function getMarksForCourseFromMap(map, courseId) {
  if (!map || typeof map !== 'object' || Array.isArray(map)) return []
  const cid = Number(courseId)
  if (!Number.isFinite(cid) || cid <= 0) return []
  const direct = map[cid] ?? map[String(cid)]
  if (Array.isArray(direct)) return direct
  for (const [k, v] of Object.entries(map)) {
    if (Number(k) === cid && Array.isArray(v)) return v
  }
  return []
}

function studyEventInCalendarMonth(at, year, month1to12) {
  if (!at || Number.isNaN(at.getTime())) return false
  const y = Number(year)
  const m = Number(month1to12)
  if (!Number.isFinite(y) || !Number.isFinite(m) || m < 1 || m > 12) return false
  const start = new Date(y, m - 1, 1, 0, 0, 0, 0).getTime()
  const end = new Date(y, m, 1, 0, 0, 0, 0).getTime()
  const t = at.getTime()
  return t >= start && t < end
}

const CALENDAR_MONTH_OPTIONS = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
]

function parseStudySessionRow(row) {
  if (!row || typeof row !== 'object') return null
  const at = new Date(row.completed_at)
  if (Number.isNaN(at.getTime())) return null
  const dm = Number(row.duration_minutes ?? 25)
  return {
    at,
    courseCode: String(row.course_code ?? ''),
    durationMinutes: Number.isFinite(dm) && dm > 0 ? Math.min(240, dm) : 25,
  }
}

function chartMinuteTicks(maxMinutes) {
  const m = Math.max(0, Math.ceil(Number(maxMinutes) || 0))
  let hi = m <= 0 ? 60 : Math.ceil(m * 1.08)
  hi = Math.max(30, Math.min(hi, 24 * 60))
  hi = Math.ceil(hi / 15) * 15
  const step = hi <= 90 ? 15 : hi <= 180 ? 30 : 60
  const ticks = []
  for (let x = 0; x <= hi; x += step) ticks.push(x)
  return ticks
}

function sortCourseStudyYearValues(values) {
  const order = COURSE_STUDY_YEAR_OPTIONS.map((o) => o.value).filter(Boolean)
  const rank = (v) => {
    const i = order.indexOf(String(v))
    return i === -1 ? 999 : i
  }
  return [...values].sort((a, b) => rank(a) - rank(b) || String(a).localeCompare(String(b)))
}

function semesterSelectLabel(value) {
  const v = String(value ?? '').trim()
  if (!v) return ''
  const opt = SEMESTER_FORM_OPTIONS.find((o) => o.value === v)
  return opt && opt.value ? opt.label : v
}

function StudentDashboardOverview({
  darkMode,
  userEmail,
  studentId,
  studentDatabaseId,
  userName,
  userPoints,
  onOpenAnnouncements,
}) {
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])
  const [entries, setEntries] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [attendanceByCourseRaw, setAttendanceByCourseRaw] = useState([])
  const [attendanceRollup, setAttendanceRollup] = useState({ present: 0, late: 0, absent: 0 })
  const [gradeBars, setGradeBars] = useState([])
  const [assessmentMarksByCourse, setAssessmentMarksByCourse] = useState({})
  const [performanceMarksModal, setPerformanceMarksModal] = useState(null)
  const [perfModuleStudyYear, setPerfModuleStudyYear] = useState('')
  const [perfModuleSemester, setPerfModuleSemester] = useState('')
  const [studyChartsYear, setStudyChartsYear] = useState(() => new Date().getFullYear())
  const [studyChartsMonth, setStudyChartsMonth] = useState(() => new Date().getMonth() + 1)
  /** null = not initialised yet; [] = user cleared selection; non-empty = filter */
  const [attendanceChartCourseIds, setAttendanceChartCourseIds] = useState(null)
  const [attendanceFilterOpen, setAttendanceFilterOpen] = useState(false)
  const [attendanceFilterSearch, setAttendanceFilterSearch] = useState('')
  const attendanceFilterRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [studyEvents, setStudyEvents] = useState([])

  useEffect(() => {
    if (!userEmail) return
    let active = true
    async function load() {
      setLoading(true)
      try {
        const now = new Date()
        const from = new Date(now)
        from.setMonth(now.getMonth() - 2)
        const to = new Date(now)
        to.setMonth(now.getMonth() + 2)

        const [sRes, cRes, tRes, aRes, attRes, gradeRes, studyRes] = await Promise.all([
          fetch(`${apiBase}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/timetable.php?from=${encodeURIComponent(toYmd(from))}&to=${encodeURIComponent(toYmd(to))}&t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/announcements.php?user_email=${encodeURIComponent(userEmail)}&t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/attendance_marks.php?user_email=${encodeURIComponent(userEmail)}&student_summary=1&t=${Date.now()}`, { cache: 'no-store' }),
          fetch(`${apiBase}/backend/assessment_scores.php?user_email=${encodeURIComponent(userEmail)}&t=${Date.now()}`, { cache: 'no-store' }),
          fetch(
            `${apiBase}/backend/study_sessions.php?user_email=${encodeURIComponent(userEmail)}&t=${Date.now()}`,
            { cache: 'no-store' }
          ),
        ])
        const [sData, cData, tData, aData, attData, gradeData, studyData] = await Promise.all([
          sRes.json(),
          cRes.json(),
          tRes.json(),
          aRes.json(),
          attRes.json(),
          gradeRes.json(),
          studyRes.json(),
        ])
        if (!active) return
        setStudents(sData.success ? sData.students || [] : [])
        setCourses(cData.success ? cData.courses || [] : [])
        setEntries(tData.success ? tData.entries || [] : [])
        setAnnouncements(aData.success ? aData.announcements || [] : [])
        setAttendanceByCourseRaw(attData.success ? attData.by_course || [] : [])
        const rollup = attData.success && attData.rollup ? attData.rollup : {}
        setAttendanceRollup({
          present: Number(rollup.present || 0),
          late: Number(rollup.late || 0),
          absent: Number(rollup.absent || 0),
        })
        setGradeBars(gradeData.success ? gradeData.bars_by_course || [] : [])
        const rawMarksMap = gradeData.marks_by_course
        const marksMap =
          gradeData.success &&
          rawMarksMap &&
          typeof rawMarksMap === 'object' &&
          !Array.isArray(rawMarksMap)
            ? rawMarksMap
            : {}
        setAssessmentMarksByCourse(marksMap)
        if (studyData.success && Array.isArray(studyData.events)) {
          setStudyEvents(studyData.events.map(parseStudySessionRow).filter(Boolean))
        } else {
          setStudyEvents([])
        }
      } catch (_) {
        if (!active) return
        setStudents([])
        setCourses([])
        setEntries([])
        setAnnouncements([])
        setAttendanceByCourseRaw([])
        setAttendanceRollup({ present: 0, late: 0, absent: 0 })
        setGradeBars([])
        setAssessmentMarksByCourse({})
        setStudyEvents([])
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [userEmail])

  const me = useMemo(
    () => findStudentMe(students, { userEmail, studentId, studentDatabaseId }),
    [students, userEmail, studentId, studentDatabaseId]
  )

  const myCourses = useMemo(() => getCoursesVisibleToStudent(courses, me), [courses, me])

  const courseCatalogById = useMemo(() => {
    const m = new Map()
    for (const c of courses) {
      const id = Number(c.id)
      if (Number.isFinite(id) && id > 0) m.set(id, c)
    }
    return m
  }, [courses])

  const perfCatalogStudyYears = useMemo(() => {
    const set = new Set()
    for (const c of courses) {
      const y = String(c.course_study_year ?? '').trim()
      if (y) set.add(y)
    }
    return sortCourseStudyYearValues([...set])
  }, [courses])

  const perfCatalogSemesters = useMemo(() => {
    const set = new Set()
    for (const c of courses) {
      const s = String(c.semester ?? '').trim()
      if (s) set.add(s)
    }
    const order = ['1st semester', '2nd semester']
    return [...set].sort((a, b) => {
      const ia = order.indexOf(a)
      const ib = order.indexOf(b)
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b)
    })
  }, [courses])

  useEffect(() => {
    if (perfModuleStudyYear && !perfCatalogStudyYears.includes(perfModuleStudyYear)) {
      setPerfModuleStudyYear('')
    }
  }, [perfModuleStudyYear, perfCatalogStudyYears])

  useEffect(() => {
    if (perfModuleSemester && !perfCatalogSemesters.includes(perfModuleSemester)) {
      setPerfModuleSemester('')
    }
  }, [perfModuleSemester, perfCatalogSemesters])

  const myCourseIdsSorted = useMemo(
    () =>
      myCourses
        .map((c) => Number(c.id))
        .filter((id) => Number.isFinite(id) && id > 0)
        .sort((a, b) => a - b),
    [myCourses]
  )

  useEffect(() => {
    setAttendanceChartCourseIds(null)
  }, [userEmail])

  useEffect(() => {
    setPerfModuleStudyYear('')
    setPerfModuleSemester('')
  }, [userEmail])

  useEffect(() => {
    const d = new Date()
    setStudyChartsYear(d.getFullYear())
    setStudyChartsMonth(d.getMonth() + 1)
  }, [userEmail])

  useEffect(() => {
    if (myCourseIdsSorted.length === 0) {
      setAttendanceChartCourseIds(null)
      return
    }
    setAttendanceChartCourseIds((prev) => {
      if (prev === null) {
        return [...myCourseIdsSorted]
      }
      if (prev.length === 0) {
        return []
      }
      const valid = new Set(myCourseIdsSorted)
      const kept = prev.filter((id) => valid.has(id))
      const added = myCourseIdsSorted.filter((id) => !prev.includes(id))
      return [...kept, ...added].sort((a, b) => a - b)
    })
  }, [myCourseIdsSorted])

  const myCourseIds = useMemo(() => myCourses.map((c) => Number(c.id)), [myCourses])

  const classEntries = useMemo(
    () =>
      entries.filter(
        (e) => e.entry_type === 'class' && e.course_id != null && myCourseIds.includes(Number(e.course_id))
      ),
    [entries, myCourseIds]
  )

  const eventEntries = useMemo(
    () =>
      entries.filter((e) => {
        if (e.entry_type !== 'event') return false
        const cid = e.course_id != null && e.course_id !== '' ? Number(e.course_id) : NaN
        const hasModule = Number.isFinite(cid) && cid > 0
        if (!hasModule) return true
        return myCourseIds.includes(cid)
      }),
    [entries, myCourseIds]
  )

  const now = new Date()
  const nowMs = now.getTime()

  const nextClassesAndEvents = useMemo(() => {
    const rows = []
    const pushFuture = (e, kind) => {
      const st = String(e.start_time || '').trim()
      const timePart = st || (kind === 'event' ? '23:59:00' : '09:00:00')
      const dt = new Date(`${e.entry_date}T${timePart}`)
      if (Number.isNaN(dt.getTime()) || dt.getTime() < nowMs) return
      rows.push({ ...e, kind, dt })
    }
    classEntries.forEach((e) => pushFuture(e, 'class'))
    eventEntries.forEach((e) => pushFuture(e, 'event'))
    rows.sort((a, b) => a.dt.getTime() - b.dt.getTime())
    return rows.slice(0, DASHBOARD_SCROLL_LIST_MAX)
  }, [classEntries, eventEntries, nowMs])

  const attendanceByCourse = useMemo(() => {
    const map = new Map(attendanceByCourseRaw.map((row) => [Number(row.course_id), row]))
    const rows = myCourses.map((course) => {
      const row = map.get(Number(course.id)) || {}
      const present = Number(row.present || 0)
      const late = Number(row.late || 0)
      const absentRaw = Number(row.absent || 0)
      const total = Number(row.total || 0)
      const rate = Number(row.attendance_rate || 0)
      const absent = absentRaw + late
      return {
        courseId: Number(course.id),
        courseCode: course.course_code || 'COURSE',
        courseName: course.course_name || 'Course',
        rate,
        present,
        absent,
        total,
      }
    })
    rows.sort((a, b) => b.courseId - a.courseId)
    return rows
  }, [myCourses, attendanceByCourseRaw])

  const attendanceListKey = useMemo(
    () => attendanceByCourse.map((r) => r.courseId).join(','),
    [attendanceByCourse]
  )

  const attendanceScrollRef = useRef(null)
  const attendanceRow0Ref = useRef(null)
  const attendanceRow1Ref = useRef(null)
  const [attendanceRowUniformPx, setAttendanceRowUniformPx] = useState(null)
  const [attendanceTwoRowsMaxPx, setAttendanceTwoRowsMaxPx] = useState(null)

  useLayoutEffect(() => {
    if (loading || !me || attendanceByCourse.length === 0) {
      setAttendanceRowUniformPx(null)
      setAttendanceTwoRowsMaxPx(null)
      return undefined
    }

    const parseGapPx = (scrollEl) => {
      const g = getComputedStyle(scrollEl).gap || '0.65rem'
      const token = String(g).trim().split(/\s+/)[0] || '0.65rem'
      const px = token.match(/^([\d.]+)px$/i)
      if (px) return Math.round(parseFloat(px[1]))
      const rem = token.match(/^([\d.]+)rem$/i)
      if (rem) {
        const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
        return Math.round(parseFloat(rem[1]) * fs)
      }
      return 10
    }

    const measure = () => {
      const scrollEl = attendanceScrollRef.current
      const r0 = attendanceRow0Ref.current
      const r1 = attendanceRow1Ref.current
      if (!scrollEl || !r0) return
      const h0 = Math.ceil(r0.getBoundingClientRect().height)
      const h1 = r1 ? Math.ceil(r1.getBoundingClientRect().height) : h0
      const uniform = Math.max(h0, h1, 72)
      const gapPx = parseGapPx(scrollEl)
      const twoRows = uniform * 2 + gapPx
      setAttendanceRowUniformPx((p) => (p === uniform ? p : uniform))
      setAttendanceTwoRowsMaxPx((p) => (p === twoRows ? p : twoRows))
    }

    measure()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const row0el = attendanceRow0Ref.current
    const row1el = attendanceRow1Ref.current
    if (!row0el) {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure)
    })
    ro.observe(row0el)
    if (row1el) ro.observe(row1el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [loading, me, attendanceListKey, darkMode, attendanceByCourse.length])

  const deadlines = useMemo(() => {
    const next = eventEntries
      .filter((e) => isAssignmentDueTimetableEvent(e))
      .filter((e) => {
        const d = new Date(`${e.entry_date}T${e.start_time || '23:59:00'}`)
        return !Number.isNaN(d.getTime()) && d.getTime() >= nowMs
      })
      .sort((a, b) => {
        const da = new Date(`${a.entry_date}T${a.start_time || '23:59:00'}`).getTime()
        const db = new Date(`${b.entry_date}T${b.start_time || '23:59:00'}`).getTime()
        return da - db
      })
      .slice(0, DASHBOARD_SCROLL_LIST_MAX)
    return next.map((d) => ({
      ...d,
      days: daysUntil(d.entry_date),
    }))
  }, [eventEntries, nowMs])

  const latestAnnouncements = useMemo(() => {
    const arr = Array.isArray(announcements) ? [...announcements] : []
    arr.sort((a, b) => new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime())
    return arr.slice(0, DASHBOARD_SCROLL_LIST_MAX)
  }, [announcements])

  const announcementsListKey = useMemo(
    () => latestAnnouncements.map((a) => a.id ?? `${a.created_at}`).join(','),
    [latestAnnouncements]
  )

  const announcementsScrollRef = useRef(null)
  const announcementItem0Ref = useRef(null)
  const announcementItem1Ref = useRef(null)
  const [announcementOneRowMaxPx, setAnnouncementOneRowMaxPx] = useState(null)

  useLayoutEffect(() => {
    if (loading || latestAnnouncements.length <= 1) {
      setAnnouncementOneRowMaxPx(null)
      return undefined
    }

    const measure = () => {
      const scrollEl = announcementsScrollRef.current
      const r0 = announcementItem0Ref.current
      const r1 = announcementItem1Ref.current
      if (!scrollEl || !r0 || !r1) return
      const scrollRect = scrollEl.getBoundingClientRect()
      const oneH = r1.getBoundingClientRect().top - scrollRect.top
      if (oneH <= 1) return
      const h = Math.floor(oneH)
      setAnnouncementOneRowMaxPx((p) => (p === h ? p : h))
    }

    measure()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const a0 = announcementItem0Ref.current
    const a1 = announcementItem1Ref.current
    if (!a0 || !a1) {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure)
    })
    ro.observe(a0)
    ro.observe(a1)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [loading, announcementsListKey, darkMode, latestAnnouncements.length])

  const badgeCount = useMemo(() => BADGE_RULES.filter((fn) => fn(me || {})).length, [me])

  const attendanceKpi = useMemo(() => {
    const total = attendanceByCourse.reduce((sum, item) => sum + Number(item.total || 0), 0)
    const present = attendanceByCourse.reduce((sum, item) => sum + Number(item.present || 0), 0)
    if (total <= 0) return 0
    return Math.round((present / total) * 100)
  }, [attendanceByCourse])
  const gpa = Number(me?.gpa || 0)

  const effectiveAttendanceCourseIds = useMemo(() => {
    if (attendanceChartCourseIds === null) {
      return myCourseIdsSorted
    }
    return attendanceChartCourseIds
  }, [attendanceChartCourseIds, myCourseIdsSorted])

  const attendanceFilteredRollup = useMemo(() => {
    const selected = new Set(effectiveAttendanceCourseIds)
    if (selected.size === 0) {
      return { present: 0, late: 0, absent: 0 }
    }
    const map = new Map(attendanceByCourseRaw.map((row) => [Number(row.course_id), row]))
    let present = 0
    let late = 0
    let absent = 0
    selected.forEach((cid) => {
      const row = map.get(cid)
      if (!row) return
      present += Number(row.present || 0)
      late += Number(row.late || 0)
      absent += Number(row.absent || 0)
    })
    return { present, late, absent }
  }, [attendanceByCourseRaw, effectiveAttendanceCourseIds])

  const attendancePieData = useMemo(() => {
    const { present, late, absent } = attendanceFilteredRollup
    return [
      { name: 'Present', value: present },
      { name: 'Late', value: late },
      { name: 'Absent', value: absent },
    ].filter((d) => d.value > 0)
  }, [attendanceFilteredRollup])

  const attendanceSessionsTotal = useMemo(
    () =>
      attendanceFilteredRollup.present + attendanceFilteredRollup.late + attendanceFilteredRollup.absent,
    [attendanceFilteredRollup]
  )

  const hasAnyAttendanceMarks = useMemo(
    () => attendanceRollup.present + attendanceRollup.late + attendanceRollup.absent > 0,
    [attendanceRollup]
  )

  const selectAllAttendanceCourses = () => {
    setAttendanceChartCourseIds([...myCourseIdsSorted])
  }

  const clearAttendanceCourseFilter = () => {
    setAttendanceChartCourseIds([])
  }

  const toggleAttendanceCourseId = (courseId) => {
    const id = Number(courseId)
    if (!Number.isFinite(id) || id <= 0) return
    setAttendanceChartCourseIds((prev) => {
      const cur = prev === null ? [...myCourseIdsSorted] : [...prev]
      if (cur.includes(id)) {
        return cur.filter((x) => x !== id)
      }
      return [...cur, id].sort((a, b) => a - b)
    })
  }

  useEffect(() => {
    if (!attendanceFilterOpen) return undefined
    const onDoc = (e) => {
      if (attendanceFilterRef.current && !attendanceFilterRef.current.contains(e.target)) {
        setAttendanceFilterOpen(false)
        setAttendanceFilterSearch('')
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setAttendanceFilterOpen(false)
        setAttendanceFilterSearch('')
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [attendanceFilterOpen])

  const attendanceSearchNorm = attendanceFilterSearch.trim().toLowerCase()
  const filteredAttendanceCourses = useMemo(() => {
    if (!attendanceSearchNorm) return myCourses
    return myCourses.filter((c) => {
      const code = String(c.course_code || '').toLowerCase()
      const name = String(c.course_name || '').toLowerCase()
      return code.includes(attendanceSearchNorm) || name.includes(attendanceSearchNorm)
    })
  }, [myCourses, attendanceSearchNorm])

  const selectedCoursesForChips = useMemo(() => {
    const set = new Set(effectiveAttendanceCourseIds)
    return myCourses.filter((c) => set.has(Number(c.id)))
  }, [myCourses, effectiveAttendanceCourseIds])

  const attendanceFilterSummary = useMemo(() => {
    const n = effectiveAttendanceCourseIds.length
    const total = myCourses.length
    if (total === 0) return 'No modules'
    if (n === 0) return 'No modules selected — tap to choose'
    if (n === total) return `All ${n} module${n === 1 ? '' : 's'}`
    return `${n} module${n === 1 ? '' : 's'} selected`
  }, [effectiveAttendanceCourseIds, myCourses.length])

  const showAttendanceFilterChips =
    selectedCoursesForChips.length > 0 && selectedCoursesForChips.length < myCourses.length

  const gradeBarData = useMemo(() => {
    return gradeBars.map((b) => {
      const courseId = Number(b.course_id)
      const fromBar = Array.isArray(b.marks) ? b.marks : []
      const marks =
        fromBar.length > 0 ? fromBar : getMarksForCourseFromMap(assessmentMarksByCourse, courseId)
      return {
        courseId,
        label: String(b.course_code || 'Module').trim() || 'Module',
        fullName: String(b.course_name || b.course_code || '').trim(),
        score: Math.round(Number(b.avg_score) * 10) / 10,
        assessmentCount: Number(b.assessment_count) || 0,
        marks,
      }
    })
  }, [gradeBars, assessmentMarksByCourse])

  const performanceGradeBarChartData = useMemo(() => {
    const yf = String(perfModuleStudyYear || '').trim()
    const sf = String(perfModuleSemester || '').trim()
    if (!yf && !sf) return gradeBarData
    return gradeBarData.filter((row) => {
      const c = courseCatalogById.get(Number(row.courseId))
      if (!c) return false
      if (yf && String(c.course_study_year ?? '').trim() !== yf) return false
      if (sf && String(c.semester ?? '').trim() !== sf) return false
      return true
    })
  }, [gradeBarData, courseCatalogById, perfModuleStudyYear, perfModuleSemester])

  const openPerformanceMarksModalForRow = useCallback(
    (row) => {
      if (!row || typeof row !== 'object') return
      const cid = Number(row.courseId ?? row.course_id)
      const byCourseId =
        Number.isFinite(cid) && cid > 0 ? gradeBarData.find((d) => d.courseId === cid) : null
      const byLabel =
        !byCourseId && row.label != null
          ? gradeBarData.find((d) => d.label === row.label)
          : null
      const full = byCourseId || byLabel
      const source = full || row

      let marks = Array.isArray(source.marks) ? source.marks : []
      if (marks.length === 0 && Number.isFinite(cid) && cid > 0) {
        marks = [...getMarksForCourseFromMap(assessmentMarksByCourse, cid)]
      }

      setPerformanceMarksModal({
        code: String(source.label || row.label || 'Module').trim() || 'Module',
        title: String(source.fullName || source.label || row.fullName || row.label || 'Module').trim() || 'Module',
        avgScore: source.score ?? row.score,
        assessmentCount: Number(source.assessmentCount ?? row.assessmentCount) || 0,
        marks,
      })
    },
    [gradeBarData, assessmentMarksByCourse]
  )

  const handlePerformanceBarClick = useCallback(
    (data) => {
      const row = extractPerformanceBarRow(data)
      if (row) openPerformanceMarksModalForRow(row)
    },
    [openPerformanceMarksModalForRow]
  )

  useEffect(() => {
    if (!performanceMarksModal) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setPerformanceMarksModal(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [performanceMarksModal])

  const performanceGradeBarCount = performanceGradeBarChartData.length

  const studyChartYearOptions = useMemo(() => {
    const set = new Set()
    const cur = new Date().getFullYear()
    for (let y = cur - 2; y <= cur + 1; y += 1) set.add(y)
    studyEvents.forEach((e) => set.add(e.at.getFullYear()))
    set.add(studyChartsYear)
    return [...set].sort((a, b) => a - b)
  }, [studyEvents, studyChartsYear])

  const studyChartPeriodLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(
        new Date(studyChartsYear, studyChartsMonth - 1, 1)
      ),
    [studyChartsYear, studyChartsMonth]
  )

  const studyFilteredEvents = useMemo(
    () =>
      studyEvents.filter((e) => studyEventInCalendarMonth(e.at, studyChartsYear, studyChartsMonth)),
    [studyEvents, studyChartsYear, studyChartsMonth]
  )

  const studyWeekCharts = useMemo(() => {
    const mins = (e) => e.durationMinutes || 25
    const inMonth = studyFilteredEvents

    const dayOrder = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const byDow = dayOrder.map((label) => ({ day: label, minutes: 0 }))
    inMonth.forEach((e) => {
      const dow = e.at.getDay()
      byDow[dow].minutes += mins(e)
    })
    const maxDayMinutes = Math.max(30, ...byDow.map((d) => d.minutes), 1)

    const moduleMap = new Map()
    inMonth.forEach((e) => {
      const code = e.courseCode || 'Module'
      moduleMap.set(code, (moduleMap.get(code) || 0) + mins(e))
    })
    const moduleRows = Array.from(moduleMap.entries())
      .map(([code, minutes]) => ({ code, minutes: Math.round(minutes) }))
      .sort((a, b) => b.minutes - a.minutes)
    if (moduleRows.length === 0) {
      myCourses.slice(0, 8).forEach((c) => {
        moduleRows.push({ code: c.course_code || 'Course', minutes: 0 })
      })
    }
    if (moduleRows.length === 0) {
      moduleRows.push({ code: '—', minutes: 0 })
    }
    const maxModMinutes = Math.max(30, ...moduleRows.map((r) => r.minutes), 1)

    const weekYTicks = chartMinuteTicks(maxDayMinutes)
    const weekYMax = weekYTicks[weekYTicks.length - 1] || 30
    const moduleYTicks = chartMinuteTicks(maxModMinutes)
    const moduleYMax = moduleYTicks[moduleYTicks.length - 1] || 30

    return { byDow, moduleRows, weekYTicks, weekYMax, moduleYTicks, moduleYMax }
  }, [studyFilteredEvents, myCourses])

  const performanceGradeBarXAxisPadding = useMemo(() => {
    const n = performanceGradeBarCount
    if (n <= 1) return { left: 56, right: 56 }
    if (n === 2) return { left: 40, right: 40 }
    if (n <= 3) return { left: 28, right: 28 }
    if (n <= 5) return { left: 16, right: 16 }
    if (n <= 8) return { left: 8, right: 8 }
    return { left: 0, right: 0 }
  }, [performanceGradeBarCount])

  const performanceGradeBarCategoryGap = useMemo(() => {
    if (performanceGradeBarCount <= 2) return '26%'
    if (performanceGradeBarCount <= 4) return '18%'
    return '12%'
  }, [performanceGradeBarCount])

  const performanceGradeBarChartMargin = useMemo(
    () => ({
      top: 8,
      right: performanceGradeBarCount <= 4 ? 12 : 8,
      left: 0,
      bottom: 48,
    }),
    [performanceGradeBarCount]
  )

  const chartTooltipStyle = useMemo(
    () => ({
      backgroundColor: darkMode ? '#374151' : '#fff',
      border: `1px solid ${darkMode ? '#525252' : '#e5e7eb'}`,
      borderRadius: 8,
      color: darkMode ? '#f9fafb' : '#111827',
    }),
    [darkMode]
  )

  const axisStroke = darkMode ? '#9ca3af' : '#6b7280'
  const gridStroke = darkMode ? '#404040' : '#e5e7eb'

  return (
    <section css={wrap}>
      <h1 css={heading}>Welcome Back, {userName || 'Student'}</h1>
      <p css={subheading(darkMode)}>Here's your performance overview</p>

      <div css={kpiGrid}>
        <article css={kpiCard(darkMode)}>
          <p css={kpiLabel(darkMode)}>KPI</p>
          <p css={kpiValue}>
            {userPoints} <span css={css`font-size:1rem;font-weight:500;`}>pts</span>
          </p>
          <p css={kpiSub(darkMode)}>Total Points</p>
        </article>
        <article css={kpiCard(darkMode)}>
          <p css={kpiLabel(darkMode)}>KPI</p>
          <p css={kpiValue}>{attendanceKpi}%</p>
          <p css={kpiSub(darkMode)}>Attendance Rate</p>
        </article>
        <article css={kpiCard(darkMode)}>
          <p css={kpiLabel(darkMode)}>KPI</p>
          <p css={kpiValue}>
            {gpa.toFixed(1)} <span css={css`font-size:1rem;font-weight:500;`}>/4.0</span>
          </p>
          <p css={kpiSub(darkMode)}>Current GPA</p>
        </article>
        <article css={kpiCard(darkMode)}>
          <p css={kpiLabel(darkMode)}>KPI</p>
          <p css={kpiValue}>{badgeCount}</p>
          <p css={kpiSub(darkMode)}>Badges Earned</p>
        </article>
      </div>

      <div css={grid}>
        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineMegaphone />
              Latest Announcements
            </h2>
            <button type="button" css={linkBtn(darkMode)} onClick={onOpenAnnouncements}>
              View All <HiOutlineArrowRight />
            </button>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading announcements...</p>
          ) : latestAnnouncements.length > 0 ? (
            <>
              {latestAnnouncements.length > 1 ? (
                <p
                  css={css`
                    margin: -0.15rem 0 0.5rem;
                    font-size: 0.82rem;
                    color: ${darkMode ? '#9ca3af' : '#6b7280'};
                  `}
                >
                  Showing one announcement — scroll down for more.
                </p>
              ) : null}
              <div
                ref={announcementsScrollRef}
                css={announcementsFeedScroll(darkMode, latestAnnouncements.length > 1)}
                style={{
                  maxHeight:
                    announcementOneRowMaxPx != null
                      ? `${announcementOneRowMaxPx}px`
                      : latestAnnouncements.length > 1
                        ? 'min(20rem, 48vh)'
                        : undefined,
                }}
                tabIndex={0}
                role="region"
                aria-label="Latest announcements. Scroll for more."
              >
              {latestAnnouncements.map((ann, idx) => (
                <div
                  key={ann.id ?? `${ann.created_at}-${idx}`}
                  ref={idx === 0 ? announcementItem0Ref : idx === 1 ? announcementItem1Ref : undefined}
                  css={announcementItemWrap(darkMode, idx === latestAnnouncements.length - 1)}
                >
                  <div css={announcementHead}>
                    <div css={announcementAvatar}>{initials(ann.lecturer_name)}</div>
                    <div>
                      <div css={css`font-weight:700;`}>{ann.lecturer_name}</div>
                      <div css={metaLine(darkMode)}>{ann.course_code || 'General'}</div>
                    </div>
                  </div>
                  <h3 css={announcementTitle}>{ann.title}</h3>
                  <p css={announcementBody(darkMode)}>{ann.content}</p>
                  <p css={metaLine(darkMode)}>{formatDateTime(ann.created_at)}</p>
                </div>
              ))}
              </div>
            </>
          ) : (
            <p css={muted(darkMode)}>No announcements yet.</p>
          )}
        </section>

        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineChartBar />
              Course Attendance
            </h2>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading attendance...</p>
          ) : !me ? (
            <p css={muted(darkMode)}>Student profile not found for this login.</p>
          ) : attendanceByCourse.length === 0 ? (
            <p css={muted(darkMode)}>
              No courses to show. Your account must match a student record, and courses must list you as enrolled or use
              the same department as you.
            </p>
          ) : (
            <>
              {attendanceByCourse.length > 2 ? (
                <p
                  css={css`
                    margin: -0.2rem 0 0.55rem;
                    font-size: 0.82rem;
                    color: ${darkMode ? '#9ca3af' : '#6b7280'};
                  `}
                >
                  Up to two courses are visible — scroll to see the rest.
                </p>
              ) : null}
              <div
                ref={attendanceScrollRef}
                css={attendanceListScroll(darkMode, attendanceByCourse.length > 2)}
                style={{
                  maxHeight:
                    attendanceTwoRowsMaxPx != null
                      ? `${attendanceTwoRowsMaxPx}px`
                      : attendanceByCourse.length > 0
                        ? 'clamp(10rem, 30vh, 15rem)'
                        : undefined,
                }}
                tabIndex={0}
                role="region"
                aria-label="Attendance by course. Scroll for more modules."
              >
                {attendanceByCourse.map((item, idx) => (
                  <div
                    key={item.courseId}
                    ref={idx === 0 ? attendanceRow0Ref : idx === 1 ? attendanceRow1Ref : undefined}
                    css={attendanceCourseRow}
                    style={
                      attendanceRowUniformPx != null
                        ? { height: attendanceRowUniformPx, overflow: 'hidden' }
                        : { overflow: 'hidden' }
                    }
                  >
                    <div css={courseRowTop}>
                      <div css={css`min-width: 0;`}>
                        <p css={attendanceCourseCodeTitle}>{item.courseCode}</p>
                        <p css={attendanceCourseNameMeta(darkMode)} title={item.courseName}>
                          {item.courseName}
                        </p>
                      </div>
                      <strong css={css`flex-shrink: 0;`}>{item.rate}%</strong>
                    </div>
                    <div css={countsRow}>
                      <span>🟢 Present: {item.present}</span>
                      <span>🔴 Absent: {item.absent}</span>
                    </div>
                    <div css={track(darkMode)}>
                      <div css={fill(item.rate)} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineBookOpen />
              Next Classes and Events
            </h2>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading schedule...</p>
          ) : nextClassesAndEvents.length > 0 ? (
            <div css={dashboardFeedScroll(darkMode)}>
              {nextClassesAndEvents.map((item) =>
                item.kind === 'class' ? (
                  <div key={`class-${item.id}`} css={nextClassCard(darkMode)}>
                    <div css={nextClassTop}>
                      <span css={coursePill}>{item.course_code || 'COURSE'}</span>
                      <span css={sessionKindPillClass}>Class</span>
                    </div>
                    <p
                      css={css`
                        margin: 0 0 0.35rem;
                        font-size: 0.88rem;
                        font-weight: 700;
                        color: ${darkMode ? '#d1d5db' : '#374151'};
                      `}
                    >
                      {formatCalendarDay(item.entry_date)}
                    </p>
                    <h3 css={nextClassTitle}>{item.course_name || 'Class Session'}</h3>
                    <p css={metaLine(darkMode)}>
                      <HiOutlineClock style={{ width: 14, height: 14, verticalAlign: 'text-bottom' }} />{' '}
                      {fmtTime(item.start_time)} - {fmtTime(item.end_time)}
                    </p>
                    <p css={metaLine(darkMode)}>
                      <HiOutlineCalendarDays style={{ width: 14, height: 14, verticalAlign: 'text-bottom' }} />{' '}
                      Room {item.room_location || 'TBA'}
                    </p>
                  </div>
                ) : (
                  <div key={`event-${item.id}`} css={nextClassCard(darkMode)}>
                    <div css={nextClassTop}>
                      <span css={sessionKindPillEvent}>Event</span>
                    </div>
                    <p
                      css={css`
                        margin: 0 0 0.35rem;
                        font-size: 0.88rem;
                        font-weight: 700;
                        color: ${darkMode ? '#d1d5db' : '#374151'};
                      `}
                    >
                      {formatCalendarDay(item.entry_date)}
                    </p>
                    <h3 css={nextClassTitle}>{item.event_title || item.course_name || 'Scheduled event'}</h3>
                    {item.event_description ? (
                      <p
                        css={css`
                          margin: 0.25rem 0 0.35rem;
                          font-size: 0.88rem;
                          line-height: 1.4;
                          color: ${darkMode ? '#d1d5db' : '#4b5563'};
                        `}
                      >
                        {item.event_description}
                      </p>
                    ) : null}
                    <p css={metaLine(darkMode)}>
                      <HiOutlineClock style={{ width: 14, height: 14, verticalAlign: 'text-bottom' }} />{' '}
                      {fmtTime(item.start_time)}
                      {item.end_time ? ` – ${fmtTime(item.end_time)}` : ''}
                    </p>
                    {item.room_location ? (
                      <p css={metaLine(darkMode)}>
                        <HiOutlineCalendarDays style={{ width: 14, height: 14, verticalAlign: 'text-bottom' }} />{' '}
                        {item.room_location}
                      </p>
                    ) : null}
                  </div>
                )
              )}
            </div>
          ) : (
            <p css={muted(darkMode)}>No upcoming classes or timetable events.</p>
          )}
        </section>

        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineSparkles />
              Assessment Deadlines
            </h2>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading deadlines...</p>
          ) : deadlines.length === 0 ? (
            <p css={muted(darkMode)}>No upcoming deadlines.</p>
          ) : (
            <div css={dashboardFeedScroll(darkMode)}>
              {deadlines.map((d) => (
                <article key={d.id} css={deadlineCard(darkMode)}>
                  <div css={deadlineHead}>
                    <span css={deadlineCourse}>{d.course_code || 'COURSE'}</span>
                    <span css={metaLine(darkMode)}>{d.event_title ? 'Assignment' : 'Assessment'}</span>
                  </div>
                  <p
                    css={css`
                      margin: 0 0 0.35rem;
                      font-size: 0.86rem;
                      font-weight: 700;
                      color: ${darkMode ? '#d1d5db' : '#374151'};
                    `}
                  >
                    {formatCalendarDay(d.entry_date)}
                  </p>
                  <h3 css={deadlineTitle}>{d.event_title || 'Assessment deadline'}</h3>
                  <p css={metaLine(darkMode)}>{d.event_description || 'Complete and submit before due date.'}</p>
                  <div css={deadlineRow}>
                    <span css={metaLine(darkMode)}>
                      {new Date(`${d.entry_date}T${d.start_time || '23:59:00'}`).toLocaleString([], {
                        month: 'numeric',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </span>
                    <strong css={css`color:#d97706;`}>{d.days <= 0 ? 'Today' : `${d.days} days`}</strong>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <div css={chartGrid}>
        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineChartBar />
              Attendance distribution
            </h2>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading chart...</p>
          ) : !hasAnyAttendanceMarks ? (
            <p css={muted(darkMode)}>No attendance sessions recorded yet. Your lecturer will mark classes as they happen.</p>
          ) : myCourses.length === 0 ? (
            <p css={muted(darkMode)}>No courses to filter — link your student profile to see modules.</p>
          ) : (
            <>
              <div css={attendanceFilterBlock(darkMode)}>
                <p css={attendanceFilterLabel(darkMode)}>Include modules</p>
                <div ref={attendanceFilterRef} css={attendanceComboWrap}>
                  <button
                    type="button"
                    css={attendanceComboTrigger(darkMode, attendanceFilterOpen)}
                    aria-expanded={attendanceFilterOpen}
                    aria-haspopup="listbox"
                    aria-label="Choose modules for attendance chart"
                    onClick={() => {
                      setAttendanceFilterOpen((o) => !o)
                      if (attendanceFilterOpen) setAttendanceFilterSearch('')
                    }}
                  >
                    <span css={css`min-width: 0;`}>{attendanceFilterSummary}</span>
                    <HiOutlineChevronDown css={attendanceComboChevron(attendanceFilterOpen)} aria-hidden />
                  </button>
                  {showAttendanceFilterChips ? (
                    <div css={attendanceChipsRow}>
                      {selectedCoursesForChips.map((c) => {
                        const id = Number(c.id)
                        const code = String(c.course_code || 'Module').trim() || 'Module'
                        return (
                          <span key={id} css={attendanceChip(darkMode)}>
                            {code}
                            <button
                              type="button"
                              css={attendanceChipRemove(darkMode)}
                              aria-label={`Remove ${code} from chart filter`}
                              onClick={() => toggleAttendanceCourseId(id)}
                            >
                              <HiOutlineXMark aria-hidden />
                            </button>
                          </span>
                        )
                      })}
                    </div>
                  ) : null}
                  {attendanceFilterOpen ? (
                    <div css={attendanceDropdown(darkMode)} role="listbox" aria-label="Module list">
                      <div css={attendanceSearchRow(darkMode)}>
                        <HiOutlineMagnifyingGlass
                          aria-hidden
                          style={{ width: '1.05rem', height: '1.05rem', opacity: 0.65, flexShrink: 0 }}
                        />
                        <input
                          type="search"
                          css={attendanceSearchInput(darkMode)}
                          placeholder="Search by code or name…"
                          value={attendanceFilterSearch}
                          onChange={(e) => setAttendanceFilterSearch(e.target.value)}
                          autoComplete="off"
                          aria-label="Search modules"
                        />
                      </div>
                      <div css={attendanceDropdownActions(darkMode)}>
                        <button type="button" css={filterLinkBtn(darkMode)} onClick={selectAllAttendanceCourses}>
                          Select all
                        </button>
                        <button type="button" css={filterLinkBtn(darkMode)} onClick={clearAttendanceCourseFilter}>
                          Clear all
                        </button>
                      </div>
                      <div css={attendanceFilterListScroll(darkMode)}>
                        {filteredAttendanceCourses.length === 0 ? (
                          <p css={muted(darkMode)} style={{ margin: '0.35rem 0.4rem', fontSize: '0.84rem' }}>
                            No modules match your search.
                          </p>
                        ) : (
                          filteredAttendanceCourses.map((c) => {
                            const id = Number(c.id)
                            const inputId = `attendance-filter-${id}`
                            const checked = effectiveAttendanceCourseIds.includes(id)
                            return (
                              <label key={id} htmlFor={inputId} css={attendanceCheckRow(darkMode)}>
                                <input
                                  id={inputId}
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleAttendanceCourseId(id)}
                                />
                                <span css={css`min-width: 0;`}>
                                  <span css={css`font-weight: 700;`}>{c.course_code || 'Course'}</span>
                                  {c.course_name ? (
                                    <span css={attendanceCheckMeta(darkMode)}>{c.course_name}</span>
                                  ) : null}
                                </span>
                              </label>
                            )
                          })
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              {effectiveAttendanceCourseIds.length === 0 ? (
                <p css={muted(darkMode)}>Choose one or more modules with the filter above to update the chart.</p>
              ) : attendanceSessionsTotal <= 0 ? (
                <p css={muted(darkMode)}>No attendance marks for the selected modules yet.</p>
              ) : attendancePieData.length === 0 ? (
                <p css={muted(darkMode)}>Not enough data to chart for this selection.</p>
              ) : (
                <div css={chartBody}>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={attendancePieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={52}
                        outerRadius={96}
                        paddingAngle={2}
                        isAnimationActive
                      >
                        {attendancePieData.map((entry) => (
                          <Cell key={entry.name} fill={PIE_COLORS[entry.name] || ACCENT} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name) => {
                          const n = Number(value)
                          return [`${n} session${n === 1 ? '' : 's'}`, name]
                        }}
                        contentStyle={chartTooltipStyle}
                      />
                      <Legend
                        verticalAlign="bottom"
                        formatter={(value) => <span style={{ color: darkMode ? '#e5e7eb' : '#374151' }}>{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </>
          )}
        </section>

        <section css={panel(darkMode)}>
          <div css={panelHeader}>
            <h2 css={panelTitle(darkMode)}>
              <HiOutlineStar />
              Performance — by module
            </h2>
          </div>
          {loading ? (
            <p css={muted(darkMode)}>Loading chart...</p>
          ) : gradeBarData.length === 0 ? (
            <p css={muted(darkMode)}>
              No marks published yet. Your module leader saves assessment scores under{' '}
              <strong>Performance</strong> in the lecturer portal; each bar below will be one module (average of all
              assessments saved for that course, 0–100).
            </p>
          ) : (
            <>
              <div css={performanceModuleFilterBlock(darkMode)}>
                <div css={performanceModuleFilterGrid}>
                  <div>
                    <label htmlFor="perf-module-study-year" css={attendanceFilterLabel(darkMode)}>
                      Study year
                    </label>
                    <select
                      id="perf-module-study-year"
                      css={performanceModuleSelect(darkMode)}
                      value={perfModuleStudyYear}
                      onChange={(e) => setPerfModuleStudyYear(e.target.value)}
                      aria-label="Filter performance chart by study year"
                    >
                      <option value="">All study years</option>
                      {perfCatalogStudyYears.map((yv) => (
                        <option key={yv} value={yv}>
                          {formatStudyYearDisplay(yv)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="perf-module-semester" css={attendanceFilterLabel(darkMode)}>
                      Semester
                    </label>
                    <select
                      id="perf-module-semester"
                      css={performanceModuleSelect(darkMode)}
                      value={perfModuleSemester}
                      onChange={(e) => setPerfModuleSemester(e.target.value)}
                      aria-label="Filter performance chart by semester"
                    >
                      <option value="">All semesters</option>
                      {perfCatalogSemesters.map((sv) => (
                        <option key={sv} value={sv}>
                          {semesterSelectLabel(sv)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {(perfModuleStudyYear || perfModuleSemester) && (
                  <div css={css`margin-top: 0.55rem;`}>
                    <button
                      type="button"
                      css={filterLinkBtn(darkMode)}
                      onClick={() => {
                        setPerfModuleStudyYear('')
                        setPerfModuleSemester('')
                      }}
                    >
                      Clear chart filters
                    </button>
                  </div>
                )}
              </div>
              {performanceGradeBarChartData.length === 0 ? (
                <p css={muted(darkMode)}>
                  No modules match this study year / semester. Choose &ldquo;All&rdquo; or adjust the filters above.
                </p>
              ) : (
                <div css={chartBody}>
                  <div css={performanceBarChartShell(performanceGradeBarCount)}>
                    <ResponsiveContainer width="100%" height={280}>
                      <BarChart
                        data={performanceGradeBarChartData}
                        margin={performanceGradeBarChartMargin}
                        barCategoryGap={performanceGradeBarCategoryGap}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                        <XAxis
                          dataKey="label"
                          tick={{ fill: axisStroke, fontSize: 11 }}
                          interval={0}
                          angle={-22}
                          textAnchor="end"
                          height={56}
                          padding={performanceGradeBarXAxisPadding}
                        />
                        <YAxis
                          domain={[0, 100]}
                          tick={{ fill: axisStroke, fontSize: 11 }}
                          width={36}
                          label={{
                            value: 'Avg (%)',
                            angle: -90,
                            position: 'insideLeft',
                            fill: axisStroke,
                            fontSize: 11,
                          }}
                        />
                        <Bar
                          dataKey="score"
                          name="Module average"
                          fill={ACCENT}
                          radius={[6, 6, 0, 0]}
                          maxBarSize={56}
                          cursor="pointer"
                          onClick={handlePerformanceBarClick}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <div
        css={css`
          margin-top: 0.95rem;
        `}
      >
        <div css={performanceModuleFilterBlock(darkMode)}>
          <div css={performanceModuleFilterGrid}>
            <div>
              <label htmlFor="study-chart-month" css={attendanceFilterLabel(darkMode)}>
                Month
              </label>
              <select
                id="study-chart-month"
                css={performanceModuleSelect(darkMode)}
                value={studyChartsMonth}
                onChange={(e) => setStudyChartsMonth(Number(e.target.value))}
                aria-label="Filter study charts by month"
              >
                {CALENDAR_MONTH_OPTIONS.map((mo) => (
                  <option key={mo.value} value={mo.value}>
                    {mo.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="study-chart-year" css={attendanceFilterLabel(darkMode)}>
                Year
              </label>
              <select
                id="study-chart-year"
                css={performanceModuleSelect(darkMode)}
                value={studyChartsYear}
                onChange={(e) => setStudyChartsYear(Number(e.target.value))}
                aria-label="Filter study charts by year"
              >
                {studyChartYearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {(() => {
            const d = new Date()
            const isNow = d.getFullYear() === studyChartsYear && d.getMonth() + 1 === studyChartsMonth
            return !isNow ? (
              <div css={css`margin-top: 0.55rem;`}>
                <button
                  type="button"
                  css={filterLinkBtn(darkMode)}
                  onClick={() => {
                    const x = new Date()
                    setStudyChartsYear(x.getFullYear())
                    setStudyChartsMonth(x.getMonth() + 1)
                  }}
                >
                  Current month
                </button>
              </div>
            ) : null
          })()}
        </div>

        <div css={chartGrid}>
          <section css={panel(darkMode)}>
            <div css={panelHeader}>
              <h2 css={panelTitle(darkMode)}>
                <HiOutlineCalendarDays />
                Study time by weekday
              </h2>
            </div>
            <p
              css={css`
                margin: -0.35rem 0 0.65rem;
                font-size: 0.82rem;
                color: ${darkMode ? '#9ca3af' : '#6b7280'};
              `}
            >
              {studyChartPeriodLabel} — minutes per weekday (all Mondays summed, etc.)
            </p>
            {loading ? (
              <p css={muted(darkMode)}>Loading study chart...</p>
            ) : (
              <div css={chartBody}>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart
                    data={studyWeekCharts.byDow}
                    margin={{ top: 10, right: 12, left: 0, bottom: 8 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="day" tick={{ fill: axisStroke, fontSize: 12 }} />
                    <YAxis
                      domain={[0, studyWeekCharts.weekYMax]}
                      tick={{ fill: axisStroke, fontSize: 11 }}
                      width={40}
                      ticks={studyWeekCharts.weekYTicks}
                      tickFormatter={(v) => `${Math.round(v)}m`}
                    />
                    <Tooltip
                      formatter={(v) => [
                        `${typeof v === 'number' ? Math.round(v) : v} min`,
                        `Study time (${studyChartPeriodLabel})`,
                      ]}
                      contentStyle={chartTooltipStyle}
                    />
                    <Bar dataKey="minutes" fill={ACCENT} radius={[6, 6, 0, 0]} maxBarSize={48} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </section>

          <section css={panel(darkMode)}>
            <div css={panelHeader}>
              <h2 css={panelTitle(darkMode)}>Study time by module</h2>
            </div>
            <p
              css={css`
                margin: -0.35rem 0 0.65rem;
                font-size: 0.82rem;
                color: ${darkMode ? '#9ca3af' : '#6b7280'};
              `}
            >
              {studyChartPeriodLabel}
            </p>
            {loading ? (
              <p css={muted(darkMode)}>Loading study chart...</p>
            ) : (
              <div css={chartBody}>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart
                    data={studyWeekCharts.moduleRows}
                    margin={{ top: 8, right: 8, left: 0, bottom: 36 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                    <XAxis
                      dataKey="code"
                      tick={{ fill: axisStroke, fontSize: 11 }}
                      interval={0}
                      angle={-12}
                      textAnchor="end"
                      height={48}
                    />
                    <YAxis
                      domain={[0, studyWeekCharts.moduleYMax]}
                      tick={{ fill: axisStroke, fontSize: 11 }}
                      width={40}
                      ticks={studyWeekCharts.moduleYTicks}
                      tickFormatter={(v) => `${Math.round(v)}m`}
                    />
                    <Tooltip
                      formatter={(v) => [
                        `${typeof v === 'number' ? Math.round(v) : v} min`,
                        studyChartPeriodLabel,
                      ]}
                      contentStyle={chartTooltipStyle}
                    />
                    <Line
                      type="monotone"
                      dataKey="minutes"
                      stroke={STUDY_MODULE_LINE}
                      strokeWidth={2}
                      dot={{ r: 4, fill: STUDY_MODULE_LINE }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </section>
        </div>
      </div>
      {performanceMarksModal && typeof document !== 'undefined'
        ? createPortal(
            <div
              css={perfMarksModalBackdrop}
              role="presentation"
              onClick={() => setPerformanceMarksModal(null)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="perf-marks-modal-title"
                css={perfMarksModalCard(darkMode)}
                onClick={(e) => e.stopPropagation()}
              >
                <div css={perfMarksModalHead(darkMode)}>
                  <div css={css`min-width: 0;`}>
                    <h2 id="perf-marks-modal-title" css={perfMarksModalTitle(darkMode)}>
                      {performanceMarksModal.code}
                    </h2>
                    {performanceMarksModal.title !== performanceMarksModal.code ? (
                      <p css={perfMarksModalSub(darkMode)}>{performanceMarksModal.title}</p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    css={perfMarksModalClose(darkMode)}
                    aria-label="Close"
                    onClick={() => setPerformanceMarksModal(null)}
                  >
                    <HiOutlineXMark style={{ width: '1.25rem', height: '1.25rem' }} aria-hidden />
                  </button>
                </div>
                <div css={perfMarksModalBody}>
                  <p css={perfMarksModalAvg(darkMode)}>
                    Module average: <strong>{performanceMarksModal.avgScore}%</strong>
                    {performanceMarksModal.assessmentCount ? (
                      <span>
                        {' '}
                        ({performanceMarksModal.assessmentCount} assessment
                        {performanceMarksModal.assessmentCount === 1 ? '' : 's'})
                      </span>
                    ) : null}
                  </p>
                  {performanceMarksModal.marks.length > 0 ? (
                    performanceMarksModal.marks.map((m, idx) => {
                      const lineColor =
                        PERFORMANCE_MARK_LINE_COLORS[idx % PERFORMANCE_MARK_LINE_COLORS.length]
                      const isNotMarked = String(m.mark_status || '') === 'not_marked'
                      return (
                        <div key={`perf-mark-${idx}-${String(m.assessment_id)}`} css={perfMarksModalRow}>
                          <span style={{ color: lineColor, minWidth: 0, wordBreak: 'break-word' }}>
                            {m.label}{' '}
                            <span style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>:</span>
                          </span>
                          <span style={{ flexShrink: 0, textAlign: 'right' }}>
                            {isNotMarked ? (
                              <span style={{ color: darkMode ? '#a3a3a3' : '#6b7280', fontWeight: 700 }}>
                                Not marked
                              </span>
                            ) : (
                              <span style={{ color: lineColor, fontWeight: 700 }}>{m.score}%</span>
                            )}
                          </span>
                        </div>
                      )
                    })
                  ) : (
                    <p css={muted(darkMode)} style={{ margin: 0, fontSize: '0.88rem' }}>
                      No individual assessments are stored for this module yet.
                    </p>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  )
}

export default StudentDashboardOverview

