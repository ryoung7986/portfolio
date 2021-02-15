import React from 'react';
import { FaBars } from 'react-icons/fa';
// import { Navbar, Nav } from 'react-bootstrap';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

function NavBar({ toggleOpen }) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          Ryan Young
          </NavLogo>
        <MobileIcon onClick={toggleOpen}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">
              About
              </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects">
              Projects
              </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="resume">
              Resume
              </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">
              Contact Me
              </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar
