import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';



// usamos destructuring para obtener las propiedades total y completed
// el destructuring es una forma de extraer valores de un objeto o array y asignarlos a variables
function TodoCounter() {
    const {
        totalTodos, 
        completedTodos
    } = React.useContext(TodoContext)

    return (
        totalTodos === completedTodos && totalTodos !== 0 ?

            <h1>
                Has completado todas tus tareas !!!
            </h1>

            : 
            <h1>
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
            </h1>
    );
  }

    export { TodoCounter };