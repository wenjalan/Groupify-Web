import React from 'react';
// import ReactDOM from 'react-dom';
import './GroupifyWeb.css';
// import * as serviceWorker from './serviceWorker';
import WelcomePage from './WelcomePage.js';
import ConsolePage from './ConsolePage.js';
import PlaylistCreatedPage from './PlaylistCreatedPage';

// GroupifyWeb class, parent of all sub-pages
const DEBUG = true;
const API_ENDPOINT = 'http://24.16.66.0:1001/api';

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
    }

    // fired when the user clicks "Start the Party" on the WelcomePage
    async createParty() {
        // get the authentication URL
        console.log('requesting create party from service...');
        let endpointUrl = API_ENDPOINT + '/action?action=create&party=null'
        const authUrl = await fetch(endpointUrl, {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.text();
        })
        .catch((error) => {
            console.error('error occurred:', error);
        });
        console.log('success, url:', authUrl);

        // save partyId
        let index = authUrl.search('&state=') + 7;
        let id = authUrl.substring(index, index + 5);

        // open it in a new window
        window.open(authUrl);

        // set party id state and move onto next page
        this.setState({
            partyId: id,
            // stage: 1,
        });
        console.log('set party id to', id);
    }

    // fired when the ConsolePage loads
    async getPartyInvite() {
        // endpoint url
        const endpointUrl = API_ENDPOINT + '/join?party=' + this.state.partyId;

        // poll every 2 seconds for the invite link
        console.log('waiting for join party url from service...');
        let joinUrl = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.text();
        })
        .catch((error) => {
            console.error('error:' + error);
            return null;
        });
        console.log('success, join url:' + joinUrl);
        return joinUrl;
    }

    // fired when the user clicks "Everyone's In" on the ConsolePage
    async createPlaylist() {
        console.log('creating playlist...');
        let endpointUrl = API_ENDPOINT + '/action?action=MAKE&party=' + this.state.partyId;
        let res = await fetch(endpointUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            return response.text();
        })
        .catch((error) => {
            console.error('error:' + error);
        })
        console.log('response:' + res);

        // move onto PlaylistCreatedPage
        this.setState({
            stage: 2,
        });

        return res;
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
                    <ConsolePage onCreatePlaylist={this.createPlaylist} getPartyInvite={this.getPartyInvite} />
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