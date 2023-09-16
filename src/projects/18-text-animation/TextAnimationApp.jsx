import React, { useState } from 'react';
import { Button } from '../components/Button';
import FormGroup from '../components/FormGroup';
import AnimatedText from 'react-animated-text-content';

export default function TextAnimationApp() {
  const [inputValue, setInputValue] = useState('Matthew');
  const [animatedText, setAnimatedText] = useState('Text');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClear = () => {
    setAnimatedText(inputValue);
    setInputValue('');
  };
  return (
    <div className='container text-center'>
      <form
        action=''
        className='container d-flex mt-4'
        onSubmit={(e) => e.preventDefault()}
      >
        <FormGroup
          labelText={'Type in your text to be animated'}
          inputType={'text'}
          placeholder={'your text'}
          values={inputValue}
          onChange={handleInputChange}
        />
        <Button
          text='clear'
          btnClass={'btn-large btn-danger'}
          onClick={handleClear}
        />
      </form>
      {animatedText && (
        <AnimatedText
          type='char'
          interval={0.04}
          duration={1.1}
          animation={{ x: '-100px', y: '-150px', ease: 'linear' }}
          className='title'
        >
          {animatedText}
        </AnimatedText>
      )}
    </div>
  );
}
