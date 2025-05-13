import './App.css'
import Ficha1 from './componentes/Ficha1'
import Colores from './componentes/Colores'
import Ficha2 from './componentes/Ficha2'
import { Datos } from './contexto/Contexto'

function App() {


  return (
    <>
    <Datos>
      <div className='Contenedor'>
        <Ficha1></Ficha1>
        <Ficha2></Ficha2>
      </div>
      <hr />
      <Colores></Colores>
    </Datos>
  
    </>
  )
}

export default App
