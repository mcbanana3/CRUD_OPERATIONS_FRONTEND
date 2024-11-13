import React from 'react';

function Home({ handlePageChange }) {
  return (
    <div>
      <h1 className="display-4 text-primary font-weight-bold mb-4">
        University Management System
      </h1>
      <p className="lead mb-4">
        Manage students and faculties in one place.
      </p>
      <div className="button-container mb-4">
        {/* Buttons for students and faculties */}
        <button
          className="btn btn-outline-primary btn-lg mx-3"
          onClick={() => handlePageChange('students')}
        >
          Students
        </button>
        <button
          className="btn btn-outline-success btn-lg mx-3"
          onClick={() => handlePageChange('faculties')}
        >
          Faculties
        </button>
      </div>
    </div>
  );
}

export default Home;
