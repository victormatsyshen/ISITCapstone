// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDej6OOAi6ne8jzJCgrcFWUSY8aCkBG-kc",
  authDomain: "react-example-photos.firebaseapp.com",
  projectId: "react-example-photos",
  storageBucket: "react-example-photos.appspot.com",
  messagingSenderId: "368035056632",
  appId: "1:368035056632:web:8b0dd89ff7150863fd240d",
  measurementId: "G-V48N92HMKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
