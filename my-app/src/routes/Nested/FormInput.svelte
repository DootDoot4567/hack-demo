<script>
    import { showModal } from '../../store.js';
    import Modal from './Modal.svelte';
</script>

<button on:click={() => $showModal = true}>
    Open Modal
</button>

<Modal class="h-32 w-32 bg-red-500 dark:bg-indigo-500">
    <h2 slot="header">Title</h2>
    <div>
        <p>Your custom content can go here.</p>
    </div>
</Modal>
