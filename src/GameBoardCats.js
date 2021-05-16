import React, { Component } from 'react';
import GameTile from './GameTile';
import sampleCat from './images/cat-placeholder-512-7aFH8GK.jpg'

class GameBoard extends Component {
    constructor() {
        super();
        const initialCatDataArray = [
            {imgSrc: "", isReal: false},
            {imgSrc: "", isReal: false}
        ];
        this.state = {
            currentRound: 1,
            currentScore: 0,
            catDataArray: initialCatDataArray
        }
    }

    // props: photoType = Cat or Person DEPRECATED: just do Cat
    // maxRounds = how many rounds define the game
    // handleGameIsOver = function from parent, takes boolean
    // TODO flip ganFirst randomly between true/false in each round

    // state: currentRound = 0..maxRounds
    //   currentScore
    //   catDataArray = info from API for current round

    // local variables

    componentDidMount() {
        // here is anything we want to happen after the component renders - like grab our AJAX data
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState) {
        // here is anything we want to happen after the component has been updated.
        // Use the previous values to check if you should perform any logic.
        // cases: user's score changed
        //   currentRound changed
        //     subcase: currentRound is after maxRounds
        if (this.state.currentRound !== prevState.currentRound){
            const gameIsOver = (this.state.currentRound >= this.props.maxRounds);
            if (gameIsOver) {
                // calculate game result
                // allow that user might exit before maxRounds
                const gameData = {
                    score: this.state.currentScore,
                    rounds: this.state.currentRound,
                    maxRounds: this.props.maxRounds
                };
                // notify App
                this.props.handleGameIsOver(gameData);
            } else {
            // get data for the next round, update state
                this.fetchData();
            }
        }
    }
        
    fetchData() {
        // calls API, updates state with a call to this.setState(...)
        // put both CatData objects into a CatDataArray
        const ary = [];

        // TODO Get a new GAN cat into a CatData object
        const ganCat = {
            imgSrc: "https://thiscatdoesnotexist.com/",
            isReal: false
        };
        ary.push(ganCat);

        // TODO Get a new Real Cat from API ditto
        const realCat = {
            imgSrc: sampleCat,
            isReal: true
        };
        ary.push(realCat);

        // randomly swap the two objects in the array, 50% chance
        if (Math.random() > 0.5){
            ary.reverse();
        }
        //console.log(ary);
        // setState the CatDataArray
        const theCurrentRound = this.state.currentRound;
        this.setState({
            currentRound: theCurrentRound,
            catDataArray: ary
        });
        //console.log(this.state);
    }

    handleVote = (e) => {
        // console.log("you clicked to vote! e.target = ...");
        // console.log(e.target);
        e.preventDefault();
        // tabulate correct guesses
        // note: button value attribute is read as string
        const newScore = (e.target.value === 'true')
            ? this.state.currentScore + 1
            : this.state.currentScore;
        
        // advance to the next round
        const nextRound = this.state.currentRound + 1;
        this.setState({
            //...this.state,
            currentScore: newScore,
            currentRound: nextRound
        });
        console.log("state in GameBoardCats in handleVote:")
        console.log(this.state);
    }

    render() {
        return (
            <div className="game-board">
                <h3>Round {this.state.currentRound} of {this.props.maxRounds}</h3>
                <p>Current score {this.state.currentScore} / {this.state.currentRound + 1}</p>
                <p>Can you guess the Real photo below?</p>
                <div>
                    <ul className="game-tiles">
                    <>
                        <GameTile photoType="Cat"
                            imgSrc={this.state.catDataArray[0].imgSrc}
                            isReal={this.state.catDataArray[0].isReal}
                            buttonText="I'm the real Cat"
                            handleVote={this.handleVote} />
                        <GameTile photoType="Cat"
                            imgSrc={this.state.catDataArray[1].imgSrc}
                            isReal={this.state.catDataArray[1].isReal}
                            buttonText="No, I'm the real Cat!"
                            handleVote={this.handleVote} />
                    </>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GameBoard;
