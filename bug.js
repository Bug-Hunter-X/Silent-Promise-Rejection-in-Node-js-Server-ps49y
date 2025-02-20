const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  if (data === null) {
    // Handle the error here, otherwise the promise will reject silently
    console.error('Failed to fetch data');
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return; 
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(data);
});

function fetchData() {
  // Simulate a possible network error or database failure
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return 'Some data'; 
  } else {
    return null; // Simulate a failure
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});