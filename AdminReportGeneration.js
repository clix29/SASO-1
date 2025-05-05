import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function AdminReportGeneration() {
  const [reportData, setReportData] = useState([]);
  const [metric, setMetric] = useState('attendance');

  useEffect(() => {
    const fetchReports = async () => {
      const res = await axios.get('/admin/reports', { params: { metric } });
      setReportData(res.data);
    };
    fetchReports();
  }, [metric]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📈 Report Generation</h2>

      {/* Metric Selector */}
      <div className="mb-4">
        <select
          className="border p-2 rounded"
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
        >
          <option value="attendance">Attendance</option>
          <option value="performance">Academic Performance</option>
          <option value="logins">System Logins</option>
        </select>
      </div>

      {/* Report Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2 capitalize">{metric} Report</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reportData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
