var requireParams = function(arr) {
    return function(req, res, next) {
        var missing, i;
        missing = [];
        for( i=0;i<arr.length;i++ ){
            if( ! req.param( arr[ i ] ) ){
                missing.push( arr[ i ] );
            }
        }
        if ( missing.length === 0 ) {
            next();
        } else {
            if ( req.xhr ) {
                return res.json( 500, {
                    error : 'query error',
                    message : 'Parameter(s) missing: ' + missing.join(',')
                });
            } else {
                res.render('error', new Error( 'Parameter(s) missing: ' + missing.join(',') ))
            }
        }
    }
}

module.exports = requireParams;