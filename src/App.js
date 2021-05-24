import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './Game.module.css';
import Welcome from './Welcome';
import Setup from './Setup';
import GameBoardCats from './GameBoardCats';
import GameSummary from './GameSummary';
import ScoreBoard from './ScoreBoard';

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
      <Router>
      <div className="App">
        <h1>CATS YO</h1>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/setup">
            <Setup handleStartGame={this.handleStartGame} />
          </Route>
          <Route path="/play">
            {/* when this.state.isGameActive show it*/}
            <GameBoardCats 
              maxRounds={this.state.maxRounds}
              handleGameIsOver={this.handleGameIsOver}
              />
          </Route>
          <Route path="/summary">
            {/* visible when !this.state.isGameActive && this.state.userHasPlayed */}
            <GameSummary userGameData={this.state.userGameData} />
          </Route>
          <Route path="/scores">
            {/* what props do we pass to ScoreBoard? */}
            <ScoreBoard />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
