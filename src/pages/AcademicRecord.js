import { useState } from 'react';
import jsPDF from 'jspdf';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Card,
  CardContent,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Tab,
  Tabs,
  Button,
  Divider,
  LinearProgress,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DownloadIcon from '@mui/icons-material/Download';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import FilterListIcon from '@mui/icons-material/FilterList';
import PrintIcon from '@mui/icons-material/Print';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const academicData = {
  studentInfo: {
    name: 'John Smith',
    id: 'STU123456',
    program: 'Bachelor of Computer Science',
    academicStanding: 'Good Standing',
    admissionDate: '2023-09-01',
    expectedGraduation: '2027-06-15',
    totalCredits: {
      completed: 45,
      required: 120,
      inProgress: 15
    }
  },
  semesters: [
    {
      id: 'S202501',
      name: 'Semester Two 2025',
      status: 'In Progress',
      gpa: 0,
      credits: 15,
      courses: [
        { code: 'CS101', name: 'Introduction to Programming', credits: 3, status: 'In Progress', grade: '-', marks: [] },
        { code: 'CS101-T', name: 'Introduction to Programming Tutorial', credits: 1, status: 'In Progress', grade: '-', marks: [] },
        { code: 'CS205', name: 'Database Systems', credits: 3, status: 'In Progress', grade: '-', marks: [] },
        { code: 'CS203', name: 'Web Development', credits: 4, status: 'In Progress', grade: '-', marks: [] },
        { code: 'CS301', name: 'Software Engineering', credits: 3, status: 'In Progress', grade: '-', marks: [] },
        { code: 'CS301-P', name: 'Software Engineering Practical', credits: 1, status: 'In Progress', grade: '-', marks: [] },
      ]
    },
    {
      id: 'S202402',
      name: 'Semester One 2024',
      status: 'Completed',
      gpa: 3.7,
      credits: 15,
      courses: [
        { 
          code: 'CS102', 
          name: 'Data Structures', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A', 
          marks: [
            { name: 'Midterm', weight: 30, score: 88 },
            { name: 'Assignments', weight: 30, score: 95 },
            { name: 'Final Exam', weight: 40, score: 91 }
          ]
        },
        { 
          code: 'CS102-L', 
          name: 'Data Structures Lab', 
          credits: 1, 
          status: 'Completed', 
          grade: 'A-', 
          marks: [
            { name: 'Lab Work', weight: 60, score: 92 },
            { name: 'Final Project', weight: 40, score: 85 }
          ]
        },
        { 
          code: 'MATH201', 
          name: 'Calculus I', 
          credits: 4, 
          status: 'Completed', 
          grade: 'B+', 
          marks: [
            { name: 'Quiz 1', weight: 10, score: 82 },
            { name: 'Quiz 2', weight: 10, score: 86 },
            { name: 'Midterm', weight: 30, score: 85 },
            { name: 'Final Exam', weight: 50, score: 83 }
          ]
        },
        { 
          code: 'ENG101', 
          name: 'Academic Writing', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A', 
          marks: [
            { name: 'Essay 1', weight: 20, score: 92 },
            { name: 'Essay 2', weight: 20, score: 94 },
            { name: 'Research Paper', weight: 40, score: 90 },
            { name: 'Participation', weight: 20, score: 95 }
          ]
        },
        { 
          code: 'PHY101', 
          name: 'Physics I', 
          credits: 4, 
          status: 'Completed', 
          grade: 'B+', 
          marks: [
            { name: 'Lab Reports', weight: 20, score: 88 },
            { name: 'Midterm', weight: 30, score: 82 },
            { name: 'Final Exam', weight: 50, score: 85 }
          ]
        }
      ]
    },
    {
      id: 'S202401',
      name: 'Semester Two 2024',
      status: 'Completed',
      gpa: 3.6,
      credits: 15,
      courses: [
        { 
          code: 'CS100', 
          name: 'Computer Science Fundamentals', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A-', 
          marks: [
            { name: 'Midterm', weight: 30, score: 88 },
            { name: 'Assignments', weight: 30, score: 90 },
            { name: 'Final Exam', weight: 40, score: 86 }
          ]
        },
        { 
          code: 'MATH101', 
          name: 'Discrete Mathematics', 
          credits: 3, 
          status: 'Completed', 
          grade: 'B+', 
          marks: [
            { name: 'Quiz Average', weight: 20, score: 85 },
            { name: 'Midterm', weight: 30, score: 82 },
            { name: 'Final Exam', weight: 50, score: 87 }
          ]
        },
        { 
          code: 'ENG100', 
          name: 'Communication Skills', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A', 
          marks: [
            { name: 'Presentation', weight: 20, score: 94 },
            { name: 'Essays', weight: 30, score: 92 },
            { name: 'Final Project', weight: 50, score: 90 }
          ]
        },
        { 
          code: 'SOC101', 
          name: 'Introduction to Sociology', 
          credits: 3, 
          status: 'Completed', 
          grade: 'B', 
          marks: [
            { name: 'Midterm', weight: 40, score: 80 },
            { name: 'Term Paper', weight: 30, score: 83 },
            { name: 'Final Exam', weight: 30, score: 78 }
          ]
        },
        { 
          code: 'HIS101', 
          name: 'Modern History', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A-', 
          marks: [
            { name: 'Participation', weight: 10, score: 95 },
            { name: 'Research Paper', weight: 40, score: 86 },
            { name: 'Final Exam', weight: 50, score: 88 }
          ]
        }
      ]
    },
    {
      id: 'S202302',
      name: 'Semester One 2023',
      status: 'Completed',
      gpa: 3.5,
      credits: 15,
      courses: [
        { 
          code: 'CS110', 
          name: 'Programming Basics', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A', 
          marks: [
            { name: 'Lab Work', weight: 20, score: 94 },
            { name: 'Midterm', weight: 30, score: 92 },
            { name: 'Final Project', weight: 50, score: 90 }
          ]
        },
        { 
          code: 'CS110-L', 
          name: 'Programming Basics Lab', 
          credits: 1, 
          status: 'Completed', 
          grade: 'A', 
          marks: [
            { name: 'Weekly Labs', weight: 70, score: 93 },
            { name: 'Final Lab', weight: 30, score: 95 }
          ]
        },
        { 
          code: 'MATH100', 
          name: 'College Algebra', 
          credits: 3, 
          status: 'Completed', 
          grade: 'B+', 
          marks: [
            { name: 'Homework', weight: 20, score: 90 },
            { name: 'Midterm', weight: 30, score: 82 },
            { name: 'Final Exam', weight: 50, score: 84 }
          ]
        },
        { 
          code: 'PHYS100', 
          name: 'Introduction to Physics', 
          credits: 4, 
          status: 'Completed', 
          grade: 'B', 
          marks: [
            { name: 'Labs', weight: 20, score: 85 },
            { name: 'Midterm', weight: 30, score: 78 },
            { name: 'Final Exam', weight: 50, score: 82 }
          ]
        },
        { 
          code: 'ART101', 
          name: 'Introduction to Digital Arts', 
          credits: 3, 
          status: 'Completed', 
          grade: 'A-', 
          marks: [
            { name: 'Portfolio', weight: 40, score: 88 },
            { name: 'Assignments', weight: 30, score: 90 },
            { name: 'Final Project', weight: 30, score: 86 }
          ]
        }
      ]
    }
  ],
  // Program requirements
  programRequirements: [
    { category: 'Core Computer Science', required: 60, completed: 24 },
    { category: 'Mathematics', required: 15, completed: 10 },
    { category: 'General Education', required: 30, completed: 9 },
    { category: 'Electives', required: 15, completed: 2 }
  ],
  // Academic achievements
  achievements: [
    { name: "Dean's List", date: '2023-12-15', description: "Fall 2023 Semester" },
    { name: "Dean's List", date: '2024-05-15', description: "Spring 2024 Semester" },
    { name: "Coding Competition - 2nd Place", date: '2024-03-20', description: "University Hackathon" }
  ]
};

// Calculate overall average
const calculateOverallAverage = () => {
  let totalGradePoints = 0;
  let totalCredits = 0;

  academicData.semesters.forEach(semester => {
    if (semester.status === 'Completed') {
      const semesterGradePoints = semester.gpa * semester.credits;
      totalGradePoints += semesterGradePoints;
      totalCredits += semester.credits;
    }
  });

  // Convert GPA to percentage (assuming 4.0 GPA = 100%)
  return totalCredits > 0 ? ((totalGradePoints / totalCredits) * 25).toFixed(2) : 0;
};

// Convert grade to GPA point
const gradeToGPA = (grade) => {
  const gradePoints = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'F': 0.0
  };
  
  return gradePoints[grade] || 0;
};

// Format date function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Get grade color based on performance
const getGradeColor = (grade) => {
  const gradeValue = gradeToGPA(grade);
  
  if (gradeValue >= 3.7) return 'success';
  if (gradeValue >= 3.0) return 'primary';
  if (gradeValue >= 2.0) return 'warning';
  return 'error';
};

const AcademicRecord = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [sortDirection, setSortDirection] = useState('desc');
  
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  
  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
  };
  
  // Function to generate a PDF for the transcript
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Academic Transcript', 10, 10);

    // Add student information
    doc.setFontSize(12);
    doc.text(`Name: ${academicData.studentInfo.name}`, 10, 20);
    doc.text(`Student ID: ${academicData.studentInfo.id}`, 10, 30);
    doc.text(`Program: ${academicData.studentInfo.program}`, 10, 40);

    // Add semester details
    let y = 50;
    academicData.semesters.forEach((semester) => {
      doc.setFontSize(14);
      doc.text(`${semester.name} (${semester.status})`, 10, y);
      y += 10;

      doc.setFontSize(12);
      semester.courses.forEach((course) => {
        doc.text(
          `${course.code} - ${course.name} (${course.credits} credits, Grade: ${course.grade})`,
          10,
          y
        );
        y += 10;
      });

      y += 5; // Add spacing between semesters
    });

    // Save the PDF
    doc.save('Academic_Transcript.pdf');
  };

  // Get student status
  const getStudentStatusChip = (status) => {
    switch (status) {
      case 'Good Standing':
        return <Chip label={status} color="success" size="small" />;
      case 'Academic Warning':
        return <Chip label={status} color="warning" size="small" />;
      case 'Academic Probation':
        return <Chip label={status} color="error" size="small" />;
      default:
        return <Chip label={status} color="default" size="small" />;
    }
  };
  
  // Get course status chip
  const getCourseStatusChip = (status) => {
    switch (status) {
      case 'Completed':
        return <Chip label={status} color="success" size="small" />;
      case 'In Progress':
        return <Chip label={status} color="primary" size="small" />;
      case 'Planned':
        return <Chip label={status} color="info" size="small" />;
      case 'Failed':
        return <Chip label={status} color="error" size="small" />;
      default:
        return <Chip label={status} color="default" size="small" />;
    }
  };
  
  // Calculate cumulative average
  const cumulativeAverage = calculateOverallAverage();
  
  // Sort semesters based on selected direction
  const sortedSemesters = [...academicData.semesters].sort((a, b) => {
    const comparison = new Date(b.name) - new Date(a.name);
    return sortDirection === 'desc' ? comparison : -comparison;
  });
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Academic Record
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="academic record tabs">
          <Tab label="Overview" />
          <Tab label="Course History" />
          <Tab label="Degree Progress" />
          <Tab label="Achievements" />
        </Tabs>
      </Box>
      
      {/* Tab 1: Overview */}
      {selectedTab === 0 && (
        <Box>
          {/* Student Information Card */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              mb: 2
            }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  {academicData.studentInfo.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Student ID: {academicData.studentInfo.id}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Program: {academicData.studentInfo.program}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  Status: {getStudentStatusChip(academicData.studentInfo.academicStanding)}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: { xs: 2, md: 0 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'flex-end' },
                }}
              >
                <Button 
                  variant="outlined" 
                  startIcon={<PrintIcon />}
                  sx={{ mb: 1 }}
                  size="small"
                  onClick={generatePDF} // Trigger PDF generation
                >
                  Print Record
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  size="small"
                  onClick={generatePDF} // Trigger PDF generation
                >
                  Download Transcript
                </Button>
              </Box>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" color="text.secondary">
                  Admission Date
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formatDate(academicData.studentInfo.admissionDate)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" color="text.secondary">
                  Expected Graduation
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formatDate(academicData.studentInfo.expectedGraduation)}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" color="text.secondary">
                  Total Credits Completed
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {academicData.studentInfo.totalCredits.completed} / {academicData.studentInfo.totalCredits.required}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          
          {/* Summary Cards */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Cumulative Average
                </Typography>
                <Box sx={{ 
                  position: 'relative', 
                  width: 160, 
                  height: 160, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '10px solid #f0f0f0',
                  borderTop: `10px solid ${
                    cumulativeAverage >= 90 ? '#4caf50' : 
                    cumulativeAverage >= 75 ? '#2196f3' : 
                    cumulativeAverage >= 50 ? '#ff9800' : '#f44336'
                  }`,
                  boxSizing: 'border-box',
                  mb: 2
                }}>
                  <Typography variant="h3" fontWeight="bold">
                    {cumulativeAverage}%
                  </Typography>
                </Box>
                <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
                  Based on {academicData.studentInfo.totalCredits.completed} completed credits
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Degree Progress
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">Credits Completed</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {academicData.studentInfo.totalCredits.completed} / {academicData.studentInfo.totalCredits.required}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(academicData.studentInfo.totalCredits.completed / academicData.studentInfo.totalCredits.required) * 100}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">Credits In Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {academicData.studentInfo.totalCredits.inProgress}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(academicData.studentInfo.totalCredits.inProgress / academicData.studentInfo.totalCredits.required) * 100}
                    color="secondary"
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Typography variant="body2" fontWeight="bold" sx={{ mt: 2 }}>
                  Overall Completion: {Math.round((academicData.studentInfo.totalCredits.completed / academicData.studentInfo.totalCredits.required) * 100)}%
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Average by Semester
                </Typography>
                <Box sx={{ 
                  mt: 2,
                  overflowY: 'auto',
                  maxHeight: '190px',
                  "&::-webkit-scrollbar": {
                    width: "8px"
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f1f1f1"
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#c1c1c1",
                    borderRadius: "4px"
                  }
                }}>
                  {academicData.semesters.filter(s => s.status === 'Completed').map((semester) => (
                    <Box key={semester.id} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                        <Typography variant="body2">{semester.name}</Typography>
                        <Typography variant="body2" fontWeight="bold">
                          Average: {(semester.gpa * 25).toFixed(1)}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={(semester.gpa / 4) * 100}
                        color={
                          semester.gpa >= 3.7 ? 'success' : 
                          semester.gpa >= 3.0 ? 'primary' : 
                          semester.gpa >= 2.0 ? 'warning' : 'error'
                        }
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
          
          {/* Current Semester */}
          <Paper elevation={3} sx={{ p: 3, mt: 10}}>
            <Typography variant="h6" gutterBottom>
              Current Semester - {academicData.semesters[0].name}
            </Typography>

            <TableContainer sx={{ mt: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Course Code</TableCell>
                    <TableCell>Course Name</TableCell>
                    <TableCell align="center">Credits</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {academicData.semesters[0].courses.map((course) => (
                    <TableRow key={course.code}>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell align="center">{course.credits}</TableCell>
                      <TableCell align="center">{getCourseStatusChip(course.status)}</TableCell>
                      <TableCell align="center">{course.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      )}
      
      {/* Tab 2: Course History */}
      {selectedTab === 1 && (
        <Box>
          <Box sx={{ 
            mb: 3, 
            display: 'flex', 
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="semester-select-label">Select Semester</InputLabel>
              <Select
                labelId="semester-select-label"
                id="semester-select"
                value={selectedSemester}
                label="Select Semester"
                onChange={handleSemesterChange}
              >
                <MenuItem value="all">All Semesters</MenuItem>
                {academicData.semesters.map((semester) => (
                  <MenuItem key={semester.id} value={semester.id}>
                    {semester.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <Button 
              variant="outlined" 
              startIcon={sortDirection === 'desc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
              onClick={toggleSortDirection}
            >
              {sortDirection === 'desc' ? 'Newest First' : 'Oldest First'}
            </Button>
          </Box>
          
          {(selectedSemester === 'all' ? sortedSemesters : 
            sortedSemesters.filter(s => s.id === selectedSemester))
            .map((semester) => (
              <Paper elevation={3} sx={{ p: 3, mb: 3 }} key={semester.id}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 0 }
                }}>
                  <Typography variant="h6">
                    {semester.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>
                      {semester.status === 'Completed' ? `Average: ${(semester.gpa * 25).toFixed(2)}%` : 'In Progress'}
                    </Typography>
                    {getCourseStatusChip(semester.status)}
                  </Box>
                </Box>
                
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Course Code</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell align="center">Credits</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Grade</TableCell>
                        <TableCell align="center">Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {semester.courses.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell>{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell align="center">{course.credits}</TableCell>
                          <TableCell align="center">{getCourseStatusChip(course.status)}</TableCell>
                          <TableCell align="center">
                            {course.grade !== '-' ? (
                              <Chip 
                                label={course.grade} 
                                color={getGradeColor(course.grade)} 
                                size="small" 
                              />
                            ) : '-'}
                          </TableCell>
                          <TableCell align="center">
                            {course.marks.length > 0 && (
                              <Tooltip title="View Grade Breakdown">
                                <IconButton size="small">
                                  <InfoIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                {semester.status === 'Completed' && (
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography variant="body2" fontWeight="bold">
                      Total Credits: {semester.credits} • Average: {(semester.gpa * 25).toFixed(2)}%
                    </Typography>
                  </Box>
                )}
              </Paper>
            ))}
        </Box>
      )}
      
      {/* Tab 3: Degree Progress */}
      {selectedTab === 2 && (
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 3, mb: { xs: 3, md: 0 } }}>
                <Typography variant="h6" gutterBottom>
                  Program Requirements
                </Typography>
                
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    You need to complete {academicData.studentInfo.totalCredits.required} credits to graduate from the {academicData.studentInfo.program} program.
                  </Typography>
                </Alert>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" fontWeight="bold">Overall Progress</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {academicData.studentInfo.totalCredits.completed} / {academicData.studentInfo.totalCredits.required} Credits
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(academicData.studentInfo.totalCredits.completed / academicData.studentInfo.totalCredits.required) * 100}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                
                {academicData.programRequirements.map((req, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{req.category}</Typography>
                      <Typography variant="body2">
                        {req.completed} / {req.required} Credits
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={(req.completed / req.required) * 100}
                      color={
                        (req.completed / req.required) >= 0.9 ? 'success' :
                        (req.completed / req.required) >= 0.6 ? 'primary' :
                        (req.completed / req.required) >= 0.3 ? 'warning' : 'error'
                      }
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" gutterBottom>
                  Graduation Eligibility
                </Typography>
                
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Requirement</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Minimum Credits</TableCell>
                        <TableCell>
                          {academicData.studentInfo.totalCredits.completed >= academicData.studentInfo.totalCredits.required ? (
                            <Chip icon={<CheckCircleIcon />} label="Complete" color="success" size="small" />
                          ) : (
                            <Chip icon={<HistoryIcon />} label="In Progress" color="primary" size="small" />
                          )}
                        </TableCell>
                        <TableCell>
                          {academicData.studentInfo.totalCredits.completed}/{academicData.studentInfo.totalCredits.required} credits completed
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Minimum Average</TableCell>
                        <TableCell>
                          {parseFloat(cumulativeAverage) >= 2.0 ? (
                            <Chip icon={<CheckCircleIcon />} label="Complete" color="success" size="small" />
                          ) : (
                            <Chip icon={<WarningIcon />} label="Not Met" color="error" size="small" />
                          )}
                        </TableCell>
                        <TableCell>
                          Current Average: {cumulativeAverage} (Minimum required: 2.0)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Core Courses</TableCell>
                        <TableCell>
                          <Chip icon={<HistoryIcon />} label="In Progress" color="primary" size="small" />
                        </TableCell>
                        <TableCell>
                          24/60 core credits completed
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Final Project/Thesis</TableCell>
                        <TableCell>
                          <Chip icon={<HistoryIcon />} label="Not Started" color="default" size="small" />
                        </TableCell>
                        <TableCell>
                          Required in final year
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Academic Advisor Notes
                </Typography>
                
                <Box sx={{ 
                  p: 2, 
                  bgcolor: '#f9f9f9', 
                  borderRadius: 1,
                  mb: 2
                }}>
                  <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                    "John has made excellent progress in his first year. I recommend taking CS202 (Algorithms) in the next semester to continue building core CS knowledge."
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    - Dr. Sarah Johnson, April 15, 2025
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  p: 2, 
                  bgcolor: '#f9f9f9', 
                  borderRadius: 1
                }}>
                  <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic' }}>
                    "Consider exploring electives in AI or Cloud Computing to complement your software engineering focus. These are high-demand areas in the industry."
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    - Dr. Sarah Johnson, February 10, 2025
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Upcoming Milestones
                  </Typography>
                  <Box sx={{ 
                    pl: 2, 
                    borderLeft: '2px solid #2196f3',
                    mt: 1
                  }}>
                    <Typography variant="body2" gutterBottom>
                      • Course registration for Fall 2025 opens June 1, 2025
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      • Mandatory advising session for third-year students in August 2025
                    </Typography>
                    <Typography variant="body2">
                      • Start planning for internship applications (recommended for Summer 2026)
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
      
      {/* Tab 4: Achievements */}
      {selectedTab === 3 && (
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ p: 3, mb: { xs: 3, md: 0 } }}>
                <Typography variant="h6" gutterBottom>
                  Academic Achievements
                </Typography>
                
                {academicData.achievements.map((achievement, index) => (
                  <Card key={index} sx={{ mb: 2, bgcolor: '#f9f9f9' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <EmojiEventsIcon sx={{ color: '#ffc107', mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {achievement.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {formatDate(achievement.date)}
                          </Typography>
                          <Typography variant="body2">
                            {achievement.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
                
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Continue maintaining your academic excellence to receive more achievements!
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{ mt: 1 }}
                  >
                    View All Honors and Awards
                  </Button>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Academic Statistics
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Performance by Subject Area
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">Computer Science</Typography>
                      <Typography variant="body2" fontWeight="bold">3.8</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={95}
                      color="success"
                      sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">Mathematics</Typography>
                      <Typography variant="body2" fontWeight="bold">3.3</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={82.5}
                      color="primary"
                      sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">General Studies</Typography>
                      <Typography variant="body2" fontWeight="bold">3.6</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={90}
                      color="success"
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Academic Resources
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Button startIcon={<ArticleIcon />} sx={{ mb: 1, textAlign: 'left', justifyContent: 'flex-start' }}>
                      Academic Calendar
                    </Button>
                    <Button startIcon={<SchoolIcon />} sx={{ mb: 1, textAlign: 'left', justifyContent: 'flex-start' }}>
                      Scholarship Opportunities
                    </Button>
                    <Button startIcon={<TrendingUpIcon />} sx={{ textAlign: 'left', justifyContent: 'flex-start' }}>
                      Career Planning Resources
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default AcademicRecord;