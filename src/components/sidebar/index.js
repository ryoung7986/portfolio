import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

function Sidebar({ isOpen, toggleOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
      <Icon onClick={toggleOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleOpen}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggleOpen}>
            Projects
          </SidebarLink>
          <SidebarLink to="resume" onClick={toggleOpen}>
            Resume
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleOpen}>
            Contact Me
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
