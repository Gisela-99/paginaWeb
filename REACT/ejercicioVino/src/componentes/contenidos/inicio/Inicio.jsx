import React from 'react'
import imagen from '../../../img/home.png'

const Inicio = () => {
  return (
    <div className="mx-auto">
        <h1 className="text-center">Bienvenido a nuestra bodega de vinos</h1>
        <img className="mx-auto d-block img-fluid" style={{opacity: 0.7}} src={imagen} alt=''/>
        <h3 className="text-center mt-5">Calidad y servicio al mejor precio</h3>
    </div>
  )
}

export default Inicio