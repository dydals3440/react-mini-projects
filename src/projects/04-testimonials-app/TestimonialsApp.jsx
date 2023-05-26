import React, { useState, useEffect } from 'react';
import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

export const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState('');
  const [items, setItems] = useState('');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className='container m-auto'>
      <Title text={'Testimonals App'} />
      <Button
        text={'text'}
        btnClass='btn-info'
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials('Posts')}
      />
      <Button
        text={'Users'}
        btnClass='btn-info'
        icon={<FaUserAlt />}
        onClick={() => setTestimonials('Users')}
      />
      <Button
        text={'Comments'}
        btnClass='btn-info'
        icon={<FaUserAlt />}
        onClick={() => setTestimonials('Comments')}
      />
      <Title
        classes={'subtitle text-primary'}
        text={!testimonials ? 'Select form above!' : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className='card card-primary mb-2' key={item.id}>
                {item.name && <h2 className='card-header'>{item.name}</h2>}
                <div className='card-body'>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className='card-footer'>{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
};
