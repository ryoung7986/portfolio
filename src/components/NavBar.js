import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <div className="title">
          <Navbar.Brand href="#home">Ryan Young</Navbar.Brand>
        </div>
        <div className="ml-auto">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#home">Resume</Nav.Link>
            <Nav.Link href="#home">Contact Me</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar
