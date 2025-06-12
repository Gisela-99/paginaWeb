import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Read from '../pages/Read';
import WriteMessage from '../pages/WriteMessage';



const Router = () => (
 
    <BrowserRouter>
      <Layout>
        <Routes>   
            <Route path='/' element={<Home/>} />
            {/* <Route path='/login' element={<Login/>} /> */}
            <Route path='/read' element={<Read />} />
            <Route path='/write' element={<WriteMessage/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
      </Layout>
    </BrowserRouter>
);

export default Router;