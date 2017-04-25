const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
	res.on('finish', function(){
    console.log(req.method + " " + req.path + " " + res.statusCode);	
	})
  next();
})

app.get('/', function(req, res, next){
    res.send('welcome!');
    next();
})

app.use('/special/', function(req, res, next){
	console.log('you\'ve reached the special area');
})

var server = app.listen(3000, () => {
    console.log("server listening");
})