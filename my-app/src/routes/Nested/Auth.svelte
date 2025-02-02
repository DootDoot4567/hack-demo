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

<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={() => modalState.update(state => ({ ...state, login: true }))}>
    Log in H
</button>

<Modal modalKey="login">
    <div class="flex flex-col items-center justify-center w-[360px] h-[450px] bg-white rounded-lg shadow-lg p-6">
        <h2 class="flex justify-center items-center text-green-600 font-mono- text-2xl italic font-bold ">
            <img src="Logo_hack@davsn.png" alt="Website Logo" width="100" height="100" />
            Sprout
        </h2>

        <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
            <div class="flex flex-col space-y-4 relative">
                <input bind:value={email} type="email" placeholder="Email" 
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg ring-4 ring-transparent focus:ring-slate-100" />
                
                <input bind:value={password} type="password" placeholder="Password" 
                    class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                
                {#if register}
                    <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" 
                        class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                {/if}
                
                <button on:click={handleSubmit} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {register ? 'Sign Up' : 'Log In'}
                </button>
            </div>
        </div>
        
        <div class="text-center mt-4">
            <p role="button" tabindex="0" on:click={() => (register = !register)} class="text-blue-500 hover:underline cursor-pointer">
                {register ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </p>
        </div>
    </div>
</Modal>
