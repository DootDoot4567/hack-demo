<script>
    import TaskList from '../Components/TaskList.svelte'
    import TaskStats from '../Components/TaskStats.svelte'
    let task = [
    {
        id: 1,
        text: 'Do the dishes',
    },
    {
        id: 2,
        text: 'Go to sleep',
    },
    {
        id: 3,
        text: 'Shower',
    }
]

$: count = task.length
$: finished = 0
const deleteTask = (e) => {
    const itemId = e.detail
    task = task.filter((item => item.id != itemId))
    finished++
}
</script>

<main class="min-h-screen bg-red-700">
    <TaskStats {count} {finished}/>
    <TaskList {task} on:delete-task={deleteTask} />
</main>