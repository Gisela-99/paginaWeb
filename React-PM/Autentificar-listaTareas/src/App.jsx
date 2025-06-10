import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserContext } from './providers/UserProvider'; 
import { auth } from './services/config';
import Login from './pages/Login';   
import Router from './app/Router';
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

  return user ? <Router /> : <Login />;
}

export default App;
