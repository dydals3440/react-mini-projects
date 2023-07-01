import React, { useState } from 'react';
import { Button } from '../components/Button';

export const TemperatureControllerApp = () => {
  const handlePlus = () => {
    setTemperature((prev) => prev + 1);
  };
  const handleMinus = () => {
    setTemperature((prev) => prev - 1);
  };
  const [temperature, setTemperature] = useState(0);
  return (
    <div className='container mt-3 text-center'>
      <div className='card bg-light m-auto' style={{ width: 200 }}>
        <h1
          className={`text-light card border-50 ${
            temperature > 0 ? 'bg-danger' : 'bg-info'
          }`}
          style={{ width: 150, height: 150, border: '2px solid #666' }}
        >
          {temperature} ℉
        </h1>
        <div>
          <Button text={'-'} btnClass={'btn-lg'} onClick={handleMinus} />
          <Button text={'+'} btnClass={'btn-lg'} onClick={handlePlus} />
        </div>
      </div>
    </div>
  );
};
