import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function AdminAttendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchAttendance = async () => {
    const res = await axios.get('/admin/attendance');
    setAttendanceData(res.data);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const filteredData = attendanceData.filter((item) =>
    filter === 'all' ? true : item.role === filter
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📊 Attendance Monitoring</h2>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Role:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2"
        >
          <option value="all">All</option>
          <option value="student">Students</option>
          <option value="tutor">Tutors</option>
          <option value="lecturer">Lecturers</option>
        </select>
      </div>

      <div className="p-4 border rounded bg-white shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Total Sessions</th>
              <th className="p-2">Attended</th>
              <th className="p-2">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{entry.name}</td>
                <td className="p-2 capitalize">{entry.role}</td>
                <td className="p-2">{entry.totalSessions}</td>
                <td className="p-2">{entry.attended}</td>
                <td className="p-2">
                  {entry.totalSessions > 0
                    ? ((entry.attended / entry.totalSessions) * 100).toFixed(1)
                    : '0'}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
