import { useEffect, useState } from 'react';
import './App.css';
import Chuck from './componentes/Chuck';

function App() {
  const API='https://randomuser.me/api/'
  const [nombre, setNombre]= useState()
  const [imagen, setImagen]= useState()
  //useEfect tiene dos parametros, funciona con funciones asincrona, en el segundo parametro, se pone como una array vacío(que no este pendiente de la variable, solo que se ejcute 1 vez), se puede indicar si se cambia la variable se volvera a ejecutar.Si no se pone el segundo hara muchas veces su ejecucion
  
  let[cont,setCont]=useState(1)
  const[usuarios,setUsuarios]=useState([])
  
  useEffect(()=>{
      //for(let a=1; a<=3;a++){}
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

        // Parte 2
        setUsuarios([...usuarios, {nombre:`${usuario.results[0].name.first} ${usuario.results[0].name.last}`, imagen:usuario.results[0].picture.large}])
        if(cont<3) setCont(++cont)
      })
      .catch(error=> console.log(error))
    }
    ,[cont]) 


  return (
    <div className="App">
      <h3>Empleado del mes:</h3>
      <p>Nombre: {nombre}</p>
      <img src={imagen} alt={nombre}/>
      <hr />
      {usuarios.map((usuario,indice)=>
        <div key={indice} className='inline'> 
          <p>Nombre: {usuario.nombre}</p>
      <img src={usuario.imagen} alt={nombre}/>
        </div>
      )}
      <hr />
      <Chuck/>

    </div>
  );
}

export default App;
