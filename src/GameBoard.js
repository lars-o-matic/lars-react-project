import React, { Component } from 'react';
import GameTile from './GameTile';

class GameBoard extends Component {
    constructor() {
        super();
    }

    // properties: photoType = Cat or Person
    // currentRound, maxRounds

    render() {
        return (
            <div className="game-board">
                <h3>Round {this.props.currentRound} of {this.props.maxRounds}</h3>
                <p>Choose the Real photo below</p>
                <div>
                    <ul className="game-tiles">
                        <GameTile photoType={this.props.photoType}
                        imgSrc="https://place-puppy.com/200x150?a"
                        isReal="false"
                        buttonText={"I'm the real "+this.props.photoType}
                        />
                        <GameTile photoType={this.props.photoType}
                        imgSrc="https://place-puppy.com/200x150?b"
                        isReal="true"
                        buttonText={"No, I'm the real "+this.props.photoType+"!"}
                        />
                    </ul>
                </div>
            </div>
        )
    }
}

export default GameBoard;
