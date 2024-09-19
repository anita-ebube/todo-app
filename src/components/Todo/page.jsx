import { useState } from "react"
import React from 'react'
import { TodoWrapper } from "../TodoWrapper/page";

export const Todo =({addTodo})=> {
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return (
        <div>
            <h1 className='flex justify-center items-center text-2xl'>Todo</h1>
            <p className='flex justify-center items-center'>What needs to be done?</p>
            <form onSubmit={handleSubmit}>
                <input type="text"  className='border-2 border-black w-full' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className='bg-black text-white w-full  my-1 '>Add</button>
            </form>

        </div>

    )
}
