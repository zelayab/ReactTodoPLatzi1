import React from "react";

import  { TodoCounter } from '../TodoCounter';
import  { TodoSearch } from '../TodoSearch';
import  { TodoList } from '../TodoList';
import  { TodoItem } from '../TodoItem';
import  { TodoClick } from '../TodoClick';
import  { TodoLoading } from '../TodoLoading';
import  { TodoError } from '../TodoError';
import  { TodoEmpty } from '../TodoEmpty';
import  { TodoForm } from '../TodoForm';

import { Modal } from '../Modal';


import  { CreateTodoButton } from '../CreateTodoButton';

import {TodoContext} from '../TodoContext';


function AppUI() {
    // aqui recibimos las propiedades que le pasamos al componente
    const {
        error, 
        loading,
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal,
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    return (
            // formamos la estructura
            // react fragment es un componente que no se renderiza, es como un div pero no se renderiza
            <>
                <TodoCounter />
                {/* <TodoClick /> */}
                <TodoSearch />

                
                        <TodoList>
                            {error && <TodoError error={error} />}
                            {  
                                loading && 
                                    <>
                                        <TodoLoading />
                                        <TodoLoading />
                                        <TodoLoading />
                                    </>
                            }
                            {(!loading && !searchedTodos.length) && <TodoEmpty />}
                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo (todo.text)}
                                    onDelete={() => deleteTodo (todo.text)}
                                />
                            ))}
                        </TodoList>
                < CreateTodoButton
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                    <Modal>
                        < TodoForm 
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>  
                )}                 

            </>
        );
    }


  export { AppUI };


// Higher Order Component (HOC) es una funcion que recibe un componente y retorna otro componente
// los HOC son una forma de reutilizar logica

/*  

    <HigherOrderComponent children={ children } >
        { children }
    </HigherOrderComponent>

*/
    