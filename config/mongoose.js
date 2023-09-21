const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/habit_tracker')

const uri = "mongodb+srv://adeebmisbahi:test1234@cluster0.1ne6w3i.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;