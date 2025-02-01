<script>
    export let task = []
    console.log(task)
</script>
{#each task as fb (fb.id)}
    <h3>{fb.text}</h3>
{/each}