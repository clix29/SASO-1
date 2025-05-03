import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../../common/Sidebar';

const AdminDashboard = () => {
  const menuItems = [
    { text: 'User Management', path: '/admin/users' },
    { text: 'System Settings', path: '/admin/settings' },
    { text: 'Reports', path: '/admin/reports' }
  ];

  return (
    <Box display="flex">
      <Sidebar title="Admin Dashboard" menuItems={menuItems} />
      <Box component="main" flexGrow={1} p={3}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        {/* Add admin dashboard content here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
