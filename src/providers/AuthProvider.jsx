import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import app from "../firebase/firebase.config.js";

// Create AuthContext
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Logout
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Email/password Sign-In
  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Email/password Sign-Up
  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Reset Password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const value = {
    user,
    loading,
    logOut,
    googleSignIn,
    logIn,
    signUp,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
