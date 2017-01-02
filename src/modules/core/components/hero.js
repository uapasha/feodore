import React, { PropTypes } from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';
import Logo from './logo';

const Hero = ({ heroContent, language }) => (
  <Jumbotron>
    <Logo />
    <PageHeader>{heroContent.headerBig[language]}</PageHeader>
    <p>{heroContent.headerSmall[language]}</p>
  </Jumbotron>
);

Hero.propTypes = {
  heroContent: PropTypes.object,
  language: PropTypes.string,
};

export default Hero;
