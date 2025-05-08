
import './App.css';
//import microm from './img/new_brain.png'
import imagen1 from './img/kill-bill.jpg'
import imagen2 from './img/los_bingueros.jpg'
import imagen3 from './img/saw.jpg'
import portada from './img/sinportada.jpg'

function App() {
  //código de JavaScript con data binding

  //let nombre="Leopoldo Anastasio"
  //let direccion=<strong>Av.del Calamar, 56</strong>

  let titulos = ['Kill Bill', 'Los bingueros', 'Saw']

  function cambiarTexto(e){
    let h3 = e.target
    if(h3.innerText === 'Visto'){
      h3.innerText = ''
    }else{
      h3.innerText = 'Visto'
    }
  }
  
  function cambiarImagen(ev){
    //let nombre= ev.target.getAttribute('src')
    let nombre= ev.target
    console.log(nombre)

    if(nombre.src.includes ('portada')){
      //ocultar la imagen
      nombre.style.visibility = 'hidden'
    }else {
      nombre.src = portada
      nombre.parentNode.style.backgroundColor='initial'  // poner clase al padre contenedora, es decir, la ficha que es su clase
    }

    // if(nombre === imagen1|| nombre === imagen2 ||nombre === imagen3){
    //   ev.target.setAttribute('src', imagen4)
    // }else if(nombre === imagen4){
      
    // }
  }
  return (
    <div className="App">
      {/* 
      <h2>Curso React</h2>
      <p>Esto es un párrafo <br /> con salto de línea</p>
      <input type="text" value={nombre} />
      <p>{nombre}</p>
      <p>{direccion}</p>
      <img src={microm} alt="" /> */} {/* Solo sirve para imágenes estáticas. En las dinámicas hay otro modo */}
      <h1>Actividad 2</h1>
      <div className='peliculas'>
        <div className='ficha'>
          <img src={imagen1} alt="Kill-bill" onClick={cambiarImagen} />
          <h3  onClick={cambiarTexto}>{titulos[0]}</h3>
        </div>

        <div className='ficha'>
          <img src={imagen2} alt="Los Bingueros" onClick={cambiarImagen}/>
          <h3   onClick={cambiarTexto}>{titulos[1]}</h3>
        </div>

        <div className='ficha'>
          <img src={imagen3} alt="saw" onClick={cambiarImagen}/>
          <h3   onClick={cambiarTexto}>{titulos[2]}</h3>
        </div>
      </div>

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
      </header> solo quiero comentar */}
    </div>
  );
}
export default App;
