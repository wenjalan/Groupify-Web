import React from 'react';
// import ReactDOM from 'react-dom';
import './GroupifyWeb.css';
// import * as serviceWorker from './serviceWorker';
import WelcomePage from './WelcomePage.js';

// GroupifyWeb class, parent of all sub-pages
class GroupifyWeb extends React.Component {
    constructor(state) {
        super(state);
        this.state = ({
            stage: 0,
        });
    }

    render() {
        // welcome page
        if (this.state.stage == 0) {
            return <WelcomePage />;
        }
        else {
            return <h2>whoops, something went wrong</h2>
        }
    }
}

export default (GroupifyWeb);