import { Contexto } from '../Contexto'

function Idiomas() {
 

  const banderaEs = 'spain.jpg'
  const banderaFr = 'francia.png'
  const banderaUk = 'uk.png'
  return (
  <div className='idiomas'>
      <div className='bandera'>
      <img src={`/img/${banderaEs}`} alt="bandera"/>
      </div>
      <div className='bandera'>
      <img src= {`/img/${banderaUk}`} alt="bandera"/>
      </div>
      <div className='bandera'>
      <img src={`/img/${banderaFr}`}alt="bandera"/>
      </div>
  </div>

  )
}

export default Idiomas