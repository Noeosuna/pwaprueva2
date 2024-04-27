// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('menu-desplegable-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          // Agrega aquí todos los recursos que quieres que estén disponibles offline
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  