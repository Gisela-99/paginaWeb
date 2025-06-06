import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <h1> Autentificación </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
