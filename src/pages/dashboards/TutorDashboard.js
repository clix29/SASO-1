import { 
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardContent, 
    Button, 
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
  } from '@mui/material';
  import {
    Person as ProfileIcon,
    CalendarToday as ScheduleIcon,
    Notifications as NotifyIcon,
    QuestionAnswer as FaqIcon,
    School as StudentIcon
  } from '@mui/icons-material';
  
  const TutorDashboard = () => {
    // Sample data - replace with your actual data
    const upcomingSessions = [
      { id: 1, student: 'Alex Johnson', time: '10:00 AM', subject: 'Mathematics' },
      { id: 2, student: 'Sarah Williams', time: '2:30 PM', subject: 'Physics' }
    ];
  
    const studentProgress = [
      { name: 'Alex Johnson', progress: 75, subject: 'Math' },
      { name: 'Sarah Williams', progress: 60, subject: 'Physics' },
      { name: 'Michael Brown', progress: 90, subject: 'Chemistry' }
    ];
  
    return (
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Tutor Dashboard
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Welcome to the tutor management portal
            </Typography>
          </Grid>
  
          {/* Quick Actions */}
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <ProfileIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem button>
                    <ListItemIcon>
                      <ScheduleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Schedule Tutorials" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem button>
                    <ListItemIcon>
                      <NotifyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Notify Students" />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem button>
                    <ListItemIcon>
                      <FaqIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Manage FAQs" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
  
          {/* Upcoming Sessions */}
          <Grid item xs={12} md={8}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Tutorial Sessions
                </Typography>
                {upcomingSessions.length > 0 ? (
                  <List>
                    {upcomingSessions.map((session) => (
                      <ListItem key={session.id}>
                        <ListItemIcon>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            <StudentIcon />
                          </Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={`${session.student} - ${session.subject}`}
                          secondary={session.time}
                        />
                        <Button variant="contained" size="small">
                          Start
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    No upcoming sessions scheduled
                  </Typography>
                )}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" startIcon={<ScheduleIcon />}>
                    Schedule New Session
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
  
          {/* Student Progress Overview */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Student Progress Overview
                </Typography>
                <Grid container spacing={2}>
                  {studentProgress.map((student, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="subtitle1">
                            {student.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {student.subject}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                              <progress value={student.progress} max="100" style={{ width: '100%' }} />
                            </Box>
                            <Typography variant="body2">{student.progress}%</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default TutorDashboard;