import React, { Component } from 'react';
import GameTile from './GameTile';
import GameVoteResult from './GameVoteResult';
import sampleCat from './images/cat-placeholder-512-7aFH8GK.jpg'

class GameBoard extends Component {
    constructor() {
        super();
        const initialCatDataArray = [
            {imgSrc: "", isReal: false},
            {imgSrc: "", isReal: false}
        ];
        this.state = {
            showResult: false,
            voteWasCorrect: false,
            currentRound: 1,
            currentScore: 0,
            catDataArray: initialCatDataArray
        }
    }

    // props: photoType = Cat or Person DEPRECATED: just do Cat
    // maxRounds = how many rounds define the game
    // handleGameIsOver = function from parent, takes boolean

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
            const gameIsOver = (this.state.currentRound > this.props.maxRounds);
            if (gameIsOver) {
                // calculate game result
                // allow that user might exit before maxRounds
                const gameData = {
                    score: this.state.currentScore,
                    rounds: prevState.currentRound,
                    maxRounds: this.props.maxRounds
                };
                // notify App
                this.props.handleGameIsOver(gameData);
            } else {
            // get data for the next round, put cat data into state
                this.fetchData();
            }
        }
    }
        
    fetchData = () => {
        // calls API, updates state with a call to this.setState(...)
        const ganCatApiUrl = "https://thiscatdoesnotexist.com/?v="
            + this.state.currentRound;
        const realCatBaseUrl = "https://cataas.com";
        const realCatApiUrl = "/cat?type=sq&width=512&json=true";
        // put both CatData objects into a CatDataArray
        const ary = [];

        // Get a new GAN cat into a CatData object
        // NOTE returned image is always 512x512 px
        // NOTE the image is at the URL itself - no JSON data
        // TODO append random query string to ensure non-cached image?
        // TODO is there any way at all to specify return image params?
        const ganCat = {
            imgSrc: ganCatApiUrl,
            isReal: false
        };
        ary.push(ganCat);

        // Get a new Real Cat from API ditto
        const fetchRealCatData = async () => {
            try {
                const response = await fetch(realCatBaseUrl+realCatApiUrl);
                const apiData = await response.json();
                //console.log(apiData);
                
                const realCat = {
                    imgSrc: apiData 
                        ? (apiData.url ? realCatBaseUrl+apiData.url : sampleCat)
                        : sampleCat,
                    isReal: true
                };
                ary.push(realCat);
        
                // randomly swap the two objects in the array, 50% chance
                if (Math.random() > 0.5){
                    ary.reverse();
                }
                // setState the CatDataArray
                this.setState({
                    catDataArray: ary
                });
            } catch(error) {
                console.log(error);
            }
        }
        fetchRealCatData();
    }

    handleVote = (e) => {
        // TODO display "Correct!" or "Sorry..." to user in an overlay with a "More cats" button
        // TODO advance to next round only when that button is clicked
        e.preventDefault();
        // tabulate correct guesses
        // note: button value attribute is read as string
        const newScore = (e.target.value === 'true')
            ? this.state.currentScore + 1
            : this.state.currentScore;
        
        // show result of this round
        this.setState({
            showResult: true,
            voteWasCorrect: (e.target.value === 'true'),
            currentScore: newScore,
        });
        // console.log("state in GameBoardCats in handleVote:")
        // console.log(this.state);
    }

    handleAdvanceToNextRound = (e) => {
        e.preventDefault();

        // dismiss Results, advance to the next round
        const nextRound = this.state.currentRound + 1;
        this.setState({
            showResult: false,
            currentRound: nextRound,
        });
    }

    render() {
        return (
        <section id="game">
            <h2>Real {this.state.photoType} or GAN?</h2>
            <div className="game-board">
                <h3>Round {this.state.currentRound} of {this.props.maxRounds}</h3>
                {this.state.showResult
                ? <GameVoteResult
                    voteResult={this.state.voteWasCorrect ? "Correct!" : "Sorry..."}
                    buttonText={this.state.currentRound < this.props.maxRounds
                        ? "Load more Cats!" : "See final score"}
                    handleAdvanceToNextRound={this.handleAdvanceToNextRound} />
                : <>
                <p>Current score {this.state.currentScore} / {this.state.currentRound - 1}</p>
                <p>Can you guess the Real photo below?</p>
                </>
                }
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
        </section>
        )
    }
}

export default GameBoard;
