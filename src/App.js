import React, { useState } from 'react';
import StudentList from './components/StudentList';
import FacultyList from './components/FacultyList';
import './App.css'; // Import the custom CSS file

function App() {
  const [currentView, setCurrentView] = useState(null); // Track the current view

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="container py-5 text-center">
      {!currentView ? (
        <>
          {/* Home Page - Contains Heading and Buttons */}
          <h1 className="display-4 text-primary font-weight-bold mb-4">
            University Management System
          </h1>

          <div className="button-container mb-4">
            <button
              className="btn btn-outline-primary btn-lg mx-3"
              onClick={() => handleViewChange('students')}
            >
              Students
            </button>
            <button
              className="btn btn-outline-success btn-lg mx-3"
              onClick={() => handleViewChange('faculties')}
            >
              Faculties
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Conditional Rendering Based on the Current View */}
          <button
            className="btn btn-secondary mb-4"
            onClick={() => setCurrentView(null)}
          >
            Back to Home
          </button>
          {currentView === 'students' && <StudentList />}
          {currentView === 'faculties' && <FacultyList />}
        </>
      )}
    </div>
  );
}

export default App;
