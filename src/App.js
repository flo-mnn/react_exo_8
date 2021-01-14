import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    number : 1
  };


  loguer = (e) => {
    console.log('Bonjour');
    e.target.parentElement.classList.toggle('bg');
    e.target.parentElement.firstElementChild.classList.toggle('white');
  };

  hover = (e) => {
    console.log(e.target.textContent);
  };

  render() {

    console.log(this.state.number);

    return (
      <div className="App">
        <h1 onMouseOver={this.hover}>Exercice 8</h1>
        <button onClick={this.loguer}>Clique ici</button>
      </div>
    )
  }
}

export default App
