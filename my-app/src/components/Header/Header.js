import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          SPORTS CLIQ!!!
        </header>
        <div className="App-intro">
          <p>
            Click on every Sport once.  Whenever you click a Sport the grid will shuffle.
          <br />
            If you click on a Sport more than once or Reach a Score of 12, the game will restart!
        </p>
        </div>
        <div className="Count">
          <p>
            Score: {this.props.score}
        </p>
        </div>
      </div>

    );
  }
}

export default Header;
