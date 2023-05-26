import React from 'react';
import { Alert } from '../components/Alert';

export const Alerts = () => {
  return (
    <div className='container mx-auto'>
      <Alert type={'success'} message={'successful access'} />
      <Alert type={'info'} message={'Time triggered'} delay={true} />
      <Alert type={'success'} message={'successful access'} />
    </div>
  );
};
