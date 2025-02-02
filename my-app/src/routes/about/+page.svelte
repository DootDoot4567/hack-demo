<script>
    let teamMembers = [
      {
        name: "Haruta Otaki",
        role: "Developer",
        bio: "Computer Science Major at Davidson College.",
        image: "/HarutaPic.jpeg",
      },
      {
        name: "James Durcan",
        role: "Developer",
        bio: "Computer Science Major at Davidson College.",
        image: "/durcan.jpg",
      },
      {
        name: "Brandon Rivera",
        role: "Developer",
        bio: "Computer Science Major at Davidson College.",
        image: "/BrandonPic.png",
      },
      // Add more team members as necessary
    ];
  </script>
  
  <div class="max-w-4xl mx-auto p-8 font-sans">
  
    <!-- Hero Section -->
    <div class="text-center py-8">
      <h3 class="text-3xl font-bold text-gray-800 py-4"> <span class="font-bold text-green-500"> Our mission </span> is to help people break down their busy days and draw attention to their small wins.</h3>
      <div class="flex mt-4">
            <img src="/user.jpg" alt="Sprout App" class="w-1/3 rounded-lg"/>
        <div>
            
            <h6 class="text-3xl font-bold text-gray-800 mt-12">About <span class="font-bold text-green-500">Sprout</span></h6> <!-- Increased margin-top -->
            <div class="ml-8 text-left max-w-xl">
                <p class="mt-4 text-lg text-gray-600">Sprout organizes everything from your daily tasks to your long-term goals, while tracking your progress every day.
                     Our upcoming AI feature will offer personalized habit recommendations based on your progress and desires, pushing as well as supporting you at every step of your journey.</p>
             </div>
        </div>
            
      </div>
    </div>
  
    <!-- Mission and Vision -->
    <section class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-800 mt-8">Our Vision</h2>
      <div class="flex justify-center items-center mt-4">
        <div class="text-center p-4">
          <img src="/distraction.png" alt="Distraction" class="w-16 h-16 mx-auto"/>
          <p class="text-sm text-gray-600">Distraction</p>
        </div>
        <div class="text-center px-8">
          <img src="/arrow.png" alt="Arrow" class="w-16 h-16 mx-auto"/>
          <p class="text-sm text-gray-600">Arrow</p>
        </div>
        <div class="text-center p-4">
          <img src="/companion.png" alt="Companion" class="w-16 h-16 mx-auto"/>
          <p class="text-sm text-gray-600">Companion</p>
        </div>
      </div>
      <p class="mt-2 text-lg text-gray-600">Technology is gradually consuming modern society, displaying itself as a 'digital distraction.' Sprout aims to redefine technology as a tool that enhances our lives, customizing itself to fit our lifestyle as a catalyst for our personal wellness and growth.</p>
    </section>
  
    <!-- Team Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-800">Meet the Team</h2>
      <div class="mt-6 flex justify-between items-center"> <!-- Flex adjusted to prevent wrapping -->
        {#each teamMembers as member}
          <div class="max-w-xs text-center border-2 border-gray-300 rounded-lg p-4 mx-4">
            <img src={member.image} alt={member.name} class="w-36 h-36 rounded-lg mx-auto"/>
            <h3 class="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
            <p class="text-lg text-gray-600">{member.role}</p>
            <p class="text-base text-gray-500 mt-2">{member.bio}</p>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Call to Action -->
    <section class="mt-12 text-center">
      <h3 class="text-lg text-gray-600">Live life better with us:</h3>
      <button on:click={() => window.location.href = '/signup'} class="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300">
        Get Started
      </button>
    </section>
    
  </div>
  
