import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export { 
  collection, doc, addDoc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, 
  where, onSnapshot, documentId, serverTimestamp 
} from "firebase/firestore";

export { 
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, 
  signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification 
} from "firebase/auth";

export { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_PROJECT_ID + '.firebaseapp.com',
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PROJECT_ID + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

setPersistence(auth, browserLocalPersistence);
