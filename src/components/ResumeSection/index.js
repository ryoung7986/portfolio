import React, { useState } from 'react';
import swe_resume from '../../images/resume.png'
import { ResumeContainer, ResumeWrapper } from './ResumeElements';

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ResumeContainer>
        <button onClick={toggleOpen}>Resume</button>
        <ResumeWrapper>
          <div className="resumeImg">
            {isOpen ? (
              <img src={swe_resume} />
            ) : null}
          </div>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume;
