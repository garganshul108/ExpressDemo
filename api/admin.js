const express = require('express');
const router = express.Router();

// parsing the params.body to json
router.use(express.json());

const dummyDB = [
    {
        id: 1,
        name: "User1",
        email: "user1@gmail.com",
        contact: "9876543210" 
    },

    {
        id: 2,
        name: "User2",
        email: "user2@gmail.com",
        contact: "9876543210" 
    },

    {
        id: 3,
        name: "User3",
        email: "user3@gmail.com",
        contact: "9876543210" 
    }

];


/**
    * 
    * GET:
    * full information db
    * admin info by id
    * admin info by name // undertest phase
    *
    **/



// sending all the users information
router.get('/', (request, response) => {
    response.send(dummyDB);
});


// sending the user according to the id
router.get('/:id', (request, response) => {
    const id = parseInt(request.params.id) - 1;
    response.send(dummyDB[id]);
});

// testing 
// sending name and getting id
router.get('/:name', (request, response) => {
    //response.send(dummyDB);
});




/**
    * 
    * POST:
    * adding the user
    * min requirements : name, id //  under process
    *
    **/


router.post('/', (request, response) => {
    
});