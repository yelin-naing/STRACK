/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice,
  HiOutlineCalendar,
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineMagnifyingGlass,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineXMark,
  HiOutlineStar,
} from 'react-icons/hi2'

const BASE = '/strack'

const themeTransition = '0.35s ease'

const layoutStyles = (darkMode) => css`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${darkMode ? '#0f0f0f' : '#F8F8F8'};
  display: flex;
  flex-direction: column;
  transition: background-color ${themeTransition};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const sidebarStyles = (darkMode) => css`
  background-color: ${darkMode ? '#1a1a1a' : '#FFFFFF'};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${darkMode ? 'none' : '0 2px 12px rgba(0,0,0,0.06)'};
  transition: background-color ${themeTransition}, box-shadow ${themeTransition};

  @media (min-width: 768px) {
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
  }
`

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0 0.25rem;
  min-height: 44px;
`

const logoStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  min-width: 0;
  flex: 1;
`

const logoIconStyles = (darkMode) => css`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: ${darkMode ? '#a78bfa' : '#1a1a1a'};
    transition: stroke ${themeTransition};
  }
`

const logoTextStyles = (darkMode) => css`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: inherit;
  color: ${darkMode ? '#ffffff' : 'inherit'};
  transition: color ${themeTransition};
`

const themeToggleStyles = (darkMode) => css`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkMode ? '#ffffff' : '#1a1a1a'};
  border-radius: 8px;
  flex-shrink: 0;
  transition: color ${themeTransition};

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`

const profileStyles = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0 0.25rem;
`

const avatarStyles = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  flex-shrink: 0;
`

const profileInfoStyles = css`
  flex: 1;
  min-width: 0;
`

const profileNameStyles = (darkMode) => css`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${darkMode ? '#ffffff' : 'inherit'};
  transition: color ${themeTransition};
`

const profileRoleStyles = (darkMode) => css`
  font-size: 0.8rem;
  color: ${darkMode ? '#9ca3af' : '#666666'};
  font-weight: 400;
  transition: color ${themeTransition};
`

const navStyles = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const navItemStyles = (darkMode, active) => css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${active ? (darkMode ? 'rgba(124, 58, 237, 0.4)' : '#7c3aed') : 'transparent'};
  color: ${active ? '#fff' : darkMode ? '#d1d5db' : '#1a1a1a'};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background ${themeTransition}, color ${themeTransition};

  &:hover {
    background: ${active ? (darkMode ? 'rgba(124, 58, 237, 0.5)' : '#6d28d9') : darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`

const logoutStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  margin-top: auto;
  background: rgba(192, 57, 43, 0.08);
  border: 1px solid rgba(192, 57, 43, 0.35);
  color: #c0392b;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border-radius: 10px;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(192, 57, 43, 0.15);
    border-color: rgba(192, 57, 43, 0.5);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`

const mainStyles = (darkMode) => css`
  flex: 1;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  color: ${darkMode ? '#f3f4f6' : '#1a1a1a'};
  overflow-y: auto;
  transition: color ${themeTransition};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const contentStyles = (darkMode, wide) => css`
  max-width: ${wide ? '100%' : '800px'};
  margin: 0 auto;
`

const studentHeaderStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const studentTitleStyles = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`

const studentSubtitleStyles = (darkMode) => css`
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#666'};
  margin: 0;
  transition: color ${themeTransition};
`

const addStudentBtnStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }
`

const studentSearchStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  min-width: 200px;
  margin-bottom: 1rem;
  transition: border-color ${themeTransition}, background ${themeTransition};

  &:focus-within {
    border-color: #2563eb;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: inherit;

    &::placeholder {
      color: ${darkMode ? '#6b7280' : '#9ca3af'};
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${darkMode ? '#6b7280' : '#9ca3af'};
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`

const studentKpiWrapStyles = css`
  margin-bottom: 1rem;
`

const studentKpiGridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
`

const studentKpiCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.08)'};
  border: 1px solid ${darkMode ? '#333333' : 'rgba(0,0,0,0.04)'};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
`

const studentKpiNumberStyles = (darkMode) => css`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${darkMode ? '#fff' : '#1a1a1a'};
  margin: 0;
`

const studentKpiLabelStyles = (darkMode) => css`
  font-size: 0.85rem;
  color: ${darkMode ? '#9ca3af' : '#666'};
  margin: 0;
`

const studentKpiIconRowStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const studentKpiIconStyles = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${darkMode ? '#a78bfa' : '#2563eb'};
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: ${darkMode ? 'rgba(167, 139, 250, 0.14)' : 'rgba(37, 99, 235, 0.10)'};

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
  }
`

const studentKpiTextColStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.1rem;
  min-height: 76px;
`

const attendanceBadgeStyles = (pct, darkMode) => css`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${pct > 0 ? '#7c3aed' : (darkMode ? '#404040' : '#e5e7eb')};
  color: ${pct > 0 ? '#fff' : (darkMode ? '#9ca3af' : '#6b7280')};
  transition: background ${themeTransition}, color ${themeTransition};
`

const pointsCellStyles = css`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
    color: #eab308;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`

const titleStyles = css`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const textStyles = css`
  margin-bottom: 1.25rem;
  opacity: 0.9;
  font-size: 0.95rem;

  @media (min-width: 480px) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`

const deptHeaderStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const deptTitleBlockStyles = css`
  flex: 1;
  min-width: 0;
`

const deptTitleStyles = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
`

const deptSubtitleStyles = (darkMode) => css`
  font-size: 0.9rem;
  color: ${darkMode ? '#9ca3af' : '#666'};
  margin: 0;
  transition: color ${themeTransition};
`

const addDeptBtnStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #1d4ed8;
  }
`

const deptCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.08)'};
  transition: background ${themeTransition}, box-shadow ${themeTransition};
`

const deptCardIconStyles = (darkMode) => css`
  width: 46px;
  height: 46px;
  color: #2563eb;
  background: ${darkMode ? 'rgba(167, 139, 250, 0.14)' : 'rgba(37, 99, 235, 0.10)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
  }
`

const deptCardNumberStyles = (darkMode) => css`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${darkMode ? '#fff' : '#1a1a1a'};
  margin: 0;
  transition: color ${themeTransition};
`

const deptCardLabelStyles = (darkMode) => css`
  font-size: 0.85rem;
  color: ${darkMode ? '#9ca3af' : '#666'};
  margin: 0;
  transition: color ${themeTransition};
`

const courseCardStyles = (darkMode) => css`
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  padding: 1.25rem 1.25rem;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.08)'};
  border: 1px solid ${darkMode ? '#333333' : 'rgba(0,0,0,0.04)'};
`

const courseAllRowStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
  }
`

const courseTableStyles = (darkMode) => css`
  width: 100%;
  border-collapse: collapse;
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: none;
`

const courseTableThStyles = (darkMode) => css`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  background: ${darkMode ? '#1a1a1a' : '#f9fafb'};
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  transition: color ${themeTransition}, background ${themeTransition}, border-color ${themeTransition};
`

const courseTableTdStyles = (darkMode) => css`
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  color: ${darkMode ? '#e5e7eb' : '#1a1a1a'};
  border-bottom: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
  vertical-align: middle;
`

const creditsBadgeStyles = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  background: #2563eb;
  color: #fff;
  min-width: 56px;
`

const allDeptSectionStyles = css`
  margin-top: 1.5rem;
`

const allDeptHeaderStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const allDeptTitleStyles = css`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`

const deptSearchStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  min-width: 200px;
  transition: border-color ${themeTransition}, background ${themeTransition};

  &:focus-within {
    border-color: #2563eb;
    outline: none;
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: inherit;

    &::placeholder {
      color: ${darkMode ? '#6b7280' : '#9ca3af'};
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${darkMode ? '#6b7280' : '#9ca3af'};
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
  }
`

const deptTableStyles = (darkMode) => css`
  width: 100%;
  border-collapse: collapse;
  background: ${darkMode ? '#262626' : '#fff'};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.08)'};
  transition: background ${themeTransition}, box-shadow ${themeTransition};
`

const deptTableThStyles = (darkMode) => css`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  background: ${darkMode ? '#1a1a1a' : '#f9fafb'};
  border-bottom: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  transition: color ${themeTransition}, background ${themeTransition}, border-color ${themeTransition};
`

const deptTableTdStyles = (darkMode) => css`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${darkMode ? '#e5e7eb' : '#1a1a1a'};
  border-bottom: 1px solid ${darkMode ? '#404040' : '#f3f4f6'};
  transition: color ${themeTransition}, border-color ${themeTransition};
`

const deptActionsStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const deptActionBtnStyles = (darkMode) => css`
  padding: 0.4rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
    color: ${darkMode ? '#fff' : '#1a1a1a'};
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
  }
`

const deptDeleteBtnStyles = (darkMode) => css`
  ${deptActionBtnStyles(darkMode)}
  &:hover {
    color: #dc2626;
  }
`

const modalOverlayStyles = css`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

const modalStyles = (darkMode) => css`
  background: ${darkMode ? '#1a1a1a' : '#fff'};
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
  transition: background ${themeTransition};
`

const modalHeaderStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${darkMode ? '#404040' : 'rgba(0,0,0,0.08)'};
  transition: border-color ${themeTransition};
`

const modalTitleStyles = (darkMode) => css`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  color: ${darkMode ? '#fff' : '#1a1a1a'};
  transition: color ${themeTransition};
`

const modalCloseBtnStyles = (darkMode) => css`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
    color: inherit;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: none;
  }
`

const modalBodyStyles = css`
  padding: 1.5rem;
`

const modalFieldStyles = css`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const modalLabelStyles = (darkMode) => css`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: ${darkMode ? '#d1d5db' : '#374151'};
  transition: color ${themeTransition};
`

const modalInputStyles = (darkMode) => css`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  font-size: 0.95rem;
  background: ${darkMode ? '#262626' : '#fff'};
  color: inherit;
  box-sizing: border-box;
  transition: border-color ${themeTransition}, background ${themeTransition};

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: ${darkMode ? '#6b7280' : '#9ca3af'};
  }
`

const modalTextareaStyles = (darkMode) => css`
  ${modalInputStyles(darkMode)}
  min-height: 80px;
  resize: vertical;
`

const modalFooterStyles = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${darkMode ? '#404040' : 'rgba(0,0,0,0.08)'};
  transition: border-color ${themeTransition};
`

const modalCancelBtnStyles = (darkMode) => css`
  padding: 0.5rem 1rem;
  border: 1px solid ${darkMode ? '#404040' : '#e5e7eb'};
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color ${themeTransition}, background ${themeTransition};

  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'};
  }
`

const modalSubmitBtnStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`

const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const GridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
  </svg>
)

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
)

const BuildingOfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

const ADMIN_NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: HiOutlineSquares2X2 },
  { id: 'students', label: 'Students', icon: HiOutlineUserGroup },
  { id: 'lecturers', label: 'Lecturers', icon: HiOutlineAcademicCap },
  { id: 'courses', label: 'Courses', icon: HiOutlineBookOpen },
  { id: 'departments', label: 'Departments', icon: HiOutlineBuildingOffice },
  { id: 'degrees', label: 'Degrees', icon: HiOutlineBookOpen },
  { id: 'calendar', label: 'Calendar', icon: HiOutlineCalendar },
]

function getInitials(name) {
  if (!name || typeof name !== 'string') return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function AdminDashboard({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('dashboard')

  const [departments, setDepartments] = useState([])
  const [deptLoading, setDeptLoading] = useState(false)
  const [deptSearch, setDeptSearch] = useState('')
  const [deptModalOpen, setDeptModalOpen] = useState(false)
  const [deptEditId, setDeptEditId] = useState(null)
  const [deptForm, setDeptForm] = useState({ code: '', name: '', description: '' })
  const [deptSaving, setDeptSaving] = useState(false)

  const fetchDepartments = useCallback(async () => {
    setDeptLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/departments.php`)
      const data = await res.json()
      if (data.success) setDepartments(data.departments || [])
    } catch (_) {
      setDepartments([])
    } finally {
      setDeptLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeNav === 'departments') fetchDepartments()
  }, [activeNav, fetchDepartments])

  const [students, setStudents] = useState([])
  const [studentLoading, setStudentLoading] = useState(false)
  const [studentSearch, setStudentSearch] = useState('')
  const [studentModalOpen, setStudentModalOpen] = useState(false)
  const [studentEditId, setStudentEditId] = useState(null)
  const [studentForm, setStudentForm] = useState({
    student_id: '',
    full_name: '',
    email: '',
    password: '',
    department: '',
    year: '',
    degree: '',
  })
  const [studentSaving, setStudentSaving] = useState(false)
  const [departmentsForSelect, setDepartmentsForSelect] = useState([])

  const fetchStudents = useCallback(async () => {
    setStudentLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/students.php?t=${Date.now()}`, { cache: 'no-store' })
      const data = await res.json()
      if (data.success) setStudents(data.students || [])
    } catch (_) {
      setStudents([])
    } finally {
      setStudentLoading(false)
    }
  }, [])

  const fetchDepartmentsForSelect = useCallback(async () => {
    try {
      const res = await fetch(`${BASE}/backend/departments.php`)
      const data = await res.json()
      if (data.success) setDepartmentsForSelect(data.departments || [])
    } catch (_) {
      setDepartmentsForSelect([])
    }
  }, [])

  useEffect(() => {
    if (activeNav === 'students') fetchStudents()
    if (activeNav === 'students' || activeNav === 'lecturers' || activeNav === 'courses' || activeNav === 'degrees') fetchDepartmentsForSelect()
  }, [activeNav, fetchStudents, fetchDepartmentsForSelect])

  const [lecturers, setLecturers] = useState([])
  const [lecturerLoading, setLecturerLoading] = useState(false)
  const [lecturerSearch, setLecturerSearch] = useState('')
  const [lecturerModalOpen, setLecturerModalOpen] = useState(false)
  const [lecturerEditId, setLecturerEditId] = useState(null)
  const [lecturerForm, setLecturerForm] = useState({
    lecturer_id: '',
    full_name: '',
    email: '',
    department: '',
  })
  const [lecturerSaving, setLecturerSaving] = useState(false)

  const fetchLecturers = useCallback(async () => {
    setLecturerLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/lecturers.php?t=${Date.now()}`, { cache: 'no-store' })
      const data = await res.json()
      if (data.success) setLecturers(data.lecturers || [])
    } catch (_) {
      setLecturers([])
    } finally {
      setLecturerLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeNav === 'lecturers' || activeNav === 'courses') fetchLecturers()
  }, [activeNav, fetchLecturers])

  const openAddLecturer = () => {
    setLecturerEditId(null)
    setLecturerForm({ lecturer_id: '', full_name: '', email: '', department: '' })
    setLecturerModalOpen(true)
  }

  const openEditLecturer = (l) => {
    setLecturerEditId(l.id)
    setLecturerForm({
      lecturer_id: l.lecturer_id || '',
      full_name: l.full_name || '',
      email: l.email || '',
      department: l.department || '',
    })
    setLecturerModalOpen(true)
  }

  const closeLecturerModal = () => setLecturerModalOpen(false)

  const saveLecturer = async () => {
    const { lecturer_id, full_name, email, department } = lecturerForm
    if (!lecturer_id.trim() || !full_name.trim() || !email.trim() || !department.trim()) return
    setLecturerSaving(true)
    try {
      if (lecturerEditId) {
        const res = await fetch(`${BASE}/backend/lecturers.php`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: lecturerEditId,
            lecturer_id: lecturer_id.trim(),
            full_name: full_name.trim(),
            email: email.trim(),
            department: department.trim(),
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeLecturerModal()
          fetchLecturers()
        }
      } else {
        const res = await fetch(`${BASE}/backend/lecturers.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lecturer_id: lecturer_id.trim(),
            full_name: full_name.trim(),
            email: email.trim(),
            department: department.trim(),
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeLecturerModal()
          fetchLecturers()
        }
      }
    } finally {
      setLecturerSaving(false)
    }
  }

  const deleteLecturer = async (id) => {
    if (!confirm('Delete this lecturer?')) return
    try {
      const res = await fetch(`${BASE}/backend/lecturers.php?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) fetchLecturers()
    } catch (_) {}
  }

  const filteredLecturers = lecturers.filter(
    (l) =>
      !lecturerSearch ||
      (l.lecturer_id || '').toLowerCase().includes(lecturerSearch.toLowerCase()) ||
      (l.full_name || '').toLowerCase().includes(lecturerSearch.toLowerCase()) ||
      (l.email || '').toLowerCase().includes(lecturerSearch.toLowerCase()) ||
      (l.department || '').toLowerCase().includes(lecturerSearch.toLowerCase())
  )

  const [courses, setCourses] = useState([])
  const [courseLoading, setCourseLoading] = useState(false)
  const [courseSearch, setCourseSearch] = useState('')
  const [courseModalOpen, setCourseModalOpen] = useState(false)
  const [courseEditId, setCourseEditId] = useState(null)
  const [courseForm, setCourseForm] = useState({
    course_code: '',
    course_name: '',
    department: '',
    lecturer_id: '',
    credits: 0,
  })
  const [courseSaving, setCourseSaving] = useState(false)

  const fetchCourses = useCallback(async () => {
    setCourseLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/courses.php?t=${Date.now()}`, { cache: 'no-store' })
      const data = await res.json()
      if (data.success) setCourses(data.courses || [])
    } catch (_) {
      setCourses([])
    } finally {
      setCourseLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeNav === 'courses') fetchCourses()
  }, [activeNav, fetchCourses])

  const openAddCourse = () => {
    setCourseEditId(null)
    setCourseForm({
      course_code: '',
      course_name: '',
      department: '',
      lecturer_id: '',
      credits: 0,
    })
    setCourseModalOpen(true)
  }

  const openEditCourse = (c) => {
    setCourseEditId(c.id)
    setCourseForm({
      course_code: c.course_code || '',
      course_name: c.course_name || '',
      department: c.department || '',
      lecturer_id: c.lecturer_id || '',
      credits: Number(c.credits) || 0,
    })
    setCourseModalOpen(true)
  }

  const closeCourseModal = () => setCourseModalOpen(false)

  const saveCourse = async () => {
    const { course_code, course_name, department, lecturer_id, credits } = courseForm
    if (!course_code.trim() || !course_name.trim()) return

    setCourseSaving(true)
    try {
      if (courseEditId) {
        const res = await fetch(`${BASE}/backend/courses.php`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: courseEditId,
            course_code: course_code.trim(),
            course_name: course_name.trim(),
            department: department.trim() || '',
            lecturer_id: lecturer_id.trim() || '',
            credits: Number(credits) || 0,
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeCourseModal()
          fetchCourses()
        }
      } else {
        const res = await fetch(`${BASE}/backend/courses.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            course_code: course_code.trim(),
            course_name: course_name.trim(),
            department: department.trim() || '',
            lecturer_id: lecturer_id.trim() || '',
            credits: Number(credits) || 0,
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeCourseModal()
          fetchCourses()
        }
      }
    } finally {
      setCourseSaving(false)
    }
  }

  const deleteCourse = async (id) => {
    if (!confirm('Delete this course?')) return
    try {
      const res = await fetch(`${BASE}/backend/courses.php?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) fetchCourses()
    } catch (_) {}
  }

  const filteredCourses = courses.filter(
    (c) =>
      !courseSearch ||
      (c.course_code || '').toLowerCase().includes(courseSearch.toLowerCase()) ||
      (c.course_name || '').toLowerCase().includes(courseSearch.toLowerCase()) ||
      (c.department || '').toLowerCase().includes(courseSearch.toLowerCase()) ||
      (c.lecturer_name || '').toLowerCase().includes(courseSearch.toLowerCase())
  )

  const [degrees, setDegrees] = useState([])
  const [degreeLoading, setDegreeLoading] = useState(false)
  const [degreeSearch, setDegreeSearch] = useState('')
  const [degreeModalOpen, setDegreeModalOpen] = useState(false)
  const [degreeEditId, setDegreeEditId] = useState(null)
  const [degreeForm, setDegreeForm] = useState({
    code: '',
    name: '',
    department: '',
    description: '',
  })
  const [degreeSaving, setDegreeSaving] = useState(false)

  const fetchDegrees = useCallback(async () => {
    setDegreeLoading(true)
    try {
      const res = await fetch(`${BASE}/backend/degrees.php?t=${Date.now()}`, { cache: 'no-store' })
      const data = await res.json()
      if (data.success) setDegrees(data.degrees || [])
    } catch (_) {
      setDegrees([])
    } finally {
      setDegreeLoading(false)
    }
  }, [])

  useEffect(() => {
    if (activeNav === 'degrees' || activeNav === 'students') fetchDegrees()
  }, [activeNav, fetchDegrees])

  const openAddDegree = () => {
    setDegreeEditId(null)
    setDegreeForm({ code: '', name: '', department: '', description: '' })
    setDegreeModalOpen(true)
  }

  const openEditDegree = (d) => {
    setDegreeEditId(d.id)
    setDegreeForm({
      code: d.code || '',
      name: d.name || '',
      department: d.department || '',
      description: d.description || '',
    })
    setDegreeModalOpen(true)
  }

  const closeDegreeModal = () => setDegreeModalOpen(false)

  const saveDegree = async () => {
    const { code, name, department, description } = degreeForm
    if (!code.trim() || !name.trim()) return
    setDegreeSaving(true)
    try {
      if (degreeEditId) {
        const res = await fetch(`${BASE}/backend/degrees.php`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: degreeEditId,
            code: code.trim(),
            name: name.trim(),
            department: department.trim(),
            description: description.trim(),
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeDegreeModal()
          fetchDegrees()
        }
      } else {
        const res = await fetch(`${BASE}/backend/degrees.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            code: code.trim(),
            name: name.trim(),
            department: department.trim(),
            description: description.trim(),
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeDegreeModal()
          fetchDegrees()
        }
      }
    } finally {
      setDegreeSaving(false)
    }
  }

  const deleteDegree = async (id) => {
    if (!confirm('Delete this degree?')) return
    try {
      const res = await fetch(`${BASE}/backend/degrees.php?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) fetchDegrees()
    } catch (_) {}
  }

  const filteredDegrees = degrees.filter(
    (d) =>
      !degreeSearch ||
      (d.code || '').toLowerCase().includes(degreeSearch.toLowerCase()) ||
      (d.name || '').toLowerCase().includes(degreeSearch.toLowerCase()) ||
      (d.department || '').toLowerCase().includes(degreeSearch.toLowerCase()) ||
      (d.description || '').toLowerCase().includes(degreeSearch.toLowerCase())
  )

  const openAddStudent = () => {
    setStudentEditId(null)
    // Default temporary password for all newly created students
    setStudentForm({ student_id: '', full_name: '', email: '', password: 'asd123', department: '', year: '', degree: '' })
    setStudentModalOpen(true)
  }

  const openEditStudent = (s) => {
    setStudentEditId(s.id)
    setStudentForm({
      student_id: s.student_id,
      full_name: s.full_name,
      email: s.email,
      // Don't prefill password text in the UI.
      password: '',
      department: s.department || '',
      year: s.year || '',
      degree: s.degree || '',
    })
    setStudentModalOpen(true)
  }

  const closeStudentModal = () => setStudentModalOpen(false)

  const saveStudent = async () => {
    const { student_id, full_name, email, password, department, year, degree } = studentForm
    if (!student_id.trim() || !full_name.trim() || !email.trim()) return
    if (!studentEditId && !password.trim()) return
    setStudentSaving(true)
    try {
      if (studentEditId) {
        const res = await fetch(`${BASE}/backend/students.php`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: studentEditId,
            student_id: student_id.trim(),
            full_name: full_name.trim(),
            email: email.trim(),
            password: password.trim(),
            department: department.trim() || '',
            year: year.trim() || '',
            degree: degree.trim() || '',
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeStudentModal()
          fetchStudents()
        }
      } else {
        const res = await fetch(`${BASE}/backend/students.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            student_id: student_id.trim(),
            full_name: full_name.trim(),
            email: email.trim(),
            password: password.trim(),
            department: department.trim() || '',
            year: year.trim() || '',
            degree: degree.trim() || '',
          }),
        })
        const data = await res.json()
        if (data.success) {
          closeStudentModal()
          fetchStudents()
        }
      }
    } finally {
      setStudentSaving(false)
    }
  }

  const deleteStudent = async (id) => {
    if (!confirm('Delete this student?')) return
    try {
      const res = await fetch(`${BASE}/backend/students.php?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) fetchStudents()
    } catch (_) {}
  }

  const filteredStudents = students.filter(
    (s) =>
      !studentSearch ||
      (s.student_id || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
      (s.full_name || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
      (s.email || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
      (s.department || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
      (s.degree || '').toLowerCase().includes(studentSearch.toLowerCase())
  )

  const YEAR_OPTIONS = ['Foundation', 'Year 1', 'Year 2', 'Placement Year', 'Year 4']

  const openAddDept = () => {
    setDeptEditId(null)
    setDeptForm({ code: '', name: '', description: '' })
    setDeptModalOpen(true)
  }

  const openEditDept = (d) => {
    setDeptEditId(d.id)
    setDeptForm({ code: d.code, name: d.name, description: d.description || '' })
    setDeptModalOpen(true)
  }

  const closeDeptModal = () => setDeptModalOpen(false)

  const saveDepartment = async () => {
    const { code, name, description } = deptForm
    if (!code.trim() || !name.trim()) return
    setDeptSaving(true)
    try {
      if (deptEditId) {
        const res = await fetch(`${BASE}/backend/departments.php`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: deptEditId, code: code.trim(), name: name.trim(), description: description.trim() }),
        })
        const data = await res.json()
        if (data.success) {
          closeDeptModal()
          fetchDepartments()
        }
      } else {
        const res = await fetch(`${BASE}/backend/departments.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: code.trim(), name: name.trim(), description: description.trim() }),
        })
        const data = await res.json()
        if (data.success) {
          closeDeptModal()
          fetchDepartments()
        }
      }
    } finally {
      setDeptSaving(false)
    }
  }

  const deleteDepartment = async (id) => {
    if (!confirm('Delete this department?')) return
    try {
      const res = await fetch(`${BASE}/backend/departments.php?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (data.success) fetchDepartments()
    } catch (_) {}
  }

  const filteredDepartments = departments.filter(
    (d) =>
      !deptSearch ||
      d.code.toLowerCase().includes(deptSearch.toLowerCase()) ||
      d.name.toLowerCase().includes(deptSearch.toLowerCase()) ||
      (d.description || '').toLowerCase().includes(deptSearch.toLowerCase())
  )

  let userName = 'Admin Portal'
  try {
    const stored = localStorage.getItem('strack_user')
    if (stored) {
      const user = JSON.parse(stored)
      const name = user?.name || ''
      userName = (name === 'Test Admin' || name === 'Admin') ? 'Admin Portal' : name || 'Admin Portal'
    }
  } catch (_) {}

  const handleLogout = () => {
    try {
      localStorage.removeItem('strack_user')
    } catch (_) {}
    navigate('/')
  }

  return (
    <div css={layoutStyles(darkMode)}>
      <aside css={sidebarStyles(darkMode)}>
        <header css={headerStyles}>
          <div css={logoStyles}>
            <div css={logoIconStyles(darkMode)}>
              <HiOutlineAcademicCap />
            </div>
            <span css={logoTextStyles(darkMode)}>Strack</span>
          </div>
          <button
            type="button"
            css={themeToggleStyles(darkMode)}
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </header>

        <div css={profileStyles}>
          <div css={avatarStyles}>{getInitials(userName)}</div>
          <div css={profileInfoStyles}>
            <div css={profileNameStyles(darkMode)}>{userName}</div>
            <div css={profileRoleStyles(darkMode)}>Admin</div>
          </div>
        </div>

        <nav css={navStyles}>
          {ADMIN_NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              css={navItemStyles(darkMode, activeNav === id)}
              onClick={() => setActiveNav(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>

        <button type="button" css={logoutStyles} onClick={handleLogout}>
          <HiOutlineArrowRightOnRectangle />
          Logout
        </button>
      </aside>

      <main css={mainStyles(darkMode)}>
        <div css={contentStyles(darkMode, activeNav === 'departments' || activeNav === 'students' || activeNav === 'lecturers' || activeNav === 'courses' || activeNav === 'degrees')}>
          {activeNav === 'dashboard' && (
            <>
              <h1 css={titleStyles}>Dashboard</h1>
              <p css={textStyles}>
                Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings.
              </p>
            </>
          )}
          {activeNav === 'students' && (
            <>
              <div css={studentHeaderStyles}>
                <div>
                  <h1 css={studentTitleStyles}>Manage Students</h1>
                  <p css={studentSubtitleStyles(darkMode)}>Add, edit, or remove student records.</p>
                </div>
                <button type="button" css={addStudentBtnStyles} onClick={openAddStudent}>
                  + Add Student
                </button>
              </div>

              <div css={studentKpiWrapStyles}>
                <div css={studentKpiCardStyles(darkMode)}>
                  <span css={studentKpiIconStyles(darkMode)}>
                    <HiOutlineUserGroup />
                  </span>
                  <div css={studentKpiTextColStyles}>
                    <p css={studentKpiLabelStyles(darkMode)}>Total Students</p>
                    <p css={studentKpiNumberStyles(darkMode)}>{studentLoading ? '...' : students.length}</p>
                  </div>
                </div>

                <div css={studentKpiGridStyles}>
                  {departmentsForSelect.length > 0
                    ? departmentsForSelect.map((d) => {
                        const count = students.filter((s) => (s.department || '') === d.name).length
                        return (
                          <div key={d.id} css={studentKpiCardStyles(darkMode)}>
                            <span css={studentKpiIconStyles(darkMode)}>
                              <HiOutlineBuildingOffice />
                            </span>
                            <div css={studentKpiTextColStyles}>
                              <p css={studentKpiLabelStyles(darkMode)}>{d.name}</p>
                              <p css={studentKpiNumberStyles(darkMode)}>{studentLoading ? '...' : count}</p>
                            </div>
                          </div>
                        )
                      })
                    : null}

                  {(() => {
                    const unassignedCount = students.filter((s) => !s.department).length
                    if (unassignedCount <= 0) return null
                    return (
                      <div css={studentKpiCardStyles(darkMode)}>
                        <span css={studentKpiIconStyles(darkMode)}>
                          <HiOutlineAcademicCap />
                        </span>
                        <div css={studentKpiTextColStyles}>
                          <p css={studentKpiLabelStyles(darkMode)}>Unassigned</p>
                          <p css={studentKpiNumberStyles(darkMode)}>{studentLoading ? '...' : unassignedCount}</p>
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>

              <div css={studentSearchStyles(darkMode)}>
                <HiOutlineMagnifyingGlass />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                />
              </div>

              <table css={deptTableStyles(darkMode)}>
                <thead>
                  <tr>
                    <th css={deptTableThStyles(darkMode)}>Student ID</th>
                    <th css={deptTableThStyles(darkMode)}>Name</th>
                    <th css={deptTableThStyles(darkMode)}>Email</th>
                    <th css={deptTableThStyles(darkMode)}>Department</th>
                    <th css={deptTableThStyles(darkMode)}>Degree</th>
                    <th css={deptTableThStyles(darkMode)}>Year</th>
                    <th css={deptTableThStyles(darkMode)}>GPA</th>
                    <th css={deptTableThStyles(darkMode)}>Points</th>
                    <th css={deptTableThStyles(darkMode)}>Attendance</th>
                    <th css={deptTableThStyles(darkMode)}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {studentLoading ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={10}>
                        Loading...
                      </td>
                    </tr>
                  ) : filteredStudents.length === 0 ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={10}>
                        No students found.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((s) => (
                      <tr key={s.id}>
                        <td css={deptTableTdStyles(darkMode)}>{s.student_id}</td>
                        <td css={deptTableTdStyles(darkMode)}>{s.full_name}</td>
                        <td css={deptTableTdStyles(darkMode)}>{s.email}</td>
                        <td css={deptTableTdStyles(darkMode)}>{s.department || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{(degrees.find((d) => d.code === s.degree)?.name) || s.degree || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{s.year || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{Number(s.gpa) || 0}</td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <span css={pointsCellStyles}>
                            <HiOutlineStar />
                            {Number(s.points) || 0}
                          </span>
                        </td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <span css={attendanceBadgeStyles(Number(s.attendance) || 0, darkMode)}>
                            {Number(s.attendance) || 0}%
                          </span>
                        </td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <div css={deptActionsStyles}>
                            <button
                              type="button"
                              css={deptActionBtnStyles(darkMode)}
                              onClick={() => openEditStudent(s)}
                              title="Edit"
                            >
                              <HiOutlinePencil />
                            </button>
                            <button
                              type="button"
                              css={deptDeleteBtnStyles(darkMode)}
                              onClick={() => deleteStudent(s.id)}
                              title="Delete"
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </>
          )}
          {activeNav === 'lecturers' && (
            <>
              <div css={studentHeaderStyles}>
                <div>
                  <h1 css={studentTitleStyles}>Lecturer Management</h1>
                  <p css={studentSubtitleStyles(darkMode)}>Manage teaching staff and teaching assignments.</p>
                </div>
                <button type="button" css={addStudentBtnStyles} onClick={openAddLecturer}>
                  + Add Lecturer
                </button>
              </div>

              <div css={studentKpiWrapStyles}>
                <div css={studentKpiCardStyles(darkMode)}>
                  <span css={studentKpiIconStyles(darkMode)}>
                    <HiOutlineUserGroup />
                  </span>
                  <div css={studentKpiTextColStyles}>
                    <p css={studentKpiLabelStyles(darkMode)}>Total Lecturers</p>
                    <p css={studentKpiNumberStyles(darkMode)}>{lecturerLoading ? '...' : lecturers.length}</p>
                  </div>
                </div>

                <div css={studentKpiGridStyles}>
                  {departmentsForSelect.length > 0
                    ? departmentsForSelect.map((d) => {
                        const count = lecturers.filter((l) => (l.department || '') === d.name).length
                        return (
                          <div key={d.id} css={studentKpiCardStyles(darkMode)}>
                            <span css={studentKpiIconStyles(darkMode)}>
                              <HiOutlineBuildingOffice />
                            </span>
                            <div css={studentKpiTextColStyles}>
                              <p css={studentKpiLabelStyles(darkMode)}>{d.name}</p>
                              <p css={studentKpiNumberStyles(darkMode)}>{lecturerLoading ? '...' : count}</p>
                            </div>
                          </div>
                        )
                      })
                    : null}

                  {/* Modules KPI intentionally omitted (courses not implemented yet) */}
                </div>
              </div>

              <div css={studentSearchStyles(darkMode)}>
                <HiOutlineMagnifyingGlass />
                <input
                  type="text"
                  placeholder="Search lecturers..."
                  value={lecturerSearch}
                  onChange={(e) => setLecturerSearch(e.target.value)}
                />
              </div>

              <table css={deptTableStyles(darkMode)}>
                <thead>
                  <tr>
                    <th css={deptTableThStyles(darkMode)}>Lecturer ID</th>
                    <th css={deptTableThStyles(darkMode)}>Name</th>
                    <th css={deptTableThStyles(darkMode)}>Email</th>
                    <th css={deptTableThStyles(darkMode)}>Department</th>
                    <th css={deptTableThStyles(darkMode)}>Modules</th>
                    <th css={deptTableThStyles(darkMode)}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lecturerLoading ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={6}>
                        Loading...
                      </td>
                    </tr>
                  ) : filteredLecturers.length === 0 ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={6}>
                        No lecturers found.
                      </td>
                    </tr>
                  ) : (
                    filteredLecturers.map((l) => (
                      <tr key={l.id}>
                        <td css={deptTableTdStyles(darkMode)}>{l.lecturer_id}</td>
                        <td css={deptTableTdStyles(darkMode)}>{l.full_name}</td>
                        <td css={deptTableTdStyles(darkMode)}>{l.email}</td>
                        <td css={deptTableTdStyles(darkMode)}>{l.department || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{Number(l.modules) || 0}</td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <div css={deptActionsStyles}>
                            <button
                              type="button"
                              css={deptActionBtnStyles(darkMode)}
                              onClick={() => openEditLecturer(l)}
                              title="Edit"
                            >
                              <HiOutlinePencil />
                            </button>
                            <button
                              type="button"
                              css={deptDeleteBtnStyles(darkMode)}
                              onClick={() => deleteLecturer(l.id)}
                              title="Delete"
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </>
          )}
          {activeNav === 'courses' && (
            <>
              <div css={studentHeaderStyles}>
                <div>
                  <h1 css={studentTitleStyles}>Course Management</h1>
                  <p css={studentSubtitleStyles(darkMode)}>Manage course catalog.</p>
                </div>
                <button type="button" css={addStudentBtnStyles} onClick={openAddCourse}>
                  + Add Course
                </button>
              </div>

              <div css={studentKpiWrapStyles}>
                <div css={studentKpiCardStyles(darkMode)}>
                  <span css={studentKpiIconStyles(darkMode)}>
                    <HiOutlineBookOpen />
                  </span>
                  <div css={studentKpiTextColStyles}>
                    <p css={studentKpiLabelStyles(darkMode)}>Total Courses</p>
                    <p css={studentKpiNumberStyles(darkMode)}>{courseLoading ? '...' : courses.length}</p>
                  </div>
                </div>

                <div css={studentKpiGridStyles}>
                  {departmentsForSelect.length > 0
                    ? departmentsForSelect.map((d) => {
                        const count = courses.filter((c) => (c.department || '') === d.name).length
                        return (
                          <div key={d.id} css={studentKpiCardStyles(darkMode)}>
                            <span css={studentKpiIconStyles(darkMode)}>
                              <HiOutlineBuildingOffice />
                            </span>
                            <div css={studentKpiTextColStyles}>
                              <p css={studentKpiLabelStyles(darkMode)}>{d.name}</p>
                              <p css={studentKpiNumberStyles(darkMode)}>{courseLoading ? '...' : count}</p>
                            </div>
                          </div>
                        )
                      })
                    : null}
                </div>
              </div>

              <div css={studentSearchStyles(darkMode)}>
                <HiOutlineMagnifyingGlass />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                />
              </div>

              <table css={deptTableStyles(darkMode)}>
                <thead>
                  <tr>
                    <th css={deptTableThStyles(darkMode)}>Course Code</th>
                    <th css={deptTableThStyles(darkMode)}>Course Name</th>
                    <th css={deptTableThStyles(darkMode)}>Department</th>
                    <th css={deptTableThStyles(darkMode)}>Lecturer</th>
                    <th css={deptTableThStyles(darkMode)}>Credits</th>
                    <th css={deptTableThStyles(darkMode)}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courseLoading ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={6}>
                        Loading...
                      </td>
                    </tr>
                  ) : filteredCourses.length === 0 ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={6}>
                        No courses found.
                      </td>
                    </tr>
                  ) : (
                    filteredCourses.map((c) => (
                      <tr key={c.id}>
                        <td css={deptTableTdStyles(darkMode)}>{c.course_code}</td>
                        <td css={deptTableTdStyles(darkMode)}>{c.course_name}</td>
                        <td css={deptTableTdStyles(darkMode)}>{c.department || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{c.lecturer_name || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <span css={creditsBadgeStyles(darkMode)}>{Number(c.credits) || 0} credits</span>
                        </td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <div css={deptActionsStyles}>
                            <button
                              type="button"
                              css={deptActionBtnStyles(darkMode)}
                              onClick={() => openEditCourse(c)}
                              title="Edit"
                            >
                              <HiOutlinePencil />
                            </button>
                            <button
                              type="button"
                              css={deptDeleteBtnStyles(darkMode)}
                              onClick={() => deleteCourse(c.id)}
                              title="Delete"
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </>
          )}

          {activeNav === 'degrees' && (
            <>
              <div css={deptHeaderStyles}>
                <div css={deptTitleBlockStyles}>
                  <h1 css={deptTitleStyles}>Degrees</h1>
                  <p css={deptSubtitleStyles(darkMode)}>Create, view, edit, and delete degrees.</p>
                </div>
                <button type="button" css={addDeptBtnStyles} onClick={openAddDegree}>
                  + Add Degree
                </button>
              </div>

              <div css={studentSearchStyles(darkMode)}>
                <HiOutlineMagnifyingGlass />
                <input
                  type="text"
                  placeholder="Search degrees..."
                  value={degreeSearch}
                  onChange={(e) => setDegreeSearch(e.target.value)}
                />
              </div>

              <table css={deptTableStyles(darkMode)}>
                <thead>
                  <tr>
                    <th css={deptTableThStyles(darkMode)}>Code</th>
                    <th css={deptTableThStyles(darkMode)}>Name</th>
                    <th css={deptTableThStyles(darkMode)}>Department</th>
                    <th css={deptTableThStyles(darkMode)}>Description</th>
                    <th css={deptTableThStyles(darkMode)}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {degreeLoading ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={5}>
                        Loading...
                      </td>
                    </tr>
                  ) : filteredDegrees.length === 0 ? (
                    <tr>
                      <td css={deptTableTdStyles(darkMode)} colSpan={5}>
                        No degrees found.
                      </td>
                    </tr>
                  ) : (
                    filteredDegrees.map((d) => (
                      <tr key={d.id}>
                        <td css={deptTableTdStyles(darkMode)}>{d.code}</td>
                        <td css={deptTableTdStyles(darkMode)}>{d.name}</td>
                        <td css={deptTableTdStyles(darkMode)}>{d.department || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>{d.description || '—'}</td>
                        <td css={deptTableTdStyles(darkMode)}>
                          <div css={deptActionsStyles}>
                            <button
                              type="button"
                              css={deptActionBtnStyles(darkMode)}
                              onClick={() => openEditDegree(d)}
                              title="Edit"
                            >
                              <HiOutlinePencil />
                            </button>
                            <button
                              type="button"
                              css={deptDeleteBtnStyles(darkMode)}
                              onClick={() => deleteDegree(d.id)}
                              title="Delete"
                            >
                              <HiOutlineTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </>
          )}

          {activeNav === 'departments' && (
            <>
              <div css={deptHeaderStyles}>
                <div css={deptTitleBlockStyles}>
                  <h1 css={deptTitleStyles}>Departments</h1>
                  <p css={deptSubtitleStyles(darkMode)}>Manage university departments.</p>
                </div>
                <button type="button" css={addDeptBtnStyles} onClick={openAddDept}>
                  + Add Department
                </button>
              </div>

              <div css={deptCardStyles(darkMode)}>
                <div css={deptCardIconStyles(darkMode)}>
                  <HiOutlineBuildingOffice />
                </div>
                <div>
                  <p css={deptCardLabelStyles(darkMode)}>Total Departments</p>
                  <p css={deptCardNumberStyles(darkMode)}>{deptLoading ? '...' : departments.length}</p>
                </div>
              </div>

              <div css={allDeptSectionStyles}>
                <div css={allDeptHeaderStyles}>
                  <h2 css={allDeptTitleStyles}>All Departments</h2>
                  <div css={deptSearchStyles(darkMode)}>
                    <HiOutlineMagnifyingGlass />
                    <input
                      type="text"
                      placeholder="Search departments..."
                      value={deptSearch}
                      onChange={(e) => setDeptSearch(e.target.value)}
                    />
                  </div>
                </div>

                <table css={deptTableStyles(darkMode)}>
                  <thead>
                    <tr>
                      <th css={deptTableThStyles(darkMode)}>Code</th>
                      <th css={deptTableThStyles(darkMode)}>Name</th>
                      <th css={deptTableThStyles(darkMode)}>Description</th>
                      <th css={deptTableThStyles(darkMode)}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deptLoading ? (
                      <tr>
                        <td css={deptTableTdStyles(darkMode)} colSpan={4}>
                          Loading...
                        </td>
                      </tr>
                    ) : filteredDepartments.length === 0 ? (
                      <tr>
                        <td css={deptTableTdStyles(darkMode)} colSpan={4}>
                          No departments found.
                        </td>
                      </tr>
                    ) : (
                      filteredDepartments.map((d) => (
                        <tr key={d.id}>
                          <td css={deptTableTdStyles(darkMode)}>{d.code}</td>
                          <td css={deptTableTdStyles(darkMode)}>{d.name}</td>
                          <td css={deptTableTdStyles(darkMode)}>{d.description || '—'}</td>
                          <td css={deptTableTdStyles(darkMode)}>
                            <div css={deptActionsStyles}>
                              <button
                                type="button"
                                css={deptActionBtnStyles(darkMode)}
                                onClick={() => openEditDept(d)}
                                title="Edit"
                              >
                                <HiOutlinePencil />
                              </button>
                              <button
                                type="button"
                                css={deptDeleteBtnStyles(darkMode)}
                                onClick={() => deleteDepartment(d.id)}
                                title="Delete"
                              >
                                <HiOutlineTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {activeNav === 'calendar' && (
            <>
              <h1 css={titleStyles}>Calendar</h1>
              <p css={textStyles}>
                This is the calendar page. View and manage academic calendar, deadlines, and events here.
              </p>
            </>
          )}
        </div>
      </main>

      {studentModalOpen && (
        <div css={modalOverlayStyles} onClick={closeStudentModal}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>
                {studentEditId ? 'Edit Student' : 'Add Student'}
              </h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeStudentModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Full Name *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. Ava Thomas"
                  value={studentForm.full_name}
                  onChange={(e) => setStudentForm((f) => ({ ...f, full_name: e.target.value }))}
                />
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Email *</label>
                <input
                  type="email"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. ava.thomas@uni.ac.uk"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              {!studentEditId && (
                <div css={modalFieldStyles}>
                  <label css={modalLabelStyles(darkMode)}>Password *</label>
                  <input
                    type="password"
                    css={modalInputStyles(darkMode)}
                    placeholder="e.g. student123"
                    value={studentForm.password}
                    onChange={(e) => setStudentForm((f) => ({ ...f, password: e.target.value }))}
                  />
                </div>
              )}
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Student ID {studentEditId ? '' : '*'}</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. STU2024008"
                  value={studentForm.student_id}
                  onChange={(e) => setStudentForm((f) => ({ ...f, student_id: e.target.value }))}
                  readOnly={!!studentEditId}
                />
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={studentForm.department}
                  onChange={(e) => setStudentForm((f) => ({ ...f, department: e.target.value }))}
                >
                  <option value="">Select department</option>
                  {departmentsForSelect.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Degree</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={studentForm.degree}
                  onChange={(e) => setStudentForm((f) => ({ ...f, degree: e.target.value }))}
                >
                  <option value="">Select degree</option>
                  {degrees.map((d) => (
                    <option key={d.id} value={d.code}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Year</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={studentForm.year}
                  onChange={(e) => setStudentForm((f) => ({ ...f, year: e.target.value }))}
                >
                  <option value="">Select year</option>
                  {YEAR_OPTIONS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={modalCancelBtnStyles(darkMode)} onClick={closeStudentModal}>
                Cancel
              </button>
              <button type="button" css={modalSubmitBtnStyles} onClick={saveStudent} disabled={studentSaving}>
                {studentSaving ? 'Saving...' : studentEditId ? 'Save Changes' : 'Add Student'}
              </button>
            </div>
          </div>
        </div>
      )}

      {lecturerModalOpen && (
        <div css={modalOverlayStyles} onClick={closeLecturerModal}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>{lecturerEditId ? 'Edit Lecturer' : 'Add Lecturer'}</h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeLecturerModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>

            <div css={modalBodyStyles}>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Full Name *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. Dr. Sarah Johnson"
                  value={lecturerForm.full_name}
                  onChange={(e) => setLecturerForm((f) => ({ ...f, full_name: e.target.value }))}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Email *</label>
                <input
                  type="email"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. sarah.johnson@uni.ac.uk"
                  value={lecturerForm.email}
                  onChange={(e) => setLecturerForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Lecturer ID {lecturerEditId ? '' : '*'}</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. LEC001"
                  value={lecturerForm.lecturer_id}
                  onChange={(e) => setLecturerForm((f) => ({ ...f, lecturer_id: e.target.value }))}
                  readOnly={!!lecturerEditId}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={lecturerForm.department}
                  onChange={(e) => setLecturerForm((f) => ({ ...f, department: e.target.value }))}
                >
                  <option value="">Select department</option>
                  {departmentsForSelect.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={modalCancelBtnStyles(darkMode)} onClick={closeLecturerModal}>
                Cancel
              </button>
              <button type="button" css={modalSubmitBtnStyles} onClick={saveLecturer} disabled={lecturerSaving}>
                {lecturerSaving ? 'Saving...' : lecturerEditId ? 'Update Lecturer' : 'Add Lecturer'}
              </button>
            </div>
          </div>
        </div>
      )}

      {courseModalOpen && (
        <div css={modalOverlayStyles} onClick={closeCourseModal}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>{courseEditId ? 'Edit Course' : 'Add Course'}</h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeCourseModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>

            <div css={modalBodyStyles}>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Course Code *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. CS201"
                  value={courseForm.course_code}
                  onChange={(e) => setCourseForm((f) => ({ ...f, course_code: e.target.value }))}
                  readOnly={!!courseEditId}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Course Name *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. Data Structures and Algorithms"
                  value={courseForm.course_name}
                  onChange={(e) => setCourseForm((f) => ({ ...f, course_name: e.target.value }))}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={courseForm.department}
                  onChange={(e) => setCourseForm((f) => ({ ...f, department: e.target.value }))}
                >
                  <option value="">Select department</option>
                  {departmentsForSelect.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Lecturer</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={courseForm.lecturer_id}
                  onChange={(e) => setCourseForm((f) => ({ ...f, lecturer_id: e.target.value }))}
                >
                  <option value="">Select lecturer</option>
                  {lecturers
                    .filter((l) => !courseForm.department || (l.department || '') === courseForm.department)
                    .map((l) => (
                      <option key={l.id} value={l.lecturer_id}>
                        {l.full_name}
                      </option>
                    ))}
                </select>
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Credits</label>
                <input
                  type="number"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. 4"
                  value={courseForm.credits}
                  onChange={(e) => setCourseForm((f) => ({ ...f, credits: Number(e.target.value) || 0 }))}
                  min={0}
                />
              </div>
            </div>

            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={modalCancelBtnStyles(darkMode)} onClick={closeCourseModal}>
                Cancel
              </button>
              <button type="button" css={modalSubmitBtnStyles} onClick={saveCourse} disabled={courseSaving}>
                {courseSaving ? 'Saving...' : courseEditId ? 'Update Course' : 'Add Course'}
              </button>
            </div>
          </div>
        </div>
      )}

      {degreeModalOpen && (
        <div css={modalOverlayStyles} onClick={closeDegreeModal}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>{degreeEditId ? 'Edit Degree' : 'Add Degree'}</h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeDegreeModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>

            <div css={modalBodyStyles}>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Code *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. CS"
                  value={degreeForm.code}
                  onChange={(e) => setDegreeForm((f) => ({ ...f, code: e.target.value }))}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Name *</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. BSc Computer Science"
                  value={degreeForm.name}
                  onChange={(e) => setDegreeForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department</label>
                <select
                  css={modalInputStyles(darkMode)}
                  value={degreeForm.department}
                  onChange={(e) => setDegreeForm((f) => ({ ...f, department: e.target.value }))}
                >
                  <option value="">Select department</option>
                  {departmentsForSelect.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Description</label>
                <textarea
                  css={modalTextareaStyles(darkMode)}
                  placeholder="Optional description"
                  value={degreeForm.description}
                  onChange={(e) => setDegreeForm((f) => ({ ...f, description: e.target.value }))}
                />
              </div>
            </div>

            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={modalCancelBtnStyles(darkMode)} onClick={closeDegreeModal}>
                Cancel
              </button>
              <button type="button" css={modalSubmitBtnStyles} onClick={saveDegree} disabled={degreeSaving}>
                {degreeSaving ? 'Saving...' : degreeEditId ? 'Update Degree' : 'Add Degree'}
              </button>
            </div>
          </div>
        </div>
      )}

      {deptModalOpen && (
        <div css={modalOverlayStyles} onClick={closeDeptModal}>
          <div css={modalStyles(darkMode)} onClick={(e) => e.stopPropagation()}>
            <div css={modalHeaderStyles(darkMode)}>
              <h3 css={modalTitleStyles(darkMode)}>
                {deptEditId ? 'Edit Department' : 'Add New Department'}
              </h3>
              <button type="button" css={modalCloseBtnStyles(darkMode)} onClick={closeDeptModal} aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div css={modalBodyStyles}>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department Name</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. Newcastle Business School"
                  value={deptForm.name}
                  onChange={(e) => setDeptForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Department Code</label>
                <input
                  type="text"
                  css={modalInputStyles(darkMode)}
                  placeholder="e.g. NBS"
                  value={deptForm.code}
                  onChange={(e) => setDeptForm((f) => ({ ...f, code: e.target.value }))}
                />
              </div>
              <div css={modalFieldStyles}>
                <label css={modalLabelStyles(darkMode)}>Description</label>
                <textarea
                  css={modalTextareaStyles(darkMode)}
                  placeholder="e.g. Part of Faculty of Society and Culture"
                  value={deptForm.description}
                  onChange={(e) => setDeptForm((f) => ({ ...f, description: e.target.value }))}
                />
              </div>
            </div>
            <div css={modalFooterStyles(darkMode)}>
              <button type="button" css={modalCancelBtnStyles(darkMode)} onClick={closeDeptModal}>
                Cancel
              </button>
              <button type="button" css={modalSubmitBtnStyles} onClick={saveDepartment} disabled={deptSaving}>
                {deptSaving ? 'Saving...' : deptEditId ? 'Update Department' : 'Add Department'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
