<script context="module">
  import { io } from "socket.io-client";
  const socket = io("http://localhost:3000", {
    autoConnect: false,
  });
  let activated = false;
  chrome.runtime.onMessage.addListener(({ event, tabId }) => {
    if (event === "activated") {
      socket.connect();
      socket.send(tabId);
      activated = true;
    } else if (event === "deactivated") {
      socket.disconnect();
    }
  });
</script>

<main>
  <img
    class="fixed left-0 bottom-0"
    src="https://raw.githubusercontent.com/tonybaloney/vscode-pets/master/media/cat/black_idle_8fps.gif"
    alt="cat"
  />
  {activated ? "Activated" : "Not activated"}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
