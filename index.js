
// includes the express function from the express module
const express = require('express');

// returns the express function object to app
const app = express();

// dummmy database
const database = {
    courses : [
      {
        id : "1",
        name : "C++"
      },
      {
        id : "2",
        name : "Javascript"
      },
      {
        id : "3",
        name: "NodeJS"
      }
    ]
};


// first route
app.get('/', (req, res) => {
  res.status(500).send("Bad Request");
});

app.get('/courses', (req, res) => {
  res.status(200).send(database.courses);
});

app.get('/courses/:id', (req, res) =>{
  res.status(200).send(database.courses[req.params.id + 1]);
});




// setting the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Listening to port: ${port}...`);
});
