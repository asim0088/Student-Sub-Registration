import React from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
  return (
    <div className="home-container">
    <p className='tableedit'>SUBJECT EDIT</p>
    <table className="table">
      <thead>
      <tr>
    <th scope="col">Branch</th>
    <th scope="col">Sem</th>
    <th scope="col">Course Code</th>
    <th scope="col">Course Name</th>
    <th scope="col">Basket Name</th>
    <th scope="col">Credit</th>
    <th scope="col">Action</th>

  </tr>
      </thead>
      <tbody>
        <tr>
          <td>mca</td>
          <td>first</td>
          <td>cutm1234</td>
          <td>java</td>
          <td>general</td>
          <td>4</td>
          <td>
          <button type='submit' 
          class="btn btn-secondary"
           name='view' 
           value="view">
           submit </button>
            <button type='submit' 
          class="btn btn-secondary"
           name='delete' 
           value="delete">
            delete</button>
            </td>
        </tr>
      </tbody>
    </table>
    <div>
      <Link class="add-box"to="/Addcourse">add sub</Link>
    </div>
  </div>
  );
};

export default Courses;