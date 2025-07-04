import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import {  getItems } from "../services/api";
import { useUserContext } from "../providers/UserProviders";
import { logout } from "../services/auth";


export default function Home() {
  const{setUser, user}=useUserContext()
  //const [nombre, setNombre]= useState('')
  const navigate = useNavigate()
  

  useEffect(()=>{
    const fetchUsuarios =async ()=>{
      const data= await getItems()
      console.log("Usuarios recuperados:", data)
    }
    fetchUsuarios()
  }, [])

  // const crearUsuario = async() =>{
  //   if(!nombre.trim()) return

  //   try {
  //     const id = await createUsuario (nombre)
  //     if(id){
  //       setUser({id, name:nombre})
  //       setNombre('')
  //       navigate("/unirse")
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
    
  // }

 const handleLogout = async () => {
  try {
    await logout();       // llama a Firebase signOut
    setUser(null);        // limpia el contexto
    //setNombre('');        // opcional: limpia el input
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

  return (
   <>
   <div>
     <button onClick={handleLogout}>Cerrar sesión</button>
   </div> 
    <h1>Escoge una opción</h1>
    <button onClick={()=> navigate("/crear")} style={{fontSize:15, padding:20}}>Crear una sala</button>
    <button onClick={()=> navigate('/unirse')} style={{fontSize:15, padding:20}}>Unirse a una sala</button>
    {/* <button onClick={crearUsuario}>Crear Usuario</button> */}

    {user && (
      <div>
        {user.name}
      </div>
    )}    

   </>
  );
}


