import React, { useState } from 'react'



const Formulario = ({agregarTarea}) => {

    const [todo, setTodo] = useState({
        title: "",
        description: ""
    })

    const [error, setError] = useState(false)
    
    const {title,description} = todo;
    
    const handleChange = (e) => {
    
        const {name,value} = e.target;
    
        setTodo({
            ...todo,
            [name]: value
        })
    }

    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim() && title.length >= 3 && description.trim() && description.length >= 6){
            agregarTarea(todo);

            setTodo({
                title: "",
                description: ""
            });


            setError(false);
        }else {
            setError(true);
        }
    }


    return (
        <>
            <form className="form-control" onSubmit={handleSubmit}>
                <input className="form-control mb-3" type="text" name="title" placeholder="titulo..." value={title} onChange={handleChange}  />
                <textarea className="form-control mb-3" type="text" name="description" placeholder="descripcion..." value={description} onChange={handleChange}/>
                <button className="btn btn-success" type="submit">Agregar todo</button>
            </form>

            {
                error && <h4 className="text-center mt-3 text-danger text-lg">Por favor chequea que la información sea correcta.</h4>
            }
        </>
    )
}

export default Formulario;