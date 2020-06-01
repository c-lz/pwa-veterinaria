const staticAssets = [
    '/',
    '/favicon.png',
    '/index.html',
    '/duenos.html',
    '/veterinarias.html',
    '/consultas.html',
    '/css/styles.css',
    '/css/all.css',
    '/css/bootstrap.min.css',
    '/css/v4-shims.css',
    '/manifest.json',
    '/js/mascotas.js',
    '/js/duenos.js',
    '/js/veterinarias.js',
    '/js/consultas.js',
    '/js/jquery-3.4.1.slim.min.js',
    '/js/popper.min.js',
    '/js/v4-shims.js',
    '/js/all.js',
    '/js/bootstrap.min.js',
    '/webfonts/fa-regular-400.woff2',
    '/webfonts/fa-solid-900.woff2',
];


self.addEventListener('install', async e =>{
    const cache = await caches.open('pwa-veterinaria');
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e =>{
    self.clients.claim();
})

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if(url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});