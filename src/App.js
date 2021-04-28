import React, { Component } from 'react';
import './App.css';
import './Game.module.css';
import GameBoard from './GameBoard';

//import GameTile from './GameTile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photoType: "Cat",
      maxRounds: 10,
      currentRound: 0
    }
  }

  render() {
    return (
      <div className="App">
        <section id="intro">
          <h1>Real Photo or AI?</h1>
          <p><strong>TODO</strong> Welcome screen, explain the rules</p>
          <p><strong>TODO</strong> Setup screen, player sets her name / preferences</p>
          <p><strong>TODO</strong> Game screen</p>
          <p><strong>TODO</strong> initialize Game; start first round. Each round, display images side-by-side for the player to guess which is the real photo of a Cat (or Person). Upon each guess, track the player's score and advance to the next round.</p>
          <p><strong>TODO</strong> Each round, make calls to get a new photo from a photo API and a new AI-generated fake from the GAN source URL.</p>
          <p><strong>TODO</strong> after the last round, display the player's score, and record it in the game's scores database tagged with the player's name. Retrieve and display high scores to date.</p>
          <p><strong>TODO</strong> Stats screen, show high scores</p>
        </section>
        <section id="game">
          <h2>Real {this.state.photoType} or GAN?</h2>

          <GameBoard photoType={this.state.photoType} 
            currentRound={this.state.currentRound} 
            maxRounds={this.state.maxRounds}
            />
        </section>

      </div>
    );
}
}

export default App;
