import React from 'react';
import './FitYeah.css';

function FitYeah() {
  return (
    <div className="fit-yeah__container">
      <h5>Fit-Yeah! (a fitness app)</h5>
      <div className="fit-yeah__container--div">
        <a className="fit-yeah" href='http://fit-yeah.herokuapp.com/' target="_blank">
          <img src="https://fit-yeah.s3.amazonaws.com/fy-portfolio-logo.jpg" width="300" height="175" />
        </a>
      </div>
      <h6>Fit-yeah! is a fitness-centric social-media application. Create your own workouts and workout-schedule; earn points for completed workouts; follow other users and see what they're up to on your personal feed; like and/or comment on their posts and achievements!</h6>
      <p><b>Technologies Used:</b></p>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Flask</li>
        <li>SQLAlchemy</li>
        <li>PostgresQL</li>
        <li>AWS / S3</li>
      </ul>
    </div>
  )
}

export default FitYeah
