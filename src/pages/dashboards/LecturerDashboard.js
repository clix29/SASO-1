import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import {
  Upload as UploadIcon,
  BarChart as BarChartIcon,
  CheckCircle as AttendanceIcon,
  Forum as ForumIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function LecturerDashboard() {
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
        Lecturer Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: "#555555", // Subtle gray for subtitle
        }}
      >
        Welcome to the lecturer management portal. Here’s a quick overview of your tools.
      </Typography>

      {/* Options */}
      <Grid container spacing={3} mt={2}>
        {/* Class & Course Materials */}
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
              Class & Course Materials
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Upload and manage materials for your classes and courses.
            </Typography>
            <Button
              onClick={() => navigate("/materials")}
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Manage Materials
            </Button>
          </Paper>
        </Grid>

        {/* Performance Analytics */}
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
              Performance Analytics
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Analyze student performance and track progress.
            </Typography>
            <Button
              onClick={() => navigate("/performance")}
              variant="outlined"
              startIcon={<BarChartIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Analytics
            </Button>
          </Paper>
        </Grid>

        {/* Attendance Review */}
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
              Attendance Review
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Review and manage student attendance records.
            </Typography>
            <Button
              onClick={() => navigate("/lecturer-attendance")}
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
              Review Attendance
            </Button>
          </Paper>
        </Grid>

        {/* Communication Panel */}
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
              Communication Panel
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Communicate with students and manage announcements.
            </Typography>
            <Button
              onClick={() => navigate("/communication")}
              variant="outlined"
              startIcon={<ForumIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Open Panel
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LecturerDashboard;
