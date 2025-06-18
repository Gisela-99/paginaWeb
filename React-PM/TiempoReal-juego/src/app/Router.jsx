import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import CrearSala from '../pages/CrearSala'
import UnirSala from '../pages/UnirSala';
import Salas from '../pages/Salas'

const Router = () => (
 
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/' element={<Home/>} />
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/crear' element={<CrearSala/>}/>
            <Route path='/unirse' element={<UnirSala />}/>
            <Route path='/sala/:roomId' element={<Salas />} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;