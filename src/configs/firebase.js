// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWq9lUJzqoiWKOdCvkGbx7BbECX11FxUA",
  authDomain: "sign-up-form-kdw.firebaseapp.com",
  projectId: "sign-up-form-kdw",
  storageBucket: "sign-up-form-kdw.appspot.com",
  messagingSenderId: "924301616081",
  appId: "1:924301616081:web:f7dc1e6a2c7723a97036f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
