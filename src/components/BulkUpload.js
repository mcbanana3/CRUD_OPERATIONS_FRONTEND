import React, { useState } from 'react';
import axios from 'axios';

function BulkUpload() {
  const [studentFile, setStudentFile] = useState(null);
  const [facultyFile, setFacultyFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleStudentFileChange = (e) => {
    setStudentFile(e.target.files[0]);
  };

  const handleFacultyFileChange = (e) => {
    setFacultyFile(e.target.files[0]);
  };

  const handleStudentUpload = async () => {
    if (!studentFile) {
      setMessage('Please select a student CSV file');
      return;
    }

    const formData = new FormData();
    formData.append('file', studentFile);

    try {
      const response = await axios.post('/api/upload/student', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('Error uploading student file');
    }
  };

  const handleFacultyUpload = async () => {
    if (!facultyFile) {
      setMessage('Please select a faculty CSV file');
      return;
    }

    const formData = new FormData();
    formData.append('file', facultyFile);

    try {
      const response = await axios.post('/api/upload/faculty', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('Error uploading faculty file');
    }
  };

  return (
    <div>
      <h2>Bulk Upload</h2>
      <div>
        <h4>Upload Student Data</h4>
        <input type="file" accept=".csv" onChange={handleStudentFileChange} />
        <button onClick={handleStudentUpload} className="btn btn-primary mt-2">
          Upload Student CSV
        </button>
      </div>
      <div className="mt-4">
        <h4>Upload Faculty Data</h4>
        <input type="file" accept=".csv" onChange={handleFacultyFileChange} />
        <button onClick={handleFacultyUpload} className="btn btn-success mt-2">
          Upload Faculty CSV
        </button>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}

export default BulkUpload;