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
    <button class="close" on:click={() =>handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
    <h3> 
        {item.time}
    </h3>
</Card>

<style>
    .close{
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }
</style>