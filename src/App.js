import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './Welcome';
import Setup from './Setup';
import GameBoardCats from './GameBoardCats';
import GameSummary from './GameSummary';
import ScoreBoard from './ScoreBoard';
import firebase from './firebase';
import './App.css';
import './Game.module.css';

class App extends Component {
  constructor() {
    super();
    // do we need maxRounds in userGameData? should always be same as global maxRounds
    const initGameData = {
      userName: "",
      score: 0,
      rounds: 0,
      maxRounds: 0
    };
    this.state = {
      photoType: "Cat",
      userGameData: initGameData
    }
  }

  // Setup sets username and maxRounds
  handleSetup = (name, rounds) => {
    this.setState({
      userGameData: {
        userName: name,
        score: 0,
        rounds: 0,
        maxRounds: rounds,
      }
    });
    // Setup will perform the Redirect to /play
  }

  handleGameIsOver = (gameData) => {
    // TODO allow for user to exit game before maxRounds?
    this.setState({
      userGameData: gameData
    });
    console.log("gameData:", gameData);
    // save gameData tagged with user's name and date
    this.writeToScoreBoard(gameData);
  }

  writeToScoreBoard = (gameData) => {
    // write a final game score to Firebase database
    // a record should have:
    //   timestamp, currentUser, score, rounds, maxRounds (of the game the user played)
    const scoreBoardData = {
      createdDate: Date.now(),
      userName: gameData.userName,
      score: gameData.score,
      rounds: gameData.rounds,
      maxRounds: gameData.maxRounds
    };
    const scoreBoardRef = firebase.database().ref('/cat-game-scoreboard');
    const newRecord = scoreBoardRef.push(scoreBoardData);
    console.log("new record:", newRecord);
  }

  render() {
    return (
      <Router>
      <div className="App">
        <h1>😺 CATS YO 🙀</h1>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/setup">
            <Setup handleSetup={this.handleSetup} />
          </Route>
          <Route path="/play">
            <GameBoardCats 
              maxRounds={this.state.userGameData.maxRounds}
              userName={this.state.userGameData.userName}
              handleGameIsOver={this.handleGameIsOver}
              />
          </Route>
          <Route path="/summary">
            <GameSummary userGameData={this.state.userGameData} />
          </Route>
          <Route path="/scores">
            <ScoreBoard topN={5} canPlayAgain={this.state.userGameData.userName!==""}/>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
