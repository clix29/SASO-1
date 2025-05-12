import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  CircularProgress,
  Button,
} from "@mui/material";

const Performance = () => {
  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("");
  const [performanceData, setPerformanceData] = useState({
    overview: {},
    students: [],
    assessments: [],
  });

  // Simulated data fetch
  useEffect(() => {
    setTimeout(() => {
      const mockModules = [
        { id: "CS101", name: "Introduction to Computer Science" },
        { id: "CS201", name: "Data Structures and Algorithms" },
      ];

      const mockPerformanceData = {
        overview: {
          averageGrade: 75,
          passRate: 85,
          attendanceRate: 90,
        },
        students: [
          { id: 1, name: "Alex Smith", grade: "A", attendance: 95 },
          { id: 2, name: "Jamie Johnson", grade: "B+", attendance: 88 },
        ],
        assessments: [
          { id: 1, name: "Quiz 1", maxScore: 20, averageScore: 16 },
          { id: 2, name: "Midterm Exam", maxScore: 100, averageScore: 78 },
        ],
      };

      setModules(mockModules);
      setSelectedModule(mockModules[0].id);
      setPerformanceData(mockPerformanceData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleModuleChange = (event) => {
    setSelectedModule(event.target.value);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Performance Analytics
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#555555" }}>
        Analyze student performance and attendance for better insights.
      </Typography>

      {/* Module Selector */}
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Select Module</InputLabel>
        <Select value={selectedModule} onChange={handleModuleChange} label="Select Module">
          {modules.map((module) => (
            <MenuItem key={module.id} value={module.id}>
              {module.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Average Grade
            </Typography>
            <Typography variant="body1">{performanceData.overview.averageGrade}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Pass Rate
            </Typography>
            <Typography variant="body1">{performanceData.overview.passRate}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
              Attendance Rate
            </Typography>
            <Typography variant="body1">{performanceData.overview.attendanceRate}%</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Students Table */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Students
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {performanceData.students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.attendance}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Assessments Table */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1976d2" }}>
        Assessments
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assessment Name</TableCell>
              <TableCell>Max Score</TableCell>
              <TableCell>Average Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {performanceData.assessments.map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell>{assessment.name}</TableCell>
                <TableCell>{assessment.maxScore}</TableCell>
                <TableCell>{assessment.averageScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Performance;