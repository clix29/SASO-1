import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

export default function GradingToolWithFeedback() {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const res = await axios.get('/tutor/quizzes');
      setQuizzes(res.data);
    };
    fetchQuizzes();
  }, []);

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!selectedQuiz) return;
      const res = await axios.get(`/tutor/quiz-submissions/${selectedQuiz}`);
      setSubmissions(res.data);
    };
    fetchSubmissions();
  }, [selectedQuiz]);

  const handleGrade = async (submissionId, score, feedback) => {
    try {
      await axios.post(`/tutor/grade/${submissionId}`, { score, feedback });
      alert('Grading submitted!');
    } catch (err) {
      console.error('Error grading submission:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📝 Grading Tool & Feedback</h2>
      <select
        value={selectedQuiz}
        onChange={(e) => setSelectedQuiz(e.target.value)}
        className="p-2 border rounded mb-6 w-full md:w-1/2"
      >
        <option value="">-- Select Quiz --</option>
        {quizzes.map((q) => (
          <option key={q._id} value={q._id}>{q.title}</option>
        ))}
      </select>

      {submissions.length > 0 && (
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div key={sub._id} className="p-4 border rounded-xl bg-white shadow">
              <h4 className="font-semibold">{sub.studentName}</h4>
              <p className="text-sm text-gray-600 mb-2">Submitted on: {sub.submittedAt}</p>
              <label className="block mb-1">Score:</label>
              <input
                type="number"
                placeholder="Enter score"
                className="p-2 border rounded w-full md:w-1/3 mb-2"
                onChange={(e) => sub.scoreInput = e.target.value}
              />
              <label className="block mb-1">Feedback:</label>
              <textarea
                placeholder="Write feedback..."
                className="p-2 border rounded w-full md:w-2/3 mb-2"
                rows="2"
                onChange={(e) => sub.feedbackInput = e.target.value}
              />
              <button
                onClick={() => handleGrade(sub._id, sub.scoreInput, sub.feedbackInput)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit Grade
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
