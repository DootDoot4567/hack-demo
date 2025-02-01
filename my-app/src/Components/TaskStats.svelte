<script>
    export let count
    export let finished
</script>
<div class="task-stats">
    <h4>{count} Tasks Remaining </h4>
    <h4>Tasks Completed: {finished}</h4>
</div>
<style>
    .task-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>