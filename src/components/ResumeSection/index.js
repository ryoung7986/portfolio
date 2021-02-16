import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import swe_resume from '../../images/resume.png'
import './ResumeSection.css';

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='resume-container' id="resume">
      <div className="resumeImg">
        <img src={swe_resume} />
      </div>
    </div>
  )
}

export default Resume;
