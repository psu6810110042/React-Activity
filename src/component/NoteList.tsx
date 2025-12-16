// import React from 'react'
import { type Note } from '../type';

interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: NoteListProps) => {
    return (
        <div className="note-list">
            {notes.length === 0 ? (
                <p>no notes stupid</p>
            ) : (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id} className="note-item">
                            {note.text}
                            <button
                                onClick={() => onDelete(note.id)}
                                style={{ marginLeft: '10px', color: 'red' }}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;