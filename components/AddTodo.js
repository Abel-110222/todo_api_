'use client';

import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function AddTodo() {
  const [title, setTitle] = useState('');

  const addTodo = async () => {
    if (title.trim()) {
      await supabase.from('todos').insert([{ title, completed: false }]);
      setTitle('');
    }
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        placeholder="Add a new task"
      />
      <button onClick={addTodo} className="bg-green-500 text-white p-2 rounded ml-2">
        Add
      </button>
    </div>
  );
}
