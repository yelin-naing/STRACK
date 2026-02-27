/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'

const pageStyles = (darkMode) => css`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: ${darkMode ? '#1a1a1a' : '#F8F8F8'};
  padding: max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left));
  transition: background-color 0.3s ease;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const contentStyles = (darkMode) => css`
  max-width: 800px;
  margin: 0 auto;
  color: ${darkMode ? '#e0e0e0' : '#1a1a1a'};
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

const buttonStyles = css`
  padding: 0.625rem 1rem;
  min-height: 44px;
  min-width: 88px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.98);
  }
`

function AdminDashboard({ darkMode }) {
  const navigate = useNavigate()

  return (
    <div css={pageStyles(darkMode)}>
      <div css={contentStyles(darkMode)}>
        <h1 css={titleStyles}>Admin Dashboard</h1>
        <p css={textStyles}>
          Welcome to the admin portal. Here you can manage users, lecturers, students, and system settings.
        </p>
        <button css={buttonStyles} onClick={() => navigate('/')}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default AdminDashboard
