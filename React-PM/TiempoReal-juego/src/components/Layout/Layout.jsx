import { Link } from "react-router-dom"
const Layout = ({ children}) =>{
  return(
    <div>
      {/* <h1>Tiempo Real:juego</h1> */}
      <main>{ children}</main>
    </div>
  )
}

export default Layout