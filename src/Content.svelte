<script context="module">
  import { writable } from "svelte/store";
  import { io } from "socket.io-client";
  const socket = io("https://browser-pets-server-production.up.railway.app/", {
    autoConnect: false,
  });
  let activated = writable(false);
  let art = writable(Array(400).fill("transparent"));
  let allArt = writable([]);
  let tabId = null;
  let hasArtChange = writable(false);
  let username = writable("");
  (async () => {
    chrome.runtime.sendMessage({ event: "tabId" }, async (res) => {
      console.log(res);
      tabId = res.tabId;
      let data = await chrome.storage.sync.get(["art", "username"]);
      if (data?.art) {
        art.set(data.art);
        hasArtChange.set(true);
      }
      if (data?.username) {
        username.set(data.username);
      }
      data = await chrome.storage.local.get("activeTab");
      console.log("activeTab", data);
      console.log("tabId", tabId);
      if (data?.activeTab !== undefined) {
        activated.set(data.activeTab === tabId);
      }
    });

    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "sync") {
        if (changes.art?.newValue) {
          art.set(changes.art.newValue);
          hasArtChange.set(true);
        }
        if (
          changes.username?.newValue !== undefined &&
          changes.username.newValue !== null
        ) {
          username.set(changes.username.newValue);
        }
      } else if (areaName === "local") {
        if (changes.activeTab?.newValue) {
          activated.set(changes.activeTab.newValue === tabId);
        }
      }
    });
  })();

  /*
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
  */
</script>

<script>
  const activate = () => {
    console.log("socketid", socket.id);
    if ($activated && socket.disconnected) {
      console.log("run");
      socket.connect();
      socket.emit("init", $art);

      socket.on("allUsers", (data) => {
        allArt.set(data);
      });

      socket.on("remove", (id) => {
        let replaced = $allArt;
        delete replaced[id];
        allArt.set(replaced);
      });

      socket.on("update", (id, newArt) => {
        let replaced = $allArt;
        replaced[id] = newArt;
        // console.log(newArt);
        allArt.set(replaced);
        console.log($allArt);
      });
    } else {
      let replaced = $allArt;
      delete replaced[socket.id];
      allArt.set(replaced);
      socket.off("remove");
      socket.off("update");
      socket.off("allUsers");
      socket.disconnect();
    }
  };
  $: [$activated] && activate();
  const processArtChange = () => {
    console.log("art change", $activated);
    if ($activated && $hasArtChange) {
      console.log("here");
      socket.emit("artUpdate", $art);
      hasArtChange.set(false);
    }
  };
  // $: [$hasArtChange, $activated] && processArtChange();
</script>

{#if $activated}
  <div class="fixed left-0 bottom-0">
    <div class="flex flex-wrap gap-4">
      {#each Object.entries($allArt).sort((a, b) => {
        if (a[0] === socket.id) return -1;
        return a[0] < b[0] ? -1 : 1;
      }) as [id, art] (id)}
        <svg viewBox="0 0 80 80">
          {#each art as c, i (i)}
            <rect
              width="4"
              height="4"
              x={(i % 20) * 4}
              y={Math.floor(i / 20) * 4}
              style={`fill:${c}`}
            />
          {/each}
        </svg>
        <div>{$username}</div>
      {/each}
    </div>
  </div>
{/if}

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
