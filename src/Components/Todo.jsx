import React from 'react'

const Todo = ({tarea}) => {


    const {title,description} = tarea;

    return (
        <li className="list-group-item list-group-item-primary mb-2">
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default Todo