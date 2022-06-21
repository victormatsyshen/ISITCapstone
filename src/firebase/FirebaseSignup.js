import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import styles from "../assets/style_modules/SignUp.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  measurementId: "G-NXDXCWX56X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default function FirebaseSignup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputs.Password === inputs.RePassword &&
      inputs.Email !== null &&
      inputs.Password !== null
    ) {
      createUserWithEmailAndPassword(auth, inputs.Email, inputs.Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("thank you for joining the Croc family!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
        });
    } else {
      alert("Please make sure your passwords match.");
    }
  };

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
    <div className={styles["sign-up-wrapper"]}>
      <div className={styles["sign-up"]}>
        <img
          className={styles["logo"]}
          src="/static/media/crocLogo.6c89337032a4540d62e5.png"
          alt="Crocodile Logo"
        />
        <h1>Create Account</h1>
        <form className="forms" onSubmit={handleSubmit}>
          <input
            className={styles["input-box"]}
            type="email"
            name="Email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <input
            className={styles["input-box"]}
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            className={styles["input-box"]}
            type="password"
            name="RePassword"
            placeholder="Re-enter Password"
            onChange={handleChange}
          />
          <button type="submit" className={styles["sign-up-btn"]}>
            Register
          </button>
          <hr />

          <div className={styles["footer"]}>
            Already registered? <a href="/login">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
}
