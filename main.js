if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      document.getElementById('message').addEventListener('click', () => {
        send_message_to_sw(new Date().toISOString());
      });
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function send_message_to_sw(msg){
  navigator.serviceWorker.controller.postMessage(msg);
}
