import React from 'react';

function Navbar({ handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fs-2 fw-bold text-white">University Management System</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white fs-5 mx-2 hover-shadow"
                onClick={() => handlePageChange('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white fs-5 mx-2 hover-shadow"
                onClick={() => handlePageChange('students')}
              >
                Students
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white fs-5 mx-2 hover-shadow"
                onClick={() => handlePageChange('faculties')}
              >
                Faculties
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white fs-5 mx-2 hover-shadow"
                onClick={() => handlePageChange('bulk-upload')}
              >
                BulkUpload
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
