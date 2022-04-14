'use strict';
const lactRefreshInterval = 5 * 60 * 1000;
const initialLactDelay = 1000;

// Page Visibility API
Object.defineProperties(document, { 'hidden': { value: false }, 'visibilityState': { value: 'visible' } });
window.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);

function waitForYoutubeLactInit(delay = initialLactDelay) {
  if (window.hasOwnProperty('_lact')) {
    window.setInterval(() => { window._lact = Date.now(); }, lactRefreshInterval);
  } else {
    window.setTimeout(() => waitForYoutubeLactInit(delay * 2), delay);
  }
}
waitForYoutubeLactInit();
