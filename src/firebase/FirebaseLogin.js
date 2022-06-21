import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Route, Routes, Router } from "react-router";
import HomePage from "../pages/HomePage";
import styles from "../assets/style_modules/Login.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyCLTEAZ0ZVLWgDahkEdjUZy5EW9s47brHw",
  authDomain: "the-crocodile-project-4158c.firebaseapp.com",
  projectId: "the-crocodile-project-4158c",
  storageBucket: "the-crocodile-project-4158c.appspot.com",
  messagingSenderId: "18830826567",
  appId: "1:18830826567:web:c8b3ed8c562deb56072562",
  measurementId: "G-NXDXCWX56X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function FirebaseLogin() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.Email !== "" && inputs.Email !== "") {
      signInWithEmailAndPassword(auth, inputs.Email, inputs.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("Welcome back to the Croc family!");
          window.location.href = "/home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(
            "Email or Password is incorrect.\n Please try again or follow the register link below."
          );
        });
    } else {
      alert("Please make sure you enter both Email and Password.");
    }
  };

  function SignoutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("you have signed out!");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
    }
  });

  return (
    <div className={styles["sign-in-wrapper"]}>
      <div className={styles["sign-in"]}>
        <img
          className={styles["logo"]}
          src="/static/media/crocLogo.6c89337032a4540d62e5.png"
          alt="Crocodile Logo"
        />
        <h1>Login Form</h1>
        <form className="forms" onSubmit={handleSubmit}>
          <input
            className={styles["input-box"]}
            type="email"
            name="Email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className={styles["input-box"]}
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className={styles["sign-in-btn"]}>
            Log In
          </button>
          <div className={styles["footer"]}>
            <a href="/signup">Want to register?</a>
          </div>
        </form>
        <button onClick={SignoutUser} className={styles["sign-out-btn"]}>
          Sign out?
        </button>
      </div>
    </div>
  );
}
export default FirebaseLogin;
