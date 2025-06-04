import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <h1> Ejercicio: hilos </h1>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/Read">Ver Hilos</Link></li>
          <li><Link to="/Create">Crear Hilos</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
