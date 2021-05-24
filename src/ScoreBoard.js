import React, { Component } from 'react';

class ScoreBoard extends Component {
    // constructor?

    render() {
        return (
            <section id="scores">
                <h2>Score Board</h2>
                <p><strong>TODO</strong> display top N (10?) high scores from Firebase</p>
                <p><strong>TODO</strong> provide links to New Player (/setup), Play Again (/play with same player), and Quit? (/welcome)</p>
            </section>  
        );
    }
}

export default ScoreBoard;
