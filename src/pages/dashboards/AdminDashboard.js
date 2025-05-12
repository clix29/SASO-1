import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import {
  People as UserManagementIcon,
  CheckCircle as AttendanceIcon,
  History as SessionLogsIcon,
  QuestionAnswer as FAQIcon,
  Assessment as ReportsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "#ffffff", // White background
        color: "#333333", // Dark text color
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2", // Primary blue for the header
        }}
      >
        Admin Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: "#555555", // Subtle gray for subtitle
        }}
      >
        Welcome to the administration portal. Here's a quick overview of your management tools.
      </Typography>

      {/* Options */}
      <Grid container spacing={3} mt={2}>
        {/* User Management */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff", // White background for cards
              color: "#333333", // Dark text for readability
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5", // Light gray on hover
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              User Management
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Upload, edit, and delete user accounts and manage permissions.
            </Typography>
            <Button
              onClick={() => navigate("/materials-management")}
              variant="outlined"
              startIcon={<UserManagementIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Manage Users
            </Button>
          </Paper>
        </Grid>

        {/* Monitor Attendance */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff", // White background for cards
              color: "#333333", // Dark text for readability
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5", // Light gray on hover
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Monitor Attendance
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Track and review attendance records across all classes and users.
            </Typography>
            <Button
              onClick={() => navigate("/attendance-monitoring")}
              variant="outlined"
              startIcon={<AttendanceIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Attendance
            </Button>
          </Paper>
        </Grid>

        {/* Session Logs */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff", // White background for cards
              color: "#333333", // Dark text for readability
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5", // Light gray on hover
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Session Logs
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Review system activity logs and user sessions for security monitoring.
            </Typography>
            <Button
              onClick={() => navigate("/session")}
              variant="outlined"
              startIcon={<SessionLogsIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Logs
            </Button>
          </Paper>
        </Grid>

        {/* FAQ Oversight */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff", // White background for cards
              color: "#333333", // Dark text for readability
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5", // Light gray on hover
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              FAQ Oversight
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Manage frequently asked questions and help content for the platform.
            </Typography>
            <Button
              onClick={() => navigate("/manage-faqs")}
              variant="outlined"
              startIcon={<FAQIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Manage FAQs
            </Button>
          </Paper>
        </Grid>

        {/* Reports & Analytics */}
        <Grid item xs={12} md={12}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff", // White background for cards
              color: "#333333", // Dark text for readability
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5", // Light gray on hover
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Reports & Analytics
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Generate comprehensive reports and analyze platform metrics and usage statistics.
            </Typography>
            <Button
              onClick={() => navigate("/analytics")}
              variant="outlined"
              startIcon={<ReportsIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Reports
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;