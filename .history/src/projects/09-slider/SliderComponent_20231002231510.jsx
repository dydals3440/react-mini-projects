import React from 'react';

export default function SliderComponent() {
  return (
    <div className='container d-flex flex-column' style={{ gap: 100 }}>
      <input type='range' min='0' max={100} />
      <div
        style={{
          color: 'black',
          background: 'lightgray',
          height: `30px`,
          width: `30px`,
          fontWeight: 600,
        }}
      >
        <span>circle</span>
      </div>
    </div>
  );
}
