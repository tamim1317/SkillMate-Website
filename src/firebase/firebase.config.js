// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqv7QIxr6-GJwfwoExFquro0ASAPQUZE",
  authDomain: "skillmate-a5d65.firebaseapp.com",
  projectId: "skillmate-a5d65",
  storageBucket: "skillmate-a5d65.firebasestorage.app",
  messagingSenderId: "1048860970205",
  appId: "1:1048860970205:web:411940e37d4305bb4f9f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;