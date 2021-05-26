import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GameSummary extends Component {
    // no constructor logic
    // props: userGameData passed from App.js
    render() {
        return (
        <section id="summary">
            <h2>Here's how you did</h2>
            <p>You played {this.props.userGameData.rounds} out of {this.props.userGameData.maxRounds} rounds and guessed {this.props.userGameData.score} correctly!</p>

            <ul>
              <li><Link to="/play">Play again</Link></li>
              <li><Link to="/scores">See the Score Board</Link></li>
              <li><Link to="/setup">New player</Link></li>
            </ul>
        </section>
        );
    }
}

export default GameSummary;
