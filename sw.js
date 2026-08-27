const CACHE_NAME = 'vir2ose-radio-v3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/style.css',
  '/app.js',
  '/icon-192.png',
  '/icon-512.png',
  '/Assets/background.png',
  '/Assets/menü_about.png',
  '/Assets/bedienelemente_play_pause_stop_1.png',
  '/Assets/bedienelemente_play_pause_stop_2.png',
  '/Assets/random_repeter.png',
  '/Assets_Smartphone/background_smartphone.png',
  '/Assets_Smartphone/bedienelemente_smartphone.png',
  '/Assets_Smartphone/buttons_smartphone.png',
  '/Assets_Smartphone/random_repeter_smartphone.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio-Streams überspringen, damit sie nicht gecacht werden
  if (event.request.destination === 'audio' || url.pathname.includes('/AUDIO-LIBRARY')) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('/index.html');
    })
  );
});
