import React from 'react';

// practica para el estado, el estado es una variable que va a cambiar a lo largo del tiempo
// con el actualizador del estado podemos cambiar el valor del estado
// entonces cada vez que se llama al actualizador del estado se vuelve a renderizar el componente
// Y el estado es inmutable, no podemos cambiarlo directamente, tenemos que usar la funcion que nos devuelve el useState

function TodoClick(){
    const [n, setN] = React.useState(0)


    return (
        <>
            <p>
               Diste click {n} veces
            </p>
            <button
                onClick={() => {
                    setN(n + 1)
                }}
            >
                Click me!
            </button>
        </>
    )
}

export { TodoClick };