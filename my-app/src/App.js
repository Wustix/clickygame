import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import SportsCard from './components/SportsCard';
import Header from './components/Header';
import sports from './sports.json';
import './App.css';

class App extends Component {

  state = {
    sports
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>
          {this.state.sports.map(sports => (
            <SportsCard
              image={sports.image}
            />
          ))}
        </Wrapper>



      </div>
    );
  }
}

export default App;
