document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
  
    chrome.storage.sync.get('extensionDisabled', function(data) {
      toggleButton.checked = !data.extensionDisabled;
    });
  
    toggleButton.addEventListener('change', function() {
      chrome.storage.sync.set({ 'extensionDisabled': !toggleButton.checked });
    });
  });
  