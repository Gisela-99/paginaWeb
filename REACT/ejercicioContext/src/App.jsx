import './App.css'
import profesoras from './datos/Profesoras.js'
import Idiomas from './componentes/Idiomas.jsx'
import Contenido from './componentes/Contenido.jsx'
import {Datos } from './Contexto/Contexto.jsx'

function App() {
  console.log(profesoras)

  return (
    <>
    <Datos> 
      <div className='App'>
        <div className='banderas'>
        <Idiomas />
        </div>
        <div className='contenido'>
        <Contenido />
        </div>
      </div>
    </Datos>
    </>
  )
}

export default App
