import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){

    const {openModal, setOpenModal} = React.useContext(TodoContext);

    const abrirModal = () => {
        setOpenModal(!openModal);
      }

    return (
        <button className="CreateTodoButton" 
            onClick={abrirModal}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

// Este onClick es un evento que se dispara cuando se hace click en el boton
// va a escuchar el evento y cuando se haga click va a ejecutar la funcion que le pasamos
// Es un eventListener