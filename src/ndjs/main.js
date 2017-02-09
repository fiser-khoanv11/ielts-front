var http = require("http");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = 'mongodb://khoa.uet58:nightingale394@ds147599.mlab.com:47599/m-proj';

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.end('Hello World\n');

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    var cursor = db.collection('test').find();
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        // console.log(doc);
        response.end(JSON.stringify(doc));
      }
    });

    console.log("Connected correctly to server.");
    // response.end('OK!');
  });
}).listen(8081);
