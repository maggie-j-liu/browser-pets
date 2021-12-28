(function () {
  'use strict';

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
  /*
  chrome.runtime.onInstalled.addListener(async () => {
    const tab = await getCurrentTab();
    activateTab(tab.id);
  });
  */
  chrome.tabs.onActivated.addListener(({ tabId }) => {
    activateTab(tabId);
  });

  chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.event === "isActive") {
      sendResponse({ activated: sender.tab.active, tabId: sender.tab.id });
    }
  });

})();
//# sourceMappingURL=background.js.map
