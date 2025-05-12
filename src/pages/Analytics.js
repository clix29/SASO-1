import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalSessions: 0,
    averageSessionDuration: 0,
  });

  // Simulated data fetch
  useEffect(() => {
    setTimeout(() => {
      const mockData = {
        totalUsers: 1200,
        activeUsers: 350,
        totalSessions: 4500,
        averageSessionDuration: 15, // in minutes
      };
      setAnalyticsData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Analytics Overview
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555555" }}>
        Get insights into system usage and user activity.
      </Typography>

      {/* Analytics Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Total Users
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              {analyticsData.totalUsers}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Active Users
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              {analyticsData.activeUsers}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Total Sessions
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              {analyticsData.totalSessions}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Avg. Session Duration
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
              {analyticsData.averageSessionDuration} min
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;