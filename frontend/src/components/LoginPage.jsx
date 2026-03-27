/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${dark
      ? 'radial-gradient(ellipse 80% 50% at 20% 20%, rgba(56, 189, 248, 0.12), transparent 55%)'
      : 'radial-gradient(ellipse 70% 45% at 15% 15%, rgba(59, 130, 246, 0.15), transparent 50%)'};
    pointer-events: none;
  }
`

const brandInner = css`
  position: relative;
  z-index: 1;
  max-width: 28rem;
`

const wordmark = (dark) => css`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.75rem;
  color: ${dark ? '#f8fafc' : '#0f172a'};
`

const tagline = (dark) => css`
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.55;
  color: ${dark ? 'rgba(226, 232, 240, 0.78)' : 'rgba(15, 23, 42, 0.72)'};
  max-width: 22rem;
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
        <div css={brandInner}>
          <h1 css={wordmark(darkMode)}>Strack</h1>
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
