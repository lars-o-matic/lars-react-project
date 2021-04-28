import React, { Component } from 'react';

class GameTile extends Component {
    constructor() {
        super();
    }

    // properties: photoType = Cat or Person
    //   imgSrc = URL to the photo
    //   isReal = true (actual photo) / false (generated by AI GAN)
    //   buttonText = string

    render() {
        return (
            <li>
                <h3>This is a {this.props.photoType}</h3>
                <img src={this.props.imgSrc} alt={"a nice "+this.props.photoType}/>
                <button>{this.props.buttonText}</button>
            </li>
        )
    }
}

export default GameTile;