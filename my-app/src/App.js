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

      <Wrapper>
        <Header />
        {this.state.sports.map(sports => (
          <SportsCard
            id={sports.id}
            key={sports.id}
            image={sports.image}
          />
        ))}

      </Wrapper>




    );
  }
}

export default App;
