// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBdZ5k31JywkFGObZ73dO6MrdC8xI7ZV0A",
  authDomain: "todobuni.firebaseapp.com",
  databaseURL:
    "https://todobuni-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todobuni",
  storageBucket: "todobuni.appspot.com",
  messagingSenderId: "62064692652",
  appId: "1:62064692652:web:dfa0d24796c14d5fa7fe09",
  measurementId: "G-72VE5KJ938",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
// const analytics = getAnalytics(app);
