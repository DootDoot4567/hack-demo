<!-- NPM install UUID -->

<script>
    import TaskList from '../Components/TaskList.svelte'
    import TaskStats from '../Components/TaskStats.svelte'
    import TaskAdder from '../Components/TaskAdder.svelte'
    
    let task = [

]

$: count = task.length
$: finished = 0

const addTask = (e) =>{
    const newTask = e.detail
    task = [newTask, ...task]
}
const deleteTask = (e) => {
    const itemId = e.detail
    task = task.filter((item => item.id != itemId))
    finished++
}
</script>

<main class="min-h-screen bg-red-700">
    <TaskAdder on:add-task={addTask} />
    <TaskStats {count} {finished}/>
    <TaskList {task} on:delete-task={deleteTask} />
</main>