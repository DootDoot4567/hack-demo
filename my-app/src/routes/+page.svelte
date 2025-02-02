<script>
    let subtitle = "Grow your productivity one step at a time";
</script>
  
<main class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white">
    <p class="text-xl mb-8" tabindex="0">{subtitle}</p>
    
    <!-- Add the image with floating effect -->
    <img src="/Logo_hack@davsn.png" alt="Hack@Davidson Logo" class="w-24 h-24 mb-8 animate-floating" />

    <a href="/about">
        <button class="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transform transition-all duration-200 ease-in-out hover:scale-110 hover:bg-green-700 hover:text-white" aria-label="Learn more about us">
			Begin Your Journey with Sprout
        </button>
    </a>
</main>

<style>
    /* Define the floating animation */
    @keyframes floating {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
        100% {
            transform: translateY(0);
        }
    }

    /* Apply the floating animation */
    .animate-floating {
        animation: floating 3s ease-in-out infinite;
    }

    /* Grassy background with texture */
    body {
        background: url('https://www.publicdomainpictures.net/pictures/320000/velka/green-grass-texture-1560984536Mhj.jpg') center center no-repeat;
        background-size: cover;
    }
</style>
