const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // process.env.PORT only used in prod

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes); // hey were using api routes
app.use('/', htmlRoutes); // hey were using html routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});