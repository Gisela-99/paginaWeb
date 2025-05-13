import { useContext } from "react"
import { Contexto } from "../contexto/Contexto"


function Colores() {
  //indicar que la función la vamos a obtener del contexto
  const setColor = useContext(Contexto) // esta variable pertenece el contexto
  
  function asignarColor(e){
    //leer el color de la caja del circulito
    let color= window.getComputedStyle(e.target).getPropertyValue("background-color")
    //asignar el color a la variable del contexto color
    setColor(color)
  }
  return (
    <div>
      <div className='colores'>
      <div className='color'onClick={asignarColor}></div>
      <div className='color'onClick={asignarColor}></div>
      <div className='color'onClick={asignarColor}></div>
      <div className='color'onClick={asignarColor}></div>
      </div>
    </div>
  )
}

export default Colores