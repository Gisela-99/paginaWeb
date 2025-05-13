import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const API='https://randomuser.me/api/'
  const [nombre, setNombre]= useState()
  const [imagen, setImagen]= useState()
  //useEfect tiene dos parametros, funciona con funciones asincrona, en el segundo parametro, se pone como una array vacío(que no este pendiente de la variable, solo que se ejcute 1 vez), se puede indicar si se cambia la variable se volvera a ejecutar.Si no se pone el segundo hara muchas veces su ejecucion
  

  
  useEffect(()=>{
      for(let a=1; a<=3;a++){
      fetch(API)
      .then((res)=>{
        if(res.ok){
          return res.json()
        }else{
          throw new Error(`Algo ha ido mal`)
        }
      })
      .then(usuario => {
        console.log(usuario)
        setNombre(`${usuario.results[0].name.first} ${usuario.results[0].name.last}`)
        setImagen(usuario.results[0].picture.large)
        
      })
      .catch(error=> console.log(error))
    }
  },[]) 
  return (
    <div className="App">
      <h3>Empleado del mes:</h3>
      <p>Nombre: {nombre}</p>
      <img src={imagen} alt={nombre}/>
      
    </div>
  );
}

export default App;
