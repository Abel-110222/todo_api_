export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="mr-2"
          />
          <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    );
  }
  