import React, { useState } from 'react'
import { Todo } from '../Todo/page';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button/page';
import { EditTodo } from '../Edit/page';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo

        ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing} : todo))
    }
    return (
        <div>
            <Todo addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodo editTodo={editTask} task={todo}/>
                ) : (
                    <Button task={todo} key={index} toggleCompleted={toggleComplete} deleteTodo={deleteTodo}
                        editTodo={editTodo} />
                    )
            ))}

        </div>
    )
}
