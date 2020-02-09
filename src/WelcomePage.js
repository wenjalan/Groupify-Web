import React from 'react';
import ReactDOM from 'react-dom';
// import './GroupifyWeb.css';
import * as serviceWorker from './serviceWorker';

// welcome page class, shown at startup
class WelcomePage extends React.Component {
    constructor(state) {
        super(state);
    }

    render() {
        return (
            <div>
                <WelcomeHeader />
                <StartButton />
            </div>
        );
    }
}

// welcome header
function WelcomeHeader() {
    return (
        <div>
            <h1><b>> Groupify Alpha</b></h1>
            <h2>A Spotify app for people with friends.</h2>
        </div>
    );
}

// start button
function StartButton() {
    return (
        <button onClick={onButtonClickedEvent}>
            START THE PARTY
        </button>
    );
}

// onButtonClickedEvent Listener
function onButtonClickedEvent() {
    alert("party started.");
}

export default (WelcomePage);