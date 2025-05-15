import { useContext } from "react"
import { Contexto } from "../Contexto/Contexto"
import Profesora from "./Profesora"
import Ubicacion from "./Ubicacion"
import { useState } from "react"

function Contenido() {
const {profesora}= useContext(Contexto) // recuperar los datos por el contexto
const [profesoraUbicacion,setProfesoraUbicacion]=useState(true)
  return (
    
    <div className='contenedor'>
        <h1>{profesora.titulo}</h1>
        <h2>{profesora.texto}</h2>
        <div className='botones'>
        <button onClick={()=> setProfesoraUbicacion(true)}>{profesora.boton1}</button>
        <button onClick={()=> setProfesoraUbicacion(false)}>{profesora.boton2}</button>
        </div>
        {
          profesoraUbicacion
          ?<Profesora/>
          :<Ubicacion profesora={profesora}/>
        }
    </div>
    
  )
}

export default Contenido