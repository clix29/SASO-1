import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  LinearProgress,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const StudentProgress = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", progress: 75 },
    { id: 2, name: "Brian Smith", progress: 40 },
    { id: 3, name: "Cynthia Lee", progress: 90 },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newProgress, setNewProgress] = useState("");

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setNewProgress(student.progress);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleSave = () => {
    setStudents(
      students.map((s) =>
        s.id === selectedStudent.id ? { ...s, progress: Number(newProgress) } : s
      )
    );
    setDialogOpen(false);
    setSelectedStudent(null);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Progress
      </Typography>

      <List>
        {students.map((student) => (
          <ListItem
            key={student.id}
            sx={{
              mb: 2,
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              boxShadow: 1,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <ListItemText
                primary={student.name}
                secondary={`Progress: ${student.progress}%`}
              />
              <Box>
                <IconButton onClick={() => handleEdit(student)}>
                  <Edit />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(student.id)}>
                  <Delete />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ width: "100%", mt: 1 }}>
              <LinearProgress
                variant="determinate"
                value={student.progress}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          </ListItem>
        ))}
      </List>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Edit Progress</DialogTitle>
        <DialogContent>
          <TextField
            label="Progress (%)"
            type="number"
            fullWidth
            value={newProgress}
            onChange={(e) => setNewProgress(e.target.value)}
            inputProps={{ min: 0, max: 100 }}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StudentProgress;
