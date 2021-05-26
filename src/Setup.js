import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Setup extends Component {
  // props:
  //   handleSetup = passed-in function; args = username, maxRounds


  // constructor sets local state for user input
  // TODO must set those back into global state for use by App!
  constructor() {
    super();
    this.state = {
      howManyRounds: 10,
      roundsIsError: false,
      username: "",
      nameIsEmpty: false,
      doRedirect: false
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    // TODO ensure rounds and username are OK
    const isNameValid = (this.state.username.length > 0);
    this.setState({nameIsEmpty: !isNameValid});

    const isRoundsInteger = Number.isInteger(this.state.howManyRounds);
    const isRoundsPositive = (this.state.howManyRounds > 0);
    const isRoundsValid = isRoundsInteger && isRoundsPositive;
    this.setState({roundsIsError: !isRoundsValid});
    if (isNameValid && isRoundsValid) {
      this.props.handleSetup(this.state.username, this.state.howManyRounds);
      //this.context.history.push("/play");
      this.setState({doRedirect: true});
    }
  }

  render() {
    return (
    <section id="setup">
      <div>
        <h2>Set up your game</h2>
      </div>

      <form action="">
        <div>
          <label htmlFor="username">Pick a player name:</label>
          <input type="text" id="username" value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})} />
          {this.state.nameIsEmpty && <span className="error">Please give a name</span>}
        </div>
        <div>
          <label htmlFor="maxRounds">How many rounds do you want to play?</label>
          <input type="number" id="maxRounds" value={this.state.howManyRounds}
            onChange={(e) => this.setState({howManyRounds: parseInt(e.target.value)})} />
          {this.state.roundsIsError && <span className="error">Please give a positive whole number</span>}
        </div>
        <button onClick={this.handleClick}>Start a game!</button>
      </form>
      {this.state.doRedirect && <Redirect to="/play" />}
    </section>  
    );
  }
}

export default Setup;
