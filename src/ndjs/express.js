var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');
var url = 'mongodb://khoa.uet58:ariana1995@ds147599.mlab.com:47599/m-proj';
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect(url, options);

var Schema = mongoose.Schema;
var testSchema = new Schema({
    section_number: Number
    // passage: { image: String, heading: String }
}, { collection: 'test' });

var Test = mongoose.model('Test', testSchema);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/reading/:id', function (req, res) {
  // console.log(req.params);
  Test.findOne({
    "_id": req.params.id
  }, function(err, test) {
    if (err) {
      res.send(err);
    } else {
      res.json(test);
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
