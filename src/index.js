const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer') // HERE
const mongoose = require('mongoose')
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

app.use('/', route);

mongoose.connect("mongodb+srv://monty-python:SnYUEY4giV9rekw@functionup-backend-coho.0zpfv.mongodb.net/Tushar_Saini?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('Project 6 - Quora - DB connected'))
    .catch(err => console.log(err))


    

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});