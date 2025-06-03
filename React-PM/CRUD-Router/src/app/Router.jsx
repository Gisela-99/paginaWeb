import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create'
import Delete from '../pages/Delete'
import Layout from '../components/Layout/Layout';

const Router = () => (
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/Read' element={<Read/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path='/Delete' element={<Delete/>}/>   
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;