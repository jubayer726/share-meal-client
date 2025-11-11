import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../FireBase/Firebase';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (updateData) =>{
         setLoading(true)
        return updateProfile(auth.currentUser, updateData)
     }

    const signInwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutWithGoogle = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authinfo = {
        createUser,
        signInUser,
        profileUpdate,
        signInwithGoogle,
        signOutWithGoogle,
        user,
        setUser,
        loading,
        setLoading
    }

  return <AuthContext value={authinfo}>
    {children}
  </AuthContext>
};

export default AuthProvider;
