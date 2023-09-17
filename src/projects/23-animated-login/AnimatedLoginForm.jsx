import React, { useRef, useEffect } from 'react';
import FormGroup from '../components/FormGroup';
import { Button } from '../components/Button';
import { LoginContainer, FormAnimation } from './Form.Style';

export default function AnimatedLoginForm() {
  let email = useRef(''),
    password = useRef('');
  useEffect(() => {
    email.current.focus();
  });
  let formStyle = {
    width: 350,
    marginTop: '15vh',
  };

  return (
    <LoginContainer>
      <FormAnimation></FormAnimation>
      <form style={formStyle} className='card m-1 m-auto'>
        <h2 className='subtitle my-2'>Login</h2>
        <FormGroup labelText='Email' inputType='email' reference={email} />
        <FormGroup
          labelText='Password'
          inputType='password'
          reference={password}
        />
        <div className='form-group'>
          <Button btnClass={'btn-block'} text='Submit' />
          <small className='text-accept'>Don't have a account?</small>
          <label
            className='mt-1 fw-200 text-right'
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            Register
          </label>
        </div>
      </form>
    </LoginContainer>
  );
}
