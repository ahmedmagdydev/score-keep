import React, { Component } from 'react';
import PlayersList from './components/playersList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PlayersList/>
        </div>
      </div>
    );
  }
}

export default App;
