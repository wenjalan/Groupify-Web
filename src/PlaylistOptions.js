import React from 'react';

// the list of options a host can configure their playlist with
class PlaylistOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxTracks: props.maxTracks,
            strictness: props.strictness,
            doRecommendations: props.doRecommendations,
            handleChange: props.handleCallback,
        };
    }

    render() {
        return (
            <div className="playlistOptions">
                <form>
                    <label>
                        Max Tracks:
                        <input 
                            name="maxTracks" 
                            type="text" 
                            onChange={this.state.handleChange} 
                            defaultValue={this.state.maxTracks} 
                        />
                    </label>
                </form>  
                <form>
                    <label>
                        Strictness:
                        <input 
                            name="strictness"
                            type="text" 
                            onChange={this.state.handleChange}
                            defaultValue={this.state.strictness} 
                        />
                    </label>
                </form>
                <form>
                    <label>
                        Add Recommendations:
                        <input 
                            name="doRecommendations"
                            type="checkbox" 
                            onChange={this.state.handleChange}
                            defaultChecked={this.state.doRecommendations} 
                        />
                    </label>
                </form>
            </div>
        );
    }

}

export default (PlaylistOptions);