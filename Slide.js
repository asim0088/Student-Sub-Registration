import React from 'react';
import { Link } from 'react-router-dom';

const Slide = () => {
  return (
    <nav>
        <div id="slidebar">
        <ul>
          <li><Link to="/Homee">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="Feedback">Feedback</Link></li>
          <li><Link to="ChangePassword">ChangePassword</Link></li>
          <li><Link to="/Logout">Logout</Link></li>
        </ul>
</div> 
{/* <div class="video-container">
    <video autoplay loop muted playsinline>
      <source src="comp.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div> */}
    </nav>
  )
}

export default Slide;