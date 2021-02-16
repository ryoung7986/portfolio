import FitYeah from './Projects/FitYeah';
import Hangry from './Projects/Hangry';
import Petsy from './Projects/Petsy';

export const homeObjOne = {
  id: 'about',
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
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Contact Me',
  headline: "Let's get in touch",
  // description: 'description.',
  buttonLabel: 'Get started',
  imgStart: true,
  img: require('../images/svg-1.svg').default,
  alt: 'Car',
  includeImage: true,
  // dark: true,
  // primary: true,
  darkText: false,
}
