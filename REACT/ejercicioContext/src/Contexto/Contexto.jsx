import { useEffect, useState} from 'react';
import profesoras from '../datos/Profesoras';
import { createContext } from 'react';

export const Contexto = createContext()// crear contexto para compartir datos
// crear un componente especial, que actuara como caja contenedora que compartirá los datos en los componentes
export const Datos =({children})=> {
  //datos que necesitamos compartir
    const[idioma,setIdioma]=useState(0) //indicar un valor por defecto 


    const[profesora, setProfesora]=useState(profesoras[idioma]) // el dato de la profesora, no el array del índice 0
    //el proveedor del contexto que va permitir compartir los datos entre todos los componentes del hijo contenedor

    //Si queremos que se utilice 1 sola vez el componente. Aquí necesitamos que se ejecute la función de setProfesora cada vez que cambie la variable del idioma
    useEffect(()=>{
      setProfesora(profesoras[idioma])
    },[idioma])
    
    return(
      <Contexto.Provider value={{setIdioma,profesora}}> 
      {/* en el value, decir lo que queremos compartir */}
        {children}
      </Contexto.Provider>
    )
}