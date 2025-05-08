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
  IconButton,
  LinearProgress
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import DownloadIcon from '@mui/icons-material/Download';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';

// Mock schedule data
const mockScheduleData = [
  { id: 1, day: 'Monday', startTime: '09:00', endTime: '10:30', module: 'Introduction to Programming', moduleCode: 'CS101', type: 'Lecture', location: 'Room A101', lecturer: 'Dr. James Smith' },
  { id: 2, day: 'Monday', startTime: '11:00', endTime: '12:30', module: 'Database Systems', moduleCode: 'CS205', type: 'Lecture', location: 'Room B202', lecturer: 'Dr. Sarah Johnson' },
  { id: 3, day: 'Tuesday', startTime: '10:00', endTime: '11:30', module: 'Web Development', moduleCode: 'CS203', type: 'Practical', location: 'Lab C305', lecturer: 'Prof. David Williams' },
  { id: 4, day: 'Wednesday', startTime: '14:00', endTime: '15:30', module: 'Introduction to Programming', moduleCode: 'CS101', type: 'Tutorial', location: 'Room D105', lecturer: 'Mr. Robert Brown' },
  { id: 5, day: 'Thursday', startTime: '09:00', endTime: '10:30', module: 'Software Engineering', moduleCode: 'CS301', type: 'Lecture', location: 'Room A101', lecturer: 'Dr. Jennifer Davis' },
  { id: 6, day: 'Friday', startTime: '13:00', endTime: '16:00', module: 'Software Engineering', moduleCode: 'CS301', type: 'Practical', location: 'Lab C308', lecturer: 'Dr. Jennifer Davis' },
];

// Organize by day
const scheduleByDay = {
  'Monday': mockScheduleData.filter(item => item.day === 'Monday'),
  'Tuesday': mockScheduleData.filter(item => item.day === 'Tuesday'),
  'Wednesday': mockScheduleData.filter(item => item.day === 'Wednesday'),
  'Thursday': mockScheduleData.filter(item => item.day === 'Thursday'),
  'Friday': mockScheduleData.filter(item => item.day === 'Friday'),
};

// Color mapping
const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case 'lecture': return 'primary';
    case 'tutorial': return 'success';
    case 'practical': return 'warning';
    default: return 'default';
  }
};

// Helper: Convert to 24hr Date object
const getDateTimeFromSchedule = (day, time) => {
  const dayMap = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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

// Sort and get upcoming sessions
const getUpcomingSessions = () => {
  const now = new Date();
  const upcoming = mockScheduleData
    .map(session => ({ ...session, dateTime: getDateTimeFromSchedule(session.day, session.startTime) }))
    .filter(session => session.dateTime > now)
    .sort((a, b) => a.dateTime - b.dateTime)
    .slice(0, 3);
  return upcoming;
};

// Mock attendance data
const mockAttendanceData = [
  { module: 'Introduction to Programming', code: 'CS101', attended: 8, total: 10 },
  { module: 'Database Systems', code: 'CS205', attended: 7, total: 9 },
  { module: 'Software Engineering', code: 'CS301', attended: 9, total: 10 }
];

const Schedule = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    setUpcomingEvents(getUpcomingSessions());
  }, []);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Class Schedule
      </Typography>

      {/* Weekly Timetable */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            <CalendarMonthIcon sx={{ mr: 1 }} />
            Weekly Timetable
          </Typography>
          <IconButton aria-label="download schedule" color="primary">
            <DownloadIcon />
          </IconButton>
        </Box>

        <Tabs value={currentTab} onChange={(e, newVal) => setCurrentTab(newVal)} variant="scrollable" scrollButtons="auto">
          {days.map((day, i) => <Tab key={day} label={day} id={`tab-${i}`} />)}
        </Tabs>

        {days.map((day, i) => (
          <Box key={day} hidden={currentTab !== i} sx={{ mt: 2 }}>
            {scheduleByDay[day].length > 0 ? (
              <TableContainer>
                <Table>
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
                          <EventIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                          {session.startTime} - {session.endTime}
                        </TableCell>
                        <TableCell>
                          <Typography fontWeight="bold">{session.module}</Typography>
                          <Typography variant="caption" color="text.secondary">{session.moduleCode}</Typography>
                        </TableCell>
                        <TableCell>
                          <Chip label={session.type} color={getTypeColor(session.type)} size="small" variant="outlined" />
                        </TableCell>
                        <TableCell>
                          <RoomIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                          {session.location}
                        </TableCell>
                        <TableCell>
                          <PersonIcon sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                          {session.lecturer}
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
            )}
          </Box>
        ))}
      </Paper>

      {/* Events + Attendance */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Events
            </Typography>
            {upcomingEvents.length === 0 ? (
              <Typography variant="body2">No upcoming events.</Typography>
            ) : (
              upcomingEvents.map((event) => (
                <Box key={event.id} sx={{ mb: 2 }}>
                  <Typography fontWeight="bold">
                    <AccessTimeIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'middle' }} />
                    {event.startTime} - {event.endTime} | {event.day}
                  </Typography>
                  <Typography>{event.module} ({event.moduleCode})</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {event.type} - {event.location} - {event.lecturer}
                  </Typography>
                </Box>
              ))
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Class Attendance
            </Typography>
            {mockAttendanceData.map((item, i) => {
              const percent = Math.round((item.attended / item.total) * 100);
              return (
                <Box key={i} sx={{ mb: 2 }}>
                  <Typography fontWeight="bold">
                    <SchoolIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'middle' }} />
                    {item.module} ({item.code})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.attended} of {item.total} classes attended ({percent}%)
                  </Typography>
                  <LinearProgress variant="determinate" value={percent} sx={{ mt: 1 }} />
                </Box>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Schedule;
