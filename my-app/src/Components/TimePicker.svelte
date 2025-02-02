<script>
    export let time = "";
    let showDropdown = false;
	let selectedHour = "12";
    let selectedMinute = "00";
    let period = "AM";

	const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
    const periods = ["AM", "PM"];

    // Update time when a selection changes
    function updateTime() {
        time = `${selectedHour}:${selectedMinute} ${period}`;
        showDropdown = false;
    }

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }

    function selectTime(event) {
        time = event.target.innerText; // Set time from dropdown
        showDropdown = false;
    }
</script>

<div class="relative">
    <!-- Button-like input -->
    <div
        class="flex items-center justify-between px-3 py-2 w-auto bg-rose-50 placeholder:text-gray-500 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-lg focus:shadow"
        on:click={toggleDropdown}
    >
        <span>{time || "Select Time"}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    </div>

    <!-- Dropdown -->
    {#if showDropdown}
        <div class="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-2">
            <!-- Hours -->
            <select bind:value={selectedHour} class="w-full p-2 border rounded-md" on:change={updateTime}>
                {#each hours as hour}
                    <option value={hour}>{hour}</option>
                {/each}
            </select>

            <!-- Minutes -->
            <select bind:value={selectedMinute} class="w-full mt-2 p-2 border rounded-md" on:change={updateTime}>
                {#each minutes as minute}
                    <option value={minute}>{minute}</option>
                {/each}
            </select>

            <!-- AM/PM -->
            <select bind:value={period} class="w-full mt-2 p-2 border rounded-md" on:change={updateTime}>
                {#each periods as p}
                    <option value={p}>{p}</option>
                {/each}
            </select>
        </div>
    {/if}
</div>



<!-- 
<script>
    export let time = ""
</script>

<div class="flex border-1 pb-[8px] pt[10px] rounded-lg border-gray-900">
    <input class="border-none outline-none w-[100%] box-border" type="time" step= "60" bind:value={time} placeholder="Time">
</div>  -->
