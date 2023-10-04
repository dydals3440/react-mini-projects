import React from 'react';
import { AiFillRobot, AiOutlineRobot } from 'react-icons/ai';

function SpeechNarrator({ text }) {
  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: 'pointer',
  };
  return (
    <div className='container d-flex flex-column my-3' style={{ gap: 30 }}>
      <h1>Speech Narrator</h1>
      <AiFillRobot style={robotStyle} className='text-primary' />
      <AiOutlineRobot style={robotStyle} />
      {/* <HighlightedText/> */}
      <div className='form-group'>
        <label htmlFor='range'>Rate: {'rate'}</label>
        <input
          type='range'
          id='range'
          step='.1'
          max='2'
          min='.5'
          value={'rateValue'}
        />
      </div>
    </div>
  );
}

export default SpeechNarrator;
