<script>
  export let type = 'button'
  export let disabled = false
</script>

<button {type} {disabled} class= "text-white border-0 px-5 py-2 bg-blue-500 rounded cursor-pointer button:disabled: bg-gray-200 border-gray-800 cursor-auto
button:disabled:hover: scale-[1] opacity-[1] button:hover: scale-[.98] opacity-90
hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
  <slot></slot>
</button>


