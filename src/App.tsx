import { useState } from 'react';
import { type Note } from './type';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app-container">
      <h1>My Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList></NoteList>
    </div>
  );
}

export default App;