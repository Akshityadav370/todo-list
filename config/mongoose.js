const mongoose = require('mongoose');

// Connecting to the DB
mongoose.connect('mongodb://localhost/todo_list_db');

// Acquire the connection
const db = mongoose.connection;

// error
db.on('err', console.error.bind(console, 'error connecting to the DB'));

// up and running 
db.once('open', ()=>{
    console.log('Successfully connected to the database <::>');
})