if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('ServiceWorker registrado com sucesso no escopo: ', registration.scope);
    }, function(err) {
      console.log('Falha ao registrar ServiceWorker: ', err);
    });
  });
}