import NavBar from '../componentes/NavBar'
import{BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Pagina1 from '../componentes/Pagina1'
import Pagina2 from '../componentes/Pagina2'
import Pagina3 from '../componentes/Pagina3'
import Pagina4 from '../componentes/Pagina4'
import Erro404 from '../componentes/Erro404'
import Inicio from '../componentes/Inicio'
import Header from '../componentes/Header.JSX'

function App() {


  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/pagina1' element={<Pagina1/>} />
        <Route path='/pagina2' element={<Pagina2/>} />
        <Route path='/pagina3/:id' element={<Pagina3/>} />
        <Route path='/pagina4' element={<Pagina4/>} />
        <Route path='*' element={<Erro404/>}/>
      </Routes> 
    </BrowserRouter>
      
    </>
  )
}

export default App
