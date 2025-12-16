import React from 'react'
import { type Note } from '../type';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>no notes stupid</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id} className="note-item">
              {note.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;