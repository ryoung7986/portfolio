import React from 'react';
import './Hangry.css';

function Hangry() {
  return (
    <div className="hangry__container">
      <h5>Hangry (Yelp clone app)</h5>
      <div className="hangry__container--div">
        <a className="hangry" href='https://hangry-yelp-clone.herokuapp.com/' target='_blank'>
          <img src="https://fit-yeah.s3.amazonaws.com/hangry-logo.png" width="300" height="175" />
        </a>
      </div>
      <h6>Hangry is a One-stop hub for restaurants and consumers inspired by Yelp. Users can create accounts to browse restaurant information and member reviews.</h6>
      <p><b>Technologies Used:</b></p>
      <ul>
        <li>NodeJS</li>
        <li>PugJS</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgresQL</li>
      </ul>
    </div>
  )
}

export default Hangry
