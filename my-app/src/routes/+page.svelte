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
</main>
   -->

   <script>
    import TaskList from '../Components/TaskList.svelte'
    let background = 'Blue';
    import TaskStats from '../Components/TaskStats.svelte'
    let task = [
    {
        id: 1,
@@ -16,8 +15,17 @@
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

<main>
    <TaskList {task} />
<main class="min-h-screen bg-red-700">
    <TaskStats {count} {finished}/>
    <TaskList {task} on:delete-task={deleteTask} />
</main>