import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

const Communication = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Midterm Exam Reminder", content: "The midterm exam will be held on March 15th." },
    { id: 2, title: "Assignment Deadline", content: "The deadline for Assignment 2 is March 10th." },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  const handleAddAnnouncement = () => {
    if (newAnnouncement.title && newAnnouncement.content) {
      setAnnouncements([
        ...announcements,
        { id: announcements.length + 1, ...newAnnouncement },
      ]);
      setNewAnnouncement({ title: "", content: "" });
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Communication Panel
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555555" }}>
        Send announcements and view previous communications with students.
      </Typography>

      {/* New Announcement */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
          Create New Announcement
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={newAnnouncement.title}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Content"
              name="content"
              value={newAnnouncement.content}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleAddAnnouncement}
              sx={{ backgroundColor: "#1976d2", color: "#ffffff" }}
            >
              Send Announcement
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Previous Announcements */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Previous Announcements
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {announcements.map((announcement) => (
              <TableRow key={announcement.id}>
                <TableCell>{announcement.title}</TableCell>
                <TableCell>{announcement.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Communication;