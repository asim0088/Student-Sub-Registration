// App.js

import React, { useState } from 'react';
import './App.css';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
function App() {
  const initialData = [
    { id: 2234500756756, name: 'Bhaktahari Bej', age: 22, grade: '20' },
    { id: 22234500756756, name: 'Rajendra Sahoo', age: 24, grade: '32' },
    { id: 32234500756756, name: 'Tapan Bej', age: 25, grade: '12' },
    { id: 42234500756756, name: 'Abhisekh Mishra', age: 23, grade: '43' },
    { id: 42234500756746, name: 'Asim kumar sahoo', age: 24, grade: '29' },
    // Add more data as needed
  ];

  // State to manage the table data
  const [students, setStudents] = useState(initialData);

  const handleUpdateClick = (id) => {
    // Add your update logic here
    console.log(`Update clicked for student with ID ${id}`);
  };

  return (
    <div className="App">
    <div className="navbar">
      <h2>Student Request Page</h2>
      <div className="nav-text">
        <span>
          <FaHome /> Home
        </span>
        <span>
          <FaSignOutAlt /> Logout
        </span>
      </div>
    </div>
    <div className="center">
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Credit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>
                <button className="update-button" onClick={() => handleUpdateClick(student.id)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default App;
