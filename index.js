var express = require('express');
var consign = require('consign');

var app = express();

consign({verbose: false})
	.then('dbs')
	.then('models')
	.then('./libs/middlewares.js')
	.then('routes')
	.then('./libs/boot.js')
	.into(app);


module.exports = app;