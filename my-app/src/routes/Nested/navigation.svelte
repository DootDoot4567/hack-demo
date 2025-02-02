<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Auth from "./Auth.svelte"

    let isOpen = false;
    let isLogin = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };
    const toggleLogin = () => {
        isLogin = !isLogin;
    };

    onMount(() => {

    });

    $: if (isOpen) {
        if (typeof document !== 'undefined') {
            document.body.classList.add('menu-open');
        }
    } else {
        if (typeof document !== 'undefined') {
            document.body.classList.remove('menu-open');
        }
    }
</script>

<style>
    body.menu-open {
        background-color: rgba(0, 0, 0, 0.5); /* Adjust the background color as needed */
    }
</style>

<nav data-sveltekit-reload class="bg-gray-100 dark:bg-gray-100 shadow shadow-gray-300 w-full px-8 md:px-auto">
    <div class="md:h-16 h-20 mx-auto md:px-4 py-6 container flex items-center justify-between flex-wrap md:flex-nowrap sm:block hidden">
        <a href="/" class="absolute left-0" style="top: 0;">
            <img src="/HM.png" alt="Blue Bird" class="w-32 h-32 object-cover" style="margin-top: -20px;"> 
        </a>
        <div class="flex w-full justify-between items-center">
            <div class="text-gray-500 w-full md:w-auto md:flex-1">
                <ul class="flex flex-row gap-8 font-semibold justify-center md:justify-end w-full">
                    <li class="{$page.url.pathname == '/about' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <a href="/about">About</a>
                    </li>
                    <li class="{$page.url.pathname == '/research' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <a href="/research">Research</a>
                    </li>
                    <li class="{$page.url.pathname == '/single-run' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <a href="/single-run">Single Run</a>
                    </li>
                    <li class="{$page.url.pathname == '/multi-run' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <a href="/multi-run">Multi Run</a>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <button on:click={toggleLogin} class="focus:outline-none">
                            Log In
                        </button>
                    </li>
                    <li class="md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                        <button on:click={toggleLogin} class="focus:outline-none">
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="sm:h-16 h-20 mx-auto sm:px-4 container flex items-center justify-between flex-wrap sm:flex-nowrap sm:hidden block">
        <div class="flex justify-center w-full">
            <a href="/" class="" style="top: 0;">
                <img src="/HM.png" alt="Blue Bird" class="w-32 h-32 object-cover" style="margin-top: -20px;"> 
            </a>
        </div>
    </div>
</nav>

{#if isLogin}
    <Auth />
{/if}