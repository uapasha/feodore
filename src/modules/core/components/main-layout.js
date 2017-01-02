import React, { Component, PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Navigation from '../containers/navigation';
import Hero from '../containers/hero';
import '../styles/hero.css'

class MainLayout extends Component {
  static propTypes = {
    language: PropTypes.string,
  };

  render() {
    return (
      <div>
        <Navigation language={this.props.language} />
        <Hero language={this.props.language}/>

        <Grid fluid >
          <Row>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MainLayout;
