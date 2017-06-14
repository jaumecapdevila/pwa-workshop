# PWA workshop

Let's start with a simple web page and transform it into a PWA! Your target is to improve the progressive web app level from 27 to at least 80.

To do this you need to:

- Register a Service Worker
- Cache static assets and make the app work when offline
- Import the manifest
- Set the viewport

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is a tool that provides insights and feedback for PWAs, avaiable as a Chrome extension, that should help you test your score and if your code works along the way.

## Getting started

- In case you don't have Node installed on your system yet use the [official installer](https://nodejs.org/en/download/) or [nvm](https://github.com/creationix/nvm) to install it.
- Now open the Terminal, (in Mac), or a Shell window (in Windows / Linux), navigate to the project's folder and run:
  - `npm i -g gulp`
  - `npm i`

## Exercise

Complete the following steps!

### Register the Service Worker

Modify `index.html` to register a service worker.

### Use the install event of the Service Worker to cache static assets

Edit `sw.js` to cache all static files.

### Use the fetch event of the Service Worker to serve static assets through the cache

Modify `sw.js` to retrieve assets from the cache before requesting them from the network.

### Make your PWA installable on the home screen

Edit `index.html` to import the manifest and add the required meta tags.

## Extras

### Learn about the Service Worker lifecycle and play with the activate event

https://developers.google.com/web/ilt/pwa/introduction-to-service-worker

### Learn how to use push notifications

https://developers.google.com/web/ilt/pwa/lab-integrating-web-push
