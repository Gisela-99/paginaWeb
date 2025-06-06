import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserContext } from './providers/UserProvider'; 
import { auth } from './services/config';
import Home from './pages/Home'; 
import Login from './pages/Login';   
function App() {
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('user', user, ' userId:', user.uid);
        setUser(user);
      } else {
        console.log("No user logged");
        setUser(null);
      }
    });

    // Limpieza del listener cuando se desmonta el componente
    return () => unsubscribe();
  }, []);

  return user ? <Home /> : <Login />;
}

export default App;
