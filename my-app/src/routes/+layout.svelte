<script>
	import "../app.css";
	import { page } from '$app/stores';
	import Navbar from "./Nested/navigation.svelte";
	import {onMount} from 'svelte'
	import {auth} from '../lib/firebase/firebase.client'
	import {authStore} from './stores/authStores.js'
	import { browser } from '$app/environment';

	let { children } = $props();

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (
				browser &&
				!$authStore?.currentUser &&
				!$authStore.isLoading &&
				(window.location.pathname !== '/about' && window.location.pathname !== '/')
			) {
				window.location.href = '/about';
				console.log(authStore.currentUser, authStore.isLoading);
			}
		});
		return unsubscribe;
	});
</script>

<div class="m-0 p-0">
	{#if $page.url.pathname !== '/'}
		<Navbar />
	{/if}
	<slot />
</div>
