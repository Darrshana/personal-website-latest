importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('sbenstewart').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       'fonts/icomoon/style.css',
       'css/bootstrap.min.css',
       'css/magnific-popup.css',
       'css/jquery-ui.css',
       'css/owl.carousel.min.css',
       'css/owl.theme.default.min.css',
       'css/bootstrap-datepicker.css',
       'fonts/flaticon/font/flaticon.css',
       'css/aos.css',
       'css/style.css',
       'js/jquery-3.3.1.min.js',
       'js/jquery-migrate-3.0.1.min.js',
       'js/jquery-ui.js',
       'js/popper.min.js',
       'js/bootstrap.min.js',
       'js/owl.carousel.min.js',
       'js/jquery.stellar.min.js',
       'js/jquery.countdown.min.js',
       'js/jquery.magnific-popup.min.js',
       'js/bootstrap-datepicker.min.js',
       'js/aos.js',
       'js/main.js',
       'css/font-awesome/css/font-awesome.min.css',
       'fonts/icomoon/fonts/icomoon.ttf',
       'fonts/icomoon/fonts/icomoon.woff'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
