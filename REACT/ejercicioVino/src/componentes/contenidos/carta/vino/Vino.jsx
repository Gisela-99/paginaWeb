import React from 'react'
import './Vino.css'
import IMG from '../../../../entorno/img'

const Vino = ({vino, onSelect}) => {
  console.log(vino.imagen);
  
  function eliminarVino(){

  }

  return (
    <div className="vino-item"
      onClick={() => onSelect(vino.id)}>
      {/* <img className="mx-auto d-block" src={('../../../../img/block_nine.jpg')} alt="" /> */}
    <img src={`https://alcyon-it.com/APIS/vinoteca/assets/img/${vino.imagen}`} alt={vino.nombre} className="mx-auto d-block" />
    <img className="eliminar" src={`img/papelera.png`} onClick={eliminarVino}/>
    
    </div>
  )
}

export default Vino