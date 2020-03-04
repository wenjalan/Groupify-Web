import React from 'react';
// import ReactDOM from 'react-dom';
import './GroupifyWeb.css';
// import * as serviceWorker from './serviceWorker';
import WelcomePage from './WelcomePage.js';
import ConsolePage from './ConsolePage.js';
import PlaylistCreatedPage from './PlaylistCreatedPage';

// GroupifyWeb class, parent of all sub-pages
const DEBUG = true;
const API_ENDPOINT = 'http://localhost:1000/api';

class GroupifyWeb extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            stage: 0,
            partyId: -1,
            playlistLink: 'null',
            partyInvite: 'hold on',
        });
        this.handleClick = this.handleClick.bind(this);
        this.createParty = this.createParty.bind(this);
        this.getPartyInvite = this.getPartyInvite.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
        this.getGuestList = this.getGuestList.bind(this);
    }

    // fired when the user clicks "Start the Party" on the WelcomePage
    async createParty() {
        // get the authentication URL
        console.log('requesting create party from service...');
        let endpointUrl = API_ENDPOINT + '/create'
        const response = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json()
        })
        .catch((error) => {
            console.log('error occurred:', error);
        });
        const authUrl = response.authUrl;
        console.log('got auth url:', authUrl);

        // save partyId
        let index = authUrl.search('&state=') + 7;
        let id = authUrl.substring(index, index + 5);

        // open it in a new window
        window.open(authUrl);

        // set party id state and move onto next page
        this.setState({
            partyId: id,
            stage: 1,
        });
        console.log('set party id to', id);
    }

    // fired when the ConsolePage loads
    async getPartyInvite() {
        // endpoint url
        const endpointUrl = API_ENDPOINT + '/add?party=' + this.state.partyId;

        console.log('getting join party url from service...');
        let response = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error('error:' + error);
            return null;
        });

        // handle response
        if (response == null) {
            console.log('party not found')
            return null;
        }
        else {
            const joinUrl = response.authUrl;
            console.log('got url:' + joinUrl);
            return joinUrl;
        }
    }

    // fired when the ConsolePage starts
    async getGuestList() {
        const endpointUrl = API_ENDPOINT + '/party?id=' + this.state.partyId;
        const response = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json()
        })
        .catch((error) => {
            console.log('error:', error);
            return null;
        });
        if (response == null) {
            return null;
        }
        else {
            return response.users;
        }
    }

    // fired when the user clicks "Everyone's In" on the ConsolePage
    async createPlaylist(options) {
        console.log('creating playlist...');
        let endpointUrl = (API_ENDPOINT + 
            '/make?party=' + this.state.partyId +
            '&addRecommendations=' + options.doRecommendations +
            '&maxSize=' + options.maxTracks +
            '&strictness=' + options.strictness
        );
        let res = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.error('error:' + error);
        })

        // if no response
        if (res == null) {
            console.error('couldn\'t retrieve url from service:', res);
            return null;
        }

        // if response
        const playlistUrl = res.playlistUrl;
        console.log('got playlist url:', playlistUrl);

        // move onto PlaylistCreatedPage
        this.setState({
            playlistLink: playlistUrl,
            stage: 2,
        });

        return playlistUrl;
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
                    <WelcomePage onCreateParty={this.createParty} />
                    <button className="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
        else if (this.state.stage == 1) {
            return (
                <div>
                    <ConsolePage onCreatePlaylist={this.createPlaylist} getPartyInvite={this.getPartyInvite} getGuestList={this.getGuestList}/>
                    <button className="debug-controls" onClick={this.handleClick}>
                        stage: {this.state.stage}
                    </button>
                </div>
            );
        }
        else if (this.state.stage == 2) {
            return (
                <div>
                    <PlaylistCreatedPage playlistLink={this.state.playlistLink} />
                    <button className="debug-controls" onClick={this.handleClick}>
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