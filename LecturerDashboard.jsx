import React from 'react';
import { Link } from 'react-router-dom';

const LecturerDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">👨‍🏫 Lecturer Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Assignments */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">📝 Assignments</h2>
          <p>View student submissions or upload new assignments.</p>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Manage Assignments
          </button>
        </div>

        {/* Grades & Feedback */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">📊 Grades & Feedback</h2>
          <p>Enter or review grades and student feedback.</p>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Grade Students
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🔔 Notifications</h2>
          <p>Send and view updates for classes and sessions.</p>
          <button className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Notify Students
          </button>
        </div>

        {/* Lecture Recordings */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">🎥 Recorded Lectures</h2>
          <p>Upload or share previously recorded sessions.</p>
          <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Upload Lecture
          </button>
        </div>

        {/* Course Materials */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">📚 Course Materials</h2>
          <p>Upload slides, readings, or other learning content.</p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Upload Material
          </button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/login" className="text-red-600 underline">Log out</Link>
      </div>
    </div>
  );
};

export default LecturerDashboard;
