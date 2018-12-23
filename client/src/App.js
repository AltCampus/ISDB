import React, { Component } from 'react';
import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello World
        </header>
      </div>
    );
  }
}

export default App;
