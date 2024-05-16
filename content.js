function addLinkHoverListeners() {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', handleMouseOver);
    link.addEventListener('mouseout', handleMouseOut);
  });
}

function handleMouseOver(event) {
  const link = event.target;
  const realURL = link.href;

  if (typeof realURL === 'string' && realURL.trim() !== '') {
    let popup = document.createElement('div');
    popup.id = 'show-that-link-popup';
    popup.textContent = realURL;
    document.body.appendChild(popup);

    const mouseX = event.pageX;
    const mouseY = event.pageY;
    popup.style.left = `${mouseX + 10}px`;
    popup.style.top = `${mouseY + 10}px`;
  }
}

function handleMouseOut(event) {
  const popup = document.getElementById('show-that-link-popup');
  if (popup) {
    popup.remove();
  }
}

chrome.storage.sync.get('extensionDisabled', function(data) {
  if (!data.extensionDisabled) {
    addLinkHoverListeners();

    const observer = new MutationObserver(() => {
      addLinkHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
});