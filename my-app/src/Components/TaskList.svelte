<script>
    export let task = []
    import TaskItem from './TaskItem.svelte'

    console.log(task)
</script>

{#each task as fb (fb.id)}
    <TaskItem item={fb} on:delete-task />
{/each}