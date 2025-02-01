<script>
    import { showModal } from './store.js';
    import Modal from './Modal.svelte';
  </script>
  
  <button on:click={() => $showModal = true}>
    Open Modal
  </button>
  
  <Modal />
  