const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

const people = [{name: 'Francesca'}, {name: 'Julia'}, {name: 'Claire'}];

app.use('/', routes);

app.use('/', function (req, res, next) {
	res.on('finish', function(){
    console.log(req.method + " " + req.path + " " + res.statusCode);	
	})
  next();
})

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

var server = app.listen(3000, () => {
    console.log("server listening");
})