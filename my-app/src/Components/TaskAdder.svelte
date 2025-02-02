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
     <h2 class="text-xl font-semibold text-center">Your tasks:</h2>
   </header>
   <form on:submit|preventDefault = {handleSubmit}>
   <div class="text-black border-0 rounded-md px-5 py-2 bg-blue-500 text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-700">
     <input type="text" on:input={handleInput} bind:value = {text} placeholder="Lets be productive">
     <Button disabled={btnDisabled} type="submit">Submit</Button>
   </div>
   <TimePicker bind:time={selectedTime} />
   {#if message}
     <div class= "pt-[10px] text-center bg-violet-900">
       {message}
     </div>
   {/if}
 </Card>
