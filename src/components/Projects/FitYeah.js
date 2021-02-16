import React from 'react';
import './FitYeah.css';

function FitYeah() {
  return (
    <div className="fit-yeah__container">
      <h6>Fit-Yeah! (a fitness app)</h6>
      <div>
        <a className="fit-yeah" href='http://fit-yeah.herokuapp.com/' target="_blank">
          <img src="https://fit-yeah.s3.amazonaws.com/fy-portfolio-logo.jpg" width="300" height="175" />
        </a>
      </div>
    </div>
  )
}

export default FitYeah
