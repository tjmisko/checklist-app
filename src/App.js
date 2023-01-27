import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <h2> TO DO LIST </h2>
      
      <TodoList />

      <input type='text' />
      <button> add item </button>
      <button> clear </button>
    </>
  )
}

export default App;
