import React, { useState } from 'react';

interface NoteFormProps {
    onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
    const [inputValue, setInputValue] = useState('');

    // type-safe handler function
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // check is input is empty or not
        if (!inputValue.trim()) return;

        onAdd(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                // added type safe handler
                onChange={handleChange}
                placeholder="pls input note"
            />
            <button type="submit">Add Note</button>
        </form>
    );
}

export default NoteForm;