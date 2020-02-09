import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class PlaylistCreatedPage extends React.Component {
    constructor(state) {
        super(state);
        this.state = {
            playlistLink: 'https://open.spotify.com/playlist/6Q1AUIl35JgTy1RwydHs2b?si=KhzXSjiaR_W7D4gLvMGeiA'
        };
    }

    render() {
        return (
            <div>
                <h1>> One Playlist Comin' Right Up</h1>
                <h2>It'll be ready in just a sec.</h2>
                <h3>Here you go: {this.state.playlistLink}</h3>
            </div>
        );
    }
}

export default (PlaylistCreatedPage);