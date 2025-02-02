<script>
  import "../app.css";
  import {onMount} from 'svelte'
  import {auth} from '../lib/firebase/firebase.client'
  import {authStore} from '../stores/authStores'
  import { browser } from '$app/environment';

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
				window.location.pathname !== '/about'
			) {
				window.location.href = '/about';
				console.log(authStore.currentUser, authStore.isLoading);
			}
		});
		return unsubscribe;
	});

</script>

<div class="m-0 p-0">
  <slot />
</div>
