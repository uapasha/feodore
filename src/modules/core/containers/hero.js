import React from 'react';
import Hero from '../components/hero';

import content from '../../../content';

const { hero: heroContent } = content;

export default ({ language }) => (
  <Hero heroContent={heroContent} language={language} />
);
