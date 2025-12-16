import { useState, useEffect } from 'react'; // 1. Import useEffect
import { type Note } from './type';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import './App.css';

function App() {
  // lazy initilization ex. code runs once when setNotes is called
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('my-notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('my-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;