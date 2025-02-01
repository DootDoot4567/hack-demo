<!-- <script>
    import Task from "./Nested/Task.svelte";

</script> -->
<!-- <script>
    let title = "Welcome to Our Site!";
    let subtitle = "We are glad you're here.";
</script>
  
<main class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600 text-white">
    <h1 class="text-5xl font-bold mb-4" tabindex="0">{title}</h1>
    <p class="text-xl mb-8" tabindex="0">{subtitle}</p>
	<a href="/home">
		<button class="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" aria-label="Learn more about us">
		Learn More
		</button>
	</a>
</main> -->
  

<!-- NPM install UUID -->
<!-- <script>
    import TaskList from '../Components/TaskList.svelte'
    import TaskStats from '../Components/TaskStats.svelte'
    import TaskAdder from '../Components/TaskAdder.svelte'
  
    
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

<main class="min-h-screen bg-red-700">
    <TaskAdder on:add-task={addTask} />
    <TaskStats {count} {finished}/>
    <TaskList {task} on:delete-task={deleteTask} />
</main> -->

<script>
    import Task from "./Nested/Task.svelte";
</script>

<Task/>
