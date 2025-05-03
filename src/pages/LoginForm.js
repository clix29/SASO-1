import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, Alert, IconButton, Box, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ role, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password, role);
    if (!success) {
      setError('Invalid credentials or user not registered');
    }
  };

  return (
    <Box>
      <IconButton onClick={onBack} size="small" sx={{ mb: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
        {role} Login
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" size="large">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
