import React, {useState} from 'react';
import './App.css';
import Todotable from './components/todoList';

function App() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  function deleteTodo (index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }
  

  const inputChanged = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>        
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />      
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
