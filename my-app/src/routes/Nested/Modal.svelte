<script>
    import { showModal } from './store.js';
    let dialog;
  
    // Reactive statement to show the modal
    $: if (dialog && $showModal) {
      dialog.showModal && dialog.showModal(); // Safeguard check to call showModal only if the function exists
    }
  
    const closeModal = () => {
      showModal.set(false); // Close the modal by setting the store to false
    };
  </script>
  
  <dialog bind:this={dialog} on:close={closeModal}>
    <div>
      <slot name="header" />
      <hr />
      <slot />
      <hr />
      <button on:click={closeModal}>Close</button>
    </div>
  </dialog>
  