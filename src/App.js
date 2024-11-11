import React from 'react';
import StudentList from './components/StudentList';
import './App.css';  // Import the custom CSS file

function App() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 text-primary font-weight-bold mb-4">
        Student Management System
      </h1>
      <StudentList />
    </div>
  );
}

export default App;
