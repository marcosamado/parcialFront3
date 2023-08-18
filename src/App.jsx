import { useState } from "react";
import Formulario from "./Components/Formulario"
import Todos from "./Components/Todos";

const initialStateTodo = [];


function App() {

  const [todos, setTodos] = useState(initialStateTodo);

  const addTodo = (todo) => {
    setTodos([...todos,todo])
  }

  return (
    <>
      <h1 className="text-center mb-5">Todo App</h1>
      <Formulario agregarTarea={addTodo}/>
      <Todos tareas={todos}/>
    </>
  )
}

export default App
