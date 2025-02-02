// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth'

// Your web app's Firebase configuration
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
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const auth = getAuth(firebaseApp)