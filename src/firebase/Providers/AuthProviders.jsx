import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProviders = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProviders)
    }
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('this is curernt user', currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProviders;