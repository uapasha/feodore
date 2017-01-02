import React, { Component, PropTypes } from 'react';
import Navigation from '../components/navigation';

import content from '../../../content';

const { navigation: navigationContent } = content;

export default ({ language }) => (
  <Navigation navigationContent={navigationContent} language={language} />
);
