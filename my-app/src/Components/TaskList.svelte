<script>
   import {scale} from 'svelte/transition'
   export let task = []
    import TaskItem from './TaskItem.svelte'

</script>

{#each task as fb (fb.id)}
    <div in:scale out:scale>
        <TaskItem item={fb} on:delete-task />
    </div>
   
{/each}