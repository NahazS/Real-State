import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from 'firebase/auth';
import React, {createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";


export const AuthContext = new createContext(null)


const AuthProvider = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }

    const signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const signInGithub = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = async (name,photoURL) => {
        const user = auth.currentUser
        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            })
            setUser({
                ...user,
                displayName: name,
                photoURL: photoURL,
            });
            
        } catch{

        }
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            console.log("new user",newUser)
            setUser(newUser)
            setLoading(false)
        })
        return () => {unSubscribe}
    },[])
    const authInfo = {currentSlide, setCurrentSlide, signInUser, signUpUser, signInGithub, signInGoogle, signOutUser,loading, user, setUser, updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;