import{createContext, useState} from 'react'
//crear una variable del contexto
export const Contexto = createContext()
//componentes especiales que actuaran como contenedor de los componentes necesitamos compartir datos
export const Datos=({children})=>{
  //datos que vamos a compartir
  const[idiomas,setIdiomas]=useState(0)
  const[profesora, setProfesora]=useState([])
  //el proveedor del contexto que va permitir compartir los datos entre todos los componentes del hijo contenedor
  return(
    <Contexto.Provider value={{idiomas,setIdiomas,profesora,setProfesora}}>
      {children}
    </Contexto.Provider>
  )
}