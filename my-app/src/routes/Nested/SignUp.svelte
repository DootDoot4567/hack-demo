<!-- <script>
    import { modalState } from '../../store.js'; // Import modal visibility control
    import Modal from './Modal.svelte'; // Modal component
    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';
    const handleSignUp = async (event) => {
        event.preventDefault(); // Prevent form from reloading the page
        try {
            const userCredential = await signUp(email, password);
            successMessage = 'Sign-up successful!';
            errorMessage = ''; // Clear any previous error
            console.log('User signed up:', userCredential.user);
        } catch (error) {
            errorMessage = error.message; // Set error message if sign-up fails
            successMessage = ''; // Clear any previous success message
        }
    };
</script>

<!-/- Trigger Button to open Modal -/->
<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={() => modalState.update(state => ({ ...state, signup: true }))}>
    Sign Up
</button>

<!-/- Modal -/->
<Modal>
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <!-/- Modal Title -/->
        <h2 class="text-xl font-semibold pt-4">Sign Up</h2>
        <!-/- Input container -/->
        <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
            <div class="flex flex-col space-y-4 relative">
                <!-/- Email Input -/->
                <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                    bind:value={email}
                    required
                />
                <!-/- Password Input -/->
                <input
                    type="password"
                    placeholder="Password"
                    class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    bind:value={password}
                    required
                />
                <!-/- Error Message -/->
                {#if errorMessage}
                    <p class="text-red-500 text-xs">{errorMessage}</p>
                {/if}
                <!-/- Success Message -/->
                {#if successMessage}
                    <p class="text-green-500 text-xs">{successMessage}</p>
                {/if}
                <!-/- Sign Up Button -/->
                <form on:submit|preventDefault={handleSignUp}>
                    <!-/- form inputs -/->
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        <!-/- Close Modal Button -/->
        <button class="mt-4 text-sm text-gray-600" on:click={closeModal}>Close</button>
    </div>
</Modal> -->

<script>
    import { modalState } from '../../store.js'; // Import modal visibility control
    import Modal from './Modal.svelte'; // Modal component
    import { authHandlers } from '../stores/authStores.js'; // Import auth logic

    let email = '';
    let password = '';
    let confirmPassword = '';
    let errorMessage = '';
    let successMessage = '';
    let register = false;

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        if (!email || !password || (register && !confirmPassword)) {
            errorMessage = "Please fill all fields correctly.";
            return;
        }

        try {
            if (register && password === confirmPassword) {
                await authHandlers.signup(email, password);
                successMessage = 'Sign-up successful!';
                errorMessage = ''; // Clear any previous error
            } else if (!register) {
                await authHandlers.login(email, password);
                successMessage = 'Logged in successfully!';
                errorMessage = ''; // Clear any previous error
            } else {
                errorMessage = "Passwords do not match.";
            }
        } catch (error) {
            errorMessage = error.message; // Set error message if sign-up/login fails
            successMessage = ''; // Clear any previous success message
        }
    };

    const closeModal = () => {
        modalState.update(state => ({ ...state, signup: false }));
    };
</script>

<!-- Modal -->
<Modal>
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <!-- Modal Title -->
        <h2 class="text-xl font-semibold pt-4">{register ? 'Register' : 'Log In'}</h2>
        <!-- Input container -->
        <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
            <div class="flex flex-col space-y-4 relative">
                <!-- Email Input -->
                <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                    bind:value={email}
                    required
                />
                <!-- Password Input -->
                <input
                    type="password"
                    placeholder="Password"
                    class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    bind:value={password}
                    required
                />
                {#if register}
                    <!-- Confirm Password Input -->
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        bind:value={confirmPassword}
                        required
                    />
                {/if}
                <!-- Error Message -->
                {#if errorMessage}
                    <p class="text-red-500 text-xs">{errorMessage}</p>
                {/if}
                <!-- Success Message -->
                {#if successMessage}
                    <p class="text-green-500 text-xs">{successMessage}</p>
                {/if}
                <!-- Sign Up Button -->
                <form on:submit|preventDefault={handleSubmit}>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {register ? 'Sign Up' : 'Log In'}
                    </button>
                </form>
            </div>
        </div>
        <!-- Switch Between Sign Up and Log In -->
        <div on:click={() => register = !register}>
            {register ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
        </div>
        <!-- Close Modal Button -->
        <button class="mt-4 text-sm text-gray-600" on:click={closeModal}>Close</button>
    </div>
</Modal>
