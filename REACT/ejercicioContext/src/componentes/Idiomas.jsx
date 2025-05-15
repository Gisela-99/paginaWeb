import { useContext } from 'react'
import { Contexto } from '../Contexto/Contexto'

function Idiomas() {
 const{setIdioma} =useContext(Contexto)

  const banderaEs = 'spain.jpg'
  const banderaFr = 'francia.png'
  const banderaUk = 'uk.png'
  return (
  <div className='idiomas'>
      <div className='bandera'>
      <img src={`/img/${banderaEs}`} alt="bandera"  onClick={()=> setIdioma(0)} />
      </div>
      <div className='bandera'>
      <img src= {`/img/${banderaUk}`} alt="bandera" onClick={()=> setIdioma(1)} />
      </div>
      <div className='bandera'>
      <img src={`/img/${banderaFr}`}alt="bandera" onClick={()=> setIdioma(2)} />
      </div>
  </div>

  )
}

export default Idiomas