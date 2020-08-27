/* jshint node: true */
'use strict';

var mongoose = require('mongoose');
const conn = mongoose.createConnection("mongodb://localhost/store",{ useNewUrlParser: true,useUnifiedTopology: true });

// the middleware function
module.exports = function() {
    // create schema
    let model_schema_data = mongoose.Schema({}, {
        strict: false,
        collection: 'product'
    });
    let collectionModel_data = conn.model('Product', model_schema_data);
    let model_schema_order = mongoose.Schema({}, {
        strict: false,
        collection: 'order'
    });
    let collectionModel_order = conn.model('Order', model_schema_order);

    return function(req, res, next) {
        req.Product = collectionModel_data;
        req.Order = collectionModel_order;
        next();
    };
};