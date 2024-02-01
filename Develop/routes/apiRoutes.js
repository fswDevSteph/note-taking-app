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
    //reads contents of file located at db/db.json(this is the file path), utf8(this is the encording of the file type so it should be read as such), err(hold any error during file reading) data, (holds contents of the file thats read)  )
    if (err) {
      console.log('error');
      res.status(500).json({ error: 'Server error' }); //res (sends http response back to client), .status(500)(sets status code to 500 to indicate the serever encountered something unexpecteed preventing it from outputting as expected/completing the request) .json error: 'server error' converts js to json string with error msg
    }
    //parse json data from file
    const notes = JSON.parse(data); // json.parse is used to convert json data into a js object

    //send notes as a response
    res.json(notes); // .res (response object used to send HTTP responses back to the client), .json(notes)(formats the data in the notes variable as json and sends it as the response body to the client)
  });
});
module.exports = router;
