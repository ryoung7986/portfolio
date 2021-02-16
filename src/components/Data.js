import FitYeah from './Projects/FitYeah';
import Hangry from './Projects/Hangry';
import Petsy from './Projects/Petsy';

export const homeObjOne = {
  id: 'projects',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Projects',
  headline: 'A few recent projects',
  description: (
    <>
      <FitYeah />
      <Hangry />
      <Petsy />
    </>
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
  alt: 'Car',
  includeImage: true,
  dark: true,
  primary: true,
  darkText: false,
}
