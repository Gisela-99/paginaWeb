import { useContext } from "react"
import { Contexto } from "../Contexto"
import Profesora from "./Profesora"
import Ubicacion from "./Ubicacion"

function Contenido() {
 
  const {profesora}= useContext(Contexto)
  return (
    <Contexto>
    <div className='contenedor'>
        <h1>{profesora.titulo}</h1>
        <h2>Disponibilidad</h2>
        <div className='botones'>
        <button>Profesora</button>
        <button>Lugar</button>
        </div>
        <Profesora/>
        <Ubicacion/>
    </div>
    </Contexto>
  )
}

export default Contenido