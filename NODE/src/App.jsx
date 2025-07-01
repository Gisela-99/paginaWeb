import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserContext } from './providers/UserProvider'; 
import { auth } from './services/config';
import Login from './pages/Login';   
import Router from './app/Router';
import SocketProvider  from './providers/SocketContext';
function App() {
  const { user, setUser } = useUserContext();

  useEffect(() => {
  onAuthStateChanged(auth, user => {
      console.log('rrrrrrrrrrrrr')
      if (user) {
        console.log('tttttttttttttttt')
        //console.log('user', user, ' userId:', user.uid);
        setUser(user);
      } else {
        //console.log("No user logged");
        setUser(null);
      }
    });

 
  }, []);

  return user ? (<SocketProvider><Router /></SocketProvider>) : (<Login />);
}

export default App;
