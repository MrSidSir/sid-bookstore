// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv8qhEEaXituw0_iZOpxGw9It8U2Bp1PU",
  authDomain: "sid-book-store.firebaseapp.com",
  projectId: "sid-book-store",
  storageBucket: "sid-book-store.firebasestorage.app",
  messagingSenderId: "212583554081",
  appId: "1:212583554081:web:4d4a146d362c4769f65760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);