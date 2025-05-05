import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';

export default function AdminAnalytics() {
  const [attendanceStats, setAttendanceStats] = useState([]);
  const [userDistribution, setUserDistribution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const attRes = await axios.get('/admin/analytics/attendance-trends');
      const userRes = await axios.get('/admin/analytics/user-distribution');
      setAttendanceStats(attRes.data);
      setUserDistribution(userRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">📊 SASO System Analytics</h2>

      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-2">📈 Weekly Attendance Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="attendanceRate" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">👥 User Role Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
