import React, { Component } from 'react';
import RangeLine from './RangeLine';
import StartButton from './StartButton';
import click from '../Audio/sound.wav';

class Metronome extends Component {

    // State
    state = {
        playing: false,
        bpm: 120
    };

    // Audio object created
    click = new Audio(click);

    handleBpmChange = ({ target }) => {
        const bpm = target.value;
        if (this.state.playing) {

            // Stop the old timer and start a new one
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60000 / bpm));

            // Set the new BPM
            this.setState({ bpm });
        } else {

            // Otherwise just update the BPM
            this.setState({ bpm });
        }
    }

    startStop = () => {
        if (this.state.playing) {

            // Stop the timer
            clearInterval(this.timer);
            this.setState({ playing: false });
        } else {

            // Start a timer with the current BPM
            this.timer = setInterval(this.playClick, (60000 / this.state.bpm));
            this.setState({
                playing: true
            },

                // Play a click "immediately" (after setState finishes)
                this.playClick);
        }
    }

    // Function for click play
    playClick = () => {
        this.click.play();
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Metronome</h1>
                <RangeLine bpm={this.state.bpm} handleBpmChange={this.handleBpmChange} />
                <StartButton startStop={this.startStop} playing={this.state.playing} />
            </div>
        );
    }
}
export default Metronome;