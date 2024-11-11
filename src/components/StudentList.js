import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported

function StudentList() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [editingId, setEditingId] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const saveStudent = async () => {
    try {
      const studentData = { name, age, grade };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, studentData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, studentData);
      }

      setName('');
      setAge('');
      setGrade('');
      fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const editStudent = (student) => {
    setEditingId(student._id);
    setName(student.name);
    setAge(student.age);
    setGrade(student.grade);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h2>Student List</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    id="name" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter student name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input 
                    id="age" 
                    type="number" 
                    className="form-control" 
                    placeholder="Enter student age"
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="grade" className="form-label">Grade</label>
                  <input 
                    id="grade" 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter student grade"
                    value={grade} 
                    onChange={(e) => setGrade(e.target.value)} 
                  />
                </div>
                <button 
                  type="button" 
                  className="btn btn-success w-100" 
                  onClick={saveStudent}
                >
                  {editingId ? "Update Student" : "Add Student"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-center">All Students</h3>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.grade}</td>
                    <td>
                      <button 
                        className="btn btn-warning btn-sm mx-2" 
                        onClick={() => editStudent(student)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => deleteStudent(student._id)}
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

export default StudentList;
