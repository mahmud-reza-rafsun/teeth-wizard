import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ router }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = () => {
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user logged in", currentUser);
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null);
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        manageProfile,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {router}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;