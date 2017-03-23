"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
// var assert = require('assert');

var app = express();

// Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, json");
  next();
});

// Mongoose
var url = 'mongodb://khoa.uet58:ariana1995@ds147599.mlab.com:47599/m-proj';
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect(url, options);

// Schemas
var Schema = mongoose.Schema;
var testSchema = new Schema({
    section_number: Number
}, { collection: 'test' });

var userSchema = new Schema({
    id: Number,
    name: String
}, { collection: 'users' });

var Test = mongoose.model('Test', testSchema);
var User = mongoose.model('User', userSchema);

// Routes
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
});

app.get('/user/count/:id', function (req, res) {
  User.count({
    "_id": req.params.id
  }, function(err, count) {
    if (err) {
      res.send(err);
    } else {
      res.json(count);
    }
  })
});

app.post('/user/save', function (req, res) {
  User.findOneAndUpdate({
    "id": req.body.id
  }, req.body, {
    upsert: true
  }, function(error, doc) {
    if (error) {
      res.send(error);
    } else {
      res.send('Done findOneAndUpdate');
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
