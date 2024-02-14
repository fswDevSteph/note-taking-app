// api routes for the server to send and recieve info on the back end.

// define api endpoints with express router
const express = require('express'); // requires express
const router = express.Router(); // middllleware func allows defining routes for api and html .... and whatever route the application needs
const fs = require('fs'); // to read and write data to db.json fille
const util = require('util');
const readFileUtil = util.promisify(fs.readFile);
const { v4: uuidv4 } = require('uuid');
//routes here

//!GET portion of the route is for reading notes from the db.json file
router.get('/notes', (req, res) => {
  //http 'GET' route that makes a request to /notes 'END POINT' and takes 2 parms- request/response, those rep the incomming data

  //read notes from db.json
  readFileUtil('db/db.json', 'utf8')
    .then((data) => {
      //reads contents of file located at db/db.json(this is the file path), utf8(this is the encording of the file type so it should be read as such), err(hold any error during file reading) data, (holds contents of the file thats read)  )

      //parse json data from file
      const notes = JSON.parse(data); // json.parse is used to convert json data into a js object

      //send notes as a response
      res.json(notes); // .res (response object used to send HTTP responses back to the client), .json(notes)(formats the data in the notes variable as json and sends it as the response body to the client)
      //! .catches pretty much always look like this and you should always have a .catch at the end of the .then (look for the transparent box)
    })
    .catch((error) => res.status(500).json(error));
});
//!POST /notes: Adds a new note to the db.json file based on the data received in the request body. SAVES THE DATA
router.post('/notes', (req, res) => {
  //read existing notes (removed the utf8 bc its exessive but included in top portion so I have a reminder incase I deal with a file of another convention type in future)
  fs.readFile('db/db.json', (err, data) => {
    if (err) {
      console.log('error');
      res.status(500).json({ error: 'Server error' }); //same as line 17
      return;
    }
    // parse existing notes from json
    const notes = JSON.parse(data);

    //get new notye data from request body
    const newNote = req.body;
    console.log(newNote);
    newNote.id = uuidv4(); //adds id key to newNote object
    console.log(newNote);
    //add new note to array of existing notes
    notes.push(newNote);

    // write updated notes back to cb.json
    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
      if (err) {
        console.log('error');
        res.status(500).json({ error: 'Server error' }); //same as line 17
        return;
      }

      // send updated notes as a response
      res.json(notes);
    });
  });
});

router.delete('/notes/:id', (req, res) => {
  console.log(req.params.id);
});

module.exports = router;
