import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function AdminSystemSettings() {
  const [logs, setLogs] = useState([]);
  const [settings, setSettings] = useState({ registrationOpen: true });

  useEffect(() => {
    const fetchSettings = async () => {
      const res = await axios.get('/admin/settings');
      setSettings(res.data.settings || { registrationOpen: true });
    };

    const fetchLogs = async () => {
      const res = await axios.get('/admin/logs');
      setLogs(res.data.logs || []);
    };

    fetchSettings();
    fetchLogs();
  }, []);

  const toggleRegistration = async () => {
    const updated = { ...settings, registrationOpen: !settings.registrationOpen };
    setSettings(updated);
    await axios.put('/admin/settings', updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">⚙️ System Settings & Access Logs</h2>

      {/* System Settings */}
      <div className="mb-8 bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">🔧 System Settings</h3>
        <div className="flex items-center justify-between">
          <span>📝 Registration Open:</span>
          <button
            onClick={toggleRegistration}
            className={`px-4 py-2 rounded text-white ${settings.registrationOpen ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {settings.registrationOpen ? 'Yes (Click to Close)' : 'No (Click to Open)'}
          </button>
        </div>
      </div>

      {/* Access Logs */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">📜 Access Logs</h3>
        <div className="max-h-[300px] overflow-y-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Timestamp</th>
                <th className="p-2 border">User</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 border">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="p-2 border">{log.user}</td>
                  <td className="p-2 border">{log.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
