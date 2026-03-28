/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2'
import {
  personalCard,
  personalTitle,
  personalField,
  personalLabel,
  personalInput,
  actionBtn,
  profileError,
  profileSuccess,
  passwordChangeForm,
  passwordSubmitRow,
  passwordInputWrap,
  passwordToggleBtn,
} from '../styles/profilePageStyles'

const apiBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const SUCCESS_MSG = 'Password updated successfully'

export default function ProfilePasswordChange({ darkMode, userEmail }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [saving, setSaving] = useState(false)

  const resetFields = () => {
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setSuccess(false)
    const email = (userEmail || '').trim()
    if (!email) {
      setMessage('Email is missing. Please sign in again.')
      return
    }
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirmation do not match.')
      return
    }
    if (newPassword.length < 6) {
      setMessage('New password must be at least 6 characters.')
      return
    }
    if (newPassword === currentPassword) {
      setMessage('New password must be different from your current password.')
      return
    }

    setSaving(true)
    try {
      const res = await fetch(`${apiBase}/backend/change_password.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          current_password: currentPassword,
          new_password: newPassword,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        setSuccess(true)
        setMessage(SUCCESS_MSG)
        resetFields()
      } else {
        setMessage(data.message || 'Could not update password.')
      }
    } catch {
      setMessage('Network error. Check your connection and try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section css={personalCard(darkMode)} aria-labelledby="password-change-heading">
      <h2 id="password-change-heading" css={personalTitle(darkMode)}>
        Change password
      </h2>
      <p
        css={css`
          margin: -0.35rem 0 0.75rem;
          font-size: 0.85rem;
          line-height: 1.45;
          color: ${darkMode ? '#9ca3af' : '#6b7280'};
        `}
      >
        Use a strong password you do not use elsewhere.
      </p>
      <form css={passwordChangeForm} onSubmit={handleSubmit} noValidate>
        <div css={personalField}>
          <label css={personalLabel} htmlFor="pwd-current">
            Current password
          </label>
          <div css={passwordInputWrap}>
            <input
              id="pwd-current"
              type={showCurrent ? 'text' : 'password'}
              autoComplete="current-password"
              css={css`
                ${personalInput(darkMode)};
                padding-right: 2.75rem;
              `}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              type="button"
              css={passwordToggleBtn(darkMode)}
              onClick={() => setShowCurrent((v) => !v)}
              aria-label={showCurrent ? 'Hide current password' : 'Show current password'}
              aria-pressed={showCurrent}
            >
              {showCurrent ? <HiOutlineEyeSlash aria-hidden /> : <HiOutlineEye aria-hidden />}
            </button>
          </div>
        </div>
        <div css={personalField}>
          <label css={personalLabel} htmlFor="pwd-new">
            New password
          </label>
          <div css={passwordInputWrap}>
            <input
              id="pwd-new"
              type={showNew ? 'text' : 'password'}
              autoComplete="new-password"
              css={css`
                ${personalInput(darkMode)};
                padding-right: 2.75rem;
              `}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              css={passwordToggleBtn(darkMode)}
              onClick={() => setShowNew((v) => !v)}
              aria-label={showNew ? 'Hide new password' : 'Show new password'}
              aria-pressed={showNew}
            >
              {showNew ? <HiOutlineEyeSlash aria-hidden /> : <HiOutlineEye aria-hidden />}
            </button>
          </div>
        </div>
        <div css={personalField}>
          <label css={personalLabel} htmlFor="pwd-confirm">
            Confirm new password
          </label>
          <div css={passwordInputWrap}>
            <input
              id="pwd-confirm"
              type={showConfirm ? 'text' : 'password'}
              autoComplete="new-password"
              css={css`
                ${personalInput(darkMode)};
                padding-right: 2.75rem;
              `}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              css={passwordToggleBtn(darkMode)}
              onClick={() => setShowConfirm((v) => !v)}
              aria-label={showConfirm ? 'Hide password confirmation' : 'Show password confirmation'}
              aria-pressed={showConfirm}
            >
              {showConfirm ? <HiOutlineEyeSlash aria-hidden /> : <HiOutlineEye aria-hidden />}
            </button>
          </div>
        </div>
        <div css={passwordSubmitRow}>
          <button
            type="submit"
            disabled={saving}
            css={css`
              ${actionBtn(true)};
              &:disabled {
                opacity: 0.75;
                cursor: not-allowed;
              }
            `}
          >
            {saving ? 'Updating…' : 'Update password'}
          </button>
        </div>
        {message ? (
          <div css={success ? profileSuccess(darkMode) : profileError(darkMode)} role="status">
            {message}
          </div>
        ) : null}
      </form>
    </section>
  )
}
