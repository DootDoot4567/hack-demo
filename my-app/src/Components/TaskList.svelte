<script>
    export let task = []
    import TaskItem from './TaskItem.svelte'
    console.log(task)
</script>

{#each task as fb (fb.id)}
    <h3>{fb.text}</h3>
    <TaskItem item={fb} on:delete-task />
{/each}