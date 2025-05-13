import { createContext, useState } from "react";
//crear la variable del contexto 
export const Contexto = createContext()
//componentes especial que va actuar como contenedor de los componentes necesitemos compartir datos
export const Datos= ({children})=>{
  //los datos que vamos a compartir 
    const [color,setColor]= useState()
  // el proveedor del contexto va permitir compartir datos entres todos los componentes hijos del contenedor Datos
  return(
    <Contexto.Provider value={{color,setColor}}>
      {children}
    </Contexto.Provider>
  )
}