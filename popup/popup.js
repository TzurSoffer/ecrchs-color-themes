document.addEventListener('DOMContentLoaded', function() {
    var colorPicker = document.getElementById('colorPicker');
  
    chrome.storage.sync.get('backgroundColor', function(data) {
      if (data.backgroundColor) {
        colorPicker.value = data.backgroundColor;
      }
    });
  
    colorPicker.addEventListener('input', function() {
      var backgroundColor = colorPicker.value;
      applyBackgroundColor(backgroundColor);
      chrome.storage.sync.set({ backgroundColor: backgroundColor });
    });
  });
  
  function applyBackgroundColor(backgroundColor) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: setBackground,
        args: [backgroundColor]
      });
    });
  }
  
  function setBackground(backgroundColor) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }
  