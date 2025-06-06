import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create'
import Layout from '../components/Layout/Layout'
import Hilos from '../pages/Hilos';
import Home from '../pages/Home'

const Router = () => (
    <BrowserRouter>
      <Layout>
        <Routes>  
             <Route path='/' element={<Home/>}/> 
            <Route path='/Read' element={<Read/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path='/hilos/:hiloId' element={<Hilos/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;