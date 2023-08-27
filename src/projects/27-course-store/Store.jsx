import React, { useState } from 'react';
import { Button } from '../components/Button';
import Courses from './components/Courses';

// 환율 DB
import { currenciesDB } from './db/currenciesDB';
import { CoursesDB } from './db/coursesDB';

// 환율 context
import { CurrencyContext } from './context/currencies-context';

document.body.style.backgroundColor = '#282c34';
document.body.style.color = '#eee';

export default function Store() {
  // 환율 DB 상태 설정
  const [currency, setCurrency] = useState(currenciesDB.Euro);
  return (
    <CurrencyContext.Provider value={currency}>
      <div className='container p-1'>
        <h4 className='mb-2'>Change currency:</h4>
        {Object.values(currenciesDB).map((cur) => (
          <Button
            key={cur.label}
            btnClass={'btn-light btn-sm'}
            text={cur.code}
            onClick={() => setCurrency(cur)}
          />
        ))}
        <header className='text-center my-4'>
          <h1 className='title fs-xl'>Course</h1>
          <h2 className='text-uppercase mb-2'>Become a web developer</h2>
          <p className='mx-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptas odio laboriosam id! Quas aperiam quia aliquam alias
            expedita ex saepe inventore odit magnam quam nostrum, numquam,
            dolorum tempora voluptas et quae minima temporibus rem repellat,
            nesciunt eaque
          </p>
        </header>{' '}
        <Courses list={CoursesDB} />
      </div>
    </CurrencyContext.Provider>
  );
}
