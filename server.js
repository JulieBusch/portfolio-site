"use strict";
var express = require( 'express' );
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//Super simple server for development

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/*', (_, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(3003, function () {
    console.log('Server is listening on port 3003!');
});
