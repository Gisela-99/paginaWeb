import React, { useEffect, useState } from 'react'
import Vino from '../vino/Vino'
import API from '../../../../entorno/api'
import Detallevino from '../detallevino/Detallevino'
import Altavino from '../altavino/Altavino'
import './Listavinos.css'

const Listavinos = () => {
  const[vinoApi, setVinoApi]=useState([])
  const [vinoSeleccionado, setVinoSeleccionado] = useState(null)
  
  useEffect (()=>{
    fetch(API)
    .then(respuesta => {
      if(respuesta.ok){
        return respuesta.json()
      }else{
        console.log(respuesta)
        throw('Algo ha ido mal')
      }
    })
    .then(datos => {
      console.log(datos)
      setVinoApi(datos)
    })
    .catch(error=> console.log(error))
  },[])

  return (
    <div className="row">

        <h2 className='text-center'>Gran selección de vinos <small>Todos en stock!</small></h2>
        <div className="row">
          <div className="listavinos animated fadeIn">
            {vinoApi.length > 0 ? (
              vinoApi.map((vino, index) => (
      
                // <Vino key={index} vino={vino} />
                <Vino key={index} vino={vino} onSelect={setVinoSeleccionado} />
              ))
            ) : (
              <p>Cargando vinos...</p>
          )}
          </div>
      </div>
      <div className="col-md-6">
       {vinoSeleccionado && <Detallevino id={vinoSeleccionado}  />}
          
         {/* <Detallevino id={5} /> */}
      </div>
    </div>
  )
}

export default Listavinos