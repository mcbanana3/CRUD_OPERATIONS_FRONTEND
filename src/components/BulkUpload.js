import React, { useState } from 'react';
import axios from 'axios';

function BulkUpload() {
  const [studentFile, setStudentFile] = useState(null);
  const [facultyFile, setFacultyFile] = useState(null);
  const [message, setMessage] = useState('');

  // Handle file selection for student data
  const handleStudentFileChange = (e) => {
    setStudentFile(e.target.files[0]);
  };

  // Handle file selection for faculty data
  const handleFacultyFileChange = (e) => {
    setFacultyFile(e.target.files[0]);
  };

  // Handle student file upload
  const handleStudentUpload = async () => {
    if (!studentFile) {
      setMessage('Please select a student CSV file');
      return;
    }

    const formData = new FormData();
    formData.append('file', studentFile);

    try {
      // Update the URL to your server's bulk upload endpoint for students
      const response = await axios.post('https://crud-operations-ada6.onrender.com/api/students/bulk-upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message || 'Student data uploaded successfully');
    } catch (err) {
      console.error('Error uploading student file:', err);
      setMessage('Error uploading student file');
    }
  };

  // Handle faculty file upload
  const handleFacultyUpload = async () => {
    if (!facultyFile) {
      setMessage('Please select a faculty CSV file');
      return;
    }

    const formData = new FormData();
    formData.append('file', facultyFile);

    try {
      // Update the URL to your server's bulk upload endpoint for faculties
      const response = await axios.post('https://crud-operations-ada6.onrender.com/api/faculties/bulk-upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message || 'Faculty data uploaded successfully');
    } catch (err) {
      console.error('Error uploading faculty file:', err);
      setMessage('Error uploading faculty file');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Bulk Upload</h2>
      <div className="mb-4">
        <h4>Upload Student Data</h4>
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleStudentFileChange} 
          className="form-control" 
        />
        <button 
          onClick={handleStudentUpload} 
          className="btn btn-primary mt-2"
        >
          Upload Student CSV
        </button>
      </div>
      <div className="mb-4">
        <h4>Upload Faculty Data</h4>
        <input 
          type="file" 
          accept=".csv" 
          onChange={handleFacultyFileChange} 
          className="form-control" 
        />
        <button 
          onClick={handleFacultyUpload} 
          className="btn btn-success mt-2"
        >
          Upload Faculty CSV
        </button>
      </div>
      {message && <p className="mt-4 text-info">{message}</p>}
    </div>
  );
}

export default BulkUpload;
