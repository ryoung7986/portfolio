import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import ResumeSection from '../components/ResumeSection';
import { homeObjOne, homeObjTwo, homeObjThree, aboutObj } from '../components/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewResume, setViewResume] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const toggleResume = () => {
    setViewResume(!viewResume);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <NavBar toggleOpen={toggleOpen} />
      <Hero />
      <ProjectSection {...aboutObj} />
      <ProjectSection {...homeObjOne} />
      <ProjectSection {...homeObjTwo} />
      <ProjectSection {...homeObjThree} />
      <ResumeSection toggleResume={toggleResume} viewResume={viewResume} />
    </>
  )
}

export default Home
