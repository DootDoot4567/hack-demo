<script>
    import { modalState } from '../../store.js';
    import Modal from './Modal.svelte';
</script>

<button class="text-gray-500 md:px-4 md:py-2 hover:text-lime-600 text-xl font-semibold" on:click={() => modalState.update(state => ({ ...state, login: true }))}>
    Log in
</button>

<Modal modalKey="login">
    <!-- Flexbox container with rounded corners -->
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <!-- Modal Title-->
        <h2 class="flex justify-center items-center text-green-600  font-mono- text-2xl italic font-bold ">
            <img src="Logo_hack@davsn.png" alt="Website Logo" width="100" height="100" />
            Sprout
        </h2>

        <!-- Input container -->
        <div class="w-[75%] max-w-sm min-w-[200px] pt-4">
            <div class="flex flex-col space-y-4 relative">
                <input type="email" placeholder="Email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100" />
                <input type="password" class="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </div>
        </div>
    </div>
</Modal>
