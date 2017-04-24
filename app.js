const express = require('express');
const app = express();

app.get('/', function(req, res, next){
    res.send('welcome!');
    next();
})

app.use('/', function (req, res, next) {
  if(res.status){
  	 console.log(req.method + " " + req.path + " " + res.statusCode);
  }
  next();
})

var server = app.listen(3000, () => {
    console.log("server listening");
})