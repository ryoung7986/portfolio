import React from 'react';
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
            <NavLinks to="projects">
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">
              Contact Me
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="resume">
              Resume
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar
