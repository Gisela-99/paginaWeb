// import { useEffect, useState } from "react";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../services/config";
// import { useUserContext } from "../providers/UserProviders";

// function Read() {
//   const [mensajes, setMensajes] = useState([]);
//   const { user } = useUserContext();

//   useEffect(() => {
//     if (!user) return;

//     const fetchMensajes = async () => {
//       const colRef = collection(db, "mensajes");
//       const q = query(colRef, where("idUsuario", "==", user.id));
//       const snapshot = await getDocs(q);
//       const mensajesArray = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMensajes(mensajesArray);
//     };

//     fetchMensajes();
//   }, [user]);

//   return (
//     <div>
//       <h1>Mensajes recibidos</h1>
//       {mensajes.length === 0 && <p>No tienes mensajes.</p>}
//       {mensajes.map((m) => (
//         <div key={m.id}>
//           <p><strong>De:</strong> {m.idRemitente}</p>
//           <p>{m.msg}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Read;


import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/config";
import { useUserContext } from "../providers/UserProviders";

function Read() {
  const [mensajes, setMensajes] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    if (!user || !user.uid) return;

    const fetchMensajes = async () => {
      try{
        const colRef = collection(db, "usuarios", user.uid, "mensajes");
      //const q = query(colRef, where("idUsuario", "==", user.id));
      const snapshot = await getDocs(colRef);
      const mensajesArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMensajes(mensajesArray);
      }catch(error){
        console.log(error)
      }
      
    };

    fetchMensajes();
  }, [user]);

  return (
    <div>
      <h1>Mensajes recibidos</h1>
      {mensajes.length === 0 && <p>No tienes mensajes.</p>}
      {mensajes.map(m => (
        <div key={m.id}>
          <p><strong>De:</strong> {m.idRemitente}</p>
          <p>{m.msg}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Read;
