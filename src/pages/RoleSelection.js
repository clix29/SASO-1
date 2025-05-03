import React from 'react';
import { Button, Box, Typography, Stack } from '@mui/material';

const RoleSelection = ({ onSelect }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
        Choose Your Role
      </Typography>
      <Stack spacing={2} mt={4}>
        <Button variant="contained" color="primary" onClick={() => onSelect('student')}>
          Student Login
        </Button>
        <Button variant="contained" color="success" onClick={() => onSelect('tutor')}>
          Tutor Login
        </Button>
        <Button variant="contained" color="warning" onClick={() => onSelect('lecturer')}>
          Lecturer Login
        </Button>
        <Button variant="contained" color="error" onClick={() => onSelect('admin')}>
          Admin (AEO) Login
        </Button>
        <Button variant="text" color="secondary" href="/forgot-password">
          Forgot Password / Reset
        </Button>
      </Stack>
    </Box>
  );
};

export default RoleSelection;
