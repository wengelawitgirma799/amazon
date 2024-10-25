import firebase from "firebase/compat/app";
import {getAuth}from "firebase/auth";
import"firebase/compat/firestore";
import"firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGu7FE6C_SS8tWLOsGmVUWGrAt3wqhmf0",
  authDomain: "e-clone-14423.firebaseapp.com",
  projectId: "e-clone-14423",
  storageBucket: "e-clone-14423.appspot.com",
  messagingSenderId: "535943572978",
  appId: "1:535943572978:web:513218d2875334baf04f6b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = app.firestore();