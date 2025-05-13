import React from 'react'
import {useEffect, useState} from 'react';

function Chuck() {
   //Actividad 6.1
    const apiChuck='https://api.chucknorris.io/jokes/random'
    const [chistes,setChistes]=useState([])
    
    function otroChiste(){
      fetch(apiChuck)
      .then((respuesta)=>{
        if(respuesta.ok){
          return respuesta.json()
        }else{
          throw new Error(`Algo ha ido mal`)
        }
      })
      .then(datos=>{
        setChistes(datos.value);
      })
      .catch(error=> console.log(error))
    }
    //ejecutar la función una sola vez al cargar el componente
    useEffect(()=>{
      otroChiste()
    },[])
  return (
    <div>
      <div className='Chuck'>
        <h2>Chistecillo malo de Chuck:</h2>
        <p>The power level for Chuck Norris roundhouse kick is infinity</p>
        <button onClick={otroChiste}>Otro chiste</button> 
        <p>{chistes}</p>
        
      </div>
    </div>
  )
}

export default Chuck