/* Keeps the launcher itself available offline. Your data always comes live from Google. */
var CACHE = 'anara-launcher-v5';
var FILES = ['./', './index.html', './config.js', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './maskable-512.png', './apple-touch-icon.png', './logo.png',
  './quick/', './quick/index.html', './quick/manifest.webmanifest',
  './quick-icon-192.png', './quick-icon-512.png', './quick-maskable-512.png', './quick-apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  // each file on its own: one missing file must not stop the rest from being kept
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILES.map(function (f) { return c.add(f).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Launcher files: network first (so edits to config.js show up), cached copy when offline.
self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
    return res;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match(url.pathname.indexOf('/quick/') >= 0 ? './quick/index.html' : './index.html'); }); }));
});
