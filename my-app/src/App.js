import React, { Component } from 'react';

import SportsCard from './components/SportsCard/SportsCard';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.sports.map(sports => (
          <SportsCard
            image={sports.image}
          />
        ))}



      </div>
    );
  }
}

export default App;
