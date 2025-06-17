import {Titulo, Main} from './Layout.styles';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Titulo>El mundo Today</Titulo>
            <Navbar></Navbar>
            <Main>{children}</Main>
            <Footer></Footer> 

        </div>
    )
}

export default Layout;