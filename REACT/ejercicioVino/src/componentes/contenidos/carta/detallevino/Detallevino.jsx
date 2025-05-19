import React, { useEffect, useState } from 'react'
import './Detallevino.css'

const Detallevino = ({id}) => {
    const [vino,setVino]=useState(null)
    const [error,setError] = useState(null)

    useEffect(()=> {
        if(!id) return 

        fetch(`https://alcyon-it.com/APIS/vinoteca/index/vinos/${id}`)
        .then(respuesta=> {
            if(respuesta.status===400){
                throw new Error('Vino no existe')
            }
            if(!respuesta.ok){
                throw new Error ('Error en la solicitud')
            }
             return respuesta.json()
        })
        .then( data => {
            setVino(data)
            setError(null)
        })
        .catch(err=> {
            setVino(null)
            setError(err.message)
        })
    }, [id])

    if(error){
        return <div className='alert alert-danger'>Error :{error}</div>
    }
    if(!vino){
        return <p>Cargando detalles del vino...</p>
    }
  return (
    <div id="marco">
        <div className="row">
            <div className="col justify-content-center">
                <img width="100%" src={`https://alcyon-it.com/APIS/vinoteca/assets/img/${vino.imagen}`} alt={vino.nombre} className="img-responsive"/>
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