const CACHE_NAME = 'type-check-v6.6';
const ASSETS = [
  './',
  './index.html',
  './Nature_Tag.html',
  './Dex.html',
  './roster.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];
 
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});
 
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
 
self.addEventListener('fetch', event => {
  event.respondWith(
    // Network-first: always try to get the freshest version. Only fall
    // back to the cache if the network request fails (e.g. offline)
    fetch(event.request).then(response => {
      if (response && response.status === 200 && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});