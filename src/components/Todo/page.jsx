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
            <div className="flex justify-center items-center">
            <h1 className=' text-2xl my-5'>Plan your Day</h1>
            <h2>&#128540;</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex justify-center items-center">
                <input type="text"  className='border-2 py-[6px] border-[#8687E7] bg-transparent outline-none px-3' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className='bg-[#8687E7] text-white p-2 rounded-'>Add</button>
            </form>

        </div>

    )
}