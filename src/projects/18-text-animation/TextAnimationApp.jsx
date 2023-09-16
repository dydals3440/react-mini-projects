import React from 'react';
import { Button } from '../components/Button';
export default function TextAnimationApp() {
  return (
    <div className='container text-center'>
      <form
        action=''
        className='container d-flex mt-4'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='form-group'>
          <label>Type in your text to be animated</label>
          <input type='text' placeholder='Your Text' />
        </div>
        <Button text='clear' btnClass={'btn-large btn-danger'} />
      </form>
      Animate Text
    </div>
  );
}
