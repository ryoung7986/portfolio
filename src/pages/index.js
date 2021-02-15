import React, { useState } from 'react'
import NavBar from '../components/navbar'
import Sidebar from '../components/sidebar';
import Hero from '../components/hero';

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
    </>
  )
}

export default Home
