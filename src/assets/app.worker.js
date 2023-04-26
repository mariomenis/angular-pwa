/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {

  const response = `worker response to ${data}`;
  fetch(data, {
    'mode': 'no-cors'
  }).then((r) => {
    console.log('response', response);
    postMessage(response);
  });

  postMessage(response);
});
