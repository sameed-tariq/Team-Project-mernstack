const express = require('express');

const app = express();

const mongoose = require ('mongoose');

const bodyParser = require('body-parser');





//middleware

app.use(bodyParser.json());

//import routes

const postsRoute = require('./posts');

app.use('/posts', postsRoute);



//connect database

mongoose.connect("mongodb://localhost/mernstack",{useNewUrlParser : true})
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log('error connecting')
});

//listening to the server

app.listen(3000);