const CACHE_NAME = 'vir2ose-radio-v12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './RADIO ONLINE BACK 1.png',
  './vir2ose LOGO TRANS.png',
  './Online Radio fm V4.png',
  './Online Radio VERTiIKAL SMARTPHONE.png',
  './icon-192.png',
  './icon-512.png'
];

// Install Event: App-Shell cachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching App Shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: Alte Caches aufräumen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Lösche alten Cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Intelligente Trennung zwischen statischen Assets und Live-Audio
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // CRITICAL STREAM PROTECTION: 
  // Wenn die URL '/stream' enthält oder auf Audio/Icecast-Muster matcht, 
  // erzwingen wir eine reine Netzwerk-Strategie und brechen sofort ab.
  const acceptHeader = event.request.headers.get('Accept');
  const isAudioAccept = acceptHeader && acceptHeader.includes('audio');
  const isAudioDestination = event.request.destination === 'audio';

  if (url.pathname.includes('/stream') || isAudioAccept || isAudioDestination) {
    console.log('[Service Worker] Stream erkannt - Bypassing Cache:', event.request.url);
    return event.respondWith(fetch(event.request));
  }

  // Cache-First Strategie für alle statischen App-Shell Komponenten
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
