import React from 'react';

export const Title = ({ classes, text }) => {
  return (
    <h1
      className={
        !classes ? 'title text-center' : classes || 'title text-center '
      }
    >
      {!text ? 'Title' : text}
    </h1>
  );
};
