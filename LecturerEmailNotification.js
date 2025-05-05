import React, { useState } from 'react';
import axios from '../api/axios';

export default function LecturerEmailNotification() {
  const [emailData, setEmailData] = useState({ subject: '', message: '' });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    await axios.post('/lecturer/email', emailData);
    setEmailData({ subject: '', message: '' });
    alert('Email sent to all students!');
  };

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-xl font-bold mb-4">📬 Notify Students via Email</h2>
      <input
        className="border p-2 w-full mb-4"
        name="subject"
        placeholder="Subject"
        value={emailData.subject}
        onChange={handleChange}
      />
      <textarea
        className="border p-2 w-full mb-4 h-32"
        name="message"
        placeholder="Message"
        value={emailData.message}
        onChange={handleChange}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={sendEmail}>Send Email</button>
    </div>
  );
}
