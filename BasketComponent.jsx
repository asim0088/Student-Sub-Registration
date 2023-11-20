import React, { Component } from 'react';
import './BasketComponent.css'

class BasketComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSemester: null,
      subjects: [],
      subBasketFields: [
        { subjectName: '', credit: '' },
        { subjectName: '', credit: '' },
        { subjectName: '', credit: '' }
      ],
      totalApprovedCredit: '',
      totalRegisteredCredit: ''
    };
  }

  handleSemesterSelect = async (semester) => {
    try {
      const responseSubjects = await fetch(`http://your-spring-boot-api/subjects/${semester}`);
      const responseSubBasketFields = await fetch(`http://your-spring-boot-api/subBasketFields/${semester}`);
      const responseTotalCredits = await fetch(`http://your-spring-boot-api/totalCredits/${semester}`);

      if (!responseSubjects.ok || !responseSubBasketFields.ok || !responseTotalCredits.ok) {
        throw new Error('Network response was not ok');
      }

      const subjectsData = await responseSubjects.json();
      const subBasketFieldsData = await responseSubBasketFields.json();
      const totalCreditsData = await responseTotalCredits.json();

      this.setState({
        selectedSemester: semester,
        subjects: subjectsData,
        subBasketFields: subBasketFieldsData,
        totalApprovedCredit: totalCreditsData.approvedCredit,
        totalRegisteredCredit: totalCreditsData.registeredCredit,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { selectedSemester, subjects, subBasketFields, totalApprovedCredit, totalRegisteredCredit } = this.state;

    return (
      <div className="container">
        <div className="sidebar">
          <div className="semester-buttons">
            <h2>
              <button onClick={() => this.handleSemesterSelect('sem1')}>Master of computer application Sem 1</button>
              <button onClick={() => this.handleSemesterSelect('sem2')}>Master of computer application Sem 2</button>
              <button onClick={() => this.handleSemesterSelect('sem3')}>Master of computer application Sem 3</button>
              <button onClick={() => this.handleSemesterSelect('sem4')}>Master of computer application Sem 4</button>
            </h2>
          </div>
        </div>

        <div className="basket-card">
          <h3 className="head">Basket name:</h3>
          <p>Total approved credit: {totalApprovedCredit}</p>
          <p>Total registered credit: {totalRegisteredCredit}</p>

          {selectedSemester && (
            <div>
              <h2>Master of computer application</h2>
              <h3>Subjects for {selectedSemester}</h3>
              
              <ul>
                {subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="sub-basket-cards-container1">
            {subBasketFields.map((field, index) => (
              <div className="sub-basket-card" key={index}>
                <h4 className="head">Subject code:</h4>
                <p>Subject Name:</p>
                <p>Credit:</p>
                <button>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

}




export default BasketComponent;