import { useState, useEffect, useCallback } from 'react'

const DESKTOP_MQ = '(min-width: 768px)'
const MOBILE_MQ = '(max-width: 767.98px)'

export function useMobileDrawer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ)
    const onChange = () => {
      if (mq.matches) setMobileMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    if (mobileMenuOpen && mq.matches) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileMenuOpen])

  return { mobileMenuOpen, setMobileMenuOpen, closeMenu }
}
