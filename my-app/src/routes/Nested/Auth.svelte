<script>
    import { authHandlers, authStore } from '../stores/authStores.js';
    import { modalState } from '../../store.js';
    import Modal from './Modal.svelte';

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
                window.location.href = '/home';
            }
        } catch (err) {
            console.log(err);
        }
    }
</script>
<div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg pt-128">
    <h2 class="text-xl font-semibold pt-4">{register ? 'Register':"Log In"}</h2>
    <!-/- Input container -/->
    <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
        <div class="flex flex-col space-y-4 relative">
            <!-/- Email Input -/->
                <label>
                <input
                bind:value={email}
                type="text"
                placeholder="Email"
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                />
                </label>
                <label>
                <!-/- Password Input -/->
                <input
                bind:value={password}
                type="password"
                placeholder="Password"
                class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
                </label>
            {#if register} 
                <label>
                    <input
                    bind:value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"/>
                </label>
            {/if}
            <!-/- Sign Up Button -/->
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                on:click={handleSubmit}
            >
                Sign Up
            </button>
            {#if register} 
                <div on:click={() => {
                    register = false;
                }} on:keydown={() => {}}>Already have an account?<p>Log In</p></div>
            {:else}
                <div on:click={() => {
                    register = true;
                }} on:keydown={() => {}}>
                Don't have an account?<p>Sign Up</p></div>
            {/if}
        </div>
    </div>
</Modal>
