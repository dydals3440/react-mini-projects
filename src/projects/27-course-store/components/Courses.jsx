import React from 'react';
import Course from './Course';

export default function Courses({ list }) {
  return (
    <ul className='d-flex mt-2' style={{ flewWrap: 'wrap', gap: 30 }}>
      {list.map((item) => {
        return <Course key={item.id} course={item} />;
      })}
    </ul>
  );
}
