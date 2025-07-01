import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Layout from '../components/Layout/Layout';
import Pacientes from '../pages/Pacientes';
import PacientesList from '../pages/PacientesList'; // si tienes un listado

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Read />} />  {/* Home */}
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/pacientes" element={<PacientesList />} /> {/* Lista */}
        <Route path="/pacientes/:id" element={<Pacientes />} /> {/* Detalle */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
