import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// welcome page class, shown at startup
class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let url = this.props.onCreateParty();
        // window.open(url);
    }

    render() {
        return (
            <div>
                <WelcomeHeader />
                <button onClick={this.handleClick}>
                    START THE PARTY
                </button>
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

export default (WelcomePage);