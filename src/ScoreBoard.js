import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

class ScoreBoard extends Component {
  // constructor?

  render() {
    return (
      <section id="scores">
        <h2>Score Board</h2>
        <p><strong>TODO</strong> display top N (10?) high scores from Firebase</p>
        <ul>
          <li><Link to="/play">Play again</Link></li>
          <li><Link to="/setup">New player</Link></li>
          <li><Link to="/">Quit</Link></li>
        </ul>
      </section>  
    );
  }
}

export default ScoreBoard;
