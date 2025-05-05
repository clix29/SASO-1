import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { saveAs } from 'file-saver';

export default function AdminReports() {
  const [reportType, setReportType] = useState('attendance');
  const [data, setData] = useState([]);

  const fetchReport = async () => {
    const res = await axios.get(`/admin/reports/${reportType}`);
    setData(res.data);
  };

  const exportToCSV = () => {
    const headers = Object.keys(data[0] || {}).join(',');
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${reportType}_report.csv`);
  };

  useEffect(() => {
    fetchReport();
  }, [reportType]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📈 Report Generation</h2>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border p-2"
        >
          <option value="attendance">Attendance</option>
          <option value="users">User Overview</option>
          <option value="submissions">Submissions</option>
        </select>
        <button
          onClick={exportToCSV}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export CSV
        </button>
      </div>

      <div className="p-4 border rounded bg-white shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th key={key} className="p-2 capitalize">{key.replace(/_/g, ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t">
                {Object.values(row).map((val, j) => (
                  <td key={j} className="p-2">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
