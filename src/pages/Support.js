import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper } from '@mui/material';
import FAQs from './FAQs';
import SubmitTicket from './SubmitTicket';
import ContactUs from './ContactUs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Support = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Support Center
      </Typography>
      
      <Paper elevation={3}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="FAQs" />
          <Tab label="Submit a Ticket" />
          <Tab label="Contact Us" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <FAQs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SubmitTicket />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ContactUs />
        </TabPanel>
      </Paper>
    </Box>
  );
};

export default Support;
