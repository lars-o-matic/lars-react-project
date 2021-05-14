import React, { Component } from 'react';
import GameTile from './GameTile';
import sampleCat from './images/cat-placeholder-512-7aFH8GK.jpg'

class GameBoard extends Component {
    constructor() {
        super();
        this.state = {
            ganFirst: false
        }
    }
    // TODO add currentRound, maxRounds to state HERE (not in App.js)
    // TODO define handler for cat-selection button clicks HERE and pass to 
    //   GameTile in props. The handler should report back so that game state
    //   can be updated here. Each click is recorded as correct or not, and 
    //   triggers gameplay to advance to next round.
    // TODO Gameboard determines when game ends (i.e. when currentRound = maxRounds)
    // TODO Gameboard then writes the user's final score to Firebase and 
    //   returns control to parent so it can show the Summary view. HOW TO DO?

    // properties: photoType = Cat or Person
    // TODO flip ganFirst randomly between true/false in each round

    render() {
        return (
            <div className="game-board">
                <h3>Round {this.props.currentRound} of {this.props.maxRounds}</h3>
                <p>Choose the Real photo below<br/>
                    <strong>TODO</strong> randomize left vs right cats</p>
                <div>
                    <ul className="game-tiles">
                    { this.state.ganFirst 
                        ? 
                        <>
                            <GameTile photoType={this.props.photoType}
                                imgSrc="https://thiscatdoesnotexist.com/"
                                isReal="false"
                                buttonText={"I'm the real "+this.props.photoType} />
                            <GameTile photoType={this.props.photoType}
                                imgSrc={sampleCat}
                                isReal="true"
                                buttonText={"No, I'm the real "+this.props.photoType+"!"} />
                        </>
                        :
                        <>
                            <GameTile photoType={this.props.photoType}
                                imgSrc={sampleCat}
                                isReal="true"
                                buttonText={"No, I'm the real "+this.props.photoType+"!"} />
                            <GameTile photoType={this.props.photoType}
                                imgSrc="https://thiscatdoesnotexist.com/"
                                isReal="false"
                                buttonText={"I'm the real "+this.props.photoType} />
                        </>
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default GameBoard;
