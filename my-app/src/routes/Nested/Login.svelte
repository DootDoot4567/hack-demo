<script>
    import { showModal } from '../../store.js';
    import Modal from './Modal.svelte';
</script>

<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={() => $showModal = true}>
    Log in
</button>


<Modal>
    <!-- Flexbox container with rounded corners -->
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <!-- Modal Title -->
        <h2 class="text-xl font-semibold pt-4">Log In</h2>

        <!-- Input container -->
        <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
            <div class=" flex flex-col space-y-4 relative">
                <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                />
                <div>
                    <input type="password" 
                    class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                    placeholder="Password" 
                    />
                    <p class="flex items-start mt-2 text-xs text-slate-400 hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1.5">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                        Use at least 8 characters, one uppercase, one lowercase, and one number.
                    </p> 
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>   
            </div>
        </div>
    </div>
</Modal>
