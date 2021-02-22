import FitYeah from './Projects/FitYeah';
import Hangry from './Projects/Hangry';
import Petsy from './Projects/Petsy';
import './Data.css';

export const homeObjOne = {
  id: 'projects',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Projects',
  headline: 'A few recent projects',
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
  id: 'contact',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
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
  darkText: false,
}

export const homeObjThree = {
  id: 'skills',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'Skills',
  headline: "Skills",
  description: (
    <ul className="skills-ul">
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
  buttonLabelEmail: 'Email',
  buttonLabelLinkedIn: 'LinkedIn',
  buttonLabelGithub: 'GitHub',
  imgStart: false,
  img: require('../images/svg-3.svg').default,
  alt: '',
  includeImage: true,
  dark: true,
  primary: true,
  darkText: true,
}
