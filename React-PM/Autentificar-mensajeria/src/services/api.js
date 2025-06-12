import { serverTimestamp} from "firebase/firestore";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where} from "./config";

const collectionName = 'usuarios';

// CREATE
// export const createUsuario = async(userId,obj) => {
//     console.log('yyyyyyyyyyyyyyy')
//     const colRef = collection(db, 'users', userId, 'comments');
//     const data = await addDoc(colRef, obj);
//     return data.id;
//  }

 export const createUsuario = async (name) =>{
    const colRef = collection(db, collectionName)
    const result =await getDocs(query(colRef, where('name', '==', name)))

    if(result.size ===0 ){
        const docRef=await addDoc (colRef, {name})
        return docRef.id
    }

    return result.docs[0].id
 }

// UPDATE
export const updateItem = async (id, obj) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

//Enviar el comentario

// export const enviarMensajeAFirebase = async (mensaje, destinatarios, remitenteId) => {
//     const colRef = collection(db, "usuarios", usuarioId,"mensajes");

//     for (const idUsuario of destinatarios) {
//     await addDoc(colRef, {
//        idRemitente: remitenteId,
//       idUsuario,
//        msg: mensaje,
//        timestamp: serverTimestamp(),
//      });
//    }
//  };

export const enviarMensajeAFirebase = async (mensaje, destinatarios, remitenteId) => {
  console.log("Remitente ID recibido:", remitenteId);
  console.log("Destinatarios:", destinatarios);
  console.log("Mensaje:", mensaje);

  for (const idUsuario of destinatarios) {
    console.log("Guardando mensaje para destinatario:", idUsuario);
    console.log("Remitente para doc:", remitenteId);
    if (!remitenteId) {
      throw new Error("remitenteId es undefined o nulo");
    }
    const colRefDestinatario = collection(db, "usuarios", idUsuario, "mensajes");
    await addDoc(colRefDestinatario, {
      idRemitente: remitenteId,
      msg: mensaje,
      timestamp: serverTimestamp(),
    });
  }

  if (!remitenteId) {
    throw new Error("remitenteId es undefined o nulo");
  }
  const colRefRemitente = collection(db, "usuarios", remitenteId, "mensajes_enviados");
  await addDoc(colRefRemitente, {
    destinatarios,
    msg: mensaje,
    timestamp: serverTimestamp(),
  });
};
