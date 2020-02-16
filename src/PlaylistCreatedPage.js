import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class PlaylistCreatedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistLink: props.playlistLink,
        };
    }

    render() {
        return (
            <div>
                <h1>> Done.</h1>
                <h3>Here you go: {this.state.playlistLink}</h3>
            </div>
        );
    }
}

export default (PlaylistCreatedPage);