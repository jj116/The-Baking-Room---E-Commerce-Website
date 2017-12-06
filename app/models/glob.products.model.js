var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    _pid: Number,
    pname: String,
    category: String,
    cost: Number,
    pdsec: String,
    Imagee: String
});

mongoose.model('Product', ProductSchema);
