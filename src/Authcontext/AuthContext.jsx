import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from './../../firebaseConfig';
const auth=getAuth(app)
 export const Authprovider=createContext()

const AuthContext = ({children}) => {
    const [user,setuser]=useState(null)
    const [loding,setloding]=useState(true)
    const createUser=(email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser=(email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth,curentuser=>{
            setuser(curentuser)
            console.log('curent user',curentuser)
            setloding(false)
        });
        return () =>{
            return unsubcribe();
        }
    },[])
  const authinfo={
    createUser,
    signinUser,
    }
    return (
        <Authprovider.Provider value={authinfo}>
            {children}
        </Authprovider.Provider>
    );
};

export default AuthContext;