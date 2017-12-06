var Product = require('mongoose').model('Product');

exports.render = function(req, res) {
	Product.find({ "category": "Cakes"}, function(err, prods) {
	    if (err) {
	    	return next(err);
	    }
	    else{
	    	res.render('pasteries', {
    		title: 'The Baking Room',
    		list:prods,
    		user: req.user ? req.user.username : ''
    		});
	    }
	});
};
