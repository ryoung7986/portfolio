import FitYeah from './Projects/FitYeah';
import Hangry from './Projects/Hangry';
import Petsy from './Projects/Petsy';
import './Data.css';

export const aboutObj = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Ryan',
  headline: 'A little about me...',
  img: require('../images/svg-4.svg').default,
  alt: '',
  description: (
    <div className="data-description__about">
      <p>
        {`I'm a software developer from Philadelphia,
        with experience building full-stack applications
        using a variety of technologies (see below).
        Building things, innovating, solving problems,
        and self-improvement are what drive me. I'm looking
        to jump into a rewarding career with a great
        team, and meet some cool people along the way.`}
      </p>
    </div>
  ),
  includeImage: true,
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjOne = {
  id: 'projects',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'A few recent projects...',
  headline: 'Projects',
  description: (
    <div className="data-description">
      <FitYeah />
      <Hangry />
      <Petsy />
    </div>
  ),
  darkText: true,
}

export const homeObjTwo = {
  id: 'skills',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Some things I know...",
  headline: "Skills",
  description: (
    <ul className="Some things I know...">
      <li><b>JavaScript</b></li>
      <li><b>Python</b></li>
      <li><b>HTML</b></li>
      <li><b>CSS</b></li>
      <li><b>NodeJS</b></li>
      <li><b>React</b></li>
      <li><b>Redux</b></li>
      <li><b>Flask</b></li>
      <li><b>Express</b></li>
      <li><b>SQLAlchemy</b></li>
      <li><b>Sequelize</b></li>
      <li><b>Git</b></li>
      <li><b>AWS</b></li>
    </ul>
  ),
  imgStart: false,
  img: require('../images/svg-3.svg').default,
  alt: '',
  includeImage: true,
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjThree = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contact Me',
  headline: "Let's get in touch",
  buttonLabelEmail: 'Email',
  buttonLabelLinkedIn: 'LinkedIn',
  buttonLabelGithub: 'GitHub',
  imgStart: true,
  img: require('../images/svg-2.svg').default,
  alt: '',
  includeImage: true,
  dark: true,
  primary: true,
  darkText: true,
}
