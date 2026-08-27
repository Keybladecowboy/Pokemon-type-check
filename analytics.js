// Analytics V1 helper for Pokemon Type Check PWA
const APP_VERSION = '1.0.0';
const ANALYTICS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw3yg83Uj_7b7gh_hcKgK2IShF3FF3r4TP7ftGJkl9VShewe90LL2irRN7Ao6uqpfY/exec';

function getSessionId() {
  let sessionId = sessionStorage.getItem('pkmn_session_id');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('pkmn_session_id', sessionId);
  }
  return sessionId;
}

function trackEvent(eventName, extra = {}) {
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      event: eventName,
      pokemon: extra.pokemon || '',
      session_id: getSessionId(),
      app_version: APP_VERSION,
      page: extra.page || document.title || window.location.pathname.split('/').pop() || 'index',
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    };

    // Use navigator.sendBeacon when possible for fire-and-forget reliability, falling back to fetch with no-cors
    const dataStr = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([dataStr], { type: 'text/plain;charset=UTF-8' });
      navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
    } else {
      fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: dataStr
      }).catch(() => {});
    }
  } catch (err) {
    // Fail silently so analytics never block or interfere with app operation
  }
}
