
** Notas de edición sobre el proyecto y sobre React ** 

Yo recomiendo iniciar un nuevo proyecto con Vite (npm create vite)
 con la opción de JavaScript Vanilla y MEMORIZAR todo el proceso para iniciar 
una aplicación de React, desde la instalación de paquetes 
(react, react-dom y el plugin de Vite para React), 
la configuración del plugin de Vite para React (está en internet y son pocas líneas de código) 
y el contennido del archivo inicial del proyecto (App.jsx, createRoot(), render()).
.
=======================================================================================================

npm run Ejecuta nuestro proyecto en modo desarrollo

npm build Genera versión del proyecto para desplegar a producción.

¿Dónde se renderiza (dibuja) nuestra aplicación? En el div con id="root" del index.html

¿De dónde viene lo que se renderiza? Del componente “App” que definimos en index.js

¿ Qué son los componentes ? piezas de código (generalmente en forma de funciones con nombre en mayúscula).

¿Qué retorna la función ? los elementos del componente (elementos de React), en un formato llamado JSX, el cual se parece a HTML.

¿ Qué utilidad tiene JSX ? combinar código HTML con JS para, por ejemplo, usar variables para dar valores a los atributos de los elementos

¿ Principal diferencia entre elementos y componentes ? Los elementos empiezan con minúsculas y los componentes con mayúsculas.

¿ Para qué sirven ? Para reutilizarlos y así no repetir código

¿ Cómo llamo a un componente? Escribiendo su nombre con la siguiente sintáxis < Componente1 />

¿ Cómo agrego dinamismo a los componentes para que cambien su contenido ? Recibiendo props por parámetros de la función

Nota: Los componentes se pueden anidar, es decir, meter uno dentro de otro.

================================================================================
Componentes => Reciben Propiedades.
Elementos => Reciben Atributos.
…
Hay que tener en cuenta que en JSX, la sintaxis entre atributos y propiedades es muy parecida, ya que escribimos el valor de las props en los componentes como si fueran atributos, pero estos no lo son…
…
Las props son variables que declaramos en nuestro componente como si fueran parámetros de una función, 
podemos declarar una unica (Prop) o declarar varias Props utilizando la {Desestructuración}.
Para luego posteriormente darles un valor como si fueran argumentos, 
pero utilizando otro tipo de sintaxis, que es muy parecida a la de los atributos de los elementos HTML,
 con la diferencia que el otorgamos el valor entre {llaves}.
…
En cuanto a la propiedad “props.children” esta hace referencia a que React transforma automáticamente a todo lo que se encuentre 
dentro del componente padre en un elemento “children” , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será “Children”.
…
Por otro lado existe <React.Fragment> o su sintaxis más corta " <> </> " que es un contenedor invisible que tiene como objetivo envolver todos los componentes JSX dentro de un contenedor padre, esto es debido a que React necesita envolver esos componentes para renderizarlos, y asi no crear nodos innecesarios en el DOM.

…
Por ultimo, debemos tener en cuenta que podemos renderizar elementos a través de un Array, utilizando en este caso el metodo .map(), y devolviendo el componente “TodoItem” por cada uno de los objetos del array…
Es necesario que le pasemos las props “key={todo.text} text={todo.text}” al componente para que nos muestre un contenido distinto por cada objeto de este array.
…
La prop “Key” funciona como un Identificador para objeto del array y es necesaria cuando utilizamos el metodo .map()

===================================================================================
¿Cómo escuchamos los eventos en React?
…
Una de las formas es añadiendo “onclick” a nuestro elemento, parecido a la forma 
que lo realizábamos convencionalmente en HTML y JS, 
con la diferencia que en React utilizaremos camelCase, ósea “onClick”.
Todo lo que empiece con “on” en React será considerado un Evento, es decir, todo lo que comience 
con "on" será transformado a un AddEventListener (Escuchador de Eventos), es 
importante tener en cuenta que el valor que recibirá nuestro Evento,
 debe ser encapsulado dentro de una función para que se ejecute correctamente.


=====================================================================================

¿Qué es el Estado?
…
El "Estado" es una de las principales herramientas que React nos proporciona para crear UI´s dinámicas
 y actualizadas en tiempo real.
Podríamos definir al Estado como “Variables que almacenan información dinámica de un componente y se
 actualizan a medida que el usuario interactúa con los Componentes”.
Aquella información utilizada en el estado puede ser utilizada por el componente para cambiar 
su apariencia y comportamiento en tiempo real.
El estado también nos permite mantener la información actualizada de un componente sin necesidad 
de renderizar todo el componente, esto gracias al Virtual DOM que compara los cambios que se 
hicieron y los actualiza.

===================================================================================

¿Cómo comunico informacion de mi estado entre componentes?
…
Podemos comunicar informacion del “Estado” entre componentes 
utilizando las "props" pero hay que tener 
en cuenta que esa informacion la podemos compartir Solamente
 de "Componentes Padres a Componentes Hijos."
Es decir, debemos declarar el “Estado” dentro del Componente Padre (En este caso App.js) para poder comunicarlo al componente hijo a través de “props” (TodoSearch.js)


========================================================================================
🔵Evita acceder al localStorage dentro del componente
Acceder a los valores del localStorage dentro del componente es muy pesado en cuanto al rendimiento, 
ya que se ejecuta sincrónicamente en cada re-renderizado del componente. 
En su lugar, puedes leerlo utilizando un callback que retorne el valor inicial del useState, 
esto permitirá acceder a la información una sola vez al momento que se crea el componente, 
esto por la definición de useState

const [todos, setTodos] = useState(() => {
  const todosFromStorage = window.localStorage.getItem('TODOS_V1')
  if (todosFromStorage) return JSON.parse(todosFromStorage)
  return []
})

LocalStorage es una forma de almacenar datos en el navegador web, que persisten aún después de que el usuario haya cerrado la ventana o salido del sitio web. Es útil para guardar información del usuario, como preferencias, configuraciones, entre otros.
.
Los métodos más comunes de LocalStorage son:
.
localStorage.setItem(key, value): Agrega un elemento con una clave y un valor al almacenamiento local.
localStorage.getItem(key): Recupera el valor de la clave especificada en el almacenamiento local.
localStorage.removeItem(key): Remueve un elemento del almacenamiento local según su clave.
localStorage.clear(): Borra todos los elementos del almacenamiento local.

========================================================================================
Que son los efectos en React?
Es una función que actúa como una tarea secundaria después que el componente se haya renderizado esto es perfecto para realizar peticiones a una API que sabemos que tardaran unos algunos segundos en traerse los datos para luego montarlos en un componente para ser renderizados. También se utiliza para otras cosas como actualizar el estado de un componente, suscribirse a eventos o manipular el DOM.

El efecto (en React el hook se llama useEffect) recibe dos parametros:

Una función que define el efecto a realizar
Una lista de dependencias que determinan cuándo se debe volver a ejecutar el efecto. Esta lista especifica las variables que el efecto depende y si y solo si alguna de estas variables cambia entre renderizaciones, el efecto se ejecutará de nuevo. Es importante recalcar que SI NO HAY ninguna variable en la lista de dependencias, el efecto se ejecutará en cada renderización. SPOILER: React estalla XD

<import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}> 

En este ejemplo, useEffect se utiliza para actualizar el título de la página con el valor actual del contador. La función de efecto se ejecuta después de cada renderizado del componente porque se ha especificado [count] como la lista de dependencias para el useEffect. Esto significa que el efecto solo se ejecutará si el valor de count ha cambiado desde la última renderización.

Cada vez que el usuario hace clic en el botón “Increment Count”, el valor de count se incrementa en 1 y se llama a la función setCount para actualizar el estado del componente. Como resultado, se vuelve a renderizar el componente y se ejecuta la función de efecto, lo que actualiza el título de la página con el nuevo valor del contador.

========================================================================================

React Context evita el Prop Drilling:
Prop Drilling: es una paso del desarrollo que ocurre cuando necesitamos obtener datos que están en varias capas en el árbol de componentes React.
Este se ve siempre cuando pasamos props entre hijos, luego ese a otros hijos y así sucesivamente… la solución es usar context:

Context: es un elemento que podemos crear en React para establecer una comunicación directa entre un componente en un nivel muy alto y uno en un nivel mucho más bajo.

Por ende context permite acceder a los valores de forma directa.

Existen dos componentes en el contexto: Provider y Consumer. El Provider es el componente que almacena y proporciona el valor, mientras que el Consumer es el componente que permite consumir los datos.

Existen dos formas de acceder al valor del Provider:

Usando el hook useContext()
Usando el componente Consumer.

========================================================================================

Enlaces:
- https://platzi.com/blog/estructura-organizacion-y-tipos-de-componentes-en-react/
- https://react-icons.github.io/react-icons
- https://platzi.com/blog/useeffect-uselayouteffect/
- https://platzi.com/blog/tutorial-como-crear-una-animacion-de-carga-de-contenido-tipo-facebook/
- 