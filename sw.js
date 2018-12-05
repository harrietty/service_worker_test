let events = [];

// if (!('indexedDB' in window)) {
//   console.log('This browser doesn\'t support IndexedDB');
// }

// var dbPromise = idb.open('events', 1, function (upgradeDb) {
//   console.log('Creating an object store for events');
//   if (!upgradeDb.objectStoreNames.contains('firstOS')) {
//     var eventsOs = upgradeDb.createObjectStore('events', {keyPath: 'id', autoIncrement: true});
//     eventsOs.createIndex('id', 'id', {unique: true});
//   }
// });

self.addEventListener('message', function(event) {
  console.log("SW Received Message: " + event.data);
  events.push(event.data);
  console.log('Accumulated ' + events.length + ' events', {events: events.join(',')});
});

setInterval(function () {
  console.log('Checking the events... are there more than 2?', events.length);
  if (events.length > 2) {
    events.splice(0, 2);
    console.log('Sending 2 events');
    console.log(`${events.length} left is the queue`, {events: events.join(',')});
  }
}, 2000);
