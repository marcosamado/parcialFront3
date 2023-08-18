import React from 'react'
import Todo from './Todo'

const Todos = ({tareas}) => {
    return (
        <>
            <h2 className="text-center mt-5 mb-3">ToDos</h2>
            <ul className="list-group">
                {
                    tareas.map((todo,index) => (
                        <Todo key={index} tarea={todo}/>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos