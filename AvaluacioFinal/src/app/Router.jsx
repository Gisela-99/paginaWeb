import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout/Layout';
import About from '../pages/About';
import Hechizos from '../pages/Hechizos';

import Error404 from '../pages/Error';


const Router = () => (
    <BrowserRouter>
    <Layout>
        <Routes>  
            <Route index element={<Home/>} />
            <Route path='/about' element={<About/>}></Route>
            <Route path='/hechizos' element={<Hechizos/>}></Route> 
            <Route path="*" element={<Error404/> } />
        </Routes>
    </Layout>
    </BrowserRouter>
);


export default Router;