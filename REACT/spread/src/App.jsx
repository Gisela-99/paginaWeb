import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [productos,setProductos]=useState(['pan', 'azúcar']) // lo haremos cómo array vacío , el valor de inicializar la variable
  const input = useRef()
  function comprar(){
    //recuperar el valor del input
    let item = input.current.value 
    console.log(item)
    //añadir el array de productos
    setProductos([...productos,item]) //spread operator= expandir el array, como no sabemos cómo será el array
  }
  //rest operator
  function mostrar(...args){ // apartir de elementos crea un array, porque no sabes cuántos argumentos o datos a enviar, es decir de datos individuales crea un array
    console.log(args)
  }
  mostrar('a', 3,'b',4)
  return (
    <div className="App">
      <h2>Spread Operator</h2>
      <input type="text" ref={input}/> 
      <button onClick={comprar}>Añadir</button>
      <br />
      <ul>
        {productos.map((producto,indice)=> <li key={indice}>{producto}</li>)} 
        {/* confeccionar  */}
      </ul>
    </div>
  );
}

export default App;
