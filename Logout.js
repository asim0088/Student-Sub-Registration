import React from 'react'

const Logout = () => {
  return (
    <div className="logout-container">
      <div className="logout-message">
        <p>Are you sure you want to log out?</p>
        <button className="logout-button">Yes</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default Logout;