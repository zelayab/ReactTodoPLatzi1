import React from 'react';

//Esto es un custom hook, un custom hook es una funcion que empieza con la palabra use y que puede usar otros hooks
// los hooks son funciones que nos permiten usar caracteristicas de react como el estado, el ciclo de vida, etc
// los hooks solo se pueden usar en componentes funcionales
function useLocalStorage(itemName, initialValue) {
    // usamos el hook useState para crear un estado el estado todos y el actualizador del estado setTodos
    const [item, setItem] = React.useState(initialValue);
    // creamos un estado para saber si esta cargando o no
    const [loading, setLoading] = React.useState(true);
    // creamos un estado para saber si hay un error o no
    const [error, setError] = React.useState(false);


    //vamos a crear  un useEffect para que se ejecute cuando se monte el componente
    // el useEffect es un hook que nos permite ejecutar codigo cuando se monta, desmonta o actualiza un componente
    React.useEffect(() => {
        // hacemos el setTimeout para que se ejecute despues de 3 segundos y se ejecuta una sola vez porque no tiene dependencias
        setTimeout(() => {
             // creamos un try catch para manejar los errores
        try {
            //creamos una variable para localStorage
            const localStorageItem = localStorage.getItem(itemName)

            //parsedTodos es un string que vamos a convertir en un array de objetos, es let porque lo vamos a cambiar, en todo caso si no cambia seria const
            let parsedItem;
            // creamos una variable para los todos que vamos a obtener del localStorage, si no hay nada en el localStorage entonces le pasamos un array vacio sino le pasamos el localStorageTodos
            if(!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            }else{
                parsedItem = JSON.parse(localStorageItem);
                // enviamos el parsedItem al estado todos porque es el que tiene la informacion de los todos
                setItem(parsedItem);
            }

            // actualizamos el estado de los todos
            setLoading(false);
        }
        catch(error) {
            setLoading(false);
            setError(error);
        }
        }, 2000);
    //el array de dependencias esta vacio porque solo queremos que se ejecute una vez
    }, []);
        

  

   
    // creamos una funcion para actualizar el localStorage
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }


    // retornamos el item y la funcion para actualizar el localStorage
    return {
        item,
        saveItem,
        loading,
        error,
    }
}
    
export { useLocalStorage };