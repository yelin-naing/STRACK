/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const motionOk = '@media (prefers-reduced-motion: no-preference)'

const loginRevealUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const loginRevealScale = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 32px, 0) scale(0.88);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`

const loginSceneEnter = keyframes`
  from {
    transform: rotate(-6deg) translate3d(36px, 44px, 0) scale(0.82);
  }
  to {
    transform: rotate(-6deg) translate3d(0, 0, 0) scale(1);
  }
`

const brandGlowPulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.52;
  }
`

const orbDrift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(10%, -8%, 0) scale(1.14);
  }
  66% {
    transform: translate3d(-9%, 11%, 0) scale(0.9);
  }
`

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const shell = (dark) => css`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const brandPanel = (dark) => css`
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 28vh;
  @media (min-width: 900px) {
    flex: 1 1 42%;
    min-height: 100vh;
    min-height: 100dvh;
  }
  background: ${dark
    ? 'linear-gradient(145deg, #0a1628 0%, #121a24 45%, #0f1419 100%)'
    : 'linear-gradient(145deg, #e8eef5 0%, #dce6f0 50%, #d4e0ed 100%)'};
  color: ${dark ? '#e8edf4' : '#0f172a'};
  &::before {
    content: '';
    position: absolute;
    width: min(56rem, 175%);
    height: min(56rem, 175%);
    right: -28%;
    bottom: -38%;
    border-radius: 50%;
    background: ${dark
      ? 'radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(56, 189, 248, 0.08) 42%, transparent 68%)'
      : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(59, 130, 246, 0.1) 45%, transparent 70%)'};
    pointer-events: none;
    z-index: 0;
    ${motionOk} {
      animation: ${orbDrift} 22s ease-in-out infinite;
    }
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${dark
      ? 'radial-gradient(ellipse 80% 50% at 20% 20%, rgba(56, 189, 248, 0.12), transparent 55%)'
      : 'radial-gradient(ellipse 70% 45% at 15% 15%, rgba(59, 130, 246, 0.15), transparent 50%)'};
    pointer-events: none;
    z-index: 0;
    ${motionOk} {
      animation: ${brandGlowPulse} 8s ease-in-out infinite;
    }
  }
`

const brandInner = css`
  position: relative;
  z-index: 2;
  max-width: 28rem;
`

const activityScene = (dark) => css`
  position: absolute;
  right: clamp(-6rem, -14vw, -1rem);
  bottom: clamp(-5rem, -12vw, -1.5rem);
  width: min(34rem, 88vw);
  aspect-ratio: 1 / 0.9;
  z-index: 1;
  opacity: ${dark ? 0.78 : 0.7};
  pointer-events: none;
  transform: rotate(-6deg);
  @media (min-width: 900px) {
    right: clamp(0.5rem, 3vw, 3.5rem);
    bottom: clamp(1.5rem, 7vh, 5.5rem);
    width: min(42rem, 52vw);
    opacity: 0.95;
  }
  ${motionOk} {
    animation: ${loginSceneEnter} 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    * {
      animation: none !important;
    }
  }
`

const sceneTrack = (dark) => css`
  position: absolute;
  inset: 10% 4% 16% 10%;
  border-radius: 8px;
  border: 1px solid ${dark ? 'rgba(148, 163, 184, 0.16)' : 'rgba(37, 99, 235, 0.13)'};
  background:
    linear-gradient(${dark ? 'rgba(148, 163, 184, 0.08)' : 'rgba(37, 99, 235, 0.08)'} 1px, transparent 1px),
    linear-gradient(90deg, ${dark ? 'rgba(148, 163, 184, 0.08)' : 'rgba(37, 99, 235, 0.08)'} 1px, transparent 1px);
  background-size: 48px 48px;
  box-shadow: inset 0 1px 0 ${dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)'};
  ${motionOk} {
    animation: strack-grid-drift 26s linear infinite;
  }
  @keyframes strack-grid-drift {
    from {
      background-position: 0 0, 0 0;
    }
    to {
      background-position: 144px 72px, -96px 52px;
    }
  }
`

const scenePanel = (dark, index) => css`
  position: absolute;
  left: ${index === 0 ? '0' : index === 1 ? '46%' : '17%'};
  top: ${index === 0 ? '18%' : index === 1 ? '8%' : '58%'};
  width: ${index === 1 ? '12.5rem' : '14rem'};
  border-radius: 8px;
  padding: 0.8rem;
  background: ${dark ? 'rgba(15, 23, 42, 0.76)' : 'rgba(255, 255, 255, 0.78)'};
  border: 1px solid ${dark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(37, 99, 235, 0.13)'};
  box-shadow: ${dark ? '0 18px 36px rgba(0, 0, 0, 0.32)' : '0 18px 36px rgba(37, 99, 235, 0.13)'};
  backdrop-filter: blur(14px);
  animation: strack-panel-float-${index} ${index === 1 ? '7.8s' : '8.6s'}
    cubic-bezier(0.42, 0, 0.2, 1) infinite;
  animation-delay: ${index * -1.55}s;
  @media (max-width: 520px) {
    width: ${index === 1 ? '10.5rem' : '11.5rem'};
  }
  @keyframes strack-panel-float-0 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(0.95rem, -1.35rem, 0);
    }
  }
  @keyframes strack-panel-float-1 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-1.1rem, 1.1rem, 0);
    }
  }
  @keyframes strack-panel-float-2 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(1.15rem, 0.95rem, 0);
    }
  }
`

const panelTopline = (dark) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
  color: ${dark ? '#e2e8f0' : '#1e293b'};
  font-size: 0.78rem;
  font-weight: 700;
`

const panelBadge = (dark) => css`
  border-radius: 999px;
  padding: 0.16rem 0.45rem;
  color: ${dark ? '#bfdbfe' : '#1d4ed8'};
  background: ${dark ? 'rgba(37, 99, 235, 0.18)' : 'rgba(37, 99, 235, 0.1)'};
  font-size: 0.68rem;
  font-weight: 700;
`

const metricValue = (dark) => css`
  margin: 0 0 0.55rem;
  color: ${dark ? '#f8fafc' : '#0f172a'};
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
`

const progressBar = (dark, delay = '0s') => css`
  height: 0.45rem;
  border-radius: 999px;
  overflow: hidden;
  background: ${dark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(148, 163, 184, 0.22)'};
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 76%;
    border-radius: inherit;
    background: linear-gradient(90deg, #7c3aed, #38bdf8, #22c55e);
    transform-origin: left;
    animation: strack-progress 4.2s cubic-bezier(0.45, 0, 0.35, 1) infinite;
    animation-delay: ${delay};
  }
  @keyframes strack-progress {
    0%, 100% {
      transform: scaleX(0.38);
    }
    45%, 70% {
      transform: scaleX(1);
    }
  }
`

const miniBars = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: end;
  gap: 0.32rem;
  height: 3.1rem;
`

const miniBar = (dark, index) => css`
  height: ${[42, 66, 50, 78, 58, 86, 70][index]}%;
  min-height: 0.45rem;
  border-radius: 6px 6px 2px 2px;
  background: ${index % 3 === 0
    ? 'linear-gradient(180deg, #38bdf8, #2563eb)'
    : index % 3 === 1
      ? 'linear-gradient(180deg, #a78bfa, #7c3aed)'
      : 'linear-gradient(180deg, #34d399, #059669)'};
  opacity: ${dark ? 0.9 : 0.82};
  animation: strack-bar-rise 3.2s cubic-bezier(0.45, 0, 0.35, 1) infinite;
  animation-delay: ${index * -0.18}s;
  @keyframes strack-bar-rise {
    0%, 100% {
      transform: scaleY(0.55);
    }
    45% {
      transform: scaleY(1);
    }
  }
`

const timeline = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const timelineRow = (dark, index) => css`
  display: grid;
  grid-template-columns: 0.55rem 1fr;
  align-items: center;
  gap: 0.45rem;
  &::before {
    content: '';
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 3px;
    background: ${index === 0 ? '#38bdf8' : index === 1 ? '#a78bfa' : '#34d399'};
    box-shadow: 0 0 0 4px ${dark ? 'rgba(96, 165, 250, 0.12)' : 'rgba(37, 99, 235, 0.1)'};
    animation: strack-tick 3.4s cubic-bezier(0.45, 0, 0.35, 1) infinite;
    animation-delay: ${index * -0.42}s;
  }
  span {
    height: 0.48rem;
    border-radius: 999px;
    background: ${dark ? 'rgba(226, 232, 240, 0.22)' : 'rgba(30, 41, 59, 0.18)'};
    overflow: hidden;
  }
  span::after {
    content: '';
    display: block;
    width: ${[72, 58, 86][index]}%;
    height: 100%;
    border-radius: inherit;
    background: ${dark ? 'rgba(226, 232, 240, 0.42)' : 'rgba(37, 99, 235, 0.36)'};
  }
  @keyframes strack-tick {
    0%, 100% {
      transform: scale(0.82);
    }
    45% {
      transform: scale(1.35);
    }
  }
`

const wordmark = (dark) => css`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${dark ? '#f8fafc' : '#0f172a'};
  ${motionOk} {
    animation: ${loginRevealUp} 0.82s cubic-bezier(0.22, 1, 0.36, 1) 0.06s both;
  }
`

const tagline = (dark) => css`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${dark ? 'rgba(226, 232, 240, 0.78)' : 'rgba(15, 23, 42, 0.72)'};
  max-width: 22rem;
  ${motionOk} {
    animation: ${loginRevealUp} 0.88s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
  }
`

const formPanel = (dark) => css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2rem);
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  background: ${dark ? '#0f0f0f' : '#f4f4f5'};
`

const card = (dark) => css`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: ${dark ? '#1c1c1e' : '#ffffff'};
  box-shadow: ${dark
    ? '0 24px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255,255,255,0.06)'
    : '0 20px 40px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)'};
  ${motionOk} {
    animation: ${loginRevealScale} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
  }
`

const cardTitle = (dark) => css`
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${dark ? '#fafafa' : '#111827'};
  margin-bottom: 0.35rem;
`

const cardSubtitle = (dark) => css`
  font-size: 0.9rem;
  color: ${dark ? '#a1a1aa' : '#64748b'};
  margin-bottom: 1.5rem;
`

const formGrid = css`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`

const label = (dark) => css`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${dark ? '#e4e4e7' : '#374151'};
  margin-bottom: 0.4rem;
`

const inputBase = (dark) => css`
  width: 100%;
  min-height: 48px;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  border: 1px solid ${dark ? '#3f3f46' : '#e4e4e7'};
  background: ${dark ? '#141416' : '#fafafa'};
  color: ${dark ? '#fafafa' : '#18181b'};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  &::placeholder {
    color: ${dark ? '#71717a' : '#a1a1aa'};
  }
  &:focus {
    outline: none;
    border-color: ${dark ? '#60a5fa' : '#2563eb'};
    box-shadow: 0 0 0 3px ${dark ? 'rgba(96, 165, 250, 0.2)' : 'rgba(37, 99, 235, 0.15)'};
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

const passwordWrap = css`
  position: relative;
  display: flex;
  align-items: center;
`

const passwordInput = (dark) => css`
  ${inputBase(dark)};
  padding-right: 2.75rem;
`

const eyeBtn = (dark) => css`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${dark ? '#a1a1aa' : '#64748b'};
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${dark ? '#e4e4e7' : '#0f172a'};
    background: ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'};
  }
`

const errorBox = (dark) => css`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${dark ? '#fca5a5' : '#b91c1c'};
  background: ${dark ? 'rgba(127, 29, 29, 0.25)' : '#fef2f2'};
  border: 1px solid ${dark ? 'rgba(248, 113, 113, 0.35)' : '#fecaca'};
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
`

const submitBtn = css`
  width: 100%;
  min-height: 48px;
  margin-top: 0.25rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #18181b 0%, #09090b 100%);
  color: #fafafa;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.12s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

const themeBtn = (dark) => css`
  position: absolute;
  top: max(0.75rem, env(safe-area-inset-top));
  right: max(0.75rem, env(safe-area-inset-right));
  z-index: 2;
  border: 1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.12)'};
  background: ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)'};
  color: ${dark ? '#e4e4e7' : '#334155'};
  width: 44px;
  height: 44px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
  &:hover {
    background: ${dark ? 'rgba(255,255,255,0.1)' : '#fff'};
  }
`

const spinner = css`
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid rgba(250, 250, 250, 0.25);
  border-top-color: #fafafa;
  border-radius: 50%;
  animation: strack-spin 0.65s linear infinite;
  @keyframes strack-spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
)

function parseLoginError(parseFailed) {
  if (parseFailed) {
    return {
      message:
        'The server did not return JSON. Open the site at …/strack/ and ensure backend/login.php is deployed.',
    }
  }
  return { message: null }
}

function LoginPage({ darkMode, onToggleDarkMode }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Enter your university email address.')
      return
    }
    if (!password) {
      setError('Enter your password.')
      return
    }

    setLoading(true)
    const loginUrl = `${apiBase}/backend/login.php`

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      })

      const text = await response.text()
      let data
      let parseFailed = false
      try {
        data = JSON.parse(text)
      } catch {
        parseFailed = true
        data = {}
      }

      const parsed = parseLoginError(parseFailed)
      if (parsed.message) {
        setError(parsed.message)
        return
      }

      if (data.success) {
        const user = data.user || {}
        const role = user.role || 'student'
        const path = role === 'admin' ? '/admin' : role === 'teacher' ? '/lecturer' : '/dashboard'
        try {
          localStorage.setItem('strack_user', JSON.stringify(user))
        } catch (_) {}
        navigate(path, { replace: true })
        return
      }

      setError(data.message || 'Invalid email or password.')
    } catch {
      setError(
        `Cannot reach ${loginUrl}. On NUWebSpace use your full /strack/ URL; locally run PHP and the Vite dev server with the proxy enabled.`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div css={shell(darkMode)}>
      <button
        type="button"
        css={themeBtn(darkMode)}
        onClick={onToggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>

      <section css={brandPanel(darkMode)} aria-hidden="false">
        <div css={activityScene(darkMode)} aria-hidden="true">
          <div css={sceneTrack(darkMode)} />

          <div css={scenePanel(darkMode, 0)}>
            <div css={panelTopline(darkMode)}>
              <span>Attendance</span>
              <span css={panelBadge(darkMode)}>Live</span>
            </div>
            <p css={metricValue(darkMode)}>92%</p>
            <div css={progressBar(darkMode)} />
          </div>

          <div css={scenePanel(darkMode, 1)}>
            <div css={panelTopline(darkMode)}>
              <span>Points</span>
              <span css={panelBadge(darkMode)}>+18</span>
            </div>
            <div css={miniBars}>
              {[0, 1, 2, 3, 4, 5, 6].map((bar) => (
                <span key={bar} css={miniBar(darkMode, bar)} />
              ))}
            </div>
          </div>

          <div css={scenePanel(darkMode, 2)}>
            <div css={panelTopline(darkMode)}>
              <span>Modules</span>
              <span css={panelBadge(darkMode)}>Now</span>
            </div>
            <div css={timeline}>
              {[0, 1, 2].map((row) => (
                <div key={row} css={timelineRow(darkMode, row)}>
                  <span />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div css={brandInner}>
          <h1 css={wordmark(darkMode)}>STRACK</h1>
          <p css={tagline(darkMode)}>
            Sign in to track attendance, engagement, and performance in one place.
          </p>
        </div>
      </section>

      <section css={formPanel(darkMode)}>
        <div css={card(darkMode)}>
          <h2 css={cardTitle(darkMode)}>Sign in</h2>
          <p css={cardSubtitle(darkMode)}>Use the email and password from your administrator or module leader.</p>

          <form css={formGrid} onSubmit={handleSubmit} noValidate>
            <div>
              <label css={label(darkMode)} htmlFor="strack-email">
                Email
              </label>
              <input
                id="strack-email"
                css={inputBase(darkMode)}
                type="email"
                autoComplete="username"
                inputMode="email"
                placeholder="you@uni.ac.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label css={label(darkMode)} htmlFor="strack-password">
                Password
              </label>
              <div css={passwordWrap}>
                <input
                  id="strack-password"
                  css={passwordInput(darkMode)}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="button"
                  css={eyeBtn(darkMode)}
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {error ? (
              <div role="alert" css={errorBox(darkMode)}>
                {error}
              </div>
            ) : null}

            <button type="submit" css={submitBtn} disabled={loading}>
              {loading ? (
                <>
                  <span css={spinner} aria-hidden />
                  Signing in…
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
