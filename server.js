var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.get('/:id', function(req, res) {
  res.render('pages/' + req.params.id);
});

app.listen(8080);
console.log('server running on 8080...');