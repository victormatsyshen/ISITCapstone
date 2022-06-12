import React from 'react'
//import styles from '../styles/HomePage.module.css'
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTEAZ0ZVLWgDahkEdjUZy5EW9s47brHw",
  authDomain: "the-crocodile-project-4158c.firebaseapp.com",
  projectId: "the-crocodile-project-4158c",
  storageBucket: "the-crocodile-project-4158c.appspot.com",
  messagingSenderId: "18830826567",
  appId: "1:18830826567:web:c8b3ed8c562deb56072562",
  measurementId: "G-NXDXCWX56X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


export default function HomePage() {
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
    setTimeout(() => {
      window.location.href = "http://localhost:3000/signup";
    }, 5000);
  }

  return (
    <div className={'homeContainer'}>
    </div>
  )
}