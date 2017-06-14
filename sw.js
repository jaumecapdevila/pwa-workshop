(function () {
  const CACHE_NAME = 'PWA-INTRO-V1'
  const CACHE_FILE_NAMES = [
    '/images/*',
    './styles.css'
  ] 

  self.addEventListener('install', event => {
    console.log('Install')
    event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(CACHE_FILE_NAMES);
      })
    );
  })

  self.addEventListener('fetch', event => {
    console.log(`Fetch: ${event.request.url}`)
    // Add the logic to grab cached assets when available
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  })
})()
