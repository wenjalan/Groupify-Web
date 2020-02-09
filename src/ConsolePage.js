import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class ConsolePage extends React.Component {
    constructor(state) {
        super(state);
    }

    render() {
        return (
            <div>
                <h1>> Let's Get Groovin'</h1>
                <h2>Current Party:</h2>
                <GuestList />
                <h3>Invite Link: <a>http://groupi.fy/XXXX</a></h3>
                <GenerateButton />
            </div>
        );
    }
}

function GuestList() {
    const guests = ['Alan Wen (host)', 'James Wendell', 'Wendy Alexis', 'XXXXXXXXX'];
    return guests.map((guests) => 
        <li>{guests}</li>
    );
}

function GenerateButton() {
    return (
        <button onClick={onGenerateButtonClickedEvent}>
            EVERYONE'S READY
        </button>
    );
}

function onGenerateButtonClickedEvent() {
    alert('generateButtonClickedEvent')
}

export default (ConsolePage);