import React from 'react';

import { Title } from '../components/Title';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LazyLoadPost({ title, img }) {
  return (
    <div className='card mb-4'>
      <div className='card-header'>
        {!title ? (
          <Title classes={'subtitle'} text='post title' />
        ) : (
          <Title classes={'subtitle'} text={title} />
        )}
      </div>
      <div className='card-body d-flex' style={{ gap: 10 }}>
        <LazyLoadImage
          src={img}
          alt=''
          height={'fit-content'}
          width={500}
          effect='blur'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur
          quam corrupti, inventore quis dolorem earum saepe. Ad rerum,
          exercitationem dignissimos quisquam et officiis nobis, veritatis fugit
          voluptatum eius omnis.
        </p>
      </div>
    </div>
  );
}
