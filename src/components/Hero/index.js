import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Avatar
} from './HeroElements';

function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <Avatar />
        <HeroH1>Ryan Young</HeroH1>
        <HeroP>Ryan is a full-stack web developer who loves to talk in third person.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="projects"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true">
            Projects {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
