async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
let prevTab;

const activateTab = (tabId) => {
  console.log(tabId);
  chrome.tabs.sendMessage(tabId, { event: "activated", tabId });
  console.log(tabId, "activated");
  if (prevTab) {
    chrome.tabs.sendMessage(prevTab, { event: "deactivated" });
    console.log(prevTab, "deactivated");
  }
  prevTab = tabId;
};

chrome.tabs.onActivated.addListener(({ tabId }) => {
  activateTab(tabId);
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.event === "isActive") {
    sendResponse({ activated: sender.tab.active, tabId: sender.tab.id });
  }
});
