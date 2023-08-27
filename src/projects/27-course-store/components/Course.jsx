import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { CurrencyContext } from '../context/currencies-context';

export default function Course({ course }) {
  const currency = useContext(CurrencyContext);

  const { title, img, price } = course;
  const contextPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
  }).format(price * currency.conversionRate);

  //   change Course Bg dep on Cur
  const [courseBG, setCourseBG] = useState();
  useEffect(() => {
    if (currency.code === 'USD') {
      setCourseBG('card-light');
    }
    if (currency.code === 'EUR') {
      setCourseBG('card-accept');
    }
    if (currency.code === 'GBP') {
      setCourseBG('card-danger');
    }
  }, [currency.code]);

  return (
    <li className={`card ${courseBG} mb-2`} style={{ width: 250 }}>
      <div className='card-header'>{title}</div>
      <img src={img} alt='course img' style={{ height: '100%' }} />
      <p className='card-body'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        incidunt enim voluptatum explicabo perspiciatis, accusantium possimus
        amet illo quo placeat nisi inventore facilis. Distinctio, iusto modi sed
        incidunt quam adipisci.
      </p>
      <div className='card-footer d-flex space-between'>
        <h4>{contextPrice}</h4>
        <Button btnClass={'btn-success'} text={'BUY'} />
      </div>
    </li>
  );
}
