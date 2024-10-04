import React, { useState } from 'react'

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = e => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue("")
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      <input className='todo-input' type='text' value={value} placeholder='Update Task!' onChange={(e) => setValue(e.target.value)} />
      <button className='todo-btn' type='submit' >Update Task</button>
    </form>
  )
}




