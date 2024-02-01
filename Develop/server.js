// entry point for express server
const express = require('express');
const app = express(); // this line creates a server once you run express()
const PORT = process.env.PORT || 3000;
const router = require('./routes/apiRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //parses json request bodies
app.use(router);

app.listen(PORT, () => {
  console.log(`I am listening and Server is running on port ${PORT}`);
});
