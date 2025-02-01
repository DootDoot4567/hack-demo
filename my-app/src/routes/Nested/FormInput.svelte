<script>
    import { showModal } from '../../store.js';
    import Modal from './Modal.svelte';
</script>

<button on:click={() => $showModal = true}>
    Open Modal
</button>


<Modal>
    <!-- Flexbox container with rounded corners -->
    <div class="flex flex-col items-center justify-center h-64 w-64 bg-white rounded-lg shadow-lg space-y-4">
        <!-- Modal Title -->
        <h2 class="text-xl font-semibold">Log In</h2>

        <!-- Input container -->
        <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
                <input
                    type="email"
                    placeholder="Type Here..."
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                />
                
            </div>
        </div>
    </div>
</Modal>
