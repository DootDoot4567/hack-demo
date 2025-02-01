<script>
    export let style = 'primary'
    export let type = 'button'
    export let disabled = false
</script>
  
<button text-white border-0 px-5 py-2 bg-blue-500 rounded cursor-pointer 
hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed>
  <slot></slot>
</button>
  