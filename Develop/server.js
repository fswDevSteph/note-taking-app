// entry point for express server
const express = require('express');
const app = express(); // this line creates a server once you run express()
const PORT = process.env.PORT || 3000;
const router = require('./routes/apiRoutes');
app.use(router);
app.listen(PORT, () => {
  console.log(`I am listening and Server is running on port ${PORT}`);
});
