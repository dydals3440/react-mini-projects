import React, { useContext } from 'react';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { ThemeContext } from './context/DarkModeContext';

export default function Blog() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className='container p-1'>
        <Title text={`My Blog with ${theme} Theme`} />
        <span style={{ position: 'absolute', top: 10, right: 10 }}>
          <Button text={theme} />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est
          quae placeat vero suscipit consectetur exercitationem vel omnis optio
          eaque dolorum autem, doloribus reprehenderit eveniet at praesentium
          sed facere! Numquam neque eligendi accusantium quos dolorem recusandae
          voluptates explicabo odio, nostrum, fuga tempore facilis culpa eaque,
          illum nesciunt ad nobis laudantium.
        </p>
      </div>
    </>
  );
}
