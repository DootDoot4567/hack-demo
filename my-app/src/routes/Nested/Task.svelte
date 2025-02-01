<script>
    import {scale} from 'svelte/transition'
    import TaskList from '../../Components/TaskList.svelte'
    import TaskStats from '../../Components/TaskStats.svelte'
    import TaskAdder from '../../Components/TaskAdder.svelte'
    import TaskItem from '../../Components/TaskItem.svelte';
    
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


{#each task as fb (fb.id)}
    <div in:scale out:scale>
        <TaskItem item={fb} on:delete-task />
    </div>
{/each}

<main class="min-h-screen bg-red-700">
    <TaskAdder on:add-task={addTask} />
    <TaskStats {count} {finished}/>
    <TaskList {task} on:delete-task={deleteTask} />
</main>