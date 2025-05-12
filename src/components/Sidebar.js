import React from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemButton
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Person as StudentIcon,
  MenuBook as LectureIcon,
  School as TutorIcon,
  AdminPanelSettings as AdminIcon,
  Home as HomeIcon,
  Apps as ModulesIcon,
  Info as AboutIcon,
  Login as LoginIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dashboardItems = [
    { text: 'Student Dashboard', icon: <StudentIcon />, path: '/student' },
    { text: 'Lecture Dashboard', icon: <LectureIcon />, path: '/lecture' },
    { text: 'Tutor Dashboard', icon: <TutorIcon />, path: '/tutor' },
    { text: 'Admin Dashboard', icon: <AdminIcon />, path: '/admin' }
  ];

  const menuItems = [
    { text: 'HOME', icon: <HomeIcon />, path: '/' },
    { text: 'MODULES', icon: <ModulesIcon />, path: '/modules' },
    { text: 'ABOUT US', icon: <AboutIcon />, path: '/about' },
    { text: 'LOGIN', icon: <LoginIcon />, path: '/login' }
  ];

  return (
    <Box sx={{ 
      width: 280,
      p: 3,
      borderRight: '1px solid #e0e0e0',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      display: { xs: 'none', sm: 'block' }, // Responsive, hide on small screens
    }}>
      {/* Header */}
      <Typography variant="h5" sx={{ 
        fontWeight: 'bold', 
        mb: 3,
        color: '#2c387e',
        display: 'flex',
        alignItems: 'center'
      }}>
        Welcome to SASO System
      </Typography>

      {/* Dashboard Navigation */}
      <Typography variant="subtitle1" sx={{ 
        fontWeight: 'bold',
        mb: 1,
        color: '#2c387e'
      }}>
        DASHBOARDS
      </Typography>
      
      <List dense>
        {dashboardItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{ 
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: '#e0e0e0',
                  '&:hover': {
                    backgroundColor: '#d5d5d5'
                  }
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: 'medium',
                  fontSize: '0.95rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Main Navigation Menu */}
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text}
            disablePadding
            sx={{ mb: 1 }}
          >
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{ 
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: '#e0e0e0',
                  '&:hover': {
                    backgroundColor: '#d5d5d5'
                  }
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: item.text === 'HOME' ? 'bold' : 'medium',
                  fontSize: item.text === 'HOME' ? '1.1rem' : '1rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
