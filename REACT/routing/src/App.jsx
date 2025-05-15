import{BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Erro404 from '../componentes/Erro404'
import Inicio from './componentes/Inicio'
import FichaMicro from './componentes/FichaMicro'
import './App.css'

function App() {


  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/micro/:nombre' element={<FichaMicro/>} />
          <Route path='*' element={<Erro404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
