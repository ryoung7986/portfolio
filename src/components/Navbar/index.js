import React from 'react';
import swe_resume from '../../Documents/swe_resume.pdf';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';
import './Navbar.css';

function NavBar({ toggleOpen }) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavLinks to="hero">
            Ryan Young
          </NavLinks>
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
            <NavLinks to="skills">
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">
              Contact Me
            </NavLinks>
          </NavItem>
          <NavItem className="navbar__resume">
            <a style={{ textDecoration: "none" }} href={swe_resume} target="_blank">Resume</a>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar
