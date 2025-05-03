import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]); // Stores all registered users
  const navigate = useNavigate();

  // Load users and session on startup
  useEffect(() => {
    const storedUsers = localStorage.getItem('registeredUsers');
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  const register = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(), // Simple ID generation
      createdAt: new Date().toISOString()
    };
    
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    navigate('/login');
  };

  const login = (email, password) => {
    const foundUser = users.find(u => 
      u.email === email && u.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      // Redirect based on user role
      switch (foundUser.role) {
        case 'student':
          navigate('/student');
          break;
        case 'tutor':
          navigate('/tutor');
          break;
        case 'lecturer':
          navigate('/lecturer');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/login'); // fallback
      }

      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading,
      users,
      register,
      login, 
      logout,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
