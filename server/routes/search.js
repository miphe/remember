var express = require('express'),
    router = express.Router(),
    elasticsearch = require('elasticsearch');

// Define client for elasticsearch.
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

/**
 * Welcome page.
 */
router.get('/', function(req, res) {
  res.send('Search index...');
});


/**
 * Re-indexing the elasticsearch collections of data.
 */
router.get('/indexing', function(req, res) {
  var db = req.db;
  var collection = db.get('notelist');

  collection.find({}, {}, function(e, docs) {
    var compileJson = [];
    var esType = 'entry3';

    for(i=0; i<docs.length; i++) {
      var schema1 = { "create" : { "_index" : "note", "_type" : esType, "_id" : docs[i]._id } };
      var schema2 = { "note" : docs[i].note, "tag": docs[i].tag, "timestamp": docs[i].timestamp };
      compileJson.push(schema1);
      compileJson.push(schema2);
    }  

    client.bulk({
      body:compileJson

    }, function(err, resp) {
      console.log(resp);
      if (resp.errors == true) {
        console.log(err);
        console.log('Uh-oh! Error.');
        res.json(resp);
      }
      else {
        res.json(resp);
      }
    });
    
  });
});


/**
 * Ajax path for search result from elasticsearch.
 */
router.post('/engage', function(req, res) {
  var keyword = req.body.search;
  client.search({
    index:'note',
    type:'entry3',
    q:'note:' + keyword

  }, function(error, response) {
    res.type('application/json');
    res.send(response);
  });
});

module.exports = router;
