import { Link } from "react-router-dom"
const Layout = ({ children}) =>{
  return(
    <div>
      <h1>Tiempo Real:juego</h1>
      {/* <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
        </ul>
      </nav> */}
      <main>{ children}</main>
    </div>
  )
}

export default Layout