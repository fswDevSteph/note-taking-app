// entry point for express server
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`I am listening and Server is running on port ${PORT}`);
});
