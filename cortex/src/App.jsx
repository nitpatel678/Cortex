import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import DashboardLayout from "./components/layout/DashboardLayout.jsx"
import DashboardPage from "./pages/DashboardPage.jsx"
import PersonalOSPage from "./pages/PersonalOSPage.jsx"
import ResearchPage from "./pages/ResearchPage.jsx"
import MeetingsPage from "./pages/MeetingsPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/personal-os" element={<PersonalOSPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
