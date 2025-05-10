import {
    Box,
    Typography,
    Paper,
    Grid,
    Avatar,
    Divider,
  } from "@mui/material";
  import MailIcon from "@mui/icons-material/Mail";
  
  const messages = [
    {
      id: 1,
      sender: "Lecturer V Memani",
      subject: "Assignment Reminder",
      content:
        "Don't forget to submit your Internet Programming assignment by Friday 5 PM.",
    },
    {
      id: 2,
      sender: "Tutor L Mbatha",
      subject: "Tutorial Time Change",
      content:
        "This week's tutorial will start at 2 PM instead of 3 PM. See you then!",
    },
    {
      id: 3,
      sender: "System Admin",
      subject: "Platform Maintenance",
      content:
        "The SASO system will be temporarily unavailable this Sunday for maintenance.",
    },
  ];
  
  const Messages = () => {
    return (
      <Box
        sx={{
          p: 4,
          minHeight: "100vh",
          position: "relative",
          background: "linear-gradient(135deg, rgb(1, 20, 37), rgb(73, 73, 202))",
          color: "#e0e0e0",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 128, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: -1,
          }}
        />
  
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          📬 Your Messages
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="#e0e0e0">
          Here’s where you'll find updates from your lecturers, tutors, and system staff.
        </Typography>
  
        <Grid container spacing={3} mt={2}>
          {messages.map((msg) => (
            <Grid item xs={12} md={6} key={msg.id}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#333333",
                  color: "#e0e0e0",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    backgroundColor: "#444",
                  },
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ background: 'linear-gradient(145deg,rgb(194, 195, 198),rgb(207, 213, 248))' }}>
                      <MailIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {msg.subject}
                    </Typography>
                    <Typography variant="body2" color="#bbbbbb">
                      From: {msg.sender}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2, borderColor: "#555" }} />
                <Typography variant="body1">{msg.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Messages;
  