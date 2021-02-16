import React from 'react';
import './Hangry.css';

function Hangry() {
  return (
    <div className="hangry__container">
      <h6>Hangry (Yelp clone app)</h6>
      <div>
        <a className="hangry" href='https://hangry-yelp-clone.herokuapp.com/' target='_blank'>
          <img src="https://fit-yeah.s3.amazonaws.com/hangry-logo.png" width="300" height="175" />
        </a>
      </div>
    </div>
  )
}

export default Hangry
