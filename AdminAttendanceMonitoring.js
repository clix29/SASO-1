import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function AdminAttendanceMonitoring() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [filter, setFilter] = useState({ department: '', course: '' });

  useEffect(() => {
    const fetchAttendance = async () => {
      const res = await axios.get('/admin/attendance', { params: filter });
      setAttendanceRecords(res.data);
    };
    fetchAttendance();
  }, [filter]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Attendance Monitoring</h2>

      {/* Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          placeholder="Filter by Department"
          value={filter.department}
          onChange={(e) => setFilter({ ...filter, department: e.target.value })}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          placeholder="Filter by Course"
          value={filter.course}
          onChange={(e) => setFilter({ ...filter, course: e.target.value })}
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">📅 Attendance Records</h3>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Student</th>
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((rec, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 border">{rec.studentName}</td>
                <td className="p-2 border">{rec.course}</td>
                <td className="p-2 border">{new Date(rec.date).toLocaleDateString()}</td>
                <td className="p-2 border">{rec.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
