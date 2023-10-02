import React from 'react';

export default function SliderComponent() {
  return (
    <div className='container d-flex flex-column' style={{ gap: 100 }}>
      <input type='range' min='0' max={100} />
      <div style={{ color: 'black', height: `30px` }}>
        <span>circle</span>
      </div>
    </div>
  );
}
