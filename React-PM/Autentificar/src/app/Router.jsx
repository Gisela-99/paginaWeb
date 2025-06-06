import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';


const Router = () => (
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;