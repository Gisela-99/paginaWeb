import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Noticias from '../pages/Noticias';
import Layout from '../components/Layout/Layout';
import Cultura from '../pages/Cultura';
import Error404 from '../pages/Error';


const Router = () => (
    <BrowserRouter>
    <Layout>
        <Routes>  
            <Route index element={<Home/>} />
            <Route path='/noticias/:id' element={<Noticias/>}/>
            <Route path='/cultura' element={<Cultura/>}></Route>
            <Route path="*" element={<Error404/> } />
        </Routes>
    </Layout>
    </BrowserRouter>
);


export default Router;