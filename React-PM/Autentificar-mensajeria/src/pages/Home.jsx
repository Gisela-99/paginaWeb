
import { useEffect, useState } from "react";
import { createUsuario, getItems } from "../services/api";
import { useUserContext } from "../providers/UserProviders";
import { logout } from "../services/auth";


export default function Home() {
  const{setUser, user}=useUserContext()
  const [nombre, setNombre]= useState('')
  

  useEffect(()=>{
    const fetchUsuarios =async ()=>{
      const data= await getItems()
      console.log("Usuarios recuperados:", data)
    }
    fetchUsuarios()
  }, [])

  const crearUsuario = async() =>{
    if(!nombre.trim()) return

    try {
      const id = await createUsuario (nombre)
      if(id){
        setUser({id, name:nombre})
        setNombre('')
      }
    }catch(error){
      console.log(error)
    }
    
  }

 const handleLogout = async () => {
  try {
    await logout();       // llama a Firebase signOut
    setUser(null);        // limpia el contexto
    setNombre('');        // opcional: limpia el input
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

  return (
   <>
    <h1>Mensajeria</h1>
    <p>Introduce tu nombre.Si no está en la base de datos, se creará</p>
    <input type="text" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
    <button onClick={crearUsuario}>Acceder</button>
    {/* {user && (
      <div>
        <h3>Usuario conectado:</h3>
        {user.name}
      </div>  
    ) } */}
      <button onClick={handleLogout}>Cerrar sesión</button>
    {user && (
      <div>
        <h3>Usuario conectado:</h3>
        {user.name}
      </div>
    )}    
   
   
   </>
  );
}


