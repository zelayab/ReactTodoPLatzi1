import './TodoSearch.css'
import React from 'react';
import { TodoContext } from '../TodoContext';


function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  
  // el useState nos devuelve un array con dos elementos, el primero es el valor del estado y el segundo es una funcion que nos permite actualizar ese estado
  // el useState recibe un parametro que es el valor inicial del estado, el estado es inmutable, no podemos cambiarlo directamente, tenemos que usar la funcion que nos devuelve el useState
 // el setSearchValue es la funcion que nos permite actualizar el estado.
  

  // es un hook, un hook es una funcion que nos permite conectarnos a caracteristicas de react que no podemos acceder de otra forma, es el valor inciial del estado

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
} 

// para usar el UseState tenemos que importar el react, despues de importar el useState lo usamos
// el useState es un hook, un hook es una funcion que nos permite conectarnos a caracteristicas de react que no podemos acceder de otra forma
// el useState nos permite crear un estado dentro de un componente
// el estado es una variable que va a cambiar a lo largo del tiempo

export { TodoSearch };


//BREVE EXPLICACION DEL ONCHANGE CON EL SETSEARCHVALUE
// el onChange es un evento que se dispara cuando el valor del input cambia y recibe una funcion que se va a ejecutar cuando el evento se dispare
// el evento onChange recibe un parametro que es el evento que se esta ejecutando, el evento tiene un target que es el elemento que esta ejecutando el evento, en este caso el input
// el evento target tiene un value que es el valor del input, entonces cuando el evento se dispara vamos a ejecutar la funcion setSearchValue y le vamos a pasar el valor del input
// el setSearchValue es la funcion que nos permite actualizar el estado.
// el value del input es el valor del estado, entonces cuando el estado cambia el input cambia y cuando el input cambia el estado cambia
