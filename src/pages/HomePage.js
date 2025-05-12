import {
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const quickAccessItems = [
    { title: "Student Portal", icon: "👨🎓", path: "/student" },
    { title: "Lecture Materials", icon: "📚", path: "/lecture" },
    { title: "Tutor Support", icon: "👨🏫", path: "/tutor" },
    { title: "Admin Panel", icon: "⚙️", path: "/admin" },
    { title: "Submit Enquiry", icon: "📨", path: "/ticket" },
  ];

  const announcements = [
    { text: "New Math 101 resources added", date: "Today" },
    { text: "System maintenance this weekend", date: "May 20" },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* 1. System Overview */}
      <Typography variant="h4" gutterBottom>
        Welcome to the SDS System
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The Student Data System (SDS) is your central platform for managing
        academic activities, accessing resources, and staying updated with
        important information.
      </Typography>

      {/* 2. Announcements */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        News & Announcements
      </Typography>
      <List
        sx={{
          bgcolor: "background.paper",
          boxShadow: 2,
          borderRadius: 1,
          mb: 4,
        }}
      >
        {announcements.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={item.text}
              secondary={item.date}
              primaryTypographyProps={{ fontWeight: "medium" }}
            />
          </ListItem>
        ))}
      </List>

      {/* 3. Quick Access */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Quick Access
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {quickAccessItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <Card sx={{ height: "100%", boxShadow: 3 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {item.icon}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(item.path)}
                  fullWidth
                  size="small"
                >
                  Go
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 4. Login / Sign Up */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Get Started
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">Already have an account?</Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">New here?</Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;