/* jshint node: true, strict: true */

"use strict";



// Enforce SSL if the http header "x-forwarded-proto" is pressent
// This header is set by the nodejitsu proxy which handles the SSL

module.exports.ensure = function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === "http"){
       res.redirect("https://" + req.headers.host + req.url);
    } else {
        next();
    }
};
