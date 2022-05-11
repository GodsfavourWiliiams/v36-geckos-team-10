import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: "AIzaSyBgMWDNEgeGbjWY7fR5G2GuzsoLDnNQeBQ",
    authDomain: "easy-web-79b32.firebaseapp.com",
    projectId: "easy-web-79b32",
    storageBucket: "easy-web-79b32.appspot.com",
    messagingSenderId: "495960036850",
    appId: "1:495960036850:web:d53d2d0394bff9a503076b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }
};


const logInWithEmailAndPassword = async(email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }

};

const registerWithEmailAndPassword = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }
};

const sendPasswordReset = async(email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset link sent!");
    } catch (err) {
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }
};

const logout = () => {
    signOut(auth);
    toast.success("Successfully Logged Out");
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};