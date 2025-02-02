<!-- NPM install UUID -->
<script>
    import TaskList from '../../Components/TaskList.svelte'
    import TaskStats from '../../Components/TaskStats.svelte'
    import TaskAdder from '../../Components/TaskAdder.svelte'
  
    
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

<main class="flex flex-col w-[70%] h-[70%] bg-white">
    <div class="overflow: auto">
        <TaskAdder on:add-task={addTask} />
        <TaskStats {count} {finished}/>
        <TaskList {task} on:delete-task={deleteTask} />
    </div>
    
</main> 