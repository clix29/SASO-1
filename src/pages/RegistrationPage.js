import React, { useState, useContext } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography 
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password, fullName, role };
    register(userData);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Role"
          select
          fullWidth
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          SelectProps={{
            native: true,
          }}
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
          <option value="lecturer">Lecturer</option>
          <option value="admin">Admin</option>
        </TextField>
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
      <Typography sx={{ mt: 2 }}>
        Already have an account? <a href="/login">Login here</a>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
