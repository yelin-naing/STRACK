import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import LecturerDashboard from './components/LecturerDashboard'
import AdminDashboard from './components/AdminDashboard'

const BASE = '/strack'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              darkMode={darkMode}
              onToggleDarkMode={() => setDarkMode(!darkMode)}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />} />
        <Route path="/lecturer" element={<LecturerDashboard darkMode={darkMode} />} />
        <Route path="/admin" element={<AdminDashboard darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
