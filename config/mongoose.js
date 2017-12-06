var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
	var options = {
	  useMongoClient: true,
	  promiseLibrary: require('bluebird')
	};
    var db = mongoose.connect(config.db, options);
    require('../app/models/user.server.model');
    require('../app/models/glob.products.model');
    return db;
};