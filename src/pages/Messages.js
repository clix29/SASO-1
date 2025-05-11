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
      <Box p={{ xs: 2, md: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          📬 Your Messages
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="text.secondary">
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
                  backgroundColor: "#f9f9fb",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    backgroundColor: "#f1f1f5",
                  },
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      <MailIcon />
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {msg.subject}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      From: {msg.sender}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1">{msg.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Messages;