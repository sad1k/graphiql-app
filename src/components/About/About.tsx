'use client';

import Project from './Project/Project';
import Team from './Team/Team';
import AboutImage from './AboutImage/AboutImage';
import Course from './Course/Course';

const About = () => (
  <section data-testid='about-section'>
    <AboutImage />
    <Project />
    <Team />
    <Course />
  </section>
);

export default About;
