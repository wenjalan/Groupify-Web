import React from 'react';

// welcome page class, shown at startup
class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onCreateParty();
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
            <h6>Alpha Version "secure as a paper prison". <a href='https://github.com/wenjalan/Groupify'>GitHub</a></h6>
        </div>
    );
}

export default (WelcomePage);