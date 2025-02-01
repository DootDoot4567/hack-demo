<script>
   import Card from './Card.svelte'; 
   import Button from './Button.svelte'; 
    import {v4 as uuidv4} from 'uuid'
    import {createEventDispatcher} from 'svelte'
    
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
          text
        }

        dispatch('add-task', newTask)

        text = ''
      }
    }
</script>

<Card>
  <header>
    <h2>What tasks are today?</h2>
  </header>
  <form on:submit|preventDefault = {handleSubmit}>
  <div class="input-group">
    <input type="text" on:input={handleInput} bind:value = {text} placeholder="Lets be productive">
    <Button disabled={btnDisabled} type="submit">Send</Button>
  </div>
  {#if message}
    <div class= "message">
      {message}
    </div>
  {/if}
</Card>


  
  <style>
    header {
      max-width: 400px;
      margin: auto;
    }
  
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
  
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
  
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
  
    input:focus {
      outline: none;
    }
  
    .message{
      padding-top: 10px;
      text-align: center;
      color: rebeccapurple;
    }
  </style>