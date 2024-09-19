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
                <input type="text"  className='border-2 bg-transparent border-[#8687E7] p-1 outline-none' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className='bg-[#8687E7] text-white my-1 p-[5.65px] '>Edit</button>
            </form>
        </div>

    )
}
