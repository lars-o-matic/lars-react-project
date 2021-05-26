import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {
    // constructor?

    render() {
        return (
            <section id="intro">
                <h2>Welcome!</h2>
                <h3>Can you tell a Real Cat Photo from one generated by AI?</h3>
                <p>Play by guessing which Cat image is a real photo, and which is AI-generated by a <abbr title="Generative Adversarial Network">GAN</abbr>.</p>
                <p>Do well, and your high score may be immortalized in the top {this.props.topN} on the Score Board!</p>
                <Link to="/setup">Set up to play!</Link>
                <Link to="/scores">See the Score Board!</Link>

                <div className="colophon">
                  <h3>Colophon</h3>
                  <p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" rel="noreferrer" target="_blank">Create React App</a> and uses React-Router and Firebase, among other libraries.</p>
                  <p>Services used include:</p>
                  <ul>
                    <li><a href="https://github.com/" rel="noreferrer" target="_blank">GitHub</a> for my git repo and authentication</li>
                    <li><a href="https://firebase.google.com/" rel="noreferrer" target="_blank">Firebase</a> for Realtime Database</li>
                    <li><a href="https://thispersondoesnotexist.com/" rel="noreferrer" target="_blank">This Person Does Not Exist</a> for GAN images</li>
                    <li><a href="https://cataas.com/" rel="noreferrer" target="_blank">Cat as a service</a> for real cat photos</li>
                  </ul>
                  <p>This is my project for the <a rel="noreferrer" target="_blank" href="https://junocollege.com/course/react">ReactJS 8-week class</a> from <a rel="noreferrer" target="_blank" href="https://junocollege.com">Juno College</a> (formerly HackerYou) in spring 2021.</p>
                  <p>Huge thanks to instructors Darshana and Talia and coach Zena!</p>
                </div>
            </section>
        );
    }
}

export default Welcome; 
