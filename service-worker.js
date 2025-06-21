self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hilo-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './hilo.html',
        './hilo-logo.png',
        './warnung.png',
        './krone.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});