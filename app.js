const { urlencoded } = require('body-parser');
const express = require('express');
const path = require('path');


// Importing the DB
const db = require('./config/mongoose');
// Importing the models
const Task = require('./models/task');
const app = express();
const port = 7001;

// Middlewares

app.use(urlencoded());
// Using Routers
app.use('/', require('./routes/index'));
// Setting up the views and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Setting up the static folder
app.use(express.static("assets"));



app.listen(port, (err) =>{
    if(err){
        console.log(`Error in running the server ${err}`);
        return;
    }
    else{
        console.log(`Server is running on port:${port}`);
    }
});