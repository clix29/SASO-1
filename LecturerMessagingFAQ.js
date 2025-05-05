import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function LecturerMessagingFAQ() {
  const [messages, setMessages] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [faqInput, setFaqInput] = useState({ question: '', answer: '' });

  useEffect(() => {
    const fetchData = async () => {
      const msgRes = await axios.get('/lecturer/messages');
      const faqRes = await axios.get('/lecturer/faqs');
      setMessages(msgRes.data);
      setFaqs(faqRes.data);
    };
    fetchData();
  }, []);

  const handleFAQChange = (e) => {
    setFaqInput({ ...faqInput, [e.target.name]: e.target.value });
  };

  const addFAQ = async () => {
    await axios.post('/lecturer/faqs', faqInput);
    setFaqInput({ question: '', answer: '' });
    const faqRes = await axios.get('/lecturer/faqs');
    setFaqs(faqRes.data);
  };

  return (
    <div className="p-6 grid gap-6">
      <h2 className="text-xl font-bold">💬 Messaging & FAQ Management</h2>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">📨 Student Messages</h3>
        <ul className="space-y-2 max-h-[200px] overflow-y-auto">
          {messages.map((msg, i) => (
            <li key={i} className="p-2 border rounded bg-gray-50">
              <p><strong>{msg.sender}:</strong> {msg.content}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">❓ FAQ Management</h3>
        <div className="space-y-2 mb-4">
          <input className="border p-2 w-full" placeholder="Question" name="question" value={faqInput.question} onChange={handleFAQChange} />
          <textarea className="border p-2 w-full" placeholder="Answer" name="answer" value={faqInput.answer} onChange={handleFAQChange} />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={addFAQ}>Add FAQ</button>
        </div>
        <ul className="space-y-2 max-h-[200px] overflow-y-auto">
          {faqs.map((faq, i) => (
            <li key={i} className="p-2 border rounded bg-gray-50">
              <p><strong>Q:</strong> {faq.question}</p>
              <p><strong>A:</strong> {faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
