import { useEffect } from "react"
import { useUserContext } from "./providers/UserProviders"
import { auth , onAuthStateChanged} from "./services/config";
import Router from "./app/Router";
import Login from "./pages/Login";


function App() {
  const {user,setUser}=useUserContext()
  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
      console.log('Usuarioooooooooo')
      if(user){
        console.log('Usuario ha entrado')
        setUser(user)

      }else{
        console.log('No logueado')
        setUser(null)
      }
    })
  },[setUser])

  return user? <Router/> : <Login/>
}

export default App
