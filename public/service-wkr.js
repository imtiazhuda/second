 const eventSource = new EventSource('https://testchat-cpla.onrender.com/random');
 var client;
  eventSource.onmessage = function(event) {
    console.log(event.data);
    client.postMessage(event.data);
    sendNotification(event.data);
  };

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'MESSAGE_IDENTIFIER') {
      console.log("from service worker");
      event.source.postMessage("Hi client");
      client = event.source;
      //sse();
    } 
});

let sse = ()=>{
    const eventSource = new EventSource('https://testchat-cpla.onrender.com/random');

    eventSource.onmessage = function(event) {
    console.log(event.data);
    client.postMessage(event.data);
    };
}

let sendNotification = (data)=>{
  self.registration.showNotification(data);
}

self.addEventListener('install', event => {
  self.skipWaiting();

  
});