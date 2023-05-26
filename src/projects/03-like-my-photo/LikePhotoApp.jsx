import React, { useState } from 'react';
import { Title } from '../components/Title';
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';

export const LikePhotoApp = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div className='container text-center'>
      <Title text={'Like Photo App'} />
      <Title classes={'subtitle'} text={`Likes ${count}`} />
      <div
        className='card card-dark m-auto shadow-sm'
        style={{ width: 300, cursor: 'pointer' }}
        onDoubleClick={handleClick}
      >
        <div className='card-header fs-xl'>
          <AiFillSmile className='mr-2' />
          <small>DoggyDog</small>
        </div>
        <img
          src='https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
          alt='img'
          style={{ height: '600px', objectFit: 'contain' }}
        />
        <div
          className='card-footer fs-xl d-flex'
          style={{ justifyContent: 'space-between' }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className='text-danger' onClick={handleClick} />
          ) : (
            <AiOutlineHeart onClick={handleClick} />
          )}
        </div>
      </div>
    </div>
  );
};
