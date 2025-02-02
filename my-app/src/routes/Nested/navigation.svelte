<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Auth from "./Auth.svelte"
    import {auth} from '../../lib/firebase/firebase.client.js'
    import { authHandlers, authStore } from '../stores/authStores.js';

	let email;
	authStore.subscribe((curr) => {
		console.log('CURR', curr);
		email = curr?.currentUser?.email;
	});

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };

    onMount(() => {
        if (typeof document !== 'undefined') {
            // Select all dropdown toggle buttons
            const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

            dropdownToggles.forEach((toggle) => {
                toggle.addEventListener("click", () => {
                    // Find the next sibling element which is the dropdown menu
                    const dropdownMenu = toggle.nextElementSibling;

                    // Toggle the 'hidden' class to show or hide the dropdown menu
                    if (dropdownMenu.classList.contains("hidden")) {
                        // Hide any open dropdown menus before showing the new one
                        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                            menu.classList.add("hidden");
                        });

                        dropdownMenu.classList.remove("hidden");
                    } else {
                        dropdownMenu.classList.add("hidden");
                    }
                });
            });

            // Optional: Clicking outside of an open dropdown menu closes it
            window.addEventListener("click", (event) => {
                if (!event.target.matches(".dropdown-toggle")) {
                    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                        if (!menu.contains(event.target)) {
                            menu.classList.add("hidden");
                        }
                    });
                }
            });

            // Mobile menu toggle
            const mobileMenuButton = document.querySelector(".mobile-menu-button");
            const mobileMenu = document.querySelector(".navigation-menu");

            mobileMenuButton.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
                document.body.classList.toggle("menu-open", !mobileMenu.classList.contains("hidden"));
            });
        }
        authStore.subscribe((curr) => {
		console.log('CURR', curr);
		email = curr?.currentUser?.email;
	    });
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

<nav data-sveltekit-reload class="bg-gray-100 dark:bg-gray-100 shadow shadow-gray-300 w-full md:px-auto">
    <div class="flex flex-rpw h-20 items-center justify-between px-4">
        <a href="/" class="flex left-0" style="top: 0;">
            <img src="/Logo_hack@davsn.png" alt="logo" class="w-16 h-auto object-cover">
        </a>
    <div class="flex w-full items-center">

    <div class="text-gray-500 w-full md:w-auto md:flex-1">
        <ul class="flex flex-row gap-8 font-semibold justify-center md:justify-center w-full py-4">
            <li class="{$page.url.pathname == '/about' ? 'text-lime-500' : ''} md:px-4 md:py-2 hover:text-lime-600 text-xl">
                <a href="/about">About Us</a>
            </li>
            {#if !$authStore.currentUser}
                <li>
                    <Auth />
                </li>
            {:else}
                <li class="{$page.url.pathname == '/home' ? 'text-lime-500': ''} md:px-4 md:py-2 hover:text-lime-600 text-xl">
                <a href="/home">Home</a>
                </li>
                <!-- <li class="{$page.url.pathname == '/milestone' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                <a href="/milestone">milestone</a>
                </li> -->
                <li class="{$page.url.pathname == '/milestone' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl">
                    <a href="/milestone">Milestone</a>
                </li>
                <li class="relative group pt-[7px]">
                    <!-- SVG Icon that will trigger hover -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 hover:text-gray-600 group">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>
                    
                    <!-- Hidden text that will appear on hover -->
                    <span class="absolute left-0 top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-400 text-black px-3 py-2 rounded-md">
                        {email}
                    </span>
                </li>
                <li class="absolute right-0 md:px-4 md:py-2 hover:text-lime-500 text-xl">
                    <button class="focus:outline-none" on:click={authHandlers.logout}>Logout</button>
                </li>
            {/if}
        </ul>
</nav>

<!-- <div class="sm:h-16 h-20 mx-auto sm:px-4 container flex items-center justify-between flex-wrap sm:flex-nowrap sm:hidden block">
    <div class="flex justify-center w-full">
        <a href="/" class="" style="top: 0;">
            <img src="Logo.png" alt="Logo" class="w-64 h-auto object-cover" style="margin-top: -20px;"> 
        </a>
    </div>
    <div class="sm:hidden flex items-center absolute left-5">
        <button class="mobile-menu-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>bars-3-bottom-left</title>
                <g fill="none">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        </button>
    </div> -->

    <!-- <div class="hidden sm:flex sm:flex-row flex-col items-center justify-start sm:space-x-1 navigation-menu pb-3 sm:pb-0 absolute right-0 top-16 bg-gray-100 w-full sm:w-auto z-40 p-5">
    <li class="{$page.url.pathname == '/home' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl block">
                    <a href="/home">home</a>
                </li>
                <li class="{$page.url.pathname == '/about' ? 'text-indigo-500' : ''} md:px-4 md:py-2 hover:text-indigo-600 text-xl block">
                    <a href="/about">about</a>
                </li>
    </div> -->
<!-- </div> -->
