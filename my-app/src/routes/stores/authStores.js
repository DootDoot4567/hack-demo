import { writable } from "svelte/store";
import {auth} from "../../lib/firebase/firebase.client.js"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
//default
export const authStore = writable({
    isLoading: true,
    currentUser: null
})
export const authHandlers = {
    login: async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    signup: async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    logout: async (auth) => {
        await signOut(auth)
    },
    resetPassword: async (email) => {
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async (password) => {
        await updateEmail(auth, email)
    },
    updatePassword: async (email) => {
        await updatePassword(auth, password)
    }
}