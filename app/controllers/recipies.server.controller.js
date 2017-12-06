var Recipe = require('mongoose').model('recepies');

exports.render = function(req, res) {
	Recipe.find({}, function(err, prods) {
	    if (err) {
	    	return next(err);
	    }
	    else{
	    	res.render('recipies', {
    		title: 'The Baking Room',
    		list:prods,
    		user: req.user ? req.user.username : ''
    		});
	    }
	});
};
