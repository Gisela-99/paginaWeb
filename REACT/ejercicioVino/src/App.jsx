import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componentes/comunes/Navbar'
import Listavinos from './componentes/contenidos/carta/listavinos/Listavinos'
import Inicio from './componentes/contenidos/inicio/Inicio'
import Altavino from './componentes/contenidos/carta/altavino/Altavino'
import Notfound from './componentes/contenidos/noencontrado/Notfound'
import Footer from './componentes/comunes/Footer'
import Detallevino from './componentes/contenidos/carta/detallevino/Detallevino';

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/carta' element={<Listavinos/>}/>
      <Route path='/alta' element={<Altavino/>}/>
      <Route path='/vino/:id' element={<Detallevino/>}/>
      <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>

    <Footer></Footer>                                         

    </>
  )                                 
}

export default App
