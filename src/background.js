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
chrome.runtime.onInstalled.addListener(async () => {
  const tab = await getCurrentTab();
  activateTab(tab.id);
});
chrome.tabs.onActivated.addListener(({ tabId }) => {
  activateTab(tabId);
});
