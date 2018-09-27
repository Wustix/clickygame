import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import SportsCard from './components/SportsCard';
import Header from './components/Header';
import sports from './sports.json';
import './App.css';

class App extends Component {

  state = {
    sports,
    clickedSport: [],
    score: 0
  };

  imageClick = event => {
    const currentSport = event.target.alt;
    const SportAlreadyClicked =
    this.state.clickedSport.indexOf(currentSport) > -1;
    console.log(currentSport);
    console.log(SportAlreadyClicked);


    if (SportAlreadyClicked) {
      this.setState({
        sports: this.state.sports.sort(function (a, b) {
          return 0.5 - Math.random();

        }),
        clickedSport: [],
        score: 0
      });
      // alert("You lose, Play again?")


    } else {
      this.setState(


        {
          sports: this.state.sports.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedSport: this.state.clickedSport.concat(
            currentSport
          ),
          score: this.state.score + 1

        },
        () => {
          if (this.state.score === 12) {
            // alert("Good Job, You Won!!!!");
            this.setState({
              sports: this.state.sports.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedSport: [],
              score: 0
            });
          }
        }
      );
    }
  };

 
  render() {
    return (

      <Wrapper>
        <Header />
        {this.state.sports.map(sports => (
          <SportsCard
            imageClick={this.imageClick}
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
