import { Typography, Box, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome to your student portal. Here’s a quick overview of your academic
        tools.
      </Typography>

      <Grid container spacing={3} mt={2}>

        {/* Upcoming Schedule */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming Schedule</Typography>
            <Typography variant="body2">
              View your upcoming classes and tutorials.
            </Typography>
            <Button
              onClick={() => navigate("/schedule")}
              variant="outlined"
              sx={{ mt: 1 }}
            >
              View Schedule
            </Button>
          </Paper>
        </Grid>

        {/* Messages */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Messages</Typography>
            <Typography variant="body2">
              Check new messages from lecturers and tutors.
            </Typography>
            <Button
              onClick={() => navigate("/messages")}
              variant="outlined"
              sx={{ mt: 1 }}
            >
              Go to Messages
            </Button>
          </Paper>
        </Grid>

        {/* Attendance */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Attendance</Typography>
            <Typography variant="body2">
              Track your attendance records.
            </Typography>
            <Button
              onClick={() => navigate("/attendance")}
              variant="outlined"
              sx={{ mt: 1 }}
            >
              View Attendance
            </Button>
          </Paper>
        </Grid>

        {/* Accademic */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Academic Record</Typography>
            <Typography variant="body2">
              Track your academic progress and grades.
            </Typography>
            <Button
              onClick={() => navigate("/academic")}
              variant="outlined"
              sx={{ mt: 1 }}
            >
              View Academic Record
            </Button>
          </Paper>
        </Grid>

        {/* FAQs / Support */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">FAQs & Support</Typography>
            <Typography variant="body2">
              Need help? Browse common questions or ask support.
            </Typography>
            <Button
              onClick={() => navigate("/faq")}
              variant="outlined"
              sx={{ mt: 1 }}
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
