import React from 'react'
import micros from '../../componentes/Micros'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className='enlacesmicros'>
      {micros.map((micro,indice)=>
      <Link  key={indice} to={`/micros/${micro.micro}`}>
        <img src={`img/${micro.imagen}`}/>
      </Link>
      )}
    </div>
  )
}

export default Inicio