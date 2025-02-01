<script>
    import {v4 as uuidv4} from 'uuid';
    import {createEventDispatcher} from 'svelte'
     
    const dispatch = createEventDispatcher()
    let text = '';
    let min = 1;
    let message;

    const handleInput = () => {
        if(text.trim().length <= min){
            message = `Text must be at least ${min+2} Characters`;
        } else {
            message = null;
        }
    };

    const handleSubmit = () => {
        if(text.trim().length > min){
            const newTask = {
                id: uuidv4(),
                text
            };
            text = '';
        }
    };
</script>

<div class="relative bg-white dark:bg-gray-800 border-2xl px-8 pt-[20px]">
    <header class="max-[400px]: margin-auto ">
        <h2 class="text-xl font-semibold text-center">What tasks are today?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-row border-zinc-300 border-1 px-2 rounded-lg mt-[15px]">
            <input type="text" on:input={handleInput} bind:value={text} placeholder="Let's be productive">
            <button 
                type="submit" 
                class="text-white border-0 rounded-md px-5 py-2 bg-blue-500 text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
                Send
            </button>
        </div>
        {#if message}
            <div class="pt-[10px] text-center bg-violet-900">
                {message}
            </div>
        {/if}
    </form>
</div>
