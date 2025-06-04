import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create'
import Layout from '../components/Layout/Layout';
import Pacientes from '../pages/Pacientes';

const Router = () => (
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/Read' element={<Read/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path="/Pacientes/:id" element={<Pacientes />} /> 
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;