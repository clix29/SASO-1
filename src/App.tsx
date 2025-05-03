
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TutorDashboard from "./pages/dashboard/TutorDashboard";
import LecturerDashboard from "./pages/dashboard/LecturerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Role-based Dashboard Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/tutor/dashboard" element={<TutorDashboard />} />
          <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
