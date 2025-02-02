<script>
  export let type = 'button'
</script>

<button {type} class= "text-white border-0 px-5 py-2 bg-blue-500 rounded cursor-pointer button:hover: scale-[.98] opacity-90
hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
  <slot></slot>
</button>


