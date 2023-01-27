import React, { useState, useRef } from 'react';
import TodoList from './TodoList'

function App() {
  
  const [currentListState, setTodos] = useState([])
  const newToDoName = useRef()

  function handleAddTodo(e) {
    const newItem = newToDoName.current.value
    if (newItem === "") return
    setTodos(prevList => {
      return [...prevList, {id: 1, name: newItem, checked: false}]
    })
    newToDoName.current.value = null
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
