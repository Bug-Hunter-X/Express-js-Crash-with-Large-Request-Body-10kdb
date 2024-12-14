const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' })); // Increased limit
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Increased limit

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Request Received!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});