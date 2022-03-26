import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC7s472eIeiVHRzFo6ipcR4V6YEyszH0pU",
  authDomain: "it-shop-7833c.firebaseapp.com",
  projectId: "it-shop-7833c",
  storageBucket: "it-shop-7833c.appspot.com",
  messagingSenderId: "168731076519",
  appId: "1:168731076519:web:faee1c3b9abd05c1fab882",
  measurementId: "G-Y6EYGCQ6DT",
});

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
