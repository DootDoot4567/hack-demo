<script>
  import "../app.css";
  import {onMount} from 'svelte'
  import {auth} from '../lib/firebase/firebase.client'
  import {authStore} from '../stores/authStores'

  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      authStore.update((curr) => {
        return {...curr, isLoading: false, currentUser: user}
      })
    })
  })
</script>

<div class="m-0 p-0">
  <slot />
</div>
