import React from 'react';
import './Petsy.css';

function Petsy() {
  return (
    <div className="petsy__container">
      <h6>Petsy (Etsy clone, for pets!)</h6>
      <div>
        <a className="petsy" href='http://petsy-g5.herokuapp.com/' target='_blank'>
          <img src="https://fit-yeah.s3.amazonaws.com/petsy-logo.png" width="300" height="175" />
        </a>
      </div>
    </div>
  )
}

export default Petsy
