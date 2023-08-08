chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.backgroundColor) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        function: setBackground,
        args: [message.backgroundColor]
      });
    }
  });
  
  function setBackground(backgroundColor) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }
  