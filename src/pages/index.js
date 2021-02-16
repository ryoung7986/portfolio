import React, { useState } from 'react'
import NavBar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import ResumeSection from '../components/ResumeSection';
import { homeObjOne, homeObjTwo } from '../components/Data';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <NavBar toggleOpen={toggleOpen} />
      <Hero />
      <ProjectSection {...homeObjOne} />
      <ProjectSection {...homeObjTwo} />
      <ResumeSection />
    </>
  )
}

export default Home
