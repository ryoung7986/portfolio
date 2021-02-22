import React from 'react';
import './Petsy.css';

function Petsy() {
  return (
    <div className="petsy__container">
      <h5>Petsy (Etsy clone, for pets!)</h5>
      <div className="petsy__container--div">
        <a className="petsy" href='http://petsy-g5.herokuapp.com/' target='_blank'>
          <img src="https://fit-yeah.s3.amazonaws.com/petsy-logo.png" width="300" height="175" />
        </a>
      </div>
      <h6>Petsy is a marketplace for pets, or those looking to add another member to their family! Petsy also offers items for all your pet needs.</h6>
      <p><b>Technologies Used:</b></p>
      <ul>
        <li>React</li>
        <li>Flask</li>
        <li>SQLAlchemy</li>
        <li>PostgresQL</li>
      </ul>
    </div>
  )
}

export default Petsy
