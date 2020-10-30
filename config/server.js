'use strict'
var express = require('express');
var bodyParser = require('body-parser');
// var consign = require('consign');

//Express
var app = express();
//Configuração Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//rotas 
require('../app/routes/Index')(app);
require('../app/routes/ServiceCell')(app);

module.exports = app;