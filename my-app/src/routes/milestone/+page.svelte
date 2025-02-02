<script>
    import { Progressbar } from 'flowbite-svelte';
    import { sineOut } from 'svelte/easing';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

    // Initial streak data for each variable
    let streakData = [
        { variable: 'sleep before midnight', days: 7 },
        { variable: 'eat 3 meals', days: 4 },
        { variable: 'workout', days: 10 },
        { variable: 'journal', days: 5 },
        { variable: 'smile', days: 18 }
    ];

    // State variables to track the visibility of each section
    let isOpen1 = false;
    let isOpen2 = false;
    let isOpen3 = false;

    // Toggle function to open/close the section
    const toggleSection = (section) => {
        if (section === 1) isOpen1 = !isOpen1;
        if (section === 2) isOpen2 = !isOpen2;
        if (section === 3) isOpen3 = !isOpen3;
    };
</script>
<div class="my-5">
  <!-- Section 1 -->
  <div class="bg-green-100 p-4 rounded-md mb-3">
    <button on:click={() => toggleSection(1)} class="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600 focus:outline-none">
      Consistency
    </button>
    <div class={`overflow-hidden transition-all duration-300 ${isOpen1 ? 'max-h-screen px-12 py-2' : 'max-h-0 p-0'}`}>
      <h3 class="text-xl font-semibold mb-2">Streak Counter:</h3>
      <ul class="space-y-2">
        {#each streakData as { variable, days }}
          <li class="flex justify-between items-center bg-green-200 text-green-800 py-2 px-3 rounded-md">
            <span class="font-bold">{variable}:</span> <span>{days} Days</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Section 2 -->
  <div class="bg-green-100 p-4 rounded-md mb-3">
    <button on:click={() => toggleSection(2)} class="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600 focus:outline-none">
      Exploration
    </button>
    <div class={`overflow-hidden transition-all duration-300 ${isOpen2 ? 'max-h-screen px-12 py-2' : 'max-h-0 p-0'}`}>
      <div class="my-3">
        <div class="mb-1 text-lg font-medium dark:text-white">Marathon</div>
        <Progressbar 
          progress="10" 
          animate 
          precision={0} 
          tweenDuration={3000} 
          easing={sineOut} 
          size="h-5" 
          labelInside 
          labelOutside="Completion Progress:" 
          labelInsideClass="bg-green-500 text-green-100 text-base font-medium text-center p-1 leading-none rounded-full" 
          class="my-4" 
        />
      </div>
        <div class="my-3">
          <div class="mb-1 text-lg font-medium dark:text-white">Online Web Development Course</div>
          <Progressbar 
            progress="70" 
            animate 
            precision={0} 
            tweenDuration={3000} 
            easing={sineOut} 
            size="h-5" 
            labelInside 
            labelOutside="Completion Progress:" 
            labelInsideClass="bg-green-500 text-green-100 text-base font-medium text-center p-1 leading-none rounded-full" 
            class="my-4" />
        </div>
        <div class="my-3">
          <div class="mb-1 text-lg font-medium dark:text-white">Internship Applications</div>
          <Progressbar 
            progress="50" 
            animate 
            precision={0} 
            tweenDuration={3000} 
            easing={sineOut} 
            size="h-5" 
            labelInside 
            labelOutside="Completion Progress:" 
            labelInsideClass="bg-green-500 text-green-100 text-base font-medium text-center p-1 leading-none rounded-full" 
            class="my-4"/>
        </div>
    </div>
  </div>

  <!-- Section 3 -->
  <div class="bg-green-100 p-4 rounded-md mb-3">
    <button on:click={() => toggleSection(3)} class="w-full bg-green-500 text-white py-3 rounded-md text-lg hover:bg-green-600 focus:outline-none">
      Productivity
    </button>
    <div class={`overflow-hidden transition-all duration-300 ${isOpen3 ? 'max-h-screen px-12 py-2' : 'max-h-0 p-0'}`}>
      <Table shadow>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Day</TableHeadCell>
          <TableHeadCell>Month</TableHeadCell>
          <TableHeadCell>Year</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          <TableBodyRow>
            <TableBodyCell>Routines Completed</TableBodyCell>
            <TableBodyCell>5</TableBodyCell>
            <TableBodyCell>0</TableBodyCell>
            <TableBodyCell>5</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Goals Completed</TableBodyCell>
            <TableBodyCell>164</TableBodyCell>
            <TableBodyCell>2</TableBodyCell>
            <TableBodyCell>168</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Tasks Completed</TableBodyCell>
            <TableBodyCell>808</TableBodyCell>
            <TableBodyCell>5</TableBodyCell>
            <TableBodyCell>903</TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
  </div>
</div>
