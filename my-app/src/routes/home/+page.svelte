<script>
    import Login from "../Nested/Login.svelte"
    import TaskModal from "../Nested/TaskModal.svelte"
    import { auth } from '../../lib/firebase/firebase.client.js';
	import { authHandlers, authStore } from '../stores/authStores.js';

	let email;
	authStore.subscribe((curr) => {
		console.log('CURR', curr);
		email = curr?.currentUser?.email;
	});
</script>

<!-- <Login /> -->

{#if $authStore.currentUser}
	<div>
		<h1>CURRENT USER: {email}</h1>
        <button on:click={authHandlers.logout}>Logout</button>
	</div>
{/if}

<TaskModal/>
