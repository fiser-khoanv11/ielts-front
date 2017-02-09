var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var assert = require('assert');
var url = 'mongodb://khoa.uet58:nightingale394@ds147599.mlab.com:47599/m-proj';
mongoose.connect(url);

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

app.get('/', function (req, res) {
  var data = [];

  Test.find(function(err, test) {
    if (err) {
      res.send(err);
    } else {
      res.json(test);
    }
  })
})

findTest = function(db, callback) {
  var res = [];

  var cursor = db.collection('test').find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         // console.dir(res.length);
         res.push(doc);
      } else {
         callback();
      }
   });

   return res;
};

app.get('/ac', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
