import React, { Component } from 'react';
import './SubjectRegister.css'

class SubjectRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {

    fetch(`http://your-spring-boot-api/subjects/$`) 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="basket-card1">
        <h1 className='head1'>
          Subject Registration
        </h1>
        <div className="details">
         <h4> 
          <p>Name: {data.name}</p>
          <p>Regd. No: {data.registrationNo}</p>
          <p>Session: {data.session}</p>
          <p>Course: {data.course}</p>
          </h4>
        </div>
      </div>
    );
  }
}


export default SubjectRegister;