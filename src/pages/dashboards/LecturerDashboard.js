import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  Upload as UploadIcon,
  BarChart as BarChartIcon,
  CheckCircle as AttendanceIcon,
  Forum as ForumIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LecturerDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        {/* Logout Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={logout}
          >
            Logout
          </Button>
        </Box>

        {/* Dashboard Title */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Lecturer Dashboard
        </Typography>

        {/* Quick Access Sections */}
        <List sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          <Paper elevation={3} sx={{ width: 250, borderRadius: 2 }}>
            <ListItem button onClick={() => navigate('/lecturer/materials')}>
              <ListItemIcon><UploadIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Class & Course Materials" />
            </ListItem>
          </Paper>
          <Paper elevation={3} sx={{ width: 250, borderRadius: 2 }}>
            <ListItem button onClick={() => navigate('/lecturer/performance')}>
              <ListItemIcon><BarChartIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Performance Analytics" />
            </ListItem>
          </Paper>
          <Paper elevation={3} sx={{ width: 250, borderRadius: 2 }}>
            <ListItem button onClick={() => navigate('/lecturer/attendance')}>
              <ListItemIcon><AttendanceIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Attendance Review" />
            </ListItem>
          </Paper>
          <Paper elevation={3} sx={{ width: 250, borderRadius: 2 }}>
            <ListItem button onClick={() => navigate('/lecturer/communication')}>
              <ListItemIcon><ForumIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Communication Panel" />
            </ListItem>
          </Paper>
        </List>
      </Box>
    </Box>
  );
}

export default LecturerDashboard;
