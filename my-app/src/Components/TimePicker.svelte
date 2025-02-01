<script>
    export let time = ""

</script>

<div class="input-group">
    <input type="time" step= "60" bind:value={time} placeholder="Time">
</div>
<style>
    .input-group {
    display: flex;

    border: 1px solid #3d61c4;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 8px;
    width: 125px; 
  }

  input {
    border: none;
    outline: none;
    width: 100%; 
    padding: 0; 
    box-sizing: border-box; 
  }
</style>
