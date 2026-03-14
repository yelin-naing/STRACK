/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

const BASE = '/strack'

const pageStyles = (darkMode) => css`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${darkMode ? '#1a1a1a' : '#F8F8F8'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  transition: background-color 0.3s ease;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const themeToggleStyles = (darkMode) => css`
  position: absolute;
  top: max(1rem, env(safe-area-inset-top));
  right: max(1rem, env(safe-area-inset-right));
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
  transition: color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

const cardStyles = (darkMode) => css`
  background-color: ${darkMode ? '#2d2d2d' : '#FFFFFF'};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, ${darkMode ? 0.4 : 0.08});
  padding: 1.5rem 1.25rem;
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 480px) {
    padding: 2rem 1.5rem;
    margin-top: 2.5rem;
    border-radius: 15px;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
    margin-top: 3rem;
  }
`

const headerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 480px) {
    margin-bottom: 2rem;
  }
`

const iconWrapperStyles = (darkMode) => css`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  svg {
    width: 28px;
    height: 28px;
    stroke: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
  }

  @media (min-width: 480px) {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`

const titleStyles = (darkMode) => css`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${darkMode ? '#ffffff' : '#1a1a1a'};
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`

const subtitleStyles = (darkMode) => css`
  font-size: 0.85rem;
  color: ${darkMode ? '#a0a0a0' : '#666666'};
  font-weight: 400;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`

const formStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 480px) {
    gap: 1.5rem;
  }
`

const inputGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const labelStyles = (darkMode) => css`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`

const inputWrapperStyles = css`
  position: relative;
  display: flex;
  align-items: center;
`

const inputStyles = (darkMode) => css`
  padding: 0.75rem 1rem;
  min-height: 48px;
  width: 100%;
  border: 1px solid ${darkMode ? '#404040' : '#e0e0e0'};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: ${darkMode ? '#1a1a1a' : '#FFFFFF'};
  color: ${darkMode ? '#ffffff' : '#1a1a1a'};
  transition: border-color 0.2s ease, background-color 0.3s ease;

  &::placeholder {
    color: ${darkMode ? '#606060' : '#999999'};
  }

  &:focus {
    outline: none;
    border-color: ${darkMode ? '#6b6b6b' : '#1a1a1a'};
  }
`

const passwordInputStyles = (darkMode) => css`
  ${inputStyles(darkMode)};
  padding-right: 3rem;
`

const passwordToggleStyles = (darkMode) => css`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${darkMode ? '#a0a0a0' : '#666666'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
  }
`

const submitButtonStyles = css`
  padding: 0.875rem 1.5rem;
  min-height: 48px;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #333333;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const errorStyles = css`
  color: #c0392b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
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

function LoginPage({ darkMode, onToggleDarkMode }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email.')
      return
    }
    if (!password) {
      setError('Please enter your password.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${BASE}/backend/login.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), password }),
      })

      const text = await response.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        setError('Server error. Check that setup_accounts.php was run.')
        return
      }

      if (data.success) {
        const user = data.user || {}
        const role = user.role || 'student'
        const path = role === 'admin' ? '/admin' : role === 'teacher' ? '/lecturer' : '/dashboard'
        try {
          localStorage.setItem('strack_user', JSON.stringify(user))
        } catch (_) {}
        window.location.href = `${BASE}${path}`
      } else {
        setError(data.message || 'Invalid email or password.')
      }
    } catch (err) {
      setError('Unable to connect. Check the backend URL and run setup_accounts.php.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div css={pageStyles(darkMode)}>
      <button
        css={themeToggleStyles(darkMode)}
        onClick={onToggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>

      <div css={cardStyles(darkMode)}>
        <header css={headerStyles}>
          <div css={iconWrapperStyles(darkMode)}>
            <EnvelopeIcon />
          </div>
          <h1 css={titleStyles(darkMode)}>Welcome Back</h1>
          <p css={subtitleStyles(darkMode)}>Sign in to your account to continue</p>
        </header>

        <form css={formStyles} onSubmit={handleSubmit}>
          <div css={inputGroupStyles}>
            <label css={labelStyles(darkMode)} htmlFor="email">
              Email
            </label>
            <input
              css={inputStyles(darkMode)}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              disabled={loading}
            />
          </div>

          <div css={inputGroupStyles}>
            <label css={labelStyles(darkMode)} htmlFor="password">
              Password
            </label>
            <div css={inputWrapperStyles}>
              <input
                css={passwordInputStyles(darkMode)}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
              />
              <button
                type="button"
                css={passwordToggleStyles(darkMode)}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {error && <p css={errorStyles}>{error}</p>}

          <button type="submit" css={submitButtonStyles} disabled={loading}>
            {loading ? 'Signing in...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
