 import { createContext, useContext , useState } from "react"

 const AppContext = createContext()

 export const useUserContext = () => useContext(AppContext)

 const UserProvider =({children})=>{
   const [user,setUser]= useState()
   return(
     <AppContext.Provider value={{user,setUser}}>
       {children}
     </AppContext.Provider>
   )
 }
 export default UserProvider

// import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../services/config"; // Asegúrate de que esta ruta sea correcta
// import { onAuthStateChanged } from "firebase/auth";

// const AppContext = createContext();

// export const useUserContext = () => useContext(AppContext);

// const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Escucha en tiempo real el estado de autenticación
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("Usuario detectado:", user.uid);
//         setUser(user); // Guardas el usuario completo (o solo user.uid si prefieres)
//       } else {
//         console.log("Usuario no logueado");
//         setUser(null);
//       }
//     });

//     return () => unsubscribe(); // Limpia el listener al desmontar
//   }, []);

//   return (
//     <AppContext.Provider value={{ user, setUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default UserProvider;
