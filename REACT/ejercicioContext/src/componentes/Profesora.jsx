import React from 'react'
import { Contexto } from '../Contexto/Contexto'
import { useContext } from "react";

function Profesora() {
  const{profesora} = useContext(Contexto)
  return (
    <div className='profesora'>
    <h2>Profesora:</h2>
    <div className='foto'>
    <img src={`/img/${profesora.foto}`} alt="profesora"/>
    </div>
    <div className='nombre'>
      {profesora.nombre}
    </div>
    </div>
  )
}

export default Profesora