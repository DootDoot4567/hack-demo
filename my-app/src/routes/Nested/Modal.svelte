<script>
    import { modalState } from '../../store.js';
    export let modalKey; // The key to control this specific modal instance
    let dialog;

    // Reactive statement to show the modal
    $: if (dialog && $modalState[modalKey]) {
      dialog.showModal(); // Show the modal when its corresponding state is true
    }

    const closeModal = () => {
      modalState.update(state => ({ ...state, [modalKey]: false })); // Close this specific modal
      dialog.close(); // Close the <dialog> element itself
    };
</script>

<dialog
    class="bg-white backdrop:bg-black backdrop:bg-opacity-60 p-0 m-0 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    bind:this={dialog}
    on:close={closeModal}>
    
    <div>
        <slot name="header" />
        <slot />

        <!-- Close Button with SVG -->
        <button
            class="flex ms-auto inline-flex justify-center items-center absolute right-3 top-2"
            autofocus
            on:click={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>              
        </button>
    </div>
</dialog>
