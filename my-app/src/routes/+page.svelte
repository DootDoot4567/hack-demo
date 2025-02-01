<!-- <h1>Welcome to your library project.</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> 

<script>
    let title = "Welcome to Our Site!";
    let subtitle = "We build amazing web experiences with Svelte.";
  </script>
  
  <main class="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex flex-col items-center justify-center text-white">
    <h1 class="text-5xl font-bold mb-4">{title}</h1>
    <p class="text-xl mb-8">{subtitle}</p>
    <button class="bg-white text-purple-600 font-semibold py-2 px-6 rounded-2xl shadow-lg hover:bg-purple-100 transition duration-300">
      Get Started
    </button>
  </main>
  
  <style>
    main {
      font-family: 'Arial', sans-serif;
    }
  </style> -->

  <!-- <script>
  let title = "Welcome to Our Site!";
  let subtitle = "We are glad you're here.";
</script>

<main class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
  <header>
    <h1 class="text-4xl font-bold mb-4" tabindex="0">{title}</h1>
    <p class="text-xl mb-8" tabindex="0">{subtitle}</p>
  </header>

  <nav aria-label="Main navigation">
    <a href="#about" class="px-6 py-3 bg-white text-purple-600 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 hover:bg-purple-100 transition" role="button">Learn More</a>
  </nav>

  <footer class="mt-10" tabindex="0">
    <p>&copy; 2025 Our Company</p>
  </footer>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
  }
  h1, p, footer p {
    text-align: center;
  }
  a {
    cursor: pointer;
  }
</style> -->

<script>
    let title = "Welcome to Our Site!";
    let subtitle = "We are glad you're here.";
  </script>
  
  <main class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
    <h1 class="text-5xl font-bold mb-4" tabindex="0">{title}</h1>
    <p class="text-xl mb-8" tabindex="0">{subtitle}</p>
    <button class="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" aria-label="Learn more about us">
      Learn More
    </button>
  </main>
  
  <!-- <script>
    let title = "Welcome to Our Site!";
    let subtitle = "We are glad you're here.";
  </script>
  
  <main class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-800" tabindex="0">{title}</h1>
      <p class="text-lg text-gray-600 mt-2" tabindex="0">{subtitle}</p>
    </header>
  
    <nav class="mb-8">
      <ul class="flex space-x-4">
        <li><a href="#about" class="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">About</a></li>
        <li><a href="#services" class="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Services</a></li>
        <li><a href="#contact" class="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a></li>
      </ul>
    </nav>
  
    <section id="about" class="mb-8" aria-labelledby="about-heading">
      <h2 id="about-heading" class="text-2xl font-semibold text-gray-800" tabindex="0">About Us</h2>
      <p class="text-gray-600 mt-2" tabindex="0">We provide top-notch solutions tailored to your needs.</p>
    </section>
  
    <section id="services" class="mb-8" aria-labelledby="services-heading">
      <h2 id="services-heading" class="text-2xl font-semibold text-gray-800" tabindex="0">Our Services</h2>
      <p class="text-gray-600 mt-2" tabindex="0">Discover a variety of services designed to help you succeed.</p>
    </section>
  
    <section id="contact" class="mb-8" aria-labelledby="contact-heading">
      <h2 id="contact-heading" class="text-2xl font-semibold text-gray-800" tabindex="0">Contact Us</h2>
      <form class="mt-4" aria-label="Contact form">
        <label for="name" class="block text-gray-700">Name</label>
        <input id="name" type="text" class="w-full p-2 border border-gray-300 rounded mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-required="true">
  
        <label for="email" class="block text-gray-700">Email</label>
        <input id="email" type="email" class="w-full p-2 border border-gray-300 rounded mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-required="true">
  
        <label for="message" class="block text-gray-700">Message</label>
        <textarea id="message" class="w-full p-2 border border-gray-300 rounded mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-required="true"></textarea>
  
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-700">Send</button>
      </form>
    </section>
  </main>
  
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
  </style>
   -->