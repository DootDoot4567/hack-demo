<script>
    import TaskList from '../Components/TaskList.svelte'
    let background = 'Blue';

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
</script>

<main>
    <TaskList {task} />
</main>