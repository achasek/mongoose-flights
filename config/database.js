const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights');

const db = mongoose.connection;

//connection status in console 
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});