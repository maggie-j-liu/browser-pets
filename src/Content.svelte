<script context="module">
  import { writable } from "svelte/store";
  import { io } from "socket.io-client";
  const socket = io("http://localhost:3000", {
    autoConnect: false,
  });
  let activated = writable(false);
  let art = writable(Array(400).fill("transparent"));
  chrome.storage.sync.get("art", (data) => {
    if (data.art) {
      art.set(data.art);
    }
  });
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync") {
      if (changes.art?.newValue) {
        art.set(changes.art.newValue);
      }
    }
  });
  chrome.runtime.sendMessage({ event: "isActive" }, (response) => {
    if (response.activated) {
      activated.set(true);
      socket.connect();
      socket.send(response.tabId);
    } else {
      activated.set(false);
      socket.disconnect();
    }
  });

  chrome.runtime.onMessage.addListener(({ event, tabId }) => {
    if (event === "activated") {
      socket.connect();
      socket.send(tabId);
      activated.set(true);
    } else if (event === "deactivated") {
      activated.set(false);
      socket.disconnect();
    }
  });
</script>

{#if $activated}
  <main class="fixed left-0 bottom-0">
    <div
      class="aspect-square w-max mx-auto grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]"
    >
      {#each $art as c, i (i)}
        <div class="aspect-square w-1" style={`background-color:${c}`} />
      {/each}
    </div>
    Activated
  </main>
{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
