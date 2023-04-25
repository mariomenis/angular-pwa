/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  fetch(data.host + '/ping').then((r) => {
    console.log('response', response);
    postMessage(response);
  });
  postMessage(response);
});
