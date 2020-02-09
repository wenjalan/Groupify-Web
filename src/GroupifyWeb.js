import React from 'react';
// import ReactDOM from 'react-dom';
import './GroupifyWeb.css';
// import * as serviceWorker from './serviceWorker';
import WelcomePage from './WelcomePage.js';
import ConsolePage from './ConsolePage.js';
import PlaylistCreatedPage from './PlaylistCreatedPage';

// GroupifyWeb class, parent of all sub-pages
const DEBUG = true;

class GroupifyWeb extends React.Component {
    constructor(state) {
        super(state);
        this.state = ({
            stage: 0,
        });
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            stage: (prevState.stage + 1) % 3,
        }));
    }

    render() {
        // welcome page
        if (this.state.stage == 0) {
            return (
                <div>
                    <WelcomePage />
                    <button class="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
        else if (this.state.stage == 1) {
            return (
                <div>
                    <ConsolePage />
                    <button class="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
        else if (this.state.stage == 2) {
            return (
                <div>
                    <PlaylistCreatedPage />
                    <button class="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>whoops, something went wrong</h2>
                    <button class="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
    }
}

export default (GroupifyWeb);