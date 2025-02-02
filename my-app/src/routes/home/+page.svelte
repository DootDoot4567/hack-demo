<script>
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


<TaskModal/>
