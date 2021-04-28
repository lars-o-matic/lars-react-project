import React, { Component } from 'react';
import GameTile from './GameTile';
import sampleCat from './images/cat-placeholder-512-7aFH8GK.jpg'

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
                <p>Choose the Real photo below<br/>
                    <strong>TODO</strong> randomize left vs right cats</p>
                <div>
                    <ul className="game-tiles">
                        <GameTile photoType={this.props.photoType}
                        imgSrc="https://thiscatdoesnotexist.com/"
                        isReal="false"
                        buttonText={"I'm the real "+this.props.photoType}
                        />
                        <GameTile photoType={this.props.photoType}
                        imgSrc={sampleCat}
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
