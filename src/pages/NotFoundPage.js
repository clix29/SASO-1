import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SentimentDissatisfied as ErrorIcon } from '@mui/icons-material';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        textAlign: 'center', 
        px: 3 
      }}
    >
      <ErrorIcon sx={{ fontSize: 100, color: '#d32f2f', mb: 3 }} />
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
        sx={{ 
          backgroundColor: '#2c387e', 
          '&:hover': { backgroundColor: '#1a237e' }
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
