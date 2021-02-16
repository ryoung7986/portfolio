import React from 'react';
import FitYeah from "./FitYeah";
import Petsy from './Petsy';
import Hangry from './Hangry';
import './ProjectGrid.css';

function ProjectGrid() {
  return (
    <div className="project-grid">
      <FitYeah />
      <Petsy />
      <Hangry />
    </div>
  )
}

export default ProjectGrid
