// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiW8CzG2lVpeTQXcypQev_c3EvvB_87m0",
  authDomain: "technology-commerce.firebaseapp.com",
  projectId: "technology-commerce",
  storageBucket: "technology-commerce.appspot.com",
  messagingSenderId: "151950581770",
  appId: "1:151950581770:web:6d2b5def01dfb38fd07ff3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

