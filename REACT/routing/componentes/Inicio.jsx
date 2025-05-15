import React from 'react'
import micros from './Micros'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className='micros'>
      {micros.map((micro,index)=>
      <div key={index} className='micro'>
        <Link to={micro.path}><img src={`../img/${micro.imagen}`} alt="" /></Link>
      </div>
      )}
    </div>
  )
}

export default Inicio