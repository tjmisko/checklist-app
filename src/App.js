import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

function App() {
  
  const [currentListState, setTodos] = useState([])
  const newToDoName = useRef()
  console.log(newToDoName)

  function handleAddTodo(newToDoName) {
  }



  return (
    <>
      <h2> TO DO LIST </h2>
      <TodoList thingstodo={currentListState} />
      <input ref={newToDoName} type='text' />
      <button onClick={handleAddTodo}> add item </button>
      <button> clear </button>
    </>
  )
}

export default App;
