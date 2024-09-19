import { useState } from "react"
import React from 'react'
import { TodoWrapper } from "../TodoWrapper/page";

export const EditTodo =({editTodo,task})=> {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
    return (
        <div>
           
            <form onSubmit={handleSubmit}>
                <input type="text"  className='border-2 border-black w-full' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className='bg-black text-white w-full  my-1 '>Add</button>
            </form>

            <div className='lg:mx-5 mx-3'>
                <button className='border-2 border-black lg:w-[32%] px-4'>All</button>
                <button className='border-2 border-black lg:w-[32%] px-4 m-1'>Active</button>
                <button className='border-2 border-black lg:w-[32%] px-4'>Completed</button>
            </div>
        </div>

    )
}
