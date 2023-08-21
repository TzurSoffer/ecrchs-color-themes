var logoContainer = document.querySelector(".ic-app-header__logomark-container");
var logoLink = logoContainer.querySelector(".ic-app-header__logomark");
logoLink.style.backgroundImage = `url(${chrome.runtime.getURL("/images/image.png")})`;

chrome.storage.sync.get('backgroundColor', function(data) {
    if (data.backgroundColor) {
      applyBackgroundColor(data.backgroundColor);
    }
  });
  
  function applyBackgroundColor(backgroundColor) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  }