import React from 'react';

const StartButton = ({ startStop, playing }) => {
    return (
        <div className='button'>
            <button onClick={startStop}> {playing ? 'Stop' : 'Start'} </button>
        </div>
    );
}
export default StartButton;