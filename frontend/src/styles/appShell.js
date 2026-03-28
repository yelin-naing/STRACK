/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const themeTransition = '0.35s ease'

export const appLayoutStyles = (darkMode) => css`
  position: relative;
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

export const appSidebarStyles = (darkMode, mobileOpen) => css`
  background-color: ${darkMode ? '#1a1a1a' : '#FFFFFF'};
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${darkMode ? 'none' : '0 2px 12px rgba(0,0,0,0.06)'};
  transition:
    background-color ${themeTransition},
    box-shadow ${themeTransition},
    transform 0.25s ease;

  @media (max-width: 767.98px) {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(88vw, 280px);
    height: 100dvh;
    max-height: 100dvh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transform: translateX(${mobileOpen ? '0' : '-100%'});
    box-shadow: ${darkMode ? '4px 0 28px rgba(0,0,0,0.5)' : '4px 0 28px rgba(0,0,0,0.12)'};
  }

  @media (min-width: 768px) {
    position: relative;
    width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
    transform: none;
    box-shadow: ${darkMode ? 'none' : '0 2px 12px rgba(0,0,0,0.06)'};
  }
`

export const appMobileBackdrop = (darkMode) => css`
  display: none;
  @media (max-width: 767.98px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 40;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background: ${darkMode ? 'rgba(0,0,0,0.55)' : 'rgba(15,23,42,0.35)'};
  }
`

export const appMainColumn = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`

export const appMobileTopBar = (darkMode) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.65rem;
  padding-top: max(0.45rem, env(safe-area-inset-top));
  border-bottom: 1px solid ${darkMode ? '#374151' : '#e5e7eb'};
  background: ${darkMode ? '#1a1a1a' : '#ffffff'};
  position: sticky;
  top: 0;
  z-index: 30;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: none;
  }
`

export const appMobileMenuBtn = (darkMode) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: ${darkMode ? '#e5e7eb' : '#1a1a1a'};
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background: ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'};
  }
  svg {
    width: 26px;
    height: 26px;
  }
`

export const appMobileTopBarTitle = (darkMode) => css`
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${darkMode ? '#ffffff' : '#111827'};
  min-width: 0;
`

export const appSidebarCloseBtn = (darkMode) => css`
  display: none;
  @media (max-width: 767.98px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: ${darkMode ? '#e5e7eb' : '#1a1a1a'};
    cursor: pointer;
    flex-shrink: 0;
    margin-left: 0.15rem;
    &:hover {
      background: ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'};
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`

export const appMainStyles = (darkMode) => css`
  flex: 1;
  min-height: 0;
  min-width: 0;
  padding: 0.65rem max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(0.75rem, env(safe-area-inset-left));
  color: ${darkMode ? '#f3f4f6' : '#1a1a1a'};
  overflow-y: auto;
  overflow-x: hidden;
  transition: color ${themeTransition};

  @media (min-width: 768px) {
    padding: max(1rem, env(safe-area-inset-top)) 2rem 2rem 2rem;
  }
`
