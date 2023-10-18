/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLaoding] = useState(true)

    const createUser =(email,password)=>{
        setLaoding(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLaoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
       return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unSubcribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLaoding(false)
        });
        return ()=>{
            unSubcribe();
        }
    })
    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        loading,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;