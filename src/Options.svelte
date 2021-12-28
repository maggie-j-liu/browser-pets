<script>
  let color = "#000000";
  let colors = Array(400).fill("transparent");
  let username = "";
  let initialUsername = "";
  chrome.storage.sync.get(["art", "username"], function (result) {
    if (result.art) {
      colors = result.art;
    }
    if (result.username) {
      username = result.username;
      initialUsername = result.username;
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

  const saveUsername = () => {
    chrome.storage.sync.set({ username });
    initialUsername = username;
  };
</script>

<main class="max-w-xl mx-auto w-full">
  <h1 class="text-4xl text-center mt-6">Options</h1>
  <div class="space-y-6 mt-6">
    <div class="text-lg">
      <label>
        Name:
        <input
          bind:value={username}
          class="border-b-2 border-blue-300"
          type="text"
        />
      </label>
      <button type="button" on:click|preventDefault={() => saveUsername()}
        >Save {username === initialUsername ? "(saved)" : "(not saved)"}</button
      >
    </div>
    <div class="text-lg flex justify-between">
      <div>
        Current:{" "}<input class="w-8 h-8" type="color" bind:value={color} />
      </div>
      <button type="button" on:click|preventDefault={() => (erase = !erase)}
        >{erase ? "Color" : "Eraser"}</button
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
          class="aspect-square border w-8 grid"
          style={`background-color:${c}`}
        />
      {/each}
    </div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  button:not(.grid),
  [type="button"]:not(.grid) {
    @apply bg-blue-200 px-2 py-1 rounded-md hover:bg-blue-300;
  }
</style>
