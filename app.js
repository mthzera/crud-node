'use strict';
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const port = process.env.port || 8000;
mongoose.connect('mongodb://admin:admin@ds249605.mlab.com:49605/todo-api');


app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);

module.exports = app;