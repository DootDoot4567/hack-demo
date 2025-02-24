import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../../lib/firebase/firebase.client.js";
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
    logout: async () => {
        await signOut(auth)
    }
}