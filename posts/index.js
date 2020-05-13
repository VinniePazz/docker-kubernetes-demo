const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('POST');
});

app.listen(8080, () => {
  console.log('POSTS listening on port 8080');
});
