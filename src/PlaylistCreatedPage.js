import React from 'react';

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
                <h3>Check your Spotify.</h3>
            </div>
        );
    }
}

export default (PlaylistCreatedPage);