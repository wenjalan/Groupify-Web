import React from 'react';

class ConsolePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.loadInviteLink = this.loadInviteLink.bind(this);
        this.state = {
            inviteLink: 'loading...',
        };
    }

    async componentDidMount() {
        if (this.state.inviteLink == 'loading...') {
            let i = setInterval(this.loadInviteLink, 5000);
            this.setState({
                interval: i,
            })
        }
    }

    async loadInviteLink() {
        let joinUrl = await this.props.getPartyInvite();
        if (joinUrl != null) {
            clearInterval(this.state.interval);
            this.setState({
                inviteLink: joinUrl,
            });
        }
        
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
    const guests = ['You (host)', 'Your Best Friend', 'Your Other Friend'];
    return guests.map((guests) => 
        <li>{guests}</li>
    );
}

export default (ConsolePage);