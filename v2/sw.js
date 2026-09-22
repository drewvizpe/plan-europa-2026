/* Service worker — Plan Europa 2026 v2
   Objetivo: que la bitácora funcione SIN INTERNET en Europa.
   Estrategia: la página se guarda al instalar; las fotos se van guardando
   a medida que se ven, y a partir de ahí salen de la memoria del celular. */

var CACHE = 'plan-europa-v2-83';
var CORE = ['./', './index.html'];
/* 20 sep: las fotos viven en su propia caja, sin número de versión, para que
   NO se borren cada vez que se publica una corrección del plan. */
var FOTOS = 'plan-europa-fotos';

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(CORE); }).catch(function(){})
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        return (k === CACHE || k === FOTOS) ? null : caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;

  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  // Documento: red primero (para recibir correcciones), caché si no hay señal.
  if(req.mode === 'navigate' || (req.headers.get('accept')||'').indexOf('text/html') > -1 || url.pathname.slice(-4) === '.txt'){
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
        return res;
      }).catch(function(){
        return caches.match(req).then(function(hit){
          return hit || caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Fotos y demás: caché primero (rápido y sin gastar datos), red si falta.
  var esFoto = url.pathname.indexOf('/fotos/') > -1;
  var caja = esFoto ? FOTOS : CACHE;
  e.respondWith(
    caches.match(req).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(res){
        if(res && res.status === 200){
          var copy = res.clone();
          caches.open(caja).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
