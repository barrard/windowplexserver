var express = require('express');
var app = express();
const fs = require('fs');

app.get('/', function(req, res){
	console.log(req.ip)
})


app.get('/videolist', function(req, res){
	fs.stat('')

	console.log(req.ip)
})





var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log(server.address())
   
   console.log("Example app listening at http://%s:%s", host, port)
})
