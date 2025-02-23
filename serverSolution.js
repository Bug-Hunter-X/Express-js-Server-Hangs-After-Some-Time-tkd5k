const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
}).on('error', (err) => {
  console.error('Error handling request:', err);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
}).on('error', (err) => {
  console.error('Error starting server:', err);
});