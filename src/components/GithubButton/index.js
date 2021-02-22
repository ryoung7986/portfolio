import React from "react";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const GithubButton = ({ mailto, label }) => {

  return (
    <a
      href='https://github.com/ryoung7986'
      target="_blank"
    >
      <IconButton>
        <GitHubIcon style={{ fontSize: 40, color: 'gray' }} />
      </IconButton>
    </a>
  );
};

export default GithubButton;
