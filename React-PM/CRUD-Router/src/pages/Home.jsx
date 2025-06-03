import { Link } from 'react-router-dom';


const Home = () => (
        <div>    
                <ul>
                        <li><Link to="/Read">Read</Link></li>
                        <li><Link to="/Create">Create</Link></li>
                        <li><Link to="/Delete">Delete</Link></li>
                        
                </ul>
        </div>
)

export default Home;