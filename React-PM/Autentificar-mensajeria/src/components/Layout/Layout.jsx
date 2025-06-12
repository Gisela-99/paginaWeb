import { Link } from "react-router-dom"
const Layout = ({ children}) =>{
  return(
    <div>
      <h1>Autentificación: mensajeria</h1>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/read'}>See message</Link></li>
          <li><Link to={'/write'}>Write message</Link></li>
        </ul>
      </nav>
      <main>{ children}</main>
    </div>
  )
}

export default Layout