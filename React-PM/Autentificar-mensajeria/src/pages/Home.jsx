
import { useEffect, useState } from "react";
import { createUsuario, getItems } from "../services/api";
import { useUserContext } from "../providers/UserProviders";


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

  return (
   <>
    <h1>Mensajeria</h1>
    <p>Introduce tu nombre.Si no está en la bsae de datos, se creará</p>
    <input type="text" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
    <button onClick={crearUsuario}>Acceder</button>
    {user && (
      <div>
        <h3>Usuario conectado:</h3>
        {user.name}
      </div>
    ) }
    
   
   
   </>
  );
}


