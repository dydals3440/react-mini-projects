import React, { useState } from 'react';
import { AiFillRobot, AiOutlineRobot } from 'react-icons/ai';

function SpeechNarrator({ text }) {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to),
  ];
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  });
  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: 'pointer',
  };

  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.addEventListener('boundary', ({ charIndex, charLength }) => {
    setHighlightSection({ from: charIndex, to: charIndex + charLength });
  });

  const HighlightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to);
    return (
      <div className='card' style={{ width: 500 }}>
        {start}
        <span className='bg-warning'>{highlight}</span>
        {finish}
      </div>
    );
  };

  return (
    <div className='container d-flex flex-column my-3' style={{ gap: 30 }}>
      <h1>Speech Narrator</h1>
      <AiFillRobot style={robotStyle} className='text-primary' />
      <AiOutlineRobot style={robotStyle} />
      <HighlightedText text={text} {...highlightSection} />
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
