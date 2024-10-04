import React, { useState } from 'react'
import { ToDoForm } from './todoform'
import ToDo from './todo'
import { EditToDoForm } from './editToDoForm'

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addTodo = todo => {
    setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false }])
  }
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = (updatedValue, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updatedValue || todo.task, isEditing: !todo.isEditing } : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Things to be Done!</h1>
      <ToDoForm addTodo={addTodo} />
      <div className='Scroll'>
        {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditToDoForm task={todo} editTodo={editTodo} key={index} />
          ) : (
          <div>
            <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          </div>)
        ))}
      </div>
    </div>
  )
}

export default ToDoWrapper
