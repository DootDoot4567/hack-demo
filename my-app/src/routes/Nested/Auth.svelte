<script>
	import { authHandlers, authStore } from '../../stores/authStores';

	let register = false;
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			console.log("Please fill in all fields");
			return;
		}

		if (register && password !== confirmPassword) {
			console.log("Passwords do not match");
			return;
		}

		try {
			if (register) {
				await authHandlers.signup(email, password);
			} else {
				await authHandlers.login(email, password);
			}
			if ($authStore.currentUser) {
				window.location.href = '/research';
			}
		} catch (err) {
			console.log(err);
		}
	}
</script>

<!-- Background Overlay -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
	<!-- Modal Container -->
	<div class="bg-white p-6 rounded-lg shadow-xl w-96">
		<!-- Title -->
		<h2 class="text-2xl font-bold text-center mb-4">{register ? 'Register' : 'Log In'}</h2>

		<!-- Form Inputs -->
		<form class="flex flex-col space-y-3">
			<input
				bind:value={email}
				type="email"
				placeholder="Email"
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>

			<input
				bind:value={password}
				type="password"
				placeholder="Password"
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>

			{#if register}
				<input
					bind:value={confirmPassword}
					type="password"
					placeholder="Confirm Password"
					class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
			{/if}

			<!-- Submit Button -->
			<button
				type="button"
				on:click={handleSubmit}
				class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
			>
				{register ? 'Sign Up' : 'Log In'}
			</button>
		</form>

		<!-- Toggle Register/Login -->
		<div class="text-center mt-4">
			<p
				role="button"
				tabindex="0"
				on:click={() => (register = !register)}
				class="text-blue-500 hover:underline cursor-pointer"
			>
				{register ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
			</p>
		</div>

		<!-- Forgot Password -->
		{#if !register}
			<div class="text-center mt-2">
				<p
					role="button"
					tabindex="0"
					on:click={() => authHandlers.resetPassword(email)}
					class="text-gray-500 hover:underline cursor-pointer"
				>
					Forgot Password?
				</p>
			</div>
		{/if}
	</div>
</div>
