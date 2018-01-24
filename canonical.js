'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && canonical.href) {
    if (location.href === canonical.href) {
      chrome.runtime.sendMessage({
        method: 'is-canonical'
      });
    }
    else {
      chrome.runtime.sendMessage({
        method: 'offer-canonical'
      });
    }
  }
});
