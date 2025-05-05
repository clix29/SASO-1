import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from '../api/axios';

export default function BulkUpload() {
  const [csvData, setCsvData] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setCsvData(results.data);
      }
    });
  };

  const handleUpload = async () => {
    try {
      const res = await axios.post('/admin/bulk-upload', { users: csvData });
      setUploadSuccess(true);
      setUploadError('');
    } catch (error) {
      setUploadError('Upload failed. Please check the data format.');
      setUploadSuccess(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📥 Bulk User Upload</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
      {csvData.length > 0 && (
        <div>
          <h3 className="text-lg mb-2">Preview:</h3>
          <table className="table-auto w-full mb-4">
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((key, idx) => (
                  <th key={idx} className="border px-2 py-1">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(0, 5).map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="border px-2 py-1">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
            Upload to Server
          </button>
        </div>
      )}
      {uploadSuccess && <p className="text-green-600 mt-4">✅ Upload successful!</p>}
      {uploadError && <p className="text-red-600 mt-4">❌ {uploadError}</p>}
    </div>
  );
}
