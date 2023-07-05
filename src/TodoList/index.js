import './TodoList.css'

function TodoList({ children }) {
    return (
      <section>
        <ul className="TodoList">
          {
            // aqui se renderiza el contenido de la lista, el props.children es el contenido de la lista para que se rendericen los elementos
            children
          }
        </ul>
      </section>
    );
    }

    export { TodoList };
