import { arrayUnion, onSnapshot } from "firebase/firestore";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where} from "./config";

const collectionName = 'rooms';

// CREATE USUARIOS

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


// CREAR SALAS

export const createRoom = async(roomId)=>{
    const room = await getRoomById(roomId)
    if(room){
        console.log('Sala existe')
    }else{
        const colRef= collection(db, collectionName)
        await setDoc(doc(colRef, roomId), {
            });
    }
    return roomId
}
// Añadir usuario a la sala

export const addUserToRoom= async(roomId, userName)=>{
    const docRef = doc(db, collectionName, roomId)
    await updateDoc(docRef,{
        users:arrayUnion(userName)
    })
}

//Leer sala

export const getRoomById= async (id)=>{
    const docRef = doc(db, collectionName, id)
    const result = await getDoc(docRef)
    return result.data()
}

//Actualizar sala

export const onRoomUpdated = (roomId, callback)=>{
    return onSnapshot (doc(db,"rooms",roomId), (doc)=>{
        if (doc.exists()) callback(doc.data());
    })
}

//Huésped entrar a la sala
export const guestEnterInRoom= async (roomId)=>{
    const docRef = doc(db, collectionName,roomId)
    await updateDoc(docRef,{
        guestIsReady:true,
    })
}

