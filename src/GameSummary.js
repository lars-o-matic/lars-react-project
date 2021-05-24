import React, { Component } from 'react';

class GameSummary extends Component {
    // no constructor logic
    // props: userGameData passed from App.js
    render() {
        return (
        <section id="summary">
            <h2>Here's how you did</h2>
            <p><strong>TODO</strong> fancy up this component!</p>
            <p>You played {this.props.userGameData.rounds} out of {this.props.userGameData.maxRounds} rounds and guessed {this.props.userGameData.score} correctly!</p>
            <p><strong>TODO</strong> add Links to play a new game, or to view high scores, or to setup a new player.</p>
        </section>
        );
    }
}

export default GameSummary;
