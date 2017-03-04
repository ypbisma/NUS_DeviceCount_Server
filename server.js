var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var file = "nusdc.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//set our port

//	ROUTES FOR OUR API
// ===============


