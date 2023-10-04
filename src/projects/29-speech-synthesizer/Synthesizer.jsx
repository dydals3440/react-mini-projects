import React, { useState } from 'react';

function Synthesizer() {
  const [text, setText] = useState('text');
  return (
    <div className='container d-flex flex-column'>
      {/* <SpeechNarrator text={text}/> */}
      <textarea
        cols='30'
        row='10'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Synthesizer;
