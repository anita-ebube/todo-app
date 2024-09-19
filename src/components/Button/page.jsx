import React from 'react'

export const Button = ({ task, toggleCompleted, deleteTodo, editTodo

}) => {
  return (
    <div>

      <div className='flex justify-between items-center gap-3 my-3'>
        <div>
          <input id={task.id} type="checkbox" className='w-5' />
          <label onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</label>
        </div>
        <div className='flex gap-2'>
          
          <img src="./edit.png" alt="edit" onClick={() => editTodo(task.id)} className='h-4' />
          <img src="./trash.png" alt="delete" className='h-4' onClick={() =>deleteTodo(task.id)} />
        </div>
      </div>
      
    </div>
  )
}
