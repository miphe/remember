/**
 * Handle authorization, cookie detection, and misc User stuff!
 */
var user = function(req, res, next){
    res.locals.auth = false;
    // @todo check if an
    if ( req.cookies.get('user_id') ) {
        db.get('users').findById(req.cookies.get('user_id'))
            .then(function(doc) {
                req.user = doc;
                res.locals.auth = true;
                next();
            }, function(){
                next();
            });
    } else {
        next();
    }
};

module.exports = user;
