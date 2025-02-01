<script>
	import { page } from '@sveltejs/kit';
	import Navbar from "./Nested/navigation.svelte";
	import '../app.css';
	let { children } = $props();
	
	
</script>

<!-- {@render children()} -->

<div class="m-0 p-0">

  	<Navbar />

	<div>
		<slot />
	</div>
  </div>