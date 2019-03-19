const http = require ('http');
const express = require('express');
const port = process.env.PORT || 8080 ;
const app = express();
const appRoutes = require('./routes/appRoutes');
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/meanDb',{ useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected ...'))
    .catch( err => console.log(err));

app.use('/',appRoutes);


http.createServer(app).listen(port);

console.log('Backend running on port:',port);