import React from 'react';
import { Button } from '../components/Button';
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa';

export default function SearchFilter({
  handleToggleContacts,
  handleToggleSortAZ,
}) {
  return (
    <section className='text-center'>
      <Button
        btnClass={''}
        text=''
        icon={<FaAddressBook />}
        onClick={handleToggleContacts}
      />
      <input
        type='text'
        placeholder='Search by first name'
        className='mb-2 mx-1'
        style={{ padding: '.3rem .5rem' }}
      />
      <Button
        btnClass={''}
        text=''
        icon={<FaArrowsAltV />}
        onClick={handleToggleSortAZ}
      />
    </section>
  );
}
