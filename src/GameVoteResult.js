import React, { Component } from 'react';

class GameVoteResult extends Component {
    // hide constructor if no extra logic, else React gives warning
    // constructor() {
    //     super();
    // }

    // props:
    //   voteResult = "Correct" or "Wrong"
    //   buttonText = "Go to next round" or "View final score"
    //   handleAdvanceToNextRound = passed-in function

    render(){
        return(
            <div className="voteResult">
                <h3>{this.props.voteResult}</h3>
                <p><strong>TODO</strong> show a "Loading..." element when refreshing the Cat photos until both are loaded</p>
                <button onClick={this.props.handleAdvanceToNextRound}>{this.props.buttonText}</button>
            </div>
        );
    }
}

export default GameVoteResult;
