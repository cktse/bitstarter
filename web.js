var express = require('express');
var fs = require("fs");

var infile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFile(infile, function (err, data) {
		if (err) throw err;
		response.send(data.toString()); // Buffer.toString()
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
