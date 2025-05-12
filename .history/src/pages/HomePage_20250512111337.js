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
    { title: "Student Portal", icon: "🎓", path: "/student" },
    { title: "Lecture Materials", icon: "📚", path: "/lecture" },
    { title: "Tutor Support", icon: "🧑‍🏫", path: "/tutor" },
    { title: "Admin Panel", icon: "⚙️", path: "/admin" },
    { title: "Submit Enquiry", icon: "📨", path: "/ticket" },
  ];

  const announcements = [
    { text: "New Math 101 resources added", date: "Today" },
    { text: "System maintenance this weekend", date: "May 20" },
  ];

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        position: "relative",
        background: "#ffffff", // Changed to white background
        color: "#333333", // Dark text color
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#1976d2", // Primary blue color for the header
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome to the SDS System
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#555555", // Subtle gray for body text
        }}
      >
        The Student Data System (SDS) is your central platform for managing
        academic activities, accessing resources, and staying updated with
        important information.
      </Typography>

      {/* Announcements */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#1976d2", // Primary blue for section titles
          fontWeight: "bold",
        }}
      >
        News & Announcements
      </Typography>
      <List
        sx={{
          bgcolor: "#ffffff", // White background for the list
          boxShadow: 1,
          borderRadius: 2,
          mb: 4,
          border: "1px solid #ddd", // Light gray border
        }}
      >
        {announcements.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={item.text}
              secondary={item.date}
              primaryTypographyProps={{
                fontWeight: "medium",
                color: "#333333", // Dark text for announcements
              }}
              secondaryTypographyProps={{
                color: "#1976d2", // Primary blue for dates
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Quick Access Cards */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#1976d2", // Primary blue for section titles
          fontWeight: "bold",
        }}
      >
        Quick Access
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {quickAccessItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <Card
              sx={{
                height: "100%",
                boxShadow: 2,
                borderRadius: 2,
                backgroundColor: "#ffffff", // White background for cards
                color: "#333333", // Dark text for readability
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {item.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    color: "#1976d2", // Primary blue for card titles
                  }}
                >
                  {item.title}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(item.path)}
                  fullWidth
                  size="small"
                  sx={{
                    backgroundColor: "#1976d2", // Primary blue button
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#1565c0", // Darker blue on hover
                    },
                  }}
                >
                  Go
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Login and Sign Up */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#1976d2", // Primary blue for section titles
          fontWeight: "bold",
        }}
      >
        Get Started
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 2,
              boxShadow: 1,
              backgroundColor: "#ffffff", // White background for login/signup
              color: "#333333", // Dark text for readability
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              Already have an account?
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#1976d2", // Primary blue button
                "&:hover": {
                  backgroundColor: "#1565c0", // Darker blue on hover
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: 2,
              boxShadow: 1,
              backgroundColor: "#ffffff", // White background for sign up section
              color: "#333333", // Dark text for readability
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              New here?
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mt: 2,
                borderColor: "#1976d2", // Primary blue border for sign up button
                color: "#1976d2", // Blue text for sign up
                "&:hover": {
                  borderColor: "#1565c0", // Darker blue on hover
                  backgroundColor: "#1565c0", // Darker blue background
                  color: "#ffffff", // White text on hover
                },
              }}
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
