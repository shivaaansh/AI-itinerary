// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYVk9fu7HPi0S2Yci9mxkf6xdyUF8Mof8",
  authDomain: "aiiternarys.firebaseapp.com",
  projectId: "aiiternarys",
  storageBucket: "aiiternarys.firebasestorage.app",
  messagingSenderId: "1000352618236",
  appId: "1:1000352618236:web:e1af477d4a129d6b14a979",
  measurementId: "G-08TW55TY1J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
