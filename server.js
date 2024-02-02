// entry point for express server
/*const express = require('express');
const app = express(); // this line creates a server once you run express()
const PORT = process.env.PORT || 3000;
const router = require('./routes/apiRoutes');
/*should this be  const sapp.use(express.static('public'));
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //parses json request bodies
app.use(router);

app.listen(PORT, () => {
  console.log(`I am listening and Server is running on port ${PORT}`);
}); */

//imports express.js
const express = require('express').Router();

// importing html routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//import built in node.js package 'path' to resolve the path to the files that are located on the server
const path = require('path');

// inits an instance of express.js
const program = express();

// specifies which port the express.js server will run
const PORT = 3001;

//middleware pointing to the public folder
program.use(express.static('public'));
// example url: localhost:3001/notes
program.use('/', htmlRoutes);
// example url: localhost:3000/api/notes
program.use('/api', apiRoutes);
//!THIS WAS SUPPOSE TO BRING ME TO THE NOTES PAGE WHEN THE BTN is clicked - UGHHHHHHHHHH!
program.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});
