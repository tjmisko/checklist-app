import React from 'react'
import Todo from './ToDo'

export default function TodoList({ todos }) {
    return (
        todos.map(todo => {
            return <Todo thingtodo={todo} />
        })
    )
}
