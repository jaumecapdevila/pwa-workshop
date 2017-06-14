(function () {
  const CACHE_NAME = 'PWA-INTRO-V1'
  const CACHE_FILE_NAMES = [] // Add the assets you want to cache here

  self.addEventListener('install', event => {
    console.log('Install')
    // Now cache your assets
  })

  self.addEventListener('fetch', event => {
    console.log(`Fetch: ${event.request.url}`)
    // Add the logic to grab cached assets when available
  })
})()
