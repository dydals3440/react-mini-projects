import React, { useState } from 'react';
import { Title } from '../components/Title';

export const EsignatureApp = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem 0 ',
  };
  document.body.style.background = '#eee';
  return (
    <div className='container text-center'>
      <Title classes={'title'} text={name} />
      <Title classes={'main-title mb-4'} text={!date ? 'DoB' : date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam
        amet obcaecati cum facere veniam, ducimus assumenda laudantium, debitis
        similique doloremque, quis facilis fugiat aperiam nihil voluptatem! Sit
        velit vel eum veritatis asperiores maxime explicabo, temporibus culpa.
        Et velit officiis minima sint necessitatibus fugit. Et unde animi beatae
        quidem omnis culpa nam minima exercitationem earum, debitis, eligendi
        mollitia ipsa minus pariatur odio delectus itaque tempore tempora quas!
        Consequuntur sed, tempora veniam voluptate repudiandae esse magnam sit
        minima consequatur assumenda ad, deleniti numquam. Iusto expedita
        voluptatum dolorem. Corrupti provident odio nam consequatur suscipit
        laudantium reiciendis necessitatibus tempora soluta saepe, impedit qui.
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input
          type='date'
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type='text'
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
};
