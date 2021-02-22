import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import swe_resume from '../../Documents/swe_resume.pdf';
import './ResumeSection.css';

function Resume() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleOpen = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className='resume-container' id="resume">
      <a href={swe_resume} />
    </div>
  )
}

export default Resume;
