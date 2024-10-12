import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}
