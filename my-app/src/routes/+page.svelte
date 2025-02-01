

<script>
    import { auth } from '../firebase.js'; // Correct path to firebase.js
    import { signInWithEmailAndPassword } from 'firebase/auth';  // Import function from 'firebase/auth'


    let backgroundColor = 'Red';
    let email = '';
    let password = '';

    const signIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
      } catch (error) {
        console.log({email});
        console.log({password});
        console.error(error);
      }
    };
</script>

<style>
    /* Center the container and textboxes */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Full viewport height */
      flex-direction: column; /* Stack the items vertically */
    }
  
    .input-group {
      margin: 10px;
    }
  
    input {
      padding: 8px;
      font-size: 16px;
      margin: 10px;
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }

  button:hover {
    background-color: #45a049;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  
  <div class="container">
    <div class="input-group">
      <input type="text" bind:value={email} placeholder="Email">
    </div>
    <div class="input-group">
      <input type="text" bind:value={password} placeholder="Password">
    </div>
    <button on:click={signIn} disabled={!(email && password)}>
      Sign In
    </button>
  </div>
  
  
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