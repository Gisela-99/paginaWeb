import React from 'react'
import './Detallevino.css'

const Detallevino = ({vino}) => {
  return (
    <div id="marco">
        <div className="row">
            <div className="col justify-content-center">
                <img width="50%" src={`img/${vino.imagen}`} alt={vino.nombre} className="img-responsive"/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <h3>{vino.nombre}</h3>
                <h4>{vino.region}</h4>
                <h4>{vino.uvas}</h4>
                <h4>{vino.anyo}</h4>
                <p>{vino.descripcion}</p>
            </div>
        </div>
    </div>
  )
}

export default Detallevino