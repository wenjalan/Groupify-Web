import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class ConsolePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            inviteLink: 'whoops'
        };
    }

    componentDidMount() {
        this.setState({
            inviteLink: this.props.getPartyInvite(),
        });
    }

    handleClick() {
        this.props.onCreatePlaylist();
    }

    render() {
        return (
            <div>
                <h1>> Let's Get Groovin'</h1>
                <h2>Current Party:</h2>
                <GuestList />
                <h3>Invite Link: <a>{this.state.inviteLink}</a></h3>
                <button onClick={this.handleClick}>
                    EVERYONE'S READY
                </button>
            </div>
        );
    }
}

function GuestList() {
    const guests = ['You (host)', 'Your Best Friend', 'Your Best Friend\'s Friend'];
    return guests.map((guests) => 
        <li>{guests}</li>
    );
}

export default (ConsolePage);