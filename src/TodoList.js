import React from 'react'
import Todo from './ToDo'

export default function TodoList({ thingstodo }) {
    return (
        thingstodo.map(x => {
            return <Todo key={x.id} thingtodo={x} />
        })
    )
}
