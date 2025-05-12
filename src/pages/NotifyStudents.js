import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  Divider,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import {
  Send,
  Delete,
  ArrowBack,
  PersonAdd,
  PersonRemove,
  History,
  Email,
  Sms,
  Notifications
} from "@mui/icons-material";

const NotifyStudents = () => {
  // Sample data
  const studentData = [
    { id: 1, name: "Alex Johnson", email: "alex.j@example.com", phone: "(555) 123-4567" },
    { id: 2, name: "Maria Garcia", email: "m.garcia@example.com", phone: "(555) 234-5678" },
    { id: 3, name: "Jason Lee", email: "jlee@example.com", phone: "(555) 345-6789" }
  ];

  const [students] = useState(studentData);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [notificationType, setNotificationType] = useState("email");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: "May 10, 2023",
      subject: "Exam Reminder",
      recipients: ["Alex Johnson"],
      message: "Don't forget about the exam tomorrow",
      type: "email"
    }
  ]);

  const handleSelectStudent = (e) => {
    const studentId = e.target.value;
    if (!studentId) return;
    
    const student = students.find(s => s.id === studentId);
    if (student && !selectedStudents.some(s => s.id === studentId)) {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const removeStudent = (id) => {
    setSelectedStudents(selectedStudents.filter(s => s.id !== id));
  };

  const selectAll = () => setSelectedStudents([...students]);
  const clearAll = () => setSelectedStudents([]);

  const sendNotification = () => {
    if (!selectedStudents.length || !subject || !message) return;
    
    const newNotification = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      subject,
      recipients: selectedStudents.map(s => s.name),
      message,
      type: notificationType
    };
    
    setNotifications([newNotification, ...notifications]);
    setSubject("");
    setMessage("");
    setSelectedStudents([]);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "email": return <Email fontSize="small" />;
      case "sms": return <Sms fontSize="small" />;
      default: return <Notifications fontSize="small" />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", mb: 3 }}>
        <Button startIcon={<ArrowBack />} sx={{ mr: 2 }}>
          Back
        </Button>
        <Typography variant="h5">Notify Students</Typography>
        <Button 
          startIcon={<History />} 
          onClick={() => setHistoryOpen(true)}
          sx={{ ml: "auto" }}
        >
          History
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Recipients Panel */}
        <Paper sx={{ p: 2, flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Recipients</Typography>
          
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Add Student</InputLabel>
            <Select
              label="Add Student"
              onChange={handleSelectStudent}
              value=""
            >
              {students.map(student => (
                <MenuItem 
                  key={student.id} 
                  value={student.id}
                  disabled={selectedStudents.some(s => s.id === student.id)}
                >
                  {student.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <Button 
              startIcon={<PersonAdd />} 
              onClick={selectAll}
              fullWidth
            >
              Select All
            </Button>
            <Button 
              startIcon={<PersonRemove />} 
              onClick={clearAll}
              fullWidth
            >
              Clear
            </Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography sx={{ mb: 1 }}>
            Selected: {selectedStudents.length}
          </Typography>

          <List dense sx={{ maxHeight: 200, overflow: "auto" }}>
            {selectedStudents.map(student => (
              <ListItem key={student.id}>
                <Avatar sx={{ mr: 2 }}>{student.name[0]}</Avatar>
                <ListItemText 
                  primary={student.name} 
                  secondary={notificationType === "sms" ? student.phone : student.email} 
                />
                <IconButton onClick={() => removeStudent(student.id)}>
                  <Delete />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Notification Form */}
        <Paper sx={{ p: 2, flex: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Compose</Typography>
          
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={notificationType}
              onChange={(e) => setNotificationType(e.target.value)}
              label="Type"
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="sms">SMS</MenuItem>
              <MenuItem value="both">Both</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            startIcon={<Send />}
            onClick={sendNotification}
            disabled={!selectedStudents.length || !subject || !message}
            fullWidth
          >
            Send
          </Button>
        </Paper>
      </Box>

      {/* History Dialog */}
      <Dialog open={historyOpen} onClose={() => setHistoryOpen(false)}>
        <DialogTitle>Notification History</DialogTitle>
        <DialogContent dividers>
          <List>
            {notifications.map(notification => (
              <React.Fragment key={notification.id}>
                <ListItem>
                  <Avatar sx={{ mr: 2, bgcolor: "primary.main" }}>
                    {getTypeIcon(notification.type)}
                  </Avatar>
                  <ListItemText
                    primary={notification.subject}
                    secondary={
                      <>
                        <Typography>{notification.message}</Typography>
                        <Box sx={{ mt: 1 }}>
                          {notification.recipients.map((name, i) => (
                            <Chip 
                              key={i} 
                              label={name} 
                              size="small" 
                              sx={{ mr: 0.5, mb: 0.5 }} 
                            />
                          ))}
                        </Box>
                        <Typography variant="caption">{notification.date}</Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHistoryOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NotifyStudents;