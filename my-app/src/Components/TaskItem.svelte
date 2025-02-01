<script>
    import {createEventDispatcher} from 'svelte'
    export let item
    const dispatch = createEventDispatcher()
    const handleDelete = (itemId) => {
        dispatch('delete-task', itemId)
    }
</script>

<div class="relative bg-white dark:bg-gray-800 border-2xl px-8 pt-[20px]">
    <div class = "num-display">
        {item.rating}
    </div>
    <div class="absolute mt-3 mr-5 cursor-pointer bg-none border-none">X</div>
    <button class="close" on:click={() =>handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
</div>
