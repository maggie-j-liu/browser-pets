<script>
  let color = "#000000";
  let colors = Array(400).fill("transparent");
</script>

<main class="max-w-xl mx-auto w-full">
  <h1 class="text-4xl text-center">Options</h1>
  <div class="text-lg">
    <div>
      Current:{" "}<input class="w-8 h-8" type="color" bind:value={color} />
    </div>
    <div>
      <button
        type="button"
        on:click|preventDefault={() => (colors = colors.fill("transparent"))}
        >Clear</button
      >
    </div>
  </div>
  <div
    class="aspect-square w-max mx-auto grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]"
  >
    {#each colors as c, i (i)}
      <button
        on:click|preventDefault={() => {
          let prevColors = colors;
          prevColors[i] = color;
          colors = prevColors;
        }}
        class="aspect-square border w-8"
        style={`background-color:${c}`}
      />
    {/each}
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
