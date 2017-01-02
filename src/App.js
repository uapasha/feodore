import React, { Component } from 'react';
import MainLayout from './modules/core/components/main-layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'ua',
    };
  }

  render() {
    return (
      <div className="App">
        <MainLayout language={this.state.language} />

      </div>
    );
  }
}

export default App;
