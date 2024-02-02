// html routes for whats chnaging in the browser

const path = require('path'); //requires path
const express = require('express').Router(); // requires express

express.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, '../public/notes.html'))} // definite file location of code on the right
); //left side 
// star says "lead me home" but it must be placed at the very end bcuz * means anything 
express.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))} // where to find in code
);

module.exports = express;