'use client';

import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { supabase } from '../utils/supabaseClient';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await supabase.from('todos').select('*').order('createdAt', { ascending: false });
    setTodos(data);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t.id === id);
    await supabase.from('todos').update({ completed: !todo.completed }).eq('id', id);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await supabase.from('todos').delete().eq('id', id);
    fetchTodos();
  };

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
