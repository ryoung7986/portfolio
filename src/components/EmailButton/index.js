import React from "react";
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';

import { Link } from "react-router-dom";

const EmailButton = ({ mailto, label }) => {

  return (
    <Link
      to='#'
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <IconButton>
        <EmailIcon style={{ fontSize: 40, color: 'white' }} />
      </IconButton>
    </Link>
  );
};

export default EmailButton;
