import React from 'react';
import swe_resume from '../../Documents/swe_resume.pdf';
import './ResumeSection.css';

function Resume() {
  return (
    <div className='resume-container' id="resume">
      <a href={swe_resume} />
    </div>
  )
}

export default Resume;
