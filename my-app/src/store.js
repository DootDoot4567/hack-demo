import { writable } from 'svelte/store';

export const modalState = writable({
    login: false,
    task: false,
    signup: false,
});
