// define api endpoints with express router
const express = require('express'); // requires express
const router = express.Router(); // middllleware func allows defining routes for api and html .... and whatever route the application needs
const fs = require('fs'); // to read and write data to db.json fille

//routes here

//GET portion of the route for reading notes from the db.json file
router.get('/notes', (req, res) => {
  //http 'GET' route that makes a request to /notes 'END POINT' and takes 2 parms- request/response, those rep the incomming data
  //read notes from db.json
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log('error');
      res.status(500).json({ error: 'Server error' });
    }
    //parse json data from file
    const notes = JSON.parse(data);

    //send notes as a response
    res.json(notes);
  });
});
