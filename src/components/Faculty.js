import React from 'react';
import FacultyList from './FacultyList';

function Faculty() {
    return (
        <div className="container py-5 text-center">
            <h1 className="display-4 text-primary font-weight-bold mb-4">
                Faculty Management System
            </h1>
            <FacultyList />
        </div>
    );
}

export default Faculty;