var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 8888));

app.use(express.static(__dirname + '/public'));
app.use('/modules', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res) {
    res.render('pages/lead');
});

app.get('/:id', function(req, res) {
  res.render('pages/' + req.params.id);
});

app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});