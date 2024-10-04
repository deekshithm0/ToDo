import React, { useState } from 'react'

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      <input className='todo-input' type='text' value={value} placeholder='Please add your Task!' onChange={(e) => setValue(e.target.value)} />
      <button className='todo-btn' type='submit' >Add Task</button>
    </form>
  )
}




