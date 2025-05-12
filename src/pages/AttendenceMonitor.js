import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  CircularProgress,
  LinearProgress,
  Card,
  CardContent,
} from "@mui/material";
import {
  ArrowBack as BackIcon,
  Search as SearchIcon,
  DateRange as DateRangeIcon,
  FilterList as FilterIcon,
  Refresh as RefreshIcon,
  Assignment as ReportIcon,
  Download as DownloadIcon,
  CheckCircle as PresentIcon,
  Cancel as AbsentIcon,
  AccessTime as LateIcon,
  Group as BatchIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AttendanceMonitoring() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedDate, setSelectedDate] = useState("2025-05-12");

  // Sample overview data
  const overviewData = {
    totalClasses: 145,
    totalStudents: 2380,
    averageAttendance: 87,
    departments: [
      { name: "Computer Science", attendanceRate: 92 },
      { name: "Mathematics", attendanceRate: 85 },
      { name: "Physics", attendanceRate: 88 },
      { name: "Biology", attendanceRate: 83 },
      { name: "Engineering", attendanceRate: 90 },
    ],
    courses: [
      { code: "CS101", name: "Introduction to Programming", attendanceRate: 95 },
      { code: "CS201", name: "Data Structures", attendanceRate: 89 },
      { code: "MTH202", name: "Calculus II", attendanceRate: 78 },
      { code: "PHY101", name: "Physics I", attendanceRate: 82 },
      { code: "BIO201", name: "Cell Biology", attendanceRate: 87 },
    ],
  };

  // Sample attendance records
  const attendanceRecords = [
    {
      id: 1,
      course: "CS101",
      courseName: "Introduction to Programming",
      instructor: "Dr. John Smith",
      department: "Computer Science",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      totalStudents: 45,
      present: 42,
      absent: 2,
      late: 1,
      attendanceRate: 93,
    },
    {
      id: 2,
      course: "MTH202",
      courseName: "Calculus II",
      instructor: "Dr. Lisa Chen",
      department: "Mathematics",
      date: "2025-05-12",
      time: "13:00 - 14:30",
      totalStudents: 38,
      present: 30,
      absent: 5,
      late: 3,
      attendanceRate: 79,
    },
    {
      id: 3,
      course: "PHY101",
      courseName: "Physics I",
      instructor: "Prof. Robert Johnson",
      department: "Physics",
      date: "2025-05-12",
      time: "09:00 - 10:30",
      totalStudents: 52,
      present: 48,
      absent: 3,
      late: 1,
      attendanceRate: 92,
    },
    {
      id: 4,
      course: "BIO201",
      courseName: "Cell Biology",
      instructor: "Dr. Sarah Williams",
      department: "Biology",
      date: "2025-05-12",
      time: "14:30 - 16:00",
      totalStudents: 35,
      present: 29,
      absent: 4,
      late: 2,
      attendanceRate: 83,
    },
    {
      id: 5,
      course: "CS201",
      courseName: "Data Structures",
      instructor: "Prof. Michael Lee",
      department: "Computer Science",
      date: "2025-05-12",
      time: "11:30 - 13:00",
      totalStudents: 40,
      present: 36,
      absent: 2,
      late: 2,
      attendanceRate: 90,
    },
  ];

  // Sample student-level attendance
  const studentAttendance = [
    {
      id: 1,
      name: "Alex Johnson",
      studentId: "ST12345",
      course: "CS101",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      status: "Present",
      checkinTime: "09:55",
    },
    {
      id: 2,
      name: "Taylor Rodriguez",
      studentId: "ST12346",
      course: "CS101",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      status: "Late",
      checkinTime: "10:12",
    },
    {
      id: 3,
      name: "Jamie Smith",
      studentId: "ST12347",
      course: "CS101",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      status: "Present",
      checkinTime: "09:48",
    },
    {
      id: 4,
      name: "Morgan Lee",
      studentId: "ST12348",
      course: "CS101",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      status: "Absent",
      checkinTime: "-",
    },
    {
      id: 5,
      name: "Casey Brown",
      studentId: "ST12349",
      course: "CS101",
      date: "2025-05-12",
      time: "10:00 - 11:30",
      status: "Present",
      checkinTime: "09:52",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Filter the attendance records based on department and course
  const filteredRecords = attendanceRecords.filter((record) => {
    const matchesDepartment = selectedDepartment === "all" || record.department === selectedDepartment;
    const matchesCourse = selectedCourse === "all" || record.course === selectedCourse;
    return matchesDepartment && matchesCourse;
  });

  // Get status chip color
  const getStatusChipColor = (status) => {
    switch (status) {
      case "Present":
        return { bg: "#4caf50", color: "white" };
      case "Absent":
        return { bg: "#f44336", color: "white" };
      case "Late":
        return { bg: "#ff9800", color: "white" };
      default:
        return { bg: "#9e9e9e", color: "white" };
    }
  };

  // Get attendance rate color
  const getAttendanceRateColor = (rate) => {
    if (rate >= 90) return "#4caf50";
    if (rate >= 80) return "#8bc34a";
    if (rate >= 70) return "#ffeb3b";
    if (rate >= 60) return "#ff9800";
    return "#f44336";
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "#ffffff",
        color: "#333333",
      }}
    >
      {/* Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton 
          onClick={() => navigate(-1)} 
          sx={{ mr: 2, color: "#1976d2" }}
        >
          <BackIcon />
        </IconButton>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            Attendance Monitoring
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#555555",
            }}
          >
            Track and analyze attendance across departments and courses
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Tabs for different views */}
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        sx={{ 
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: '#1976d2',
          },
          '& .Mui-selected': {
            color: '#1976d2 !important',
          }
        }}
      >
        <Tab label="Overview" />
        <Tab label="Classes" />
        <Tab label="Students" />
        <Tab label="Reports" />
      </Tabs>

      {/* Filter and Search Bar */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3 }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ flexGrow: 1, minWidth: 200 }}
        />
        <TextField
          size="small"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 200 }}
        />
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Department</InputLabel>
          <Select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            label="Department"
          >
            <MenuItem value="all">All Departments</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Mathematics">Mathematics</MenuItem>
            <MenuItem value="Physics">Physics</MenuItem>
            <MenuItem value="Biology">Biology</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Course</InputLabel>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            label="Course"
          >
            <MenuItem value="all">All Courses</MenuItem>
            <MenuItem value="CS101">CS101 - Intro to Programming</MenuItem>
            <MenuItem value="CS201">CS201 - Data Structures</MenuItem>
            <MenuItem value="MTH202">MTH202 - Calculus II</MenuItem>
            <MenuItem value="PHY101">PHY101 - Physics I</MenuItem>
            <MenuItem value="BIO201">BIO201 - Cell Biology</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          sx={{ minWidth: 120 }}
        >
          Refresh
        </Button>
      </Box>

      {/* Overview Tab Content */}
      {tabValue === 0 && (
        <Box>
          {/* Summary Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Total Classes
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {overviewData.totalClasses}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#555" }}>
                  Active classes this semester
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Total Students
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {overviewData.totalStudents}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#555" }}>
                  Enrolled students
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 152, 0, 0.1)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Average Attendance
                </Typography>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    {overviewData.averageAttendance}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={overviewData.averageAttendance}
                  sx={{
                    mt: 1,
                    mb: 1,
                    height: 8,
                    borderRadius: 2,
                    backgroundColor: "#e0e0e0",
                  }}
                />
                <Typography variant="subtitle2" sx={{ color: "#555" }}>
                  Across all departments
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "rgba(123, 31, 162, 0.1)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Today's Classes
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {filteredRecords.length}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#555" }}>
                  {selectedDate}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Department Performance */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Department Attendance Rates
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {overviewData.departments.map((dept, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body2">{dept.name}</Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: getAttendanceRateColor(dept.attendanceRate),
                          }}
                        >
                          {dept.attendanceRate}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={dept.attendanceRate}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          backgroundColor: "#e0e0e0",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: getAttendanceRateColor(
                              dept.attendanceRate
                            ),
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Top Courses by Attendance
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Course Code</TableCell>
                        <TableCell>Course Name</TableCell>
                        <TableCell align="right">Attendance Rate</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {overviewData.courses
                        .sort((a, b) => b.attendanceRate - a.attendanceRate)
                        .map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>{course.code}</TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontWeight: "bold",
                                color: getAttendanceRateColor(
                                  course.attendanceRate
                                ),
                              }}
                            >
                              {course.attendanceRate}%
                            </TableCell>
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

      {/* Classes Tab Content */}
      {tabValue === 1 && (
        <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">
              Class Attendance Records: {selectedDate}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              size="small"
            >
              Export
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Instructor</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Students</TableCell>
                  <TableCell>Present</TableCell>
                  <TableCell>Absent</TableCell>
                  <TableCell>Late</TableCell>
                  <TableCell align="right">Rate</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          {record.course}
                        </Typography>
                        <Typography variant="caption">
                          {record.courseName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell>{record.instructor}</TableCell>
                    <TableCell>{record.time}</TableCell>
                    <TableCell>{record.totalStudents}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <PresentIcon
                          fontSize="small"
                          sx={{ color: "#4caf50", mr: 0.5 }}
                        />
                        {record.present}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AbsentIcon
                          fontSize="small"
                          sx={{ color: "#f44336", mr: 0.5 }}
                        />
                        {record.absent}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LateIcon
                          fontSize="small"
                          sx={{ color: "#ff9800", mr: 0.5 }}
                        />
                        {record.late}
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: getAttendanceRateColor(record.attendanceRate),
                        }}
                      >
                        {record.attendanceRate}%
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => navigate(`/attendance/class/${record.id}`)}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {/* Students Tab Content */}
      {tabValue === 2 && (
        <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Student Attendance Records</Typography>
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              size="small"
            >
              Export
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Check-in Time</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentAttendance.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.date}</TableCell>
                    <TableCell>{student.time}</TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={student.status}
                        sx={{
                          backgroundColor: getStatusChipColor(student.status).bg,
                          color: getStatusChipColor(student.status).color,
                        }}
                      />
                    </TableCell>
                    <TableCell>{student.checkinTime}</TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() =>
                          navigate(`/attendance/student/${student.studentId}`)
                        }
                      >
                        History
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}

      {/* Reports Tab Content */}
      {tabValue === 3 && (
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Generate Reports
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Report Type</InputLabel>
                      <Select
                        label="Report Type"
                        defaultValue="weekly"
                      >
                        <MenuItem value="daily">Daily Attendance</MenuItem>
                        <MenuItem value="weekly">Weekly Summary</MenuItem>
                        <MenuItem value="monthly">Monthly Analysis</MenuItem>
                        <MenuItem value="course">Course-wise Reports</MenuItem>
                        <MenuItem value="department">
                          Department-wise Reports
                        </MenuItem>
                        <MenuItem value="student">
                          Student Attendance History
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Start Date"
                      type="date"
                      defaultValue="2025-05-01"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      size="small"
                      label="End Date"
                      type="date"
                      defaultValue="2025-05-12"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Format</InputLabel>
                      <Select
                        label="Format"
                        defaultValue="pdf"
                      >
                        <MenuItem value="pdf">PDF</MenuItem>
                        <MenuItem value="excel">Excel</MenuItem>
                        <MenuItem value="csv">CSV</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ReportIcon />}
                    >
                      Generate Report
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }} elevation={2}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Recent Reports
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Report Name</TableCell>
                        <TableCell>Generated</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Weekly Summary (May 1-7)</TableCell>
                        <TableCell>2025-05-08</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>CS Department Report (April)</TableCell>
                        <TableCell>2025-05-02</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>CS101 Course Report (April)</TableCell>
                        <TableCell>2025-05-01</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Monthly Analysis (April)</TableCell>
                        <TableCell>2025-05-01</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default AttendanceMonitoring;