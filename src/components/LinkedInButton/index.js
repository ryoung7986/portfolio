import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Link } from "react-router-dom";

const LinkedInButton = ({ mailto, label }) => {

  return (
    <a
      href='https://www.linkedin.com/in/ryan-young-b67a7aab/'
      target="_blank"
    >
      <IconButton>
        <LinkedInIcon style={{ fontSize: 40, color: 'white' }} />
      </IconButton>
    </a>
  );
};

export default LinkedInButton;
