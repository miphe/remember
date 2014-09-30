var es = {},
    db = require('../server').get('db'),
    config = require('../../config.json'),
    elasticsearch = require('elasticsearch'),
    client = new elasticsearch.Client(config.es.connection);

/**
 * ReIndex from database
 * @return {Promise}
 */
es.reindex = function () {
    return db.get('notes').find()
        .then(function(docs) {
            var bulkEntries = [],
                esType = 'entry3',
                i;

            for ( i = 0; i < docs.length; i++ ) {
                var schema1 = {
                    "create": {
                        "_index": "note",
                        "_type":  esType,
                        "_id":    docs[i]._id
                    }
                };
                var schema2 = {
                    "note":      docs[i].note,
                    "tag":       docs[i].tag,
                    "timestamp": docs[i].timestamp
                };
                bulkEntries.push(schema1);
                bulkEntries.push(schema2);
            }

            return client.bulk({
                body: bulkEntries
            });
        });
};

/**
 * Search ES indexes
 * @todo there should be more flexible queries than keyword only
 *
 * @param filters
 * @return {Promise}
 */
es.search = function (filters) {
    return client.search({
        index: 'note',
        type:  'entry3',
        note: {
            query: {
              match: {
                note: filters.keyword,
                fuzziness : 2,
                prefix_length : 1
              }
            }
          }
    });
};

module.exports = es;
