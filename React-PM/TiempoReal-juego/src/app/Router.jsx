import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import CrearSala from '../pages/CrearSala'

const Router = () => (
 
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/' element={<Home/>} />
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/crear' element={<CrearSala/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;