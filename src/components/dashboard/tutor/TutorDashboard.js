import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import Sidebar from '../../common/Sidebar';

const TutorDashboard = () => {
  const menuItems = [
    { text: 'My Profile', path: '/tutor/profile' },
    { text: 'Schedule Tutorials', path: '/tutor/schedule' },
    { text: 'Notify Students', path: '/tutor/notify' },
    { text: 'Manage FAQs', path: '/tutor/faqs' },
    { text: 'Student Progress Overview', path: '/tutor/progress' }
  ];

  return (
    <Box display="flex">
      <Sidebar title="Tutor Dashboard" menuItems={menuItems} />
      
      <Box component="main" flexGrow={1} p={3}>
        <Typography variant="h4" gutterBottom>
          Tutor Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Tutorials
                </Typography>
                {/* Tutorial schedule would go here */}
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Student Notifications
                </Typography>
                {/* Notification panel would go here */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TutorDashboard;
