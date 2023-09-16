import React, { useState } from 'react';
import NewNote from './NewNote';
import { Button } from '../components/Button';
import { v4 as uuidv4 } from 'uuid';

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  // 함수가 호출될떄마다 newNote가 전달되지 않았다면 undefined가 될 것.
  const addNewNote = (newNote) => {
    // 1. 기존의 노트를 유지하고, 새로운 노트를 추가해줌
    const newNotes = [...notes, newNote];
    // 2. 노트의 아이디가 없는경우, 유티크한 아이디를 달아줌.
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const cards = [
    'card-info',
    'card-danger',
    'card-primary',
    'card-success',
    'card-warning',
  ];
  const randomizeBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    console.log(random);
    return cards[random];
  };

  return (
    <div className='container'>
      <Button className={'btn-info'} text={'+ New note'} onClick={addNewNote} />
      <div
        className='container container-sm d-flex'
        style={{ gap: 25, flexWrap: 'wrap' }}
      >
        {notes.map((note) => (
          <NewNote
            key={note.id}
            note={note}
            onClick={deleteNote}
            cardBg={randomizeBg}
          />
        ))}
      </div>
    </div>
  );
}
