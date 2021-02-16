import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const LinkedInButton = ({ mailto, label }) => {

  return (
    <a
      href='https://www.linkedin.com/in/ryan-young-b67a7aab/'
      target="_blank"
    >
      <IconButton>
        <LinkedInIcon style={{ fontSize: 45, color: 'white' }} />
      </IconButton>
    </a>
  );
};

export default LinkedInButton;
