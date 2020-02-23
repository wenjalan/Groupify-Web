import React from 'react';

class ConsolePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.loadInviteLink = this.loadInviteLink.bind(this);
        this.loadGuestList = this.loadGuestList.bind(this);
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
        this.props.onCreatePlaylist();
    }

    render() {
        return (
            <div>
                <h1>> Let's Get Groovin'</h1>
                <h2>Current Party:</h2>
                <GuestList guests={this.state.guests}/>
                <h3>Invite Link: <a>{this.state.inviteLink}</a></h3>
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