const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    const data = await fetchData();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

async function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a possible network error or database failure
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve('Some data');
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 500);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});