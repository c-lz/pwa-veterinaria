const staticAssets = [
    '/',
    '/favicon.png',
    '/index.html',
    '/duenos.html',
    '/veterinarias.html',
    '/consultas.html',
    '/css/styles.css',
    '/manifest.json',
    '/js/mascotas.js',
    '/js/duenos.js',
    '/js/veterinarias.js',
];


self.addEventListener('install', async e =>{
    const cache = await caches.open('pwa-veterinaria');
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e =>{
    self.clients.claim();
})