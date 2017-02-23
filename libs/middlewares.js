var express = require('express'),
	bodyParser = require('body-parser')
	helmet = require('helmet');

module.exports = function (app) {
	
app.set('port', 3000);
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static('./public'));

};
