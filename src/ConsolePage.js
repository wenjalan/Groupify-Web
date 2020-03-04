import React from 'react';
import PlaylistOptions from './PlaylistOptions.js';

class ConsolePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.loadInviteLink = this.loadInviteLink.bind(this);
        this.loadGuestList = this.loadGuestList.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
        this.state = {
            inviteLink: 'loading...',
            maxTracks: 50,
            strictness: 2,
            doRecommendations: true,
        };
    }

    // handles a change in the playlist options
    handleOptionsChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log('updated playlist property ' + name + ' to ' + value);
        this.setState({
            [name]: value,
        });
    }

    async componentDidMount() {
        if (this.state.inviteLink == 'loading...') {
            let i = setInterval(this.loadInviteLink, 5000);
            this.setState({
                interval: i,
            })
        }
        // start refreshing guest list
        let i2 = setInterval(this.loadGuestList, 5000);
        this.setState({
            interval2: i2,
        });
    }

    componentWillUnmount() {
        // stop updating guest list
        clearInterval(this.state.interval)
        clearInterval(this.state.interval2);
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

    async loadGuestList() {
        // constantly refresh every 5 seconds
        console.log('refreshing guest list...');
        let guestList = await this.props.getGuestList();
        this.setState({
            guests: guestList,
        });
    }

    handleClick() {
        console.log('creating playlist with properties:');
        console.log('maxTracks:' + this.state.maxTracks);
        console.log('strictness:' + this.state.strictness);
        console.log('doRecommendations:' + this.state.doRecommendations);
        this.props.onCreatePlaylist({
            maxTracks: this.state.maxTracks,
            strictness: this.state.strictness,
            doRecommendations: this.state.doRecommendations,
        });
    }

    render() {
        return (
            <div>
                <h1>> Let's Get Groovin'</h1>
                <h2>Current Party:</h2>
                <GuestList guests={this.state.guests}/>
                <h3>Invite Link: <a>{this.state.inviteLink}</a></h3>
                <PlaylistOptions 
                    maxTracks={this.state.maxTracks} 
                    strictness={this.state.strictness}
                    doRecommendations={this.state.doRecommendations}
                    handleCallback={this.handleOptionsChange} 
                />
                <button onClick={this.handleClick}>
                    EVERYONE'S READY
                </button>
            </div>
        );
    }
}

function GuestList(state) {
    let guests = state.guests;
    if (guests == null) {
        return (<li>waiting...</li>);
    }
    return guests.map((guests) => 
        <li>{guests}</li>
    );
}

export default (ConsolePage);