import { useRef } from 'react';
import './App.css';
import imagen1 from './img/ds-editor-FPnTkKLs3Cg-unsplash.jpg'
import imagen2 from './img/note-thanun--Rn42aCTZGw-unsplash.jpg'
//import imagen3 from './img/paulo-silva-pU2VRZ63EKc-unsplash.jpg'

function App() {
  //variables
  let contador = 1
  const cambio = 67 
  const parrafo = useRef () // hook de react 
  //funciones
  function incrementar(ev){
      contador ++
      console.log(contador)
      //Traslada el nuevo contenido de la variable al DOM
      ev.target.innerText = contador  // lo traslada al DOM Virtual de React,  ya que antes no se veía porque estaba en el DOM real (sólo se veía en la consola)
  }
  function convertir(e){
    //e.target.innerText = contador * cambio 
    parrafo.current.innerText = contador * cambio 
  }
  function cambiarImagen(ev){
    let nombre = ev.target.getAttribute('src')
    console.log(nombre)
    if(nombre.includes ('ds-editor-FPnTkKLs3Cg-unsplash.jpg')){
      ev.target.setAttribute('src', imagen1)
    }else{
      ev.target.setAttribute('src', imagen2)
    }
  }
  return (
    <div className="App">
      <p  ref={parrafo} className='contador' onClick={incrementar}>{contador}</p>
      <p><button onClick={convertir}>Convertir</button></p>
      <div className='imagen'>
      <img src={imagen1} onClick={cambiarImagen} alt=''/>
      </div>
      <p><input className='texto'/></p>
      
    </div>
  );
}

export default App;
