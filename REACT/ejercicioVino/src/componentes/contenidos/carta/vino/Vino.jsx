import React from 'react'
import './Vino.css'

const Vino = ({vino}) => {

  return (
    <div>
      {/* <img className="mx-auto d-block" src={('../../../../img/block_nine.jpg')} alt="" /> */}
      
     <img src={`/img/${vino.imagen}`} alt={vino.nombre} className="mx-auto d-block" />
    </div>
  )
}

export default Vino