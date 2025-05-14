import React from 'react'
import { useParams } from 'react-router-dom'

function Pagina3() {
  const parametros =useParams()
  console.log(parametros)
  return (
    <div>
      <h1>Pagina 3</h1>
      <p>El parámetro recibido es {parametros.id}</p>
    </div>
  )
}

export default Pagina3