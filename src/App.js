import React, { useEffect, useState } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';
import Loader from './Loader';
import RemoveDone from './Todo/RemoveDone';

function App() {
  let [loader, setLoader] = useState(true)
  let [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoader(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )

  }

  function addTodo(title) {
    setTodos(
      todos.concat({
        title,
        id: Date.now(),
        completed: false
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function removeDone() {
    setTodos(todos => todos.filter(todo => todo.completed === false));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='main'>
        <div className='header-todo'>
          <h1>Todo List</h1>
          <RemoveDone removeDone={removeDone}/>
        </div>
        <AddTodo onCreate={addTodo} />
        {loader && <Loader/>}
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) : loader ? null : (<p>No todos!!!</p>)}
      </div>
    </Context.Provider>
  );
}

export default App;
