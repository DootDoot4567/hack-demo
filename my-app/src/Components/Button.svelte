<script>
  export let type = 'button'
</script>

<button {type} class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-lg focus:shadow">
	<slot></slot>
</button>



