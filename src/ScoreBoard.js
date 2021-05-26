import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from './firebase';

class ScoreBoard extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    }
  }

  // props:
  //   topN = how many high scores to display
  //   canPlayAgain = whether to show Play Again link

  componentDidMount() {
    // get the ScoreBoard data from Firebase
    const scoreBoardRef = firebase.database().ref('/cat-game-scoreboard');
    scoreBoardRef.on("value", (snapshot) => {
      const rawData = snapshot.val();
      const highScores = [];
      // populate array with row objects, each having: createdDate, userName, score, rounds, calculated percentage
      for (let key in rawData) {
        const { createdDate, userName, score, rounds } = rawData[key];
        const percentage = Math.round(1000 * score / rounds) / 10;
        highScores.push({ key, createdDate, userName, score, rounds, percentage });
      }

      highScores.sort((a, b) => {
        if (a.percentage < b.percentage) { return 1 }
        else if (a.percentage === b.percentage) { return b.rounds - a.rounds }
        else { return -1 }
      });

      this.setState({
        scores: highScores.slice(0, this.props.topN)
      });
    });
  }


  render() {
    return (
      <section id="scores">
        <h2>Score Board</h2>
        <p>These are the champion cat-guessers!</p>

        {this.state.scores.length===0
        ? <p>There are no scores on the board yet.</p>
        : <><table>
          <caption>Top {this.props.topN} High Scores</caption>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
              <th>(%)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {this.state.scores.map((row, key) => {
          let date = new Date(row.createdDate);
          return(
            <tr>
              <td>{row.userName}</td>
              <td>{row.score} / {row.rounds}</td>
              <td>{row.percentage}%</td>
              <td>{date.toDateString()} at {date.toLocaleTimeString()}</td>
            </tr>);
          })}
          </tbody>
        </table>
        <p className="footnote">Note: longer games with the same percentage are ranked higher than shorter games.</p></>}

        <ul>
          {this.props.canPlayAgain && <li><Link to="/play">Play again</Link></li>}
          <li><Link to="/setup">New player</Link></li>
          <li><Link to="/">Quit</Link></li>
        </ul>
      </section>  
    );
  }
}

export default ScoreBoard;
