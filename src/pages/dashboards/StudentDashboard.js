import { Typography, Box, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(135deg,rgb(1, 20, 37),rgb(73, 73, 202))", // Gradient background
        color: "#e0e0e0", // Light gray text for better contrast
      }}
    >
      {/* Dark overlay with blur effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 128, 0.5)", // Darker transparent overlay
          backdropFilter: "blur(10px)", // Blur effect
          zIndex: -1, // Keep the overlay behind the content
        }}
      />

      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#ffffff", // White text for header
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Student Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#e0e0e0", // Light gray for body text
        }}
      >
        Welcome to your student portal. Here’s a quick overview of your academic tools.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {/* Upcoming Schedule */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "#333333", // Dark background for Paper
              color: "#e0e0e0", // Light gray text for Paper
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Upcoming Schedule
            </Typography>
            <Typography variant="body2">
              View your upcoming classes and tutorials.
            </Typography>
            <Button
              onClick={() => navigate("/schedule")}
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#1976d2", // Light blue border
                color: "#1976d2", // Blue text
                "&:hover": {
                  borderColor: "#1565c0", // Darker blue on hover
                  backgroundColor: "#1565c0", // Darker blue background
                  color: "#ffffff", // White text on hover
                },
              }}
            >
              View Schedule
            </Button>
          </Paper>
        </Grid>

        {/* Messages */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "#333333", // Dark background for Paper
              color: "#e0e0e0", // Light gray text for Paper
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Messages
            </Typography>
            <Typography variant="body2">
              Check new messages from lecturers and tutors.
            </Typography>
            <Button
              onClick={() => navigate("/messages")}
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#1976d2", // Light blue border
                color: "#1976d2", // Blue text
                "&:hover": {
                  borderColor: "#1565c0", // Darker blue on hover
                  backgroundColor: "#1565c0", // Darker blue background
                  color: "#ffffff", // White text on hover
                },
              }}
            >
              Go to Messages
            </Button>
          </Paper>
        </Grid>

        {/* Attendance */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "#333333", // Dark background for Paper
              color: "#e0e0e0", // Light gray text for Paper
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Attendance
            </Typography>
            <Typography variant="body2">
              Track your attendance records.
            </Typography>
            <Button
              onClick={() => navigate("/attendance")}
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#1976d2", // Light blue border
                color: "#1976d2", // Blue text
                "&:hover": {
                  borderColor: "#1565c0", // Darker blue on hover
                  backgroundColor: "#1565c0", // Darker blue background
                  color: "#ffffff", // White text on hover
                },
              }}
            >
              View Attendance
            </Button>
          </Paper>
        </Grid>

        {/* FAQs / Support */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: "#333333", // Dark background for Paper
              color: "#e0e0e0", // Light gray text for Paper
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              FAQs & Support
            </Typography>
            <Typography variant="body2">
              Need help? Browse common questions or ask support.
            </Typography>
            <Button
              onClick={() => navigate("/faq")}
              variant="outlined"
              sx={{
                mt: 1,
                borderColor: "#1976d2", // Light blue border
                color: "#1976d2", // Blue text
                "&:hover": {
                  borderColor: "#1565c0", // Darker blue on hover
                  backgroundColor: "#1565c0", // Darker blue background
                  color: "#ffffff", // White text on hover
                },
              }}
            >
              Visit Help Center
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
