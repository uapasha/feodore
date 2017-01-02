import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
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
      <Provider store={store}>
        <div className="App">
          <MainLayout language={this.state.language} />

        </div>
      </Provider>
    );
  }
}

export default App;
