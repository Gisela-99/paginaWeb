import React, { useContext } from 'react';  
import { Contexto } from "../Contexto/Contexto";

export default function Ubicacion() {
   const { profesora } = useContext(Contexto)
  return (
    <div className='ubicacion'>
      <h2>Lugar: </h2>
      <div className='direccion'>
        {profesora.direccion}
      </div>
    </div>
  )
}
