import React, { Component } from 'react';

class Setup extends Component {
    // constructor?

    render() {
        return (
            <section id="setup">
                <h2>Set up your game</h2>
                <p><strong>TODO</strong> player username input</p>
                <p><strong>DEPRECATED</strong> offer choice of Cat or Person</p>
                <p><strong>TODO</strong> player picks max. rounds of play</p>
                <button onClick={this.props.handleStartGame}>Start a game!</button>
            </section>  
        );
    }
}

export default Setup;
