import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import FormGroup from '../components/FormGroup';
import AnimatedText from 'react-animated-text-content';

export default function TextAnimationApp() {
  const [inputValue, setInputValue] = useState('');
  const [animatedText, setAnimatedText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setAnimatedText(inputValue);
    setInputValue(() => '');
  };

  const inputText = useRef(null);

  useEffect(() => {
    if (inputText.current) {
      inputText.current.focus();
    }
  });

  return (
    <div className='container text-center'>
      <form
        className='container d-flex mt-4'
        onSubmit={(e) => e.preventDefault()}
      >
        <FormGroup
          labelText={'Type in your text to be animated'}
          inputType={'text'}
          placeholder={'your text'}
          values={inputValue}
          onChange={handleInputChange}
          ref={inputText}
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
