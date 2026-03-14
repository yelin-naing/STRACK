import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import LecturerDashboard from './components/LecturerDashboard'
import AdminDashboard from './components/AdminDashboard'

const BASE = '/strack'
const DARK_KEY = 'strack_dark'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem(DARK_KEY) === 'true'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(DARK_KEY, String(darkMode))
      document.documentElement.classList.toggle('dark', darkMode)
    } catch (_) {}
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              darkMode={darkMode}
              onToggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />} />
        <Route path="/lecturer" element={<LecturerDashboard darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />} />
        <Route path="/admin" element={<AdminDashboard darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
