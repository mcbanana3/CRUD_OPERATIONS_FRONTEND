import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported

function FacultyList() {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = "https://crud-operations-ada6.onrender.com/api/faculties";

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(`${API_URL}/faculties`);
      setFaculties(response.data);
    } catch (error) {
      console.error("Error fetching faculties:", error.response ? error.response.data : error.message);
      alert("Failed to fetch faculties. Please try again later.");
    }
  };

  const saveFaculty = async () => {
    try {
      const facultyData = { name, department, designation, age };

      if (editingId) {
        await axios.put(`${API_URL}/faculties/${editingId}`, facultyData);
        setEditingId(null);
      } else {
        await axios.post(`${API_URL}/faculties`, facultyData);
      }

      setName('');
      setDepartment('');
      setDesignation('');
      setAge('');
      fetchFaculties();
    } catch (error) {
      console.error("Error saving faculty:", error.response ? error.response.data : error.message);
      alert("Failed to save faculty. Please try again later.");
    }
  };

  const deleteFaculty = async (id) => {
    try {
      await axios.delete(`${API_URL}/faculties/${id}`);
      fetchFaculties();
    } catch (error) {
      console.error("Error deleting faculty:", error.response ? error.response.data : error.message);
      alert("Failed to delete faculty. Please try again later.");
    }
  };

  const editFaculty = (faculty) => {
    setEditingId(faculty._id);
    setName(faculty.name);
    setDepartment(faculty.department);
    setDesignation(faculty.designation);
    setAge(faculty.age);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h2>Faculty List</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    id="name" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter faculty name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">Department</label>
                  <input 
                    id="department" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter faculty department"
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">Designation</label>
                  <input 
                    id="designation" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter faculty designation"
                    value={designation} 
                    onChange={(e) => setDesignation(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input 
                    id="age" 
                    type="number" 
                    className="form-control" 
                    placeholder="Enter faculty age"
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                  />
                </div>
                <button 
                  type="button" 
                  className="btn btn-success w-100" 
                  onClick={saveFaculty}
                >
                  {editingId ? "Update Faculty" : "Add Faculty"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-center">All Faculties</h3>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {faculties.map(faculty => (
                  <tr key={faculty._id}>
                    <td>{faculty.name}</td>
                    <td>{faculty.department}</td>
                    <td>{faculty.designation}</td>
                    <td>{faculty.age}</td>
                    <td>
                      <button 
                        className="btn btn-warning btn-sm mx-2" 
                        onClick={() => editFaculty(faculty)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => deleteFaculty(faculty._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyList;