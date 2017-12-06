var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    Name: String,
    Cost: Number,
    Description: String,
    Images: String
});

mongoose.model('recepies', RecipeSchema);
