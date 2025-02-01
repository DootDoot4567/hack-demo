<script>
    import { modalState } from '../../store.js';
    import Modal from './Modal.svelte';
</script>

<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={() => modalState.update(state => ({ ...state, task: true }))}>
    Show Task Modal
</button>

<Modal modalKey="task">
    <div class="flex flex-col items-center justify-center w-[360px] h-[430px] bg-white rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold pt-4">Task Modal</h2>
        <!-- Task content goes here -->
    </div>
</Modal>
