var express = require('express');
var app = express();

app.get('/', function(){
	console.log(req.ip)
})