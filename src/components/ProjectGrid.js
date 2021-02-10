import React from 'react';
import FitYeah from "./FitYeah";
import Petsy from './Petsy';
import Hangry from './Hangry';
import './ProjectGrid.css';

function ProjectGrid() {
  return (
    <div className="project-grid">
      <h3>Fit-Yeah! (a fitness app)</h3>
      <FitYeah />
      <h3>Petsy (Etsy clone, for pets!)</h3>
      <Petsy />
      <h3>Hangry (Yelp clone app)</h3>
      <Hangry />
    </div>
  )
}

export default ProjectGrid
