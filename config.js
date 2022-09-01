import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKsEGBhIj5fZPvRhMyqq9GqKx95b-TCLU",
  authDomain: "e-ride-49e74.firebaseapp.com",
  projectId: "e-ride-49e74",
  storageBucket: "e-ride-49e74.appspot.com",
  messagingSenderId: "908238969500",
  appId: "1:908238969500:web:e02b123896ece9105c2b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
