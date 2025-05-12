import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import {
  AccountCircle as ProfileIcon,
  CalendarToday as ScheduleIcon,
  Notifications as NotifyIcon,
  QuestionAnswer as FaqIcon,
  TrendingUp as ProgressIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TutorDashboard = () => {
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
        Tutor Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: "#555555", // Subtle gray for subtitle
        }}
      >
        Welcome to the tutor management portal. Here’s a quick overview of your tools.
      </Typography>

      {/* Options */}
      <Grid container spacing={3} mt={2}>
        {/* My Profile */}
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
              My Profile
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              View and update your personal and professional details.
            </Typography>
            <Button
              onClick={() => navigate("/profile")}
              variant="outlined"
              startIcon={<ProfileIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Profile
            </Button>
          </Paper>
        </Grid>

        {/* Schedule Tutorials */}
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
              Schedule Tutorials
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Plan and manage tutorial sessions for your students.
            </Typography>
            <Button
              onClick={() => navigate("/tut")}
              variant="outlined"
              startIcon={<ScheduleIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Schedule Now
            </Button>
          </Paper>
        </Grid>

        {/* Notify Students */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              color: "#333333",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Notify Students
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Send important updates and announcements to your students.
            </Typography>
            <Button
              onClick={() => navigate("/notify-students")}
              variant="outlined"
              startIcon={<NotifyIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              Notify Now
            </Button>
          </Paper>
        </Grid>

        {/* Manage FAQs */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              color: "#333333",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Manage FAQs
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Update and manage frequently asked questions for students.
            </Typography>
            <Button
              onClick={() => navigate("/manage-faqs")}
              variant="outlined"
              startIcon={<FaqIcon />}
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

        {/* Student Progress Overview */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              color: "#333333",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Student Progress Overview
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Monitor the academic progress of your students.
            </Typography>
            <Button
              onClick={() => navigate("/student-progress")}
              variant="outlined"
              startIcon={<ProgressIcon />}
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Progress
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TutorDashboard;