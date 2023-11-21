import React from 'react';

const Homee = () => {
  return (
    <div className="home-container">
      <p className='tablep'>SUBJECT REGISTRATION</p>
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
            <td>MCA</td>
            <td>first</td>
            <td>cutm1234</td>
            <td>java</td>
            <td>general</td>
            <td>4</td>
            <td><button type='submit' name='delete' value="delete">
              <i class="far fa-trash-alt"></i>Delete</button></td>
          </tr>
          <tr>
            <td>MBA</td>
            <td>third</td>
            <td>cutm1004</td>
            <td>Html</td>
            <td>general</td>
            <td>3</td>
            <td><button type='submit' name='delete' value="delete">
              <i class="far fa-trash-alt"></i>Delete</button></td>
          </tr>
          <tr>
            <td>B-TECH</td>
            <td>sixth</td>
            <td>cutm12</td>
            <td>python</td>
            <td>general</td>
            <td>1</td>
            <td><button type='submit' name='delete' value="delete">
              <i class="far fa-trash-alt"></i>Delete</button></td>
          </tr>
          <tr>
            <td>Bsc</td>
            <td>first</td>
            <td>cutm2134</td>
            <td>Css</td>
            <td>general</td>
            <td>4</td>
            <td><button type='submit' name='delete' value="delete">
              <i class="far fa-trash-alt"></i>Delete</button></td>
          </tr>
          <tr>
            <td>m-tech</td>
            <td>Fourth</td>
            <td>cutm1334</td>
            <td>jobreadness</td>
            <td>general</td>
            <td>2</td>
            <td><button type='submit' name='delete' value="delete">
              <i class="far fa-trash-alt"></i>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Homee;
