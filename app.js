const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours_node.js' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

const port = 1337;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
