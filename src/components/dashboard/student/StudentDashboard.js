import React, { useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { AuthContext } from '../../../context/AuthContext';
import Sidebar from '../../common/Sidebar';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const menuItems = [
    { text: 'My Profile', path: '/student/profile' },
    { text: 'Class Schedule', path: '/student/schedule' },
    { text: 'Attendance Tracker', path: '/student/attendance' },
    { text: 'Messages', path: '/student/messages' },
    { text: 'FAQs / Submit Inquiry', path: '/student/faqs' },
    { text: 'Academic Reports', path: '/student/reports' }
  ];

  return (
    <Box display="flex">
      <Sidebar title="Student Dashboard" menuItems={menuItems} />
      
      <Box component="main" flexGrow={1} p={3}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Access
                </Typography>
                {/* Quick access buttons would go here */}
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Activities
                </Typography>
                {/* Recent activities would go here */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
