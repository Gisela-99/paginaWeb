import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./config";




// CREATE
export const createPerson = async(obj) => {
   fetch('http://localhost:3000/create?name='+obj.name)
}

// UPDATE
export const updateItem = async (id, obj) => {
    await fetch(`http://localhost:3000/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
}

// READ
export const getItems= async ()  => {
    const res = await fetch('http://localhost:3000/items');
  const data = await res.json();
  return data;
}


// DELETE
export const deleteItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

