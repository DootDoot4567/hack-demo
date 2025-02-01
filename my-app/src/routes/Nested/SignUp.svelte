<script>
    import { showModal } from '../../store.js'; // Import modal visibility control
    import Modal from './Modal.svelte'; // Modal component

    let email = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';

    const handleSubmit = async (event) => {
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

    const openModal = () => {
        $showModal = true;
    };

    const closeModal = () => {
        $showModal = false;
    };
</script>

<!-- Trigger Button to open Modal -->
<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={openModal}>
    Sign Up
</button>

<!-- Modal -->
<Modal>
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <!-- Modal Title -->
        <h2 class="text-xl font-semibold pt-4">Sign Up</h2>

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

                <!-- Error Message -->
                {#if errorMessage}
                    <p class="text-red-500 text-xs">{errorMessage}</p>
                {/if}

                <!-- Success Message -->
                {#if successMessage}
                    <p class="text-green-500 text-xs">{successMessage}</p>
                {/if}

                <!-- Sign Up Button -->
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    on:click={handleSubmit}
                >
                    Sign Up
                </button>
            </div>
        </div>

        <!-- Close Modal Button -->
        <button class="mt-4 text-sm text-gray-600" on:click={closeModal}>Close</button>
    </div>
</Modal>
