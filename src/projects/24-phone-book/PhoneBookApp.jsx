import React, { useState } from 'react';
import { Title } from '../components/Title';
import ContactList from './ContactList';

export default function PhoneBookApp() {
  const [showContacts, setShowContacts] = useState(true);
  return (
    <>
      <Title text={'Phone book'} />
      <main className='bg-dark p-1 text-light'>
        {/* <SearchFilter /> */}
        <div style={{ height: 650, overflow: 'auto' }}>
          <h2 className='subtitle text-center'>Display contacts</h2>
          {showContacts && <ContactList />}
        </div>
      </main>
    </>
  );
}
