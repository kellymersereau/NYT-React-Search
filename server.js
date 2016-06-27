var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

var PORT = process.env.PORT || 3000; 


if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
},
else {
  mongoose.connect('mongodb://localhost/nytimes');
};

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var Article = require('./article.js');

app.post('/submit', function(req, res) {

  var content = new Article(req.body);
 
  content.save(req.body, function(err, saved) {
    if (err) {
      console.log('error saving to mongo ',err);
    } else {
      console.log('saved data',saved);
      res.send(saved);
    }
  });

});

app.get('/all', function(req, res) {
 
  Article.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});


app.get('/', function(req, res) {
  res.send(index.html);
});

app.listen(PORT, function() {
  console.log('App running on',PORT);
});