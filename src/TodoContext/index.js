import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){

    /* Aqui podemos encapsular la logica de nuestra app */
    
    // el useLocalStorage es un hook que creamos para guardar los todos en el localStorage
    const { 
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('todos', []);
    // este estado se esta creando en el app pero lo vamos a pasar a un componente que es el TodoSearch.
   const [searchValue, setSearchValue] = React.useState(''); 
   const [openModal, setOpenModal] = React.useState(false);

    // los estados derivados sirven para hacer calculos a partir de un estado, por ejemplo el total de todos completados
    //los estados derivados son calculos que hacemos a partir de un estado, por ejemplo el total de todos completados, ejemplo
    // const totalTodos = todos.length;
    // la doble negacion !! es para convertir un valor a booleano, si es true se queda true y si es false se convierte en true
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    // el searchedTodos es un estado derivado que nos permite buscar los todos que coincidan con el texto que estamos buscando
    // sale un todo.text.toLowerCase() is not a function porque el todo.text es undefined, esto pasa porque el todo es undefined
    // viene undefined porque el todos es un array vacio y el array vacio no tiene ningun elemento, entonces el map no se ejecuta
    // y el todo es undefined, entonces para solucionar esto podemos hacer un if para que si el todos esta vacio entonces retorne un array vacio
    // y si no esta vacio entonces que haga el map
    const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );

    // el completeTodo es una funcion que recibe un texto y lo que hace es buscar el todo que tenga ese texto y lo marca como completado
    const completeTodo = (text) => {
        // el spread operator es un operador de javascript que nos permite crear un nuevo array a partir de otro array
        const newTodos = [...todos];
        // el findIndex es un metodo de los arrays que nos permite encontrar el indice de un elemento que cumpla una condicion
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        // aqui estamos cambiando el valor de la propiedad completed del todo que tiene el indice todoIndex
        newTodos[todoIndex].completed = true;
        // ahora podemos usar el setTodos para actualizar el estado y pasarle el nuevo array
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };


    const deleteTodo = (text) => {
        const newTodos = [...todos];
        // el filter es un metodo de los arrays que nos permite filtrar los elementos que cumplan una condicion
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        // el splice es un metodo de los arrays que nos permite eliminar elementos de un array
        newTodos.splice(todoIndex, 1);
        // ahora podemos usar el setTodos para actualizar el estado y pasarle el nuevo array
        saveTodos(newTodos);
    };



    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {/* aqui va todo lo que queremos que este disponible para todos los componentes */}
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
