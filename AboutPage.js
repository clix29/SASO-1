// src/pages/AboutPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';


const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>About This Tutorial</h1>
      <p>
        This project is a simulated admin dashboard built for the Saudi Standards, Metrology and Quality Organization (SASO),
        designed as part of a learning tutorial. It demonstrates how to create a full-featured administrative interface using
        modern web development technologies like React and TypeScript.
      </p>
      <p>
        The tutorial showcases how administrators can manage users, monitor attendance, view session activity logs,
        handle FAQ submissions, generate reports, and configure system settings — all through a user-friendly dashboard.
      </p>
      <p>
        While this version is front-end only, it's structured to easily integrate with real backend services in a
        production environment. The goal is to give learners practical experience building scalable and modular admin tools.
      </p>
      <p>
        This project reflects the principles SASO stands for: transparency, efficiency, and commitment to quality —
        while providing a hands-on guide for developers to understand component-based UI design.
      </p>
    </div>
  );
};

export default AboutPage;
