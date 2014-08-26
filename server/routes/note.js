var express = require('express'), 
    router = express.Router();

/**
 * Main page for adding note.
 */
router.get('/', function(req, res) {
    res.send('Note index...');
});

/**
 * Ajax path for adding new note.
 */
router.post('/addnote', function(req, res) {
  var db = req.db;
  var collection = db.get('notelist');
  collection.insert(req.body, function(err, doc) {
    if (err) {
      // If it failed, return error.
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // If it worked, set the header so the address bar doesn't still say /note/notelist
      res.location('/note/notelist');
      // And forward to success page.
      res.redirect("/note/notelist");
    }
  });
});

/**
 * Page for viewing list of note.
 */
router.get('/notelist', function(req, res) {
	var db = req.db;
	var collection = db.get('notelist');
	collection.find({}, {}, function(e, docs) {
    res.json(docs);
	});
});

module.exports = router;
