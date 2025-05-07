import './App.css';
import microm from './img/new_brain.png'

function App() {
  //código de JavaScript con data binding

  let nombre="Leopoldo Anastasio"
  let direccion=<strong>Av.del Calamar, 56</strong>
  return (
    <div className="App">
      <h2>Curso React</h2>
      <p>Esto es un párrafo <br /> con salto de línea</p>
      <input type="text" value={nombre} />
      <p>{nombre}</p>
      <p>{direccion}</p>
      <img src={microm} alt="" /> {/* Solo sirve para imágenes estáticas. En las dinámicas hay otro modo */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
