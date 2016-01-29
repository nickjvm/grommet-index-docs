// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var compression = require('compression');
var express = require('express');
var http = require("http");
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');

var PORT = process.env.PORT || 8009;

var app = express();
app.use(compression());
app.use(cookieParser());
app.use(morgan('tiny'));

app.use('/', express.static(path.join(__dirname, '/../dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

var server = http.createServer(app);

server.listen(PORT);

console.log('Server started, listening at: http://localhost:' + PORT);
