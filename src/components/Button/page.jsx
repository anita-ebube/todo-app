import React from 'react'

export const Button = ({task,toggleCompleted, deleteTodo, editTodo

}) => {
  return (
    <div>
        
        <div className='flex gap-3 my-3'>
            <input id={task.id} type="checkbox"  className='w-5'/>
            <label onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</label>
         
        </div>
        <button className="w-2/5 border-black border-2 m-1" onClick={() => editTodo(task.id)}>Edit</button>
        <button className="bg-red-600 w-2/5 border-2 border-red-600 text-white" onClick={() =>deleteTodo(task.id)}>Delete</button>
    </div>
  )
}
