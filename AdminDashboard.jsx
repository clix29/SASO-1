import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">👨‍💼 Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Analytics Overview */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">📊 Analytics</h2>
          <p>Overview of system usage and statistics.</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Analytics
          </button>
        </div>

        {/* Reports */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🧾 Reports</h2>
          <p>Generate and export user or attendance reports.</p>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Generate Reports
          </button>
        </div>

        {/* User Management */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🧑‍💼 Manage Users</h2>
          <p>Manage all users including students and staff.</p>
          <button className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Manage Users
          </button>
        </div>

        {/* Attendance */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🕒 Attendance</h2>
          <p>Monitor and analyze class attendance records.</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            View Attendance
          </button>
        </div>

        {/* Bulk Upload */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">📂 Bulk Upload</h2>
          <p>Import data via spreadsheets or batch uploads.</p>
          <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Upload Files
          </button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/login" className="text-red-600 underline">Log out</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
