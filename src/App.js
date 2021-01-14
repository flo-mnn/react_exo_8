import React, { Component } from 'react';
import './App.css';

class App extends Component {

  loguer = () => {
    console.log('Bonjour');
  };

  render() {
    return (
      <div className="App">
        <h1>Exercice 8</h1>
        <button onClick={this.loguer}>Clique ici</button>
      </div>
    )
  }
}

export default App
