import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


export { collection, doc, addDoc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, where, onSnapshot, documentId } from "firebase/firestore";
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification,onAuthStateChanged } from "firebase/auth";
export { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_PROJECT_ID + '.firebaseapp.com',
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_PROJECT_ID + ".appspot.com",
};
// ✅ Inicializamos Firebase
const firebaseApp = initializeApp(firebaseConfig);
// ✅ PASAMOS firebaseApp como argumento a los servicios
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
 //✅ Establecemos persistencia (opcional pero correcto aquí)
setPersistence(auth, browserLocalPersistence);

