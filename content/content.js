chrome.storage.sync.get('backgroundColor', function(data) {
    if (data.backgroundColor) {
      applyBackgroundColor(data.backgroundColor);
    }
  });
  
  function applyBackgroundColor(backgroundColor) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }  