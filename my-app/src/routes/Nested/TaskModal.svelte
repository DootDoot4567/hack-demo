<script>
    import { modalState } from '../../store.js';
    import Modal from './Modal.svelte';
    import Task from "./Task.svelte";
</script>

<button class="text-gray-500 md:px-4 md:py-2 hover:text-indigo-600 text-xl font-semibold" on:click={() => modalState.update(state => ({ ...state, task: true }))}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
</button>


<Modal modalKey="task">
    <div class="flex flex-col justify-center items-center justify-center w-[660px] h-[530px] bg-transparent rounded-lg border-transparent">
        <h2 class="text-xl font-semibold py-4">Task Manager</h2>
        <!-- Task content goes here -->
        <Task/> 
    </div>
</Modal>

