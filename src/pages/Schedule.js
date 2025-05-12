
import { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,

  TableRow,
  Chip,
  IconButton
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import DownloadIcon from '@mui/icons-material/Download';

// Mock data for the schedule
const mockScheduleData = [
  {
    id: 1,
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:30',
    module: 'Introduction to Programming',
    moduleCode: 'CS101',
    type: 'Lecture',
    location: 'Room A101',
    lecturer: 'Dr. James Smith'
  },
  {
    id: 2,
    day: 'Monday',
    startTime: '11:00',
    endTime: '12:30',
    module: 'Database Systems',
    moduleCode: 'CS205',
    type: 'Lecture',
    location: 'Room B202',
    lecturer: 'Dr. Sarah Johnson'
  },
  {
    id: 3,
    day: 'Tuesday',
    startTime: '10:00',
    endTime: '11:30',
    module: 'Web Development',
    moduleCode: 'CS203',
    type: 'Practical',
    location: 'Lab C305',
    lecturer: 'Prof. David Williams'
  },
  {
    id: 4,
    day: 'Wednesday',
    startTime: '14:00',
    endTime: '15:30',
    module: 'Introduction to Programming',
    moduleCode: 'CS101',
    type: 'Tutorial',
    location: 'Room D105',
    lecturer: 'Mr. Robert Brown'
  },
  {
    id: 5,
    day: 'Thursday',
    startTime: '09:00',
    endTime: '10:30',
    module: 'Software Engineering',
    moduleCode: 'CS301',
    type: 'Lecture',
    location: 'Room A101',
    lecturer: 'Dr. Jennifer Davis'
  },
  {
    id: 6,
    day: 'Friday',
    startTime: '13:00',
    endTime: '16:00',
    module: 'Software Engineering',
    moduleCode: 'CS301',
    type: 'Practical',
    location: 'Lab C308',
    lecturer: 'Dr. Jennifer Davis'
  },
];

// Organize schedule by day
const scheduleByDay = {
  'Monday': mockScheduleData.filter(item => item.day === 'Monday'),
  'Tuesday': mockScheduleData.filter(item => item.day === 'Tuesday'),
  'Wednesday': mockScheduleData.filter(item => item.day === 'Wednesday'),
  'Thursday': mockScheduleData.filter(item => item.day === 'Thursday'),
  'Friday': mockScheduleData.filter(item => item.day === 'Friday'),
};

// Color mapping for different class types
const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case 'lecture':
      return 'primary';
    case 'tutorial':
      return 'success';
    case 'practical':
      return 'warning';
    default:
      return 'default';
  }
};


const getDateTimeFromSchedule = (day, time) => {
  const dayMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const targetDay = dayMap.indexOf(day);
  const currentDay = now.getDay();
  const dayDiff = (targetDay - currentDay + 7) % 7;
  const [hour, minute] = time.split(':');
  const date = new Date(now);
  date.setDate(now.getDate() + dayDiff);
  date.setHours(parseInt(hour), parseInt(minute), 0, 0);
  return date;
};

const getUpcomingSessions = () => {
  const now = new Date();
  return mockScheduleData
    .map(session => ({ ...session, dateTime: getDateTimeFromSchedule(session.day, session.startTime) }))
    .filter(session => session.dateTime > now)
    .sort((a, b) => a.dateTime - b.dateTime)
    .slice(0, 3);
};

const mockAttendanceData = [
  { module: 'Introduction to Programming', code: 'CS101', attended: 8, total: 10 },
  { module: 'Database Systems', code: 'CS205', attended: 7, total: 9 },
  { module: 'Software Engineering', code: 'CS301', attended: 9, total: 10 }
];


const Schedule = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (

    <Box>
      <Typography variant="h4" gutterBottom>
        Class Schedule
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            <CalendarMonthIcon sx={{ mr: 1, verticalAlign: 'middle' }} />

            Weekly Timetable
          </Typography>
          <IconButton 
            aria-label="download schedule" 
            color="primary" 
            title="Download Schedule"
          >
            <DownloadIcon />
          </IconButton>
        </Box>

        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={currentTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            aria-label="schedule days tabs"
          >
            {days.map((day, index) => (
              <Tab key={day} label={day} id={`schedule-tab-${index}`} />
            ))}
          </Tabs>
        </Box>
        
        {days.map((day, index) => (
          <Box
            key={day}
            role="tabpanel"
            hidden={currentTab !== index}
            id={`schedule-tabpanel-${index}`}
            aria-labelledby={`schedule-tab-${index}`}
            sx={{ mt: 2 }}
          >
            {currentTab === index && (
              scheduleByDay[day].length > 0 ? (
                <TableContainer>
                  <Table aria-label={`${day} schedule`}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Module</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Lecturer</TableCell>


                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {scheduleByDay[day].map((session) => (
                        <TableRow key={session.id}>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <EventIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              {session.startTime} - {session.endTime}
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontWeight="bold">
                              {session.module}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {session.moduleCode}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={session.type} 
                              color={getTypeColor(session.type)} 
                              size="small" 
                              variant="outlined"
                            />
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <RoomIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              {session.location}
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <PersonIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                              {session.lecturer}
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Typography variant="body1" sx={{ textAlign: 'center', py: 3 }}>
                  No classes scheduled for {day}.
                </Typography>
              )
            )}
          </Box>
        ))}
      </Paper>

      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Events
            </Typography>
            <Typography variant="body2">
              No upcoming events or schedule changes to display.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Class Attendance
            </Typography>
            <Typography variant="body2">
              Track your attendance and view your attendance statistics here.
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Schedule;