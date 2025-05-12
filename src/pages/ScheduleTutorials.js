import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";
import { Add, Edit, Delete, ArrowBack, Event } from "@mui/icons-material";

const ScheduleTutorials = () => {
  // Sample data
  const students = [
    { id: 1, name: "Alex Johnson" },
    { id: 2, name: "Maria Garcia" },
    { id: 3, name: "Jason Lee" }
  ];

  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      studentId: 1,
      studentName: "Alex Johnson",
      subject: "Mathematics",
      date: "2023-05-15",
      time: "15:00",
      duration: 60,
      location: "Online",
      notes: "Algebra basics"
    }
  ]);

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    studentId: "",
    subject: "",
    date: "",
    time: "",
    duration: 60,
    location: "Online",
    notes: ""
  });

  const handleOpen = () => {
    setFormData({
      studentId: "",
      subject: "",
      date: "",
      time: "",
      duration: 60,
      location: "Online",
      notes: ""
    });
    setOpen(true);
  };

  const handleEdit = (tutorial) => {
    setFormData({
      studentId: tutorial.studentId,
      subject: tutorial.subject,
      date: tutorial.date,
      time: tutorial.time,
      duration: tutorial.duration,
      location: tutorial.location,
      notes: tutorial.notes
    });
    setSelectedId(tutorial.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    setTutorials(tutorials.filter(t => t.id !== selectedId));
    setDeleteOpen(false);
  };

  const handleSubmit = () => {
    const student = students.find(s => s.id === parseInt(formData.studentId));
    
    const tutorial = {
      ...formData,
      id: selectedId || Math.max(...tutorials.map(t => t.id), 0) + 1,
      studentName: student ? student.name : "Unknown"
    };

    if (selectedId) {
      setTutorials(tutorials.map(t => t.id === selectedId ? tutorial : t));
    } else {
      setTutorials([...tutorials, tutorial]);
    }
    
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Button startIcon={<ArrowBack />} sx={{ mr: 2 }}>
          Back
        </Button>
        <Typography variant="h5">Tutorial Schedule</Typography>
      </Box>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleOpen}
        sx={{ mb: 2 }}
      >
        New Session
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tutorials.map((tutorial) => (
              <TableRow key={tutorial.id}>
                <TableCell>{tutorial.studentName}</TableCell>
                <TableCell>{tutorial.subject}</TableCell>
                <TableCell>{tutorial.date}</TableCell>
                <TableCell>{tutorial.time}</TableCell>
                <TableCell>{tutorial.duration} min</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    startIcon={<Edit />}
                    onClick={() => handleEdit(tutorial)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => handleDelete(tutorial.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {selectedId ? "Edit Tutorial" : "Add New Tutorial"}
        </DialogTitle>
        <DialogContent sx={{ minWidth: 400 }}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel>Student</InputLabel>
            <Select
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              label="Student"
            >
              {students.map(student => (
                <MenuItem key={student.id} value={student.id}>
                  {student.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            sx={{ my: 1 }}
          />

          <TextField
            fullWidth
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 1 }}
          />

          <TextField
            fullWidth
            label="Time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ my: 1 }}
          />

          <FormControl fullWidth sx={{ my: 1 }}>
            <InputLabel>Duration</InputLabel>
            <Select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              label="Duration"
            >
              <MenuItem value={30}>30 minutes</MenuItem>
              <MenuItem value={60}>60 minutes</MenuItem>
              <MenuItem value={90}>90 minutes</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            sx={{ my: 1 }}
          />

          <TextField
            fullWidth
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={3}
            sx={{ my: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            startIcon={<Event />}
          >
            {selectedId ? "Update" : "Schedule"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this tutorial session?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ScheduleTutorials;