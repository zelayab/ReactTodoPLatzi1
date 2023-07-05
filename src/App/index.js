

//  Importamos los componentes creados
import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { TodoProvider } from '../TodoContext';

// aqui definimos el localStorage con valores por defecto, esto es para que cuando se cargue la pagina por primera vez no nos de un error
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Jugar lolsito', completed: false },
]; 
localStorage.setItem('todos', JSON.stringify(defaultTodos));*/



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )

}

export default App;

// la explicación del searchedTodos es la siguiente:
// el searchedTodos es un estado derivado, es un calculo que hacemos a partir de un estado, en este caso el estado es todos y el calculo es el filtro de los todos
// el filter es un metodo de los arrays que nos permite filtrar los elementos de un array, el filter recibe una funcion que se va a ejecutar por cada uno de los elementos del array
// el filter nos devuelve un nuevo array con los elementos que cumplan la condicion de la funcion
// en el searchedTodos hay un metodo que se llama includes, el includes es un metodo de los strings que nos permite saber si un string incluye otro string
// lo ponemos dentro del todoList para que se renderice cada vez que cambie el estado de los todos, en este caso cuando se agrega un todo nuevo o cuando se completa un todo

// el searchedTodo.map explicado
// aqui con el map estamos recorriendo el array de los todos y por cada uno de los todos estamos retornando un componente TodoItem
// el map es un metodo de los arrays que nos permite recorrer un array y por cada uno de los elementos del array retornar un nuevo array
// el map nos devuelve un nuevo array con los elementos que retornamos en la funcion
// en el renderizado al escribir en el search se renderiza el componente TodoItem por cada uno de los todos que coincida con la busqueda

// para crear categorias y filtrar por categorias es necesario crear un nuevo estado que sea la categoria y un nuevo estado derivado que sea el filtro de los todos por categoria
// el estado categoria va a ser un string y el estado derivado va a ser un array de todos



