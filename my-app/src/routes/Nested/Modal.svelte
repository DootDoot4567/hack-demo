<script>
    import { showModal } from '../../store.js';
    let dialog;

    // Reactive statement to show the modal
    $: if (dialog && $showModal) {
      dialog.showModal(); // Show the modal when $showModal is true
    }

    const closeModal = () => {
      showModal.set(false); // Close the modal by setting the store to false
      dialog.close(); // Close the <dialog> element itself
    };
</script>

<dialog bind:this={dialog} on:close={closeModal}>
    <div>
        <slot name="header" />
        <hr />
        <slot />
        <hr />
        
        <!-- Close Button with SVG -->
        <button 
            class="flex ms-auto inline-flex justify-center items-center absolute right-3 top-2" 
            autofocus 
            on:click={closeModal}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>			  
        </button>
    </div>
</dialog>
