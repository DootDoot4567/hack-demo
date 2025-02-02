<script>
    import {createEventDispatcher} from 'svelte'
    import Card from './Card.svelte'
    export let item
    const dispatch = createEventDispatcher()
    const handleDelete = (itemId) => {
        dispatch('delete-task', itemId)
    }
</script>

<Card class="flex">

    <button class="absolute right-3 mr-5 cursor-pointer bg-none border-none" on:click={() =>handleDelete(item.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
    <p class="text-display">
        {item.text}
    </p>
    <h3> 
        {item.time}
    </h3>
</Card>
