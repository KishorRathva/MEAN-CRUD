const http = require ('http');
const express = require('express');
const port = process.env.PORT || 8080 ;
const app = express();
const appRoutes = require('./routes/appRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose
    .connect('mongodb://localhost/meanDb',{ useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected ...'))
    .catch( err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use('/',appRoutes);



http.createServer(app).listen(port);

console.log('Backend running on port:',port);