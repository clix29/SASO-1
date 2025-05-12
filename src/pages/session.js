import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button,
} from "@mui/material";

const Session = () => {
  const [loading, setLoading] = useState(true);
  const [sessionLogs, setSessionLogs] = useState([]);

  // Simulated data fetch
  useEffect(() => {
    setTimeout(() => {
      const mockLogs = [
        {
          id: 1,
          user: "John Doe",
          role: "Lecturer",
          action: "Logged in",
          timestamp: "2025-05-12 10:00 AM",
        },
        {
          id: 2,
          user: "Jane Smith",
          role: "Admin",
          action: "Updated FAQ",
          timestamp: "2025-05-12 09:45 AM",
        },
        {
          id: 3,
          user: "Alex Johnson",
          role: "Student",
          action: "Viewed Course Materials",
          timestamp: "2025-05-11 03:30 PM",
        },
      ];
      setSessionLogs(mockLogs);
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
        Session Logs
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555555" }}>
        Review system activity logs and user sessions for security and monitoring purposes.
      </Typography>

      {/* Session Logs Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessionLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.role}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Export Button */}
      <Button
        variant="contained"
        sx={{ mt: 3, backgroundColor: "#1976d2", color: "#ffffff" }}
        onClick={() => alert("Exporting session logs...")}
      >
        Export Logs
      </Button>
    </Container>
  );
};

export default Session;