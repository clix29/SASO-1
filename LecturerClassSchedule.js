import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function LecturerClassSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [newClass, setNewClass] = useState({
    title: '',
    type: 'in-person',
    date: '',
    time: '',
    link: ''
  });

  useEffect(() => {
    const fetchSchedule = async () => {
      const res = await axios.get('/lecturer/schedule');
      setSchedule(res.data);
    };
    fetchSchedule();
  }, []);

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const addClass = async () => {
    await axios.post('/lecturer/schedule', newClass);
    setNewClass({ title: '', type: 'in-person', date: '', time: '', link: '' });
    const res = await axios.get('/lecturer/schedule');
    setSchedule(res.data);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📅 Class Scheduling</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input className="border p-2 w-full" placeholder="Class Title" name="title" value={newClass.title} onChange={handleChange} />
          <select className="border p-2 w-full" name="type" value={newClass.type} onChange={handleChange}>
            <option value="in-person">In-Person</option>
            <option value="online">Online</option>
          </select>
          <input className="border p-2 w-full" type="date" name="date" value={newClass.date} onChange={handleChange} />
          <input className="border p-2 w-full" type="time" name="time" value={newClass.time} onChange={handleChange} />
          {newClass.type === 'online' && (
            <input className="border p-2 w-full" placeholder="Online Session Link" name="link" value={newClass.link} onChange={handleChange} />
          )}
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addClass}>Add Class</button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">📚 Scheduled Classes</h3>
          <ul className="space-y-2 max-h-[300px] overflow-y-auto">
            {schedule.map((cls, i) => (
              <li key={i} className="border p-2 rounded bg-white shadow">
                <p><strong>{cls.title}</strong> ({cls.type})</p>
                <p>{cls.date} at {cls.time}</p>
                {cls.type === 'online' && <p>🔗 <a className="text-blue-600" href={cls.link} target="_blank" rel="noreferrer">Join</a></p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
