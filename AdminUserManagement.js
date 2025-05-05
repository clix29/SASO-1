import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function AdminUserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'student' });
  const [csvFile, setCsvFile] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('/admin/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    await axios.post('/admin/users', newUser);
    setNewUser({ name: '', email: '', role: 'student' });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`/admin/users/${id}`);
    fetchUsers();
  };

  const uploadCSV = async () => {
    if (!csvFile) return;
    const formData = new FormData();
    formData.append('file', csvFile);
    await axios.post('/admin/users/bulk', formData);
    fetchUsers();
    setCsvFile(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">👥 User Management</h2>

      <div className="mb-6 p-4 border rounded bg-white shadow">
        <h3 className="font-semibold mb-2">Add Individual User</h3>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mr-2"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mr-2"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          className="border p-2 mr-2"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
          <option value="lecturer">Lecturer</option>
        </select>
        <button onClick={addUser} className="bg-green-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      <div className="mb-6 p-4 border rounded bg-white shadow">
        <h3 className="font-semibold mb-2">📤 Bulk Upload via CSV</h3>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setCsvFile(e.target.files[0])}
          className="mb-2"
        />
        <button onClick={uploadCSV} className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload CSV
        </button>
      </div>

      <div className="p-4 border rounded bg-white shadow">
        <h3 className="font-semibold mb-2">📄 All Users</h3>
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-t">
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2 capitalize">{u.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteUser(u._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
