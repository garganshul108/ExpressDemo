// this is the mongo DB branch dated 2 Jun 2019
//
// includes the express function from the express module
const express = require('express');
// returns the express function object to app
const app = express();

app.use(express.json());

console.log("using the first script for NODEJS");

// dummmy database
const database = {
    courses : [
      {
        id : 1,
        name : "C++"
      },
      {
        id : 2,
        name : "Javascript"
      },
      {
        id : 3,
        name: "NodeJS"
      },
      {
        id : 4,
        name : "Anshul Specials"
      }
    ]
};


// first logging middleware
app.use((req, res, next) => {
  console.log(`REQUEST OBJ \n: ${req}`);
  // console.log("req.body: ", req.headers.name);
  console.log();
  next();
});

// first route
app.get('/', (req, res) => {
  res.status(500).send("Bad Request");
});

app.get('/courses', (req, res) => {
  res.status(200).send(database.courses);
});

app.get('/courses/:id', (req, res) =>{
  const index = parseInt(req.params.id) - 1;
  res.status(200).send(database.courses[index]);
});



// post routes
app.post('/courses/', (req, res) => {
  const data = req.body;
  let newCourse = {
    id : database.courses.length + 1,
    name : req.body.name
  };

  database.courses.push(newCourse);
  res.status(201).send(newCourse);
});



// setting the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Listening to port: ${port}...`);
});
