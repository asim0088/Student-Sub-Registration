import React from 'react'
import { Link } from 'react-router-dom';
const Addcourse = () => {
  return (
    <div class="form-container">
    <h2 class="form-title">ADD COURSE</h2>

    <form action="#">
      <div class="form-group">
        <label class="form-label">Branch:</label>
        <input type="text" class="form-input" name="branch" required />
      </div>

      <div class="form-group">
        <label class="form-label">Sem:</label>
        <input type="text" class="form-input" name="sem" required />
      </div>

      <div class="form-group">
        <label class="form-label">Course Code:</label>
        <input type="text" class="form-input" name="courseCode" required />
      </div>

      <div class="form-group">
        <label class="form-label">Course Name:</label>
        <input type="text" class="form-input" name="courseName" required />
      </div>

      <div class="form-group">
        <label class="form-label">Basket Name:</label>
        <input type="text" class="form-input" name="basketName" required />
      </div>

      <div class="form-group">
        <label class="form-label">Credit:</label>
        <input type="number" class="form-input" name="credit" required />
      </div>

      <div class="form-group">
        <button type="submit" class="form-button">Submit</button>
        <Link class="form-button-close" to="/Courses">Close</Link>
        
      </div>
    </form>
  </div>
  )
}

export default Addcourse