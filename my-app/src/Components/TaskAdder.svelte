<script>
    import Card from './Card.svelte'; 
    import Button from './Button.svelte'; 
     import {v4 as uuidv4} from 'uuid'
     import {createEventDispatcher} from 'svelte'
     import TimePicker from './TimePicker.svelte'
     let selectedTime = ""
     const dispatch = createEventDispatcher()
     let text = ''
     let btnDisabled = true
     let min = 1
     let message
     const handleInput = () => {
       if(text.trim().length <= min){
         message = `Text must be at least ${min+2} Characters`
       }
       else{
         message = null
         btnDisabled = false
       }
     }
     const handleSubmit = () => {
       if(text.trim().length > min){
         const newTask = {
           id: uuidv4(),
           text,
           time: selectedTime
         }
         dispatch('add-task', newTask)
         text = '',
         selectedTime = ""
       }
     }
 </script>
 <Card>

   <header class="max-[400px]: margin-auto ">
    	<h2 class="text-xl font-semibold text-center pb-6">Add Tasks:</h2>
   </header>

   <form on:submit|preventDefault = {handleSubmit}>
	<div class="flex flex-col items-center justify-center text-black rounded-md bg-black-200 text-base cursor-pointer">
		<div class="w-full flex flex-row justify-between py-8 border-1 border-black rounded-sm">
			<div class="max-w-sm min-w-[200px]">
				<input class="w-auto bg-rose-50 placeholder:text-gray-500 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-lg focus:shadow" on:input={handleInput} bind:value = {text} placeholder="Task Name">
			</div>
			<TimePicker bind:time={selectedTime} on:update-time={(e) => selectedTime = e.detail} />
		</div>
		<Button disabled={btnDisabled} type="submit">Submit</Button>
   </div>

   {#if message}
		<div class= "py-2 rounded-lg justify-center text-sm font-semibold text-center mt-2 bg-violet-100">
		{message}
		</div>
   {/if}
 </Card>
