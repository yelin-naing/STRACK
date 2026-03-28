/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const profilePageWrap = (darkMode) => css`
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${darkMode ? '#f3f4f6' : '#111827'};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`

export const profilePageHeader = css`
  margin: 0 0 0.25rem;
  padding: 0 0.1rem;
`

export const profilePageTitle = (darkMode) => css`
  font-size: clamp(1.5rem, 3.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.45rem;
  color: ${darkMode ? '#f9fafb' : '#111827'};
`

export const profilePageSubtitle = (darkMode) => css`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  max-width: 36rem;
`

export const profileTopCard = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#ffffff'};
  border: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
  border-radius: 16px;
  padding: 1.35rem 1.25rem;
  margin: 0;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)'};
`

export const profileTopRow = css`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem 1.25rem;
`

export const profileHeadBlock = css`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  flex: 1;
`

export const profileTextCol = css`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  flex: 1;
`

export const profileHeroAvatar = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
  @media (min-width: 480px) {
    width: 96px;
    height: 96px;
    font-size: 2rem;
  }
`

export const profileTitleName = css`
  font-size: clamp(1.25rem, 2.8vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
`

export const profileMetaLine = (darkMode) => css`
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  font-size: 0.875rem;
  line-height: 1.45;
`

export const profileBadgeRow = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.35rem;
`

export const profileBadgeAccent = css`
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: rgba(99, 102, 241, 0.12);
  color: #6366f1;
  border: 1px solid rgba(99, 102, 241, 0.28);
`

export const profileBadgeMuted = (darkMode) => css`
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${darkMode ? 'rgba(255,255,255,0.06)' : '#f3f4f6'};
  color: ${darkMode ? '#d1d5db' : '#4b5563'};
  border: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
`

export const editProfileBtn = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  background: #6366f1;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.15s ease;
  white-space: nowrap;
  flex-shrink: 0;
  svg {
    width: 17px;
    height: 17px;
  }
  &:hover {
    filter: brightness(1.05);
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`

export const kpiGrid = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
`

/** Three KPI tiles (e.g. lecturer profile: courses, students, hours) */
export const kpiGridThree = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
`

export const kpiCard = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#ffffff'};
  border: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
  border-radius: 14px;
  padding: 1rem 0.95rem 0.85rem;
  color: ${darkMode ? '#f3f4f6' : '#111827'};
  box-shadow: ${darkMode ? 'none' : '0 1px 2px rgba(15, 23, 42, 0.04)'};
`

export const kpiLabelRow = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.45rem;
  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    color: #9ca3af;
  }
`

export const kpiLabel = css`
  font-size: 0.68rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
  line-height: 1.2;
`

export const kpiValue = css`
  font-size: 1.45rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 0.2rem;
  letter-spacing: -0.02em;
  color: inherit;
  @media (min-width: 480px) {
    font-size: 1.65rem;
  }
`

export const kpiSub = (darkMode) => css`
  font-size: 0.78rem;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  line-height: 1.3;
`

export const personalCard = (darkMode) => css`
  background: ${darkMode ? '#171717' : '#ffffff'};
  border: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
  border-radius: 16px;
  padding: 1.35rem 1.4rem 1.5rem;
  margin: 0;
  box-shadow: ${darkMode ? 'none' : '0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 28px rgba(15, 23, 42, 0.06)'};
`

export const personalTitle = (darkMode) => css`
  font-size: 0.98rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
  padding: 0 0 0.65rem;
  border-bottom: 1px solid ${darkMode ? '#374151' : 'rgba(107, 114, 128, 0.28)'};
`

export const personalGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
  }
`

export const personalField = css`
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
`

export const personalFieldBio = css`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`

export const personalFieldAddress = css`
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`

export const personalLabel = css`
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
`

export const personalValue = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  background: ${darkMode ? '#111827' : '#fafafa'};
  border-radius: 10px;
  min-height: 44px;
  padding: 0.55rem 0.85rem;
  font-size: 0.9rem;
  line-height: 1.45;
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
`

export const personalValueIcon = css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 0.12rem;
  color: #9ca3af;
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const personalValueText = css`
  flex: 1;
  min-width: 0;
  word-break: break-word;
`

export const personalInput = (darkMode) => css`
  border: 1px solid ${darkMode ? '#4b5563' : '#d1d5db'};
  background: ${darkMode ? '#111827' : '#ffffff'};
  color: ${darkMode ? '#f3f4f6' : '#111827'};
  border-radius: 10px;
  min-height: 42px;
  padding: 0.55rem 0.85rem;
  font-size: 0.9rem;
  width: 100%;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
  }
`

export const personalInputReadonly = (darkMode) => css`
  ${personalInput(darkMode)};
  background: ${darkMode ? '#1f2937' : '#f3f4f6'};
  color: ${darkMode ? '#9ca3af' : '#4b5563'};
  cursor: default;
  &:focus {
    border-color: ${darkMode ? '#4b5563' : '#d1d5db'};
    box-shadow: none;
  }
`

export const personalTextArea = (darkMode) => css`
  ${personalInput(darkMode)};
  min-height: 88px;
  line-height: 1.45;
  resize: vertical;
`

export const editActions = (darkMode) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.9rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${darkMode ? '#374151' : 'rgba(107, 114, 128, 0.22)'};
`

export const actionBtn = (primary) => css`
  border: 1px solid ${primary ? '#6366f1' : '#d1d5db'};
  background: ${primary ? '#6366f1' : '#ffffff'};
  color: ${primary ? '#ffffff' : '#374151'};
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
`

export const profileError = (darkMode) => css`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${darkMode ? 'rgba(248, 113, 113, 0.12)' : 'rgba(185, 28, 28, 0.08)'};
  border: 1px solid ${darkMode ? 'rgba(248, 113, 113, 0.25)' : 'rgba(185, 28, 28, 0.2)'};
  color: ${darkMode ? '#fca5a5' : '#b91c1c'};
  font-size: 0.8rem;
  line-height: 1.4;
`

export const profileSuccess = (darkMode) => css`
  margin-top: 0.65rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  background: ${darkMode ? 'rgba(34, 197, 94, 0.14)' : 'rgba(22, 163, 74, 0.1)'};
  border: 1px solid ${darkMode ? 'rgba(74, 222, 128, 0.3)' : 'rgba(22, 163, 74, 0.25)'};
  color: ${darkMode ? '#86efac' : '#166534'};
  font-size: 0.8rem;
  line-height: 1.4;
`

export const passwordChangeForm = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
`

export const passwordSubmitRow = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 0.15rem;
`

export const passwordInputWrap = css`
  position: relative;
  width: 100%;
`

export const passwordToggleBtn = (darkMode) => css`
  position: absolute;
  right: 0.35rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${darkMode ? '#9ca3af' : '#6b7280'};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
    color: ${darkMode ? '#e5e7eb' : '#374151'};
  }
  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
  svg {
    width: 1.15rem;
    height: 1.15rem;
    display: block;
  }
`
