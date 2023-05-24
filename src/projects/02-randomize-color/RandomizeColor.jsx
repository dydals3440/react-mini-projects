import React from 'react';
import { Title } from '../components/Title';

export const RandomizeColor = () => {
  const handleSecClick = (e) => {
    console.log(e.target);
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    e.target.style.backGroundColor = getRandomColor();
  };
  // Random하게 Color를 가져오는 법 Hex 코드는 숫자 6개
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className='container m-auto text-c'>
      <Title text={'Randomize color'} classes={'mb-4'} />
      <button className='btn btn-danger' onClick={handleSecClick}>
        Click me
      </button>
      <button className='btn btn-success' onClick={handleSecClick}>
        Click me
      </button>
      <button className='btn btn-primary' onClick={handleSecClick}>
        Click me
      </button>
      <button className='btn btn-warning' onClick={handleSecClick}>
        Click me
      </button>
    </div>
  );
};
