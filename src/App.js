import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StudentList from './components/StudentList';
import FacultyList from './components/FacultyList';
import BulkUpload from './components/BulkUpload';
import './App.css'; // Import the custom CSS file

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Track the current page

  // Handle page change (Switch between Home, Students, Faculties, and Bulk Upload)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar handlePageChange={handlePageChange} />
      <div className="container py-5 text-center">
        {currentPage === 'home' && <Home />}
        {currentPage === 'students' && <StudentList />}
        {currentPage === 'faculties' && <FacultyList />}
        {currentPage === 'bulk-upload' && <BulkUpload />} {/* Show Bulk Upload page */}
      </div>
    </div>
  );
}

export default App;
