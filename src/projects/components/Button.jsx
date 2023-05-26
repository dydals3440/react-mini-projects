import React from 'react';

export const Button = ({ text, btnClass = 'click', icon, onClick }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};
