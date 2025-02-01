<script>
    import {createEventDispatcher} from 'svelte'
    import Card from './Card.svelte'
    export let item
    const dispatch = createEventDispatcher()
    const handleDelete = (itemId) => {
        dispatch('delete-task', itemId)
    }
</script>

<Card>
    <button class="absolute right-3 mt-3 mr-5 cursor-pointer bg-none border-none" on:click={() =>handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
    <h3> 
        {item.time}
    </h3>
</Card>
