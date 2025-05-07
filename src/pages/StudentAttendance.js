import { useState } from 'react';
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
  LinearProgress,
  Card,
  CardContent,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Tab,
  Tabs,
  ButtonGroup,
  Button,
  Divider,
  Alert,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';

// Mock attendance data
const attendanceData = {
  'CS101': {
    name: 'Introduction to Programming',
    type: 'Lecture',
    attended: 12,
    total: 15,
    percentage: 80,
    sessions: [
      { date: '2025-03-03', status: 'present', notes: '' },
      { date: '2025-03-10', status: 'present', notes: '' },
      { date: '2025-03-17', status: 'present', notes: '' },
      { date: '2025-03-24', status: 'absent', notes: 'Medical absence' },
      { date: '2025-03-31', status: 'present', notes: '' },
      { date: '2025-04-07', status: 'present', notes: '' },
      { date: '2025-04-14', status: 'present', notes: '' },
      { date: '2025-04-21', status: 'present', notes: '' },
      { date: '2025-04-28', status: 'late', notes: 'Late by 10 minutes' },
      { date: '2025-05-05', status: 'present', notes: '' },
    ],
  },
  'CS101-T': {
    name: 'Introduction to Programming',
    type: 'Tutorial',
    attended: 9,
    total: 10,
    percentage: 90,
    sessions: [
      { date: '2025-03-05', status: 'present', notes: '' },
      { date: '2025-03-12', status: 'present', notes: '' },
      { date: '2025-03-19', status: 'present', notes: '' },
      { date: '2025-03-26', status: 'present', notes: '' },
      { date: '2025-04-02', status: 'present', notes: '' },
      { date: '2025-04-09', status: 'present', notes: '' },
      { date: '2025-04-16', status: 'present', notes: '' },
      { date: '2025-04-23', status: 'absent', notes: 'Medical absence' },
      { date: '2025-04-30', status: 'present', notes: '' },
      { date: '2025-05-07', status: 'present', notes: '' },
    ],
  },
  'CS205': {
    name: 'Database Systems',
    type: 'Lecture',
    attended: 13,
    total: 15,
    percentage: 86.67,
    sessions: [
      { date: '2025-03-04', status: 'present', notes: '' },
      { date: '2025-03-11', status: 'present', notes: '' },
      { date: '2025-03-18', status: 'present', notes: '' },
      { date: '2025-03-25', status: 'present', notes: '' },
      { date: '2025-04-01', status: 'present', notes: '' },
      { date: '2025-04-08', status: 'present', notes: '' },
      { date: '2025-04-15', status: 'absent', notes: '' },
      { date: '2025-04-22', status: 'present', notes: '' },
      { date: '2025-04-29', status: 'present', notes: '' },
      { date: '2025-05-06', status: 'present', notes: '' },
    ],
  },
  'CS203': {
    name: 'Web Development',
    type: 'Practical',
    attended: 8,
    total: 10,
    percentage: 80,
    sessions: [
      { date: '2025-03-06', status: 'present', notes: '' },
      { date: '2025-03-13', status: 'present', notes: '' },
      { date: '2025-03-20', status: 'present', notes: '' },
      { date: '2025-03-27', status: 'absent', notes: '' },
      { date: '2025-04-03', status: 'present', notes: '' },
      { date: '2025-04-10', status: 'present', notes: '' },
      { date: '2025-04-17', status: 'present', notes: '' },
      { date: '2025-04-24', status: 'present', notes: '' },
      { date: '2025-05-01', status: 'absent', notes: 'University holiday' },
      { date: '2025-05-08', status: 'present', notes: '' },
    ],
  },
  'CS301': {
    name: 'Software Engineering',
    type: 'Lecture',
    attended: 14,
    total: 15,
    percentage: 93.33,
    sessions: [
      { date: '2025-03-06', status: 'present', notes: '' },
      { date: '2025-03-13', status: 'present', notes: '' },
      { date: '2025-03-20', status: 'present', notes: '' },
      { date: '2025-03-27', status: 'present', notes: '' },
      { date: '2025-04-03', status: 'present', notes: '' },
      { date: '2025-04-10', status: 'present', notes: '' },
      { date: '2025-04-17', status: 'present', notes: '' },
      { date: '2025-04-24', status: 'absent', notes: 'Medical absence' },
      { date: '2025-05-01', status: 'present', notes: '' },
      { date: '2025-05-08', status: 'present', notes: '' },
    ],
  },
  'CS301-P': {
    name: 'Software Engineering',
    type: 'Practical',
    attended: 9,
    total: 10,
    percentage: 90,
    sessions: [
      { date: '2025-03-07', status: 'present', notes: '' },
      { date: '2025-03-14', status: 'present', notes: '' },
      { date: '2025-03-21', status: 'present', notes: '' },
      { date: '2025-03-28', status: 'present', notes: '' },
      { date: '2025-04-04', status: 'present', notes: '' },
      { date: '2025-04-11', status: 'present', notes: '' },
      { date: '2025-04-18', status: 'absent', notes: 'Medical absence' },
      { date: '2025-04-25', status: 'present', notes: '' },
      { date: '2025-05-02', status: 'present', notes: '' },
      { date: '2025-05-09', status: 'present', notes: '' },
    ],
  }
};

// Calculate overall attendance
const calculateOverallAttendance = () => {
  let totalAttended = 0;
  let totalSessions = 0;
  
  Object.values(attendanceData).forEach(course => {
    totalAttended += course.attended;
    totalSessions += course.total;
  });
  
  return {
    attended: totalAttended,
    total: totalSessions,
    percentage: (totalAttended / totalSessions) * 100
  };
};

const overallAttendance = calculateOverallAttendance();

// Get recent attendance records sorted by date
const getRecentAttendanceRecords = (limit = 5) => {
  const allRecords = Object.entries(attendanceData).flatMap(([courseId, course]) => 
    course.sessions.map(session => ({
      ...session,
      courseId,
      courseName: course.name,
      courseType: course.type
    }))
  );
  
  return allRecords
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Status chip renderer
const getStatusChip = (status) => {
  switch (status) {
    case 'present':
      return <Chip icon={<CheckCircleIcon />} label="Present" color="success" size="small" />;
    case 'absent':
      return <Chip icon={<CancelIcon />} label="Absent" color="error" size="small" />;
    case 'late':
      return <Chip icon={<PlayCircleFilledIcon />} label="Late" color="warning" size="small" />;
    default:
      return <Chip label="Unknown" color="default" size="small" />;
  }
};

// Attendance level renderer
const getAttendanceLevel = (percentage) => {
  if (percentage >= 90) {
    return { color: 'success', text: 'Excellent' };
  } else if (percentage >= 80) {
    return { color: 'primary', text: 'Good' };
  } else if (percentage >= 70) {
    return { color: 'warning', text: 'Satisfactory' };
  } else {
    return { color: 'error', text: 'Needs Improvement' };
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const ScheduleAttendence = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('semester');
  const [selectedCourse, setSelectedCourse] = useState('all');
  
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };
  
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Attendance Tracker
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} aria-label="attendance tabs">
          <Tab label="Overview" />
          <Tab label="Detailed Records" />
        </Tabs>
      </Box>
      
      {selectedTab === 0 && (
        <Box>
          {/* First row of cards - Summary Information */}
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  height: { xs: 'auto', md: '340px' }
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Overall Attendance
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                  <Box 
                    sx={{ 
                      position: 'relative', 
                      width: 160, 
                      height: 160, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderRadius: '50%',
                      border: '10px solid #f0f0f0',
                      borderTop: `10px solid ${
                        overallAttendance.percentage >= 90 ? '#4caf50' : 
                        overallAttendance.percentage >= 80 ? '#2196f3' : 
                        overallAttendance.percentage >= 70 ? '#ff9800' : '#f44336'
                      }`,
                      boxSizing: 'border-box',
                      mb: 2
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {Math.round(overallAttendance.percentage)}%
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {overallAttendance.attended} of {overallAttendance.total} sessions attended
                  </Typography>
                  <Chip 
                    label={getAttendanceLevel(overallAttendance.percentage).text} 
                    color={getAttendanceLevel(overallAttendance.percentage).color} 
                  />
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: { xs: 'auto', md: '340px' },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Attendance Policy
                </Typography>
                <Box sx={{ mb: 2, flex: 1 }}>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Students are required to maintain at least 75% attendance in all courses.
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Falling below 75% attendance may result in academic penalties and may affect your eligibility to sit for examinations.
                  </Typography>
                  <Typography variant="body2">
                    Medical absences require appropriate documentation to be submitted within 7 days.
                  </Typography>
                </Box>
                <Box sx={{ mt: 'auto' }}>
                  {overallAttendance.percentage < 75 && (
                    <Alert severity="warning">
                      Your attendance is below the required 75% threshold.
                    </Alert>
                  )}
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: { xs: 'auto', md: '340px' },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Course-wise Attendance
                </Typography>
                <Box sx={{ 
                  overflowY: 'auto', 
                  flex: 1,
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
                  {Object.entries(attendanceData).map(([courseId, course]) => (
                    <Box key={courseId} sx={{ mb: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {course.name} ({course.type})
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, mr: 2 }}>
                          <LinearProgress 
                            variant="determinate" 
                            value={course.percentage} 
                            color={getAttendanceLevel(course.percentage).color}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                        </Box>
                        <Typography variant="body2" sx={{ minWidth: '45px', textAlign: 'right' }}>
                          {course.percentage.toFixed(1)}%
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Second row - Recent Attendance */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  mb: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 0 }
                }}>
                  <Typography variant="h6">
                    Recent Attendance
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: { xs: 'space-between', sm: 'flex-end' }
                  }}>
                    <FormControl size="small" sx={{ minWidth: 150, mr: 2 }}>
                      <InputLabel id="period-select-label">Time Period</InputLabel>
                      <Select
                        labelId="period-select-label"
                        id="period-select"
                        value={selectedPeriod}
                        label="Time Period"
                        onChange={handlePeriodChange}
                      >
                        <MenuItem value="week">Last Week</MenuItem>
                        <MenuItem value="month">Last Month</MenuItem>
                        <MenuItem value="semester">This Semester</MenuItem>
                      </Select>
                    </FormControl>
                    <Button 
                      variant="outlined" 
                      startIcon={<FilterListIcon />}
                      size="small"
                    >
                      Filter
                    </Button>
                  </Box>
                </Box>
                
                <TableContainer sx={{ overflowX: 'auto' }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Course</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Notes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getRecentAttendanceRecords().map((record, index) => (
                        <TableRow key={index}>
                          <TableCell>{formatDate(record.date)}</TableCell>
                          <TableCell>{record.courseName}</TableCell>
                          <TableCell>{record.courseType}</TableCell>
                          <TableCell>{getStatusChip(record.status)}</TableCell>
                          <TableCell>{record.notes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
      
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
              <InputLabel id="course-select-label">Select Course</InputLabel>
              <Select
                labelId="course-select-label"
                id="course-select"
                value={selectedCourse}
                label="Select Course"
                onChange={handleCourseChange}
              >
                <MenuItem value="all">All Courses</MenuItem>
                {Object.entries(attendanceData).map(([courseId, course]) => (
                  <MenuItem key={courseId} value={courseId}>
                    {course.name} ({course.type})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <ButtonGroup variant="outlined">
              <Button startIcon={<CalendarTodayIcon />}>
                Calendar View
              </Button>
              <Button startIcon={<TrendingUpIcon />}>
                Trends
              </Button>
            </ButtonGroup>
          </Box>
          
          <Paper elevation={3}>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Display detailed attendance records based on selected course */}
                  {(selectedCourse === 'all' ? 
                    Object.entries(attendanceData).flatMap(([courseId, course]) => 
                      course.sessions.map((session) => ({
                        ...session,
                        courseId,
                        courseName: course.name,
                        courseType: course.type
                      }))
                    ) : 
                    attendanceData[selectedCourse].sessions.map((session) => ({
                      ...session,
                      courseId: selectedCourse,
                      courseName: attendanceData[selectedCourse].name,
                      courseType: attendanceData[selectedCourse].type
                    }))
                  ).sort((a, b) => new Date(b.date) - new Date(a.date)).map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{formatDate(record.date)}</TableCell>
                      <TableCell>{record.courseName}</TableCell>
                      <TableCell>{record.courseType}</TableCell>
                      <TableCell>{getStatusChip(record.status)}</TableCell>
                      <TableCell>{record.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ScheduleAttendence;