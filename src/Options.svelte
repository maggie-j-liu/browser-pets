<script>
  let color = "#000000";
  let colors = Array(400).fill("transparent");
  chrome.storage.sync.get("art", function (result) {
    if (result.art) {
      colors = result.art;
    }
  });

  let saved = true;
  let erase = false;
  const save = () => {
    chrome.storage.sync.set({ art: colors }, function () {
      console.log("Value is set to " + colors);
    });
    saved = true;
  };
</script>

<main class="max-w-xl mx-auto w-full">
  <h1 class="text-4xl text-center">Options</h1>
  <div class="text-lg flex justify-between">
    <div>
      Current:{" "}<input class="w-8 h-8" type="color" bind:value={color} />
    </div>
    <button on:click|preventDefault={() => (erase = !erase)}
      >{erase ? "Eraser" : "Color"}</button
    >
    <div>
      <button
        type="button"
        on:click|preventDefault={() => {
          colors = colors.fill("transparent");
          saved = true;
        }}>Clear</button
      >
    </div>
    <div>
      <button type="button" on:click|preventDefault={() => save()}
        >Save {saved ? "(saved)" : "(not saved)"}
      </button>
    </div>
  </div>
  <div
    class="aspect-square w-max mx-auto grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]"
  >
    {#each colors as c, i (i)}
      <button
        on:click|preventDefault={() => {
          let prevColors = colors;
          prevColors[i] = erase ? "transparent" : color;
          colors = prevColors;
          saved = false;
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
