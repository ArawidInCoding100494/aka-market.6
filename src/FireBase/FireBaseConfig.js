
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCJi4Ry4QTdE2cbplBk3auMCIOlgFovlHM",
  authDomain: "aka-market-d277f.firebaseapp.com",
  projectId: "aka-market-d277f",
  storageBucket: "aka-market-d277f.firebasestorage.app",
  messagingSenderId: "2327631256",
  appId: "1:2327631256:web:b85b92fc591f448e0407ed",
  measurementId: "G-KV9S3JXSP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)