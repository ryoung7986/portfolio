import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './Avatar.css';

function Avatar() {
  return (
    <Container className="avatar">
      <Image width={375} height={420} src="https://fit-yeah.s3.amazonaws.com/profile-pic.jpg" roundedCircle />
    </Container>
  )
}

export default Avatar
