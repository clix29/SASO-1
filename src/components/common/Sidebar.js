import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ title, menuItems }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        height: '100vh',
        borderRight: '1px solid #ddd',
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
