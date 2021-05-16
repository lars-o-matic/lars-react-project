import React, { Component } from 'react';
import './App.css';
import './Game.module.css';
import GameBoardCats from './GameBoardCats';
// TODO GameBoardPersons to support Is It A Real Person option

//import GameTile from './GameTile';

class App extends Component {
  constructor() {
    super();
    const initGameData = {
      score: 0,
      rounds: 0,
      maxRounds: 0
  };
    this.state = {
      photoType: "Cat",
      maxRounds: 5,
      isGameActive: false,
      userHasPlayed: false,
      currentUser: "Foo Blechly",
      userGameData: initGameData
    }
  }

  handleStartGame = (event) => {
    event.preventDefault();
    this.setState({
      isGameActive: true
    });
  }
  handleGameIsOver = (gameData) => {
    // do we need gameIsOver param? what if user exits game before maxRounds?
    console.log("The game is over!");
    this.setState({
      isGameActive: false,
      userHasPlayed: true,
      userGameData: gameData
    });
    // set view state, save gameData tagged with user's name and date
    // setting isGameActive should trigger change of view state
  }

  render() {
    return (
      <div className="App">
        <section id="intro">
          <h1>Real Photo or AI?</h1>
          <p><strong>TODO</strong> Welcome screen, explain the rules</p>
          <p><strong>TODO</strong> Game screen</p>
          <p><strong>TODO</strong> initialize Game; start first round. Each round, display images side-by-side for the player to guess which is the real photo of a Cat (or Person). Upon each guess, track the player's score and advance to the next round.</p>
          <p><strong>TODO</strong> Each round, make calls to get a new photo from a photo API and a new AI-generated fake from the GAN source URL.</p>
          <p><strong>TODO</strong> after the last round, display the player's score, and record it in the game's scores database tagged with the player's name. Retrieve and display high scores to date.</p>
          <p><strong>TODO</strong> Stats screen, show high scores</p>
        </section>
        <section id="setup">
          <h2>Set up your game</h2>
          <p><strong>TODO</strong> player username input</p>
          <p><strong>TODO</strong> offer choice of Cat or Person</p>
          <p><strong>TODO</strong> player picks max. rounds of play</p>
          <button onClick={this.handleStartGame}>Start a game!</button>
        </section>
        { this.state.isGameActive && 
        <section id="game">
          <h2>Real {this.state.photoType} or GAN?</h2>

          {/* TODO how can we tell when the game is over? 
          Can the GameBoard signal when currentRound >= maxRounds? */}
          <GameBoardCats 
            maxRounds={this.state.maxRounds}
            handleGameIsOver={this.handleGameIsOver}
            />
        </section>
        }
        { !this.state.isGameActive && this.state.userHasPlayed &&
        <section id="summary">
          <h2>Here's how you did</h2>
          <p><strong>TODO</strong> encapsulate game summary into its own component</p>
          <p>You played {this.state.userGameData.rounds} out of {this.state.userGameData.maxRounds} rounds and guessed {this.state.userGameData.score} correctly!</p>
        </section>
        }
      </div>
    );
}
}

export default App;
