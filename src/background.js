import animals from "./animals.js";

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
let prevTab;

const activateTab = async (tabId) => {
  await chrome.storage.local.set({ activeTab: tabId });
  console.log(tabId);
  /*
  chrome.tabs.sendMessage(tabId, { event: "activated", tabId });
  console.log(tabId, "activated");
  if (prevTab) {
    chrome.tabs.sendMessage(prevTab, { event: "deactivated" });
    console.log(prevTab, "deactivated");
  }
  prevTab = tabId;
  */
};

chrome.runtime.onInstalled.addListener(async () => {
  const tab = await getCurrentTab();
  await activateTab(tab.id);
  const current = await chrome.storage.sync.get("username");
  if (current?.username === undefined) {
    chrome.storage.sync.set({
      username: animals[Math.floor(Math.random() * animals.length)],
    });
  }
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  await activateTab(tabId);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.event === "tabId") {
    console.log("here", sender);
    console.log(sendResponse);
    sendResponse({ tabId: sender.tab.id });
  }
});

/*
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.event === "isActive") {
    sendResponse({ activated: sender.tab.active, tabId: sender.tab.id });
  }
});
*/
