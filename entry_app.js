/**
 * 
 * 
 * NOTE: This is the mongo DB branch
 * Author Rights: anshulgarg
 * 
 */



// includes the express function from the express module
const express = require('express');

// database support - framework
const mongoose = require('mongoose');


// returns the express function object to ars);
// intializing the app; index.js as express module
const app = express();


// importing routing portals
const admins = require('./api/admins');
// const authors = require('./api/authors');
// const courses = require('./api/courses');
// const users = require('./api/users');


// setting the port
const port = process.env.PORT || 3000;

// db credentials
const db = 'courses';

// setting the db connection
mongoose.connect(`mongodb://localhost:27017/${db}`)
  .then(() => {console.log('Connected Successfully', db)})
  .catch((err) => {console.error(err)});


// routing to the portal
// assuming parsing of body -> json done by indivisual routers
app.use('/api/admin',admins);
// app.use('/api/admin',authors);
// app.use('/api/admin',courses);
// app.use('/api/admin',users);


app.listen(port, () => {
   console.log(`\nListening to port: ${port}...\n`);
});

