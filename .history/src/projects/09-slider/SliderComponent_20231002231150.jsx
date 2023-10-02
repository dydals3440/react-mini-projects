import React from 'react';

export default function SliderComponent() {
  return (
    <div className='container d-flex flex-column'>
      <input type='range' min='0' max={100} />
    </div>
  );
}
