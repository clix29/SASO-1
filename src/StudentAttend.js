import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const StudentAttend = () => {
  const [loading, setLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("all");
  const [attendanceStats, setAttendanceStats] = useState({
    total: 0,
    present: 0,
    absent: 0,
    percentage: 0,
  });

  // Simulated data - would be fetched from API in a real application
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockModules = [
        { id: "CS101", name: "Introduction to Computer Science" },
        { id: "CS201", name: "Data Structures and Algorithms" },
        { id: "CS301", name: "Database Systems" },
        { id: "CS401", name: "Software Engineering" },
      ];

      const mockAttendance = [
        {
          id: 1,
          date: "2025-05-01",
          module: "CS101",
          moduleName: "Introduction to Computer Science",
          type: "Lecture",
          status: "present",
          time: "09:00 - 11:00",
        },
        {
          id: 2,
          date: "2025-05-03",
          module: "CS101",
          moduleName: "Introduction to Computer Science",
          type: "Tutorial",
          status: "present",
          time: "14:00 - 15:00",
        },
        {
          id: 3,
          date: "2025-05-04",
          module: "CS201",
          moduleName: "Data Structures and Algorithms",
          type: "Lecture",
          status: "absent",
          time: "10:00 - 12:00",
        },
        {
          id: 4,
          date: "2025-05-06",
          module: "CS201",
          moduleName: "Data Structures and Algorithms",
          type: "Lab",
          status: "present",
          time: "13:00 - 15:00",
        },
        {
          id: 5,
          date: "2025-05-08",
          module: "CS301",
          moduleName: "Database Systems",
          type: "Lecture",
          status: "present",
          time: "11:00 - 13:00",
        },
        {
          id: 6,
          date: "2025-05-10",
          module: "CS301",
          moduleName: "Database Systems",
          type: "Tutorial",
          status: "absent",
          time: "15:00 - 16:00",
        },
        {
          id: 7,
          date: "2025-05-11",
          module: "CS401",
          moduleName: "Software Engineering",
          type: "Lecture",
          status: "present",
          time: "09:00 - 11:00",
        },
      ];

      setModules(mockModules);
      setAttendanceData(mockAttendance);
      
      // Calculate initial stats
      const total = mockAttendance.length;
      const present = mockAttendance.filter(item => item.status === "present").length;
      const absent = total - present;
      const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
      
      setAttendanceStats({
        total,
        present,
        absent,
        percentage,
      });
      
      setLoading(false);
    }, 1000);
  }, []);

  // Filter attendance data based on selected module
  const filteredAttendance = attendanceData.filter(item => 
    selectedModule === "all" || item.module === selectedModule
  );

  // Update stats when module selection changes
  useEffect(() => {
    const filtered = attendanceData.filter(item => 
      selectedModule === "all" || item.module === selectedModule
    );
    
    const total = filtered.length;
    const present = filtered.filter(item => item.status === "present").length;
    const absent = total - present;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;
    
    setAttendanceStats({
      total,
      present,
      absent,
      percentage,
    });
  }, [selectedModule, attendanceData]);

  const handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom component="h1" sx={{ mb: 4, fontWeight: "bold" }}>
        Attendance Record
      </Typography>

      {/* Attendance Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Total Sessions</Typography>
              </Box>
              <Typography variant="h4">{attendanceStats.total}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <EventAvailableIcon sx={{ color: "success.main", mr: 1 }} />
                <Typography variant="h6">Present</Typography>
              </Box>
              <Typography variant="h4">{attendanceStats.present}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <EventBusyIcon sx={{ color: "error.main", mr: 1 }} />
                <Typography variant="h6">Absent</Typography>
              </Box>
              <Typography variant="h4">{attendanceStats.absent}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Typography variant="h6">Attendance Rate</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                <Typography variant="h4">{attendanceStats.percentage}%</Typography>
                <Box
                  sx={{
                    ml: 1,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    bgcolor: 
                      attendanceStats.percentage >= 80 ? "success.main" :
                      attendanceStats.percentage >= 60 ? "warning.main" : "error.main"
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Module Selection */}
      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="module-select-label">Filter by Module</InputLabel>
          <Select
            labelId="module-select-label"
            id="module-select"
            value={selectedModule}
            label="Filter by Module"
            onChange={handleModuleChange}
          >
            <MenuItem value="all">All Modules</MenuItem>
            {modules.map((module) => (
              <MenuItem key={module.id} value={module.id}>
                {module.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Attendance Table */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Time</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Module</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Type</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAttendance.length > 0 ? (
              filteredAttendance.map((attendance) => (
                <TableRow key={attendance.id}>
                  <TableCell>{new Date(attendance.date).toLocaleDateString()}</TableCell>
                  <TableCell>{attendance.time}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {attendance.module}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {attendance.moduleName}
                    </Typography>
                  </TableCell>
                  <TableCell>{attendance.type}</TableCell>
                  <TableCell>
                    <Chip
                      label={attendance.status === "present" ? "Present" : "Absent"}
                      color={attendance.status === "present" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No attendance records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="textSecondary">
          * If you believe there is an error in your attendance record, please contact your module coordinator.
        </Typography>
      </Box>
    </Container>
  );
};

export default StudentAttend;