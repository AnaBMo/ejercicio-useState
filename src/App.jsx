import { useState } from 'react';
import './App.css'


function App() {

    // Define dos variables de estado utilizando useState:
    const [name, setName] = useState("Sofía"); // nombre actual del profesor
    const [newName, setNewName] = useState(''); // nuevo nombre seleccionado

    //! Bonus: función changeName. Actualiza el nombre del profesor al enviar formulario.
    function changeName(nombre){

        nombre.preventDefault(); // Evita la recarga de la página //! para que no devulva el nombre por defecto

        // Verifica que newName no esté vacío antes de actualizar el nombre.
        if(newName.trim() !== '') {
            setName(newName); // Actualiza el estado name con el valor de newName.
            setNewName(''); // Restablece newName a una cadena vacía después de actualizar el nombre.
        }
    };

    return (
        <div>
            {/* En el JSX del componente, renderiza un título <h2> con el texto "Teacher Name" seguido del valor de name. */}
            <h2>Teacher Name 🤓</h2>
            <p>{name}</p>
            {/* Renderiza una lista <ul> con tres elementos <li>, cada uno con un nombre de profesor diferente:*/}
            <ul>
                <li onClick={() => setName("Bea")}>Bea</li>
                <li onClick={() => setName("Yolanda")}>Yolanda</li>
                <li onClick={() => setName("Aldo")}>Aldo</li>
            </ul>

            {/* En el JSX del componente, renderiza un formulario <form> con los siguientes elementos: 
            1. Un campo de entrada de texto <input> con el atributo type establecido en "text", 
            el atributo value vinculado a newName, el atributo onChange que actualiza newName cuando 
            cambia el valor y el atributo placeholder con el texto "add a name".
            2.Un botón <button> con el tipo establecido en "submit" y el texto "Add". */}

            {/* Utiliza la función changeName para manejar el evento onSubmit del formulario. */}

            <form onSubmit={changeName}> 
                <input 
                    type="text" 
                    value={newName}  
                    onChange={(nombre) => setNewName(nombre.target.value)} 
                    placeholder="add a name"> 
                </input>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default App;