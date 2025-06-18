import {db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, doc, setDoc,} from "./config";

export const signUp = async (email, password,name) => {
    try {
        console.log('22222222222', email, password)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('4444444444444444', userCredential)
        // sendEmailVerification(userCredential.user);
        const user = userCredential.user;
        console.log(333333333, user)
        const docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, {
            name:name,
            email:email,
        });
        //console.log(1111111111111)
         console.log("Usuario registrado correctamente:", user.uid);
        return user.uid;
    } catch (err) {
        return err.message;
    }
}

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login correcto:', res.user);
        return res.user.uid;
        // return res.user

    } catch (err) {
        //console.log('Ha habido un error:', err);
        console.error('Error al hacer login:', err.code, err.message);
        return err.message;
    }
}

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);

