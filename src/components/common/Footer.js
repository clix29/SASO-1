import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">SASO System</Typography>
          <Typography variant="body2">
            Student Academic Support Office - Tshwane University of Technology
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="/privacy" variant="body2" display="block">Privacy Policy</Link>
          <Link href="/terms" variant="body2" display="block">Terms of Use</Link>
          <Typography variant="body2">Version 1.0.0</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Box display="flex" alignItems="center">
            <Email fontSize="small" />
            <Typography variant="body2" ml={1}>saso@tut.ac.za</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Phone fontSize="small" />
            <Typography variant="body2" ml={1}>012 382 1234</Typography>
          </Box>
        </Grid>
      </Grid>
      
      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          © {new Date().getFullYear()} Tshwane University of Technology. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
