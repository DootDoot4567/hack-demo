//NPM install firebase is needed to run

// Import the necessary modules from Firebase v9
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';   // For authentication
import { getFirestore } from 'firebase/firestore';   // For Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS8l-qvRS5cwemBNUQJYfEqU4zeboa9s4",
  authDomain: "todoempowerment-853e8.firebaseapp.com",
  projectId: "todoempowerment-853e8",
  storageBucket: "todoempowerment-853e8.firebasestorage.app",
  messagingSenderId: "268326665899",
  appId: "1:268326665899:web:4e641b52523c5d80a4c1ee",
  measurementId: "G-45JYPR7H30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099"); // Connect to the Auth Emulator
}

export {auth};