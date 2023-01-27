import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [currentListState, setTodos] = useState(['Wash dishes', 'Clean bathroom', "Brush teeth"])
  return (
    <>
      <h2> TO DO LIST </h2>
      kitty
      kitty
       <TodoList todos={currentListState} />
      <input type='text' />
      <button> add item </button>
      <button> clear </button>
    </>
  )
}

export default App;
