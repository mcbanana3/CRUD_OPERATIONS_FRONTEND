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
    </div>
  );
}

export default Home;
