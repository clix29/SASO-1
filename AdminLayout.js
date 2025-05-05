import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full bg-gray-50 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
}
