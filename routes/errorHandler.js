exports.handler = function( err, client, done, next ) {

    if( ! err ) return false;

    err.status = 500;
    done( client );
    next( new Error("Bdd request failed : " + err) );

    return true;

};
