import React from 'react';

const RangeLine = ({ bpm, handleBpmChange }) => {

    return (
        <div className='bpm-input'>
            <div className='range-value'>{bpm} BMP</div>
            <input
                type="range"
                min="40"
                max="200"
                value={bpm}
                onChange={handleBpmChange} />
        </div>
    );
}
export default RangeLine;