import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import LecturerDashboard from "./pages/dashboards/LecturerDashboard";
import TutorDashboard from "./pages/dashboards/TutorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingSpinner from "./components/LoadingSpinner";
import SubmitTicket from "./pages/SubmitTicket";
import AboutPage from "./pages/AboutPage";
import ModulesPage from "./pages/ModulesPage";
import Schedule from "./pages/Schedule";
import StudentAttendance from "./pages/StudentAttendance"; // Fixed the import path
import AcademicRecord from "./pages/AcademicRecord";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for authentication check
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <AuthProvider>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/ticket" element={<SubmitTicket />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/modules" element={<ModulesPage />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/attendance" element={<StudentAttendance />} /> {/* Added route for StudentAttendance */}
              <Route path="/academic" element={<AcademicRecord />} /> {/* Added route for AcademicRecord */}
              {/* Protected Dashboard Routes */}
              <Route
                path="/student/*"
                element={
                  <ProtectedRoute allowedRoles={["student"]}>
                    <StudentDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/lecturer/*"
                element={
                  <ProtectedRoute allowedRoles={["lecturer"]}>
                    <LecturerDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tutor/*"
                element={
                  <ProtectedRoute allowedRoles={["tutor"]}>
                    <TutorDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Redirects for common URL variations */}
              <Route
                path="/student-dashboard"
                element={<Navigate to="/student" replace />}
              />
              <Route
                path="/lecturer-dashboard"
                element={<Navigate to="/lecturer" replace />}
              />
              <Route
                path="/tutor-dashboard"
                element={<Navigate to="/tutor" replace />}
              />
              <Route
                path="/admin-dashboard"
                element={<Navigate to="/admin" replace />}
              />

              {/* Fallback routes */}
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
        </Box>
      </AuthProvider>
    </Router>
  );
}

export default App;