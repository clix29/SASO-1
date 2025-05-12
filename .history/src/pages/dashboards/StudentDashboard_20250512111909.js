import { Typography, Box, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
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
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2", // Primary blue for the header
        }}
      >
        Student Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: "#555555", // Subtle gray for subtitle
        }}
      >
        Welcome to your student portal. Here’s a quick overview of your academic
        tools.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {/* Upcoming Schedule */}
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
              Upcoming Schedule
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              View your upcoming classes and tutorials.
            </Typography>
            <Button
              onClick={() => navigate("/schedule")}
              variant="outlined"
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
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
              Messages
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Check new messages from lecturers and tutors.
            </Typography>
            <Button
              onClick={() => navigate("/messages")}
              variant="outlined"
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
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
              Attendance
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Track your attendance records.
            </Typography>
            <Button
              onClick={() => navigate("/attendance")}
              variant="outlined"
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

        {/* Academic Record */}
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
              Academic Record
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Track your academic progress and grades.
            </Typography>
            <Button
              onClick={() => navigate("/academic-record")}
              variant="outlined"
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                },
              }}
            >
              View Academic Record
            </Button>
          </Paper>
        </Grid>

        {/* FAQs / Support */}
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
              FAQs & Support
            </Typography>
            <Typography variant="body2" sx={{ color: "#555555", mb: 2 }}>
              Need help? Browse common questions or ask support.
            </Typography>
            <Button
              onClick={() => navigate("/faq")}
              variant="outlined"
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
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
