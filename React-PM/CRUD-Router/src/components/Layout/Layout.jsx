import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <h1> Ejercicio:Invitados </h1>
      <nav>
        <ul>
          <li><Link to="/Read">Read</Link></li>
          <li><Link to="/Create">Crear</Link></li>
          <li><Link to="/Delete">Eliminar</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
