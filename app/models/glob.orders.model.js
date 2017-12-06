var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    oid: Number,
    uname: String,
    pid: []
});

mongoose.model('Product', ProductSchema);
